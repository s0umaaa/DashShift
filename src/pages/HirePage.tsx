// src/pages/HirePage.tsx
import { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { Star } from 'lucide-react'
import BadgeIcon from '@/components/BadgeIcon'
interface Applicant {
  id: string
  name: string
  badge: string
  avatar: string
  rate: number
  completed: number
}

interface PostedJob {
  id: string
  title: string
  /** ISO-8601 日付（求人日） */
  date: string
  applicants: Applicant[]
}

const MOCK_POSTED_JOBS: PostedJob[] = [
  {
    id: 'job1',
    title: 'Saturday Barista',
    date: '2025-05-10',
    applicants: [
      {
        id: 'a1',
        name: 'Alice',
        badge: 'waiter',
        avatar: '/avatar-a1.png',
        rate: 4.8,
        completed: 23
      },
      {
        id: 'a2',
        name: 'Bob',
        badge: 'cook',
        avatar: '/avatar-b2.png',
        rate: 4.6,
        completed: 15
      }
    ]
  },
  {
    id: 'job2',
    title: 'Dishwasher Evening',
    date: '2025-05-10',
    applicants: [
      {
        id: 'a3',
        name: 'Charlie',
        badge: 'dishwasher',
        avatar: '/avatar-c3.png',
        rate: 4.2,
        completed: 8
      }
    ]
  },
  {
    id: 'job3',
    title: 'Sunday Cashier',
    date: '2025-05-11',
    applicants: [
      {
        id: 'a4',
        name: 'Dana',
        badge: 'waiter',
        avatar: '/avatar-d4.png',
        rate: 4.9,
        completed: 31
      }
    ]
  }
]

export default function HirePage() {
  const [jobs, setJobs] = useState<PostedJob[]>(MOCK_POSTED_JOBS)

  function handleDecision(
    jobId: string,
    applicantId: string,
    accepted: boolean
  ) {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              applicants: job.applicants.filter((a) => a.id !== applicantId)
            }
          : job
      )
    )
    alert(`Applicant ${accepted ? 'hired' : 'rejected'}!`)
  }

  /** 日付ごとにグループ化（昇順ソート） */
  const jobsByDate = jobs.reduce<Record<string, PostedJob[]>>((acc, job) => {
    acc[job.date] = acc[job.date] ? [...acc[job.date], job] : [job]
    return acc
  }, {})

  const sortedDates = Object.keys(jobsByDate).sort()

  return (
    <div className="w-full px-4 space-y-6 pt-4">
      <h1 className="text-2xl font-bold">Hire Applicants</h1>

      {sortedDates.map((d) => (
        <section key={d} className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">
            {format(parseISO(d), 'EEE, MMM d')}
          </h2>

          {jobsByDate[d].map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-4 space-y-3 bg-white shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary">{job.title}</h3>

              {job.applicants.length === 0 ? (
                <p>No applicants yet</p>
              ) : (
                <ul className="space-y-2">
                  {job.applicants.map((app) => (
                    <li
                      key={app.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={app.avatar}
                          alt={app.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium">{app.name}</span>
                          <div className="flex items-center text-xs text-gray-600 gap-1">
                            <Star className="w-3 h-3" />{' '}
                            {app.rate.toFixed(1)} • {app.completed} jobs
                          </div>
                        </div>
                        <BadgeIcon
                          badge={app.badge as any}
                          size={28}
                          className="ml-2"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleDecision(job.id, app.id, true)
                          }
                          className="px-2 py-1 rounded bg-primary text-white text-sm"
                        >
                          Hire
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleDecision(job.id, app.id, false)
                          }
                          className="px-2 py-1 rounded bg-gray-300 text-sm"
                        >
                          Reject
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
