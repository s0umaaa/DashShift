// backend/src/server.ts
import express from 'express'
import cors from 'cors'
import { JOBS, Job } from './jobs'

const app = express()
app.use(cors())

/**
 * GET /jobs
 *   ?q=keyword
 *   ?date=yyyy-mm-dd
 */
app.get('/jobs', (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase()
  const date = String(req.query.date || '').trim()

  let filtered: Job[] = JOBS
  if (q) filtered = filtered.filter((j) => j.title.toLowerCase().includes(q))
  if (date) filtered = filtered.filter((j) => j.start.slice(0, 10) === date)

  res.json(filtered)
})

/** GET /jobs/:id – 1 件取得 */
app.get('/jobs/:id', (req, res) => {
  const job = JOBS.find((j) => j.id === req.params.id)
  if (!job) {
    res.status(404).json({ error: 'Job not found' })
  } else {
    res.json(job)
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Job API running on http://localhost:${PORT}`)
})
