// backend/api/index.js
const express = require('express')
const cors = require('cors')

// CORS設定を明示的に指定
const corsOptions = {
  origin: ['https://dashshift.org', 'http://localhost:5173', 'https://*.pages.dev'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

// Google Places API helper
async function fetchPlaces(keyword, center) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) {
    console.warn('GOOGLE_PLACES_API_KEY not set, using mock data')
    return []
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json')
  url.searchParams.set('key', key)
  url.searchParams.set('location', `${center.lat},${center.lng}`)
  url.searchParams.set('radius', '10000') // 10km
  url.searchParams.set('keyword', keyword)

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Places API error: ${res.status}`)
    const data = await res.json()
    return data.results || []
  } catch (error) {
    console.error('Places API error:', error)
    return []
  }
}

// ジョブ生成関数
async function generateDynamicJobs() {
  const center = { lat: -37.813, lng: 144.964 } // Melbourne CBD
  
  try {
    // Google Places APIから実際の場所を取得
    const [cafes, restaurants] = await Promise.all([
      fetchPlaces('cafe', center),
      fetchPlaces('restaurant', center)
    ])
    
    // 重複を除去
    const places = []
    const seen = new Set()
    
    for (const place of [...cafes, ...restaurants]) {
      if (!seen.has(place.place_id)) {
        seen.add(place.place_id)
        places.push(place)
      }
    }
    
    console.log(`Found ${places.length} places from Google Places API`)
    
    // 場所が少ない場合はモックデータで補完
    const mockPlaces = [
      { name: 'Coffee Express', vicinity: 'Swanston St', geometry: { location: { lat: -37.815, lng: 144.966 }}},
      { name: 'Urban Kitchen', vicinity: 'Collins St', geometry: { location: { lat: -37.817, lng: 144.970 }}},
      { name: 'City Bistro', vicinity: 'Flinders Lane', geometry: { location: { lat: -37.813, lng: 144.969 }}},
      { name: 'Morning Brew', vicinity: 'Russell St', geometry: { location: { lat: -37.810, lng: 144.971 }}},
    ]
    
    const allPlaces = places.length > 0 ? places.slice(0, 15) : mockPlaces
    
    // ジョブテンプレート
    const jobTemplates = [
      { title: 'Barista Shift', badge: 'barista', wage: 30 },
      { title: 'Kitchen Hand Shift', badge: 'kitchen', wage: 26 },
      { title: 'Waiter Shift', badge: 'waiter', wage: 29 },
      { title: 'Dishwasher Shift', badge: 'dishwasher', wage: 28 },
      { title: 'Cook Shift', badge: 'cook', wage: 32 },
      { title: 'Cashier Shift', badge: 'cashier', wage: 27 }
    ]
    
    const startHours = [6, 8, 10, 12, 14, 17, 18]
    const shiftLengths = [4, 5, 6, 8]
    
    const jobs = []
    const today = new Date()
    
    // 今日から3日間のジョブを生成
    for (let dayOffset = 0; dayOffset < 3; dayOffset++) {
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate() + dayOffset)
      
      // 各日に4-6個のジョブを生成
      const jobsPerDay = 4 + Math.floor(Math.random() * 3)
      
      for (let i = 0; i < jobsPerDay && i < allPlaces.length; i++) {
        const place = allPlaces[i]
        const template = jobTemplates[Math.floor(Math.random() * jobTemplates.length)]
        const startHour = startHours[Math.floor(Math.random() * startHours.length)]
        const duration = shiftLengths[Math.floor(Math.random() * shiftLengths.length)]
        
        const startTime = new Date(currentDate)
        startTime.setHours(startHour, 0, 0, 0)
        
        const endTime = new Date(startTime)
        endTime.setHours(startTime.getHours() + duration)
        
        jobs.push({
          id: `job-${dayOffset}-${i}-${Date.now()}`,
          title: template.title,
          company: place.name,
          description: `Join ${place.name} team for a ${template.title.toLowerCase()}.`,
          street: place.vicinity || place.formatted_address || 'TBD',
          start: startTime.toISOString(),
          end: endTime.toISOString(),
          wage: template.wage + Math.floor(Math.random() * 5) - 2, // ±2の変動
          wageType: 'hour',
          badge: template.badge,
          location: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
          }
        })
      }
    }
    
    return jobs
    
  } catch (error) {
    console.error('Error generating jobs:', error)
    
    // エラー時はフォールバックのモックデータを返す
    return generateFallbackJobs()
  }
}

// フォールバック用のモックジョブ
function generateFallbackJobs() {
  const jobs = []
  const today = new Date()
  
  const mockJobs = [
    { title: 'Barista Shift', company: 'Coffee Express', badge: 'barista', wage: 30, lat: -37.806, lng: 144.963 },
    { title: 'Kitchen Hand Shift', company: 'Urban Kitchen', badge: 'kitchen', wage: 26, lat: -37.815, lng: 144.968 },
    { title: 'Waiter Shift', company: 'City Restaurant', badge: 'waiter', wage: 29, lat: -37.817, lng: 144.970 },
    { title: 'Dishwasher Shift', company: 'Busy Bistro', badge: 'dishwasher', wage: 28, lat: -37.8105, lng: 144.971 }
  ]
  
  for (let dayOffset = 0; dayOffset < 3; dayOffset++) {
    mockJobs.forEach((job, index) => {
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate() + dayOffset)
      
      const startTime = new Date(currentDate)
      startTime.setHours(8 + index * 3, 0, 0, 0)
      
      const endTime = new Date(startTime)
      endTime.setHours(startTime.getHours() + 5)
      
      jobs.push({
        id: `fallback-${dayOffset}-${index}`,
        title: job.title,
        company: job.company,
        description: `Work at ${job.company} as ${job.title.toLowerCase()}.`,
        street: 'Melbourne CBD',
        start: startTime.toISOString(),
        end: endTime.toISOString(),
        wage: job.wage,
        wageType: 'hour',
        badge: job.badge,
        location: { lat: job.lat, lng: job.lng }
      })
    })
  }
  
  return jobs
}

const app = express()

// CORS設定を先に適用
app.use(cors(corsOptions))

// 手動でCORSヘッダーも追加（念のため）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// キャッシュ（30分間）
let cachedJobs = []
let lastFetch = 0
const CACHE_DURATION = 30 * 60 * 1000

// GET /jobs
app.get('/jobs', async (req, res) => {
  try {
    const q = String(req.query.q || '').trim().toLowerCase()
    const date = String(req.query.date || '').trim()
    
    // キャッシュチェック
    const now = Date.now()
    if (cachedJobs.length === 0 || (now - lastFetch) > CACHE_DURATION) {
      console.log('Generating new jobs...')
      cachedJobs = await generateDynamicJobs()
      lastFetch = now
    }
    
    let jobs = cachedJobs
    
    if (q) {
      jobs = jobs.filter((j) => 
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q)
      )
    }
    
    if (date) {
      jobs = jobs.filter((j) => j.start.slice(0, 10) === date)
    }
    
    res.json(jobs)
  } catch (error) {
    console.error('Error in /jobs endpoint:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /jobs/:id
app.get('/jobs/:id', async (req, res) => {
  try {
    // キャッシュから取得
    if (cachedJobs.length === 0) {
      cachedJobs = await generateDynamicJobs()
      lastFetch = Date.now()
    }
    
    const job = cachedJobs.find((j) => j.id === req.params.id)
    if (!job) {
      res.status(404).json({ error: 'Job not found' })
    } else {
      res.json(job)
    }
  } catch (error) {
    console.error('Error in /jobs/:id endpoint:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Vercel用のエクスポート
module.exports = app