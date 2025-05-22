// backend/src/generateJobs.ts (修正版)
import { randomUUID } from 'node:crypto'
import { formatISO, addDays, setHours, addHours, startOfDay } from 'date-fns'
import 'dotenv/config'

/**
 * Unified Job type (shared with frontend).
 */
export type Job = {
  id: string
  title: string
  company: string
  start: string
  end: string
  wage: number
  wageType: 'hour' | 'day'
  street: string
  badge: string
  description: string
  location: { lat: number; lng: number }
}

/* ────────────────────────────────────────────────────────────
 * Runtime-configurable centre point
 *   1.  MAP_CENTER_LAT / MAP_CENTER_LNG env vars (if defined)
 *   2.  Fallback to IP‐based geolocation via ipinfo.io
 *   3.  Final fallback: Melbourne CBD
 *
 *   — Radius is fixed to 10 km (10 000 m)
 *   — Google Places API key taken from GOOGLE_PLACES_API_KEY env
 * ──────────────────────────────────────────────────────────── */
const MELBOURNE_CBD = { lat: -37.813, lng: 144.964 }
const RADIUS_METERS = 10_000

async function resolveCenter(): Promise<{ lat: number; lng: number }> {
  const latEnv = process.env.MAP_CENTER_LAT
  const lngEnv = process.env.MAP_CENTER_LNG
  if (latEnv && lngEnv) {
    return { lat: Number(latEnv), lng: Number(lngEnv) }
  }

  try {
    const token = process.env.IPINFO_TOKEN ?? ''
    const res = await fetch(`https://ipinfo.io/json${token ? `?token=${token}` : ''}`)
    if (res.ok) {
      const json: any = await res.json()
      if (json.loc) {
        const [latStr, lngStr] = (json.loc as string).split(',')
        const lat = Number(latStr)
        const lng = Number(lngStr)
        if (!Number.isNaN(lat) && !Number.isNaN(lng)) return { lat, lng }
      }
    }
  } catch {
    /* ignore network errors; fallback below */
  }

  return MELBOURNE_CBD
}

/* ---------------------------------------------------------- */
/* Google Places API helper                                   */
/* ---------------------------------------------------------- */
async function fetchPlaces(
  keyword: 'cafe' | 'restaurant',
  center: { lat: number; lng: number }
) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) throw new Error('GOOGLE_PLACES_API_KEY not set in environment')

  const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json')
  url.searchParams.set('key', key)
  url.searchParams.set('location', `${center.lat},${center.lng}`)
  url.searchParams.set('radius', String(RADIUS_METERS))
  url.searchParams.set('keyword', keyword)

  const res = await fetch(url)
  if (!res.ok) throw new Error(`[Places] ${res.status} ${res.statusText}`)
  const data: any = await res.json()
  return (data.results as any[]) ?? []
}

/* ---------------------------------------------------------- */
/* Randomisation helpers                                      */
/* ---------------------------------------------------------- */
const TITLE_BADGE_POOL: Array<[string, string]> = [
  ['Barista', 'barista'],
  ['Kitchen Hand', 'kitchen'],
  ['Dishwasher', 'dishwasher'],
  ['Cashier', 'cashier'],
  ['Cook', 'cook'],
  ['Waiter', 'waiter']
]

// 店舗名とその住所のリスト（モックデータを増やすため）
const MOCK_PLACES = [
  { name: 'Coffee Express', vicinity: '123 Swanston St', lat: -37.815, lng: 144.966 },
  { name: 'Brew & Bean', vicinity: '45 Flinders Lane', lat: -37.817, lng: 144.970 },
  { name: 'Morning Glory Cafe', vicinity: '67 Collins St', lat: -37.813, lng: 144.969 },
  { name: 'Central Perk', vicinity: '89 Bourke St', lat: -37.811, lng: 144.968 },
  { name: 'Latte Lane', vicinity: '101 Elizabeth St', lat: -37.814, lng: 144.965 },
  { name: 'The Daily Grind', vicinity: '234 Russell St', lat: -37.810, lng: 144.967 },
  { name: 'Urban Brew', vicinity: '345 Exhibition St', lat: -37.809, lng: 144.971 },
  { name: 'City Sips', vicinity: '456 Little Collins St', lat: -37.816, lng: 144.961 },
  { name: 'Metro Coffee', vicinity: '567 Queen St', lat: -37.812, lng: 144.958 },
  { name: 'Aroma Central', vicinity: '678 William St', lat: -37.818, lng: 144.957 },
  { name: 'The Bistro', vicinity: '789 Lonsdale St', lat: -37.813, lng: 144.955 },
  { name: 'Fresh Plates', vicinity: '890 King St', lat: -37.819, lng: 144.954 },
  { name: 'Gourmet House', vicinity: '901 Spencer St', lat: -37.815, lng: 144.952 },
  { name: 'Flavor Fusion', vicinity: '12 La Trobe St', lat: -37.808, lng: 144.963 },
  { name: 'Taste Delight', vicinity: '23 Little Bourke St', lat: -37.811, lng: 144.971 },
  { name: 'Savory Bites', vicinity: '34 Hardware Lane', lat: -37.814, lng: 144.962 },
  { name: 'Culinary Corner', vicinity: '45 Degraves St', lat: -37.817, lng: 144.965 },
  { name: 'Eat Street', vicinity: '56 Centre Place', lat: -37.816, lng: 144.966 },
  { name: 'Foodie Haven', vicinity: '67 Block Place', lat: -37.815, lng: 144.964 },
  { name: 'Delish Dishes', vicinity: '78 McKillop St', lat: -37.814, lng: 144.961 }
]

const START_HOURS = [6, 8, 10, 12, 14, 17, 18]  // より多様な開始時間
const HOURLY_WAGE_RANGE = { min: 25, max: 32 }
const SHIFT_LENGTH_H = [4, 6, 8]  // シフト長を可変に
const DATE_OFFSETS = [0, 1, 2, 3, 4, 5, 6]  // 今日から1週間先まで

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomWage(): number {
  return (
    Math.floor(
      Math.random() * (HOURLY_WAGE_RANGE.max - HOURLY_WAGE_RANGE.min + 1)
    ) + HOURLY_WAGE_RANGE.min
  )
}

// 指定した範囲内でランダムな小数を生成
function randomOffset(range: number): number {
  return (Math.random() - 0.5) * range
}

/* ---------------------------------------------------------- */
/* Public generator                                           */
/* ---------------------------------------------------------- */
export async function fetchNearbyJobs(): Promise<Job[]> {
  const center = await resolveCenter()
  const cafes = await fetchPlaces('cafe', center)
  const restaurants = await fetchPlaces('restaurant', center)

  // merge + de-duplicate by place_id
  const places: any[] = []
  const seen = new Set<string>()
  for (const p of [...cafes, ...restaurants]) {
    if (!seen.has(p.place_id)) {
      seen.add(p.place_id)
      places.push(p)
    }
  }

  // APIから取得した実際の場所
  const realPlaces = places.slice(0, 30)
  
  // モックデータを追加（APIから取得できないか、より多くのデータが必要な場合）
  const mockPlacesWithVariations: any[] = []
  
  // 各モック場所に対して複数のバリエーションを作成
  MOCK_PLACES.forEach(mockPlace => {
    // 各場所に対して5つのバリエーションを作成（少しずつ位置をずらす）
    for (let i = 0; i < 5; i++) {
      mockPlacesWithVariations.push({
        name: mockPlace.name,
        vicinity: mockPlace.vicinity,
        geometry: {
          location: {
            lat: mockPlace.lat + randomOffset(0.004),
            lng: mockPlace.lng + randomOffset(0.004)
          }
        },
        // 重複を避けるためのユニークID
        place_id: `mock-${mockPlace.name.replace(/\s+/g, '-').toLowerCase()}-${i}`
      })
    }
  })
  
  // 実際の場所とモック場所を組み合わせる
  const allPlaces = [...realPlaces, ...mockPlacesWithVariations]
  
  // ジョブの生成（最大100件）
  const jobs: Job[] = []
  
  // 最大100件のジョブを生成
  for (let i = 0; i < Math.min(100, allPlaces.length); i++) {
    const p = allPlaces[i]
    const [title, badge] = pick(TITLE_BADGE_POOL)
    const startHour = pick(START_HOURS)
    const dayOffset = pick(DATE_OFFSETS)
    const shiftLength = pick(SHIFT_LENGTH_H)

    const today = startOfDay(new Date())
    const start = addHours(setHours(addDays(today, dayOffset), startHour), 0)
    const end = addHours(start, shiftLength)

    jobs.push({
      id: randomUUID(),
      title: `${title} Shift`,
      company: p.name,
      start: formatISO(start),
      end: formatISO(end),
      wage: randomWage(),
      wageType: 'hour',
      street: p.vicinity ?? p.formatted_address ?? 'TBD',
      badge,
      description: `Assist at ${p.name}`,
      location: {
        lat: p.geometry.location.lat,
        lng: p.geometry.location.lng
      }
    })
  }

  return jobs
}