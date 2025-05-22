// backend/src/jobs.ts
import { fetchNearbyJobs, type Job } from './generateJobs'

/* --- re-export so other modules can write `import { Job } from "./jobs"` --- */
export type { Job }   // ← ★ これが無かったため TS2724 発生

/* ------------------------------------------------------------------------- */
/*  Generate mock jobs once at server start-up                               */
/* ------------------------------------------------------------------------- */
export const JOBS: Job[] = []

;(async () => {
  try {
    const jobs = await fetchNearbyJobs()
    JOBS.push(...jobs)
    console.log(`[jobs] generated ${jobs.length} mock jobs from Places API`)
  } catch (err) {
    console.error('[jobs] Failed to fetch Places mock data:', err)
  }
})()
