// src/components/JobList.tsx
import { Job } from '@/types/job'
import JobCard from './JobCard'

interface Props {
  jobs: Job[]
}

export default function JobList({ jobs }: Props) {
  return (
    <div className="grid gap-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}