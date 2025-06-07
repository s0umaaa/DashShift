// backend/api/index.js
const express = require('express')
const cors = require('cors')

// モックデータ（generateJobs.tsの機能を簡素化）
const MOCK_JOBS = [
  {
    id: 'j1',
    title: 'Barista Shift',
    company: 'Swanston Cafe',
    description: 'Join our team as a barista and help us provide excellent customer service.',
    street: 'Swanston St',
    start: '2025-06-07T07:00:00+10:00',
    end: '2025-06-07T12:00:00+10:00',
    wage: 30,
    wageType: 'hour',
    badge: 'barista',
    location: { lat: -37.806, lng: 144.963 }
  },
  {
    id: 'j2',
    title: 'Cleaner Shift',
    company: 'Spruce Services',
    description: 'Keep offices sparkling clean on a flexible schedule.',
    street: 'Collins St',
    start: '2025-06-07T10:00:00+10:00',
    end: '2025-06-07T14:00:00+10:00',
    wage: 100,
    wageType: 'day',
    badge: 'cleaner',
    location: { lat: -37.817, lng: 144.955 }
  },
  {
    id: 'j3',
    title: 'Dishwasher Shift',
    company: "Queen's Grill",
    description: 'Assist kitchen team by maintaining dish area cleanliness.',
    street: 'Russell St',
    start: '2025-06-07T18:00:00+10:00',
    end: '2025-06-07T22:00:00+10:00',
    wage: 28,
    wageType: 'hour',
    badge: 'dishwasher',
    location: { lat: -37.8105, lng: 144.971 }
  },
  {
    id: 'j4',
    title: 'Kitchen Hand Shift',
    company: 'Urban Eats',
    description: 'Assist in kitchen operations during busy lunch period.',
    street: 'Little Collins St',
    start: '2025-06-07T11:00:00+10:00',
    end: '2025-06-07T15:00:00+10:00',
    wage: 26,
    wageType: 'hour',
    badge: 'kitchen',
    location: { lat: -37.815, lng: 144.968 }
  },
  {
    id: 'j5',
    title: 'Waiter Shift',
    company: 'Cafe Melbourne',
    description: 'Provide excellent service to customers in our busy cafe.',
    street: 'Flinders Lane',
    start: '2025-06-07T08:00:00+10:00',
    end: '2025-06-07T14:00:00+10:00',
    wage: 29,
    wageType: 'hour',
    badge: 'waiter',
    location: { lat: -37.817, lng: 144.970 }
  },
  {
    id: 'j6',
    title: 'Cook Shift',
    company: 'The Local Kitchen',
    description: 'Prepare fresh meals for our busy restaurant.',
    street: 'Bourke St',
    start: '2025-06-07T17:00:00+10:00',
    end: '2025-06-07T23:00:00+10:00',
    wage: 32,
    wageType: 'hour',
    badge: 'cook',
    location: { lat: -37.811, lng: 144.968 }
  },
  {
    id: 'j7',
    title: 'Cashier Shift',
    company: 'Quick Bites',
    description: 'Handle transactions and assist customers.',
    street: 'Elizabeth St',
    start: '2025-06-07T12:00:00+10:00',
    end: '2025-06-07T18:00:00+10:00',
    wage: 27,
    wageType: 'hour',
    badge: 'cashier',
    location: { lat: -37.814, lng: 144.965 }
  },
  {
    id: 'j8',
    title: 'Barista Shift',
    company: 'Morning Brew',
    description: 'Create perfect coffee for our morning rush.',
    street: 'Russell St',
    start: '2025-06-08T06:00:00+10:00',
    end: '2025-06-08T12:00:00+10:00',
    wage: 31,
    wageType: 'hour',
    badge: 'barista',
    location: { lat: -37.810, lng: 144.971 }
  },
  {
    id: 'j9',
    title: 'Kitchen Hand Shift',
    company: 'City Diner',
    description: 'Support kitchen team during dinner service.',
    street: 'Collins St',
    start: '2025-06-08T16:00:00+10:00',
    end: '2025-06-08T22:00:00+10:00',
    wage: 25,
    wageType: 'hour',
    badge: 'kitchen',
    location: { lat: -37.813, lng: 144.969 }
  },
  {
    id: 'j10',
    title: 'Waiter Shift',
    company: 'Fine Dining Co',
    description: 'Provide premium service in upscale restaurant.',
    street: 'William St',
    start: '2025-06-08T18:00:00+10:00',
    end: '2025-06-08T23:00:00+10:00',
    wage: 35,
    wageType: 'hour',
    badge: 'waiter',
    location: { lat: -37.818, lng: 144.957 }
  }
]

const app = express()
app.use(cors())

// GET /jobs
app.get('/jobs', (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase()
  const date = String(req.query.date || '').trim()
  
  let filtered = MOCK_JOBS
  
  if (q) {
    filtered = filtered.filter((j) => 
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q)
    )
  }
  
  if (date) {
    filtered = filtered.filter((j) => j.start.slice(0, 10) === date)
  }
  
  res.json(filtered)
})

// GET /jobs/:id
app.get('/jobs/:id', (req, res) => {
  const job = MOCK_JOBS.find((j) => j.id === req.params.id)
  if (!job) {
    res.status(404).json({ error: 'Job not found' })
  } else {
    res.json(job)
  }
})

// Vercel用のエクスポート
module.exports = app