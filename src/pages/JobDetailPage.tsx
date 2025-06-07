// backend/src/pages/JobDetailPage.tsx
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Clock, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import BadgeIcon from '@/components/BadgeIcon'
import { Job, BadgeKey } from '@/types/job'

/* ───── Badge‑specific hero images ───── */
const BADGE_IMAGE: Record<BadgeKey, string> = {
  barista: '/placeholder-barista.png',
  cleaner: '/cleaner.webp',
  nailist: '/nailist.webp',
  dishwasher: '/dishwasher.jpg',
  waiter: '/waiter.jpg',
  cook: '/cook.jpg',
  kitchen: '/cook.jpg',
  cashier: '/cahier.jpg' // ← typo in file name kept as provided
}

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch(`https://backend-mtisslsng-somas-projects-8022b24c.vercel.app/jobs/${id}`)
        if (!res.ok) throw new Error('not found')
        const data = (await res.json()) as Job
        setJob(data)
      } catch {
        setJob(null)
      } finally {
        setLoading(false)
      }
    }
    fetchJob()
  }, [id])

  function handleApply() {
    setApplied(true)
    toast.success('Applied successfully!')
  }

  if (loading) return <p className="p-4">Loading…</p>
  if (!job) return <p className="p-4">Job not found</p>

  const start = new Date(job.start)
  const end   = new Date(job.end)

  return (
    <div className="p-4 max-w-md mx-auto space-y-4 bg-primary/5 rounded-lg">
      <img
        src={BADGE_IMAGE[job.badge] ?? '/placeholder-barista.png'}
        alt={job.title}
        className="rounded-lg w-full object-cover h-48"
      />
      <h1 className="text-3xl font-bold text-primary text-center">{job.title}</h1>
      <h2 className="text-lg text-center mb-2">{job.company}</h2>

      <div className="text-sm space-y-1 flex flex-col items-center">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {format(start, 'H:mm')} – {format(end, 'H:mm')}
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {job.street}
        </div>
      </div>

      <section className="space-y-1">
        <h3 className="text-xl font-semibold">Description</h3>
        <p>{job.description}</p>
      </section>

      <div className="flex items-center gap-2">
        <span>You can earn this badge</span>
        <BadgeIcon badge={job.badge} />
      </div>

      <button
        type="button"
        onClick={handleApply}
        disabled={applied}
        className="w-full py-2 rounded-lg bg-primary text-white font-semibold shadow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {applied ? 'Applied' : 'Apply'}
      </button>

      <Link to="/" className="block text-center text-sm text-primary underline">
        Back to jobs
      </Link>
    </div>
  )
}
