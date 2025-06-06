// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import HomePage from '@/pages/HomePage'
import MapPage from '@/pages/MapPage'
import JobDetailPage from '@/pages/JobDetailPage'
import JobListPage from '@/pages/JobListPage'
import WorkerProfilePage from '@/pages/WorkerProfilePage'
import EmployerProfilePage from '@/pages/EmployerProfilePage'
import JobPostPage from '@/pages/JobPostPage'
import HirePage from '@/pages/HirePage'
import EmployerHomePage from '@/pages/EmployerHomePage'
import PortfolioFieldReportPage from '@/pages/PortfolioFieldReportPage'
import AppHeader from '@/components/AppHeader'

export default function App() {
  const [role, setRole] = useState<'worker' | 'employer'>('worker')
  const { pathname } = useLocation()
  const showHeader = pathname !== '/portfolio' // hide on portfolio page

  return (
    <div className="h-full flex flex-col">
      {showHeader && <AppHeader role={role} onRoleChange={setRole} />}

      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employer" element={<EmployerHomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/post" element={<JobPostPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/portfolio" element={<PortfolioFieldReportPage />} />
          <Route
            path="/profile"
            element={
              role === 'worker' ? <WorkerProfilePage /> : <EmployerProfilePage />
            }
          />
        </Routes>
      </main>
    </div>
  )
}
