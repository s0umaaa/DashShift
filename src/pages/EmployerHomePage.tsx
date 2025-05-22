// src/pages/EmployerHomePage.tsx   ★new
import { Link } from 'react-router-dom'
import { ClipboardList, PlusSquare } from 'lucide-react'

export default function EmployerHomePage() {
  return (
    <div className="w-full px-4 space-y-6 pt-4">
      <h1 className="text-3xl font-bold">Employer Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/post"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 py-6"
        >
          <PlusSquare className="w-8 h-8 text-primary" />
          <span className="mt-2 text-lg font-semibold">Post Job</span>
        </Link>

        <Link
          to="/hire"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 py-6"
        >
          <ClipboardList className="w-8 h-8 text-primary" />
          <span className="mt-2 text-lg font-semibold">Applicants</span>
        </Link>
      </div>
    </div>
  )
}
