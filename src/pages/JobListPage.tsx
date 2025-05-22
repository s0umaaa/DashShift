// src/pages/JobListPage.tsx
import { Link } from 'react-router-dom'
import JobList from '@/components/JobList'

export default function JobListPage() {
  return (
    <div className="w-full px-4 space-y-4">
      <div className="flex items-center justify-between pt-4">
        <h1 className="text-2xl font-bold">All Jobs</h1>
        <Link to="/" className="text-primary underline">
          Close
        </Link>
      </div>

      <JobList />
    </div>
  )
}