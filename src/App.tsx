// src/App.tsx
import { Routes, Route } from 'react-router-dom'
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
import AppHeader from '@/components/AppHeader'

export default function App() {
  const [role, setRole] = useState<'worker' | 'employer'>('worker')
  
  return (
    <div className="h-full flex flex-col">
      <AppHeader role={role} onRoleChange={setRole} />
      <main className="flex-1 overflow-auto">
        <Routes>
          {/* Worker routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/employer" element={<EmployerHomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          {/* Employer routes */}
          <Route path="/post" element={<JobPostPage />} />
          <Route path="/hire" element={<HirePage />} />
          {/* Shared route that swaps component by role */}
          <Route
            path="/profile"
            element={role === 'worker' ? <WorkerProfilePage /> : <EmployerProfilePage />}
          />
        </Routes>
      </main>
    </div>
  )
}