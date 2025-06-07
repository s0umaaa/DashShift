// src/pages/HomePage.tsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import JobList from '@/components/JobList'
import SearchBar from '@/components/SearchBar'
import DateTabs from '@/components/DateTabs'
import SortOptions from '@/components/SortOptions'
import { Job, BadgeKey } from '@/types/job'
import { addDays, format } from 'date-fns'
import { MOCK_JOBS } from '@/mocks/jobs'

// Sort type definition
export type SortType = 'wage-desc' | 'wage-asc' | 'duration-desc' | 'duration-asc'

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedDateIdx, setSelectedDateIdx] = useState(0)
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  // Get sort state from URL parameters, default to 'wage-desc'
  const sortBy = (searchParams.get('sort') as SortType) || 'wage-desc'

  // Date string generation helper
  const dateStr = (idx: number) => format(addDays(new Date(), idx), 'yyyy-MM-dd')

  // Debug: Log current URL parameters
  useEffect(() => {
    console.log('Current search params:', Object.fromEntries(searchParams.entries()))
    console.log('Selected date:', dateStr(selectedDateIdx))
  }, [searchParams, selectedDateIdx])

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`https://backend-moauuwk5t-somas-projects-8022b24c.vercel.app/jobs?date=${dateStr(selectedDateIdx)}`)
        if (!res.ok) throw new Error('backend error')
        const data = (await res.json()) as Job[]
        const fetchedJobs = data.length ? data : MOCK_JOBS
        setJobs(fetchedJobs)

        // Debug: Log fetched jobs
        console.log('Fetched jobs:', fetchedJobs.length)
        console.log('Job badges:', fetchedJobs.map(job => job.badge))

        // Set recommended jobs (top 5 by wage)
        const sortedByWage = [...fetchedJobs].sort((a, b) => b.wage - a.wage)
        setRecommendedJobs(sortedByWage.slice(0, 5))
      } catch (error) {
        console.error('Error fetching jobs:', error)
        setJobs(MOCK_JOBS)

        // Generate recommendations from mock data on error
        const sortedByWage = [...MOCK_JOBS].sort((a, b) => b.wage - a.wage)
        setRecommendedJobs(sortedByWage.slice(0, 5))
      }
    }

    fetchJobs()
  }, [selectedDateIdx])

  // Apply search and filtering
  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase() || ''
    // Debug: Log URL parameters
    console.log('URL parameters:', Object.fromEntries(searchParams.entries()))

    // Get badges from URL parameters
    const badgesParam = searchParams.get('badges') || ''
    const badges = badgesParam ? badgesParam.split(',').filter(Boolean) : []

    // Debug: Log search criteria
    console.log('Search query:', query)
    console.log('Filter badges:', badges)

    // Set search state if there are search parameters
    setHasSearched(query !== '' || badges.length > 0)

    let filtered = [...jobs]
    console.log('Total jobs before filtering:', jobs.length)

    // Text search
    if (query) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      )
      console.log('Jobs after text search:', filtered.length)
    }

    // Badge filter
    if (badges.length > 0) {
      // Debug: Check all job badges
      console.log('All job badges:', jobs.map(job => job.badge))

      filtered = filtered.filter(job => {
        const result = badges.includes(job.badge)
        // Debug: Log each job's filtering result
        console.log(`Job ${job.id} (${job.title}) badge: ${job.badge}, included: ${result}`)
        return result
      })
      console.log('Jobs after badge filter:', filtered.length)
    }

    setFilteredJobs(filtered)
  }, [jobs, searchParams])

  // Apply sorting
  const sortJobs = (jobsToSort: Job[]): Job[] => {
    const sorted = [...jobsToSort]

    switch (sortBy) {
      case 'wage-desc':
        return sorted.sort((a, b) => b.wage - a.wage)
      case 'wage-asc':
        return sorted.sort((a, b) => a.wage - b.wage)
      case 'duration-desc':
        return sorted.sort((a, b) => {
          const aDuration = new Date(a.end).getTime() - new Date(a.start).getTime()
          const bDuration = new Date(b.end).getTime() - new Date(b.start).getTime()
          return bDuration - aDuration
        })
      case 'duration-asc':
        return sorted.sort((a, b) => {
          const aDuration = new Date(a.end).getTime() - new Date(a.start).getTime()
          const bDuration = new Date(b.end).getTime() - new Date(b.start).getTime()
          return aDuration - bDuration
        })
      default:
        return sorted
    }
  }

  // Search and filtering handler - actively update URL parameters
  const handleFilter = (query: string, badges: BadgeKey[]) => {
    // Debug: Log filter call
    console.log('Handle filter called with:', query, badges)

    // Explicitly update URL parameters here to ensure sync
    const newParams = new URLSearchParams(searchParams)

    if (query) {
      newParams.set('q', query)
    } else {
      newParams.delete('q')
    }

    if (badges.length > 0) {
      newParams.set('badges', badges.join(','))
    } else {
      newParams.delete('badges')
    }

    // Debug: Log new params
    console.log('Setting new params:', Object.fromEntries(newParams.entries()))
    setSearchParams(newParams)
  }

  // Sort change handler - update URL parameters
  const handleSortChange = (newSortBy: SortType) => {
    // Keep current URL parameters while updating sort parameter
    const newParams = new URLSearchParams(searchParams)
    newParams.set('sort', newSortBy)
    setSearchParams(newParams)
  }

  // Sorted job lists
  const sortedFilteredJobs = sortJobs(filteredJobs)
  const sortedAllJobs = sortJobs(jobs)

  return (
    <div className="flex flex-col items-center px-4 space-y-6 pt-4 pb-8">
      <SearchBar onFilter={handleFilter} />
      <DateTabs value={selectedDateIdx} onChange={setSelectedDateIdx} />

      {/* Sort options - display **only when a search is active** */}
      {hasSearched && <SortOptions value={sortBy} onChange={handleSortChange} />}

      {/* Search results section - only shown when search is performed */}
      {hasSearched && (
        <section className="w-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Search Results</h2>
            <span className="text-sm text-gray-500">{sortedFilteredJobs.length} jobs found</span>
          </div>

          {sortedFilteredJobs.length > 0 ? (
            <JobList jobs={sortedFilteredJobs} />
          ) : (
            <div className="w-full py-10 text-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">No jobs found matching your criteria.</p>
              <p className="text-gray-500 mt-1">Try adjusting your filters or search query.</p>
            </div>
          )}
        </section>
      )}

      {/* Recommended section - always shown */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">Recommended for You</h2>
          <span className="text-sm text-gray-500">Top paying jobs</span>
        </div>

        <JobList jobs={recommendedJobs} />
      </section>

      {/* All jobs - shown when not searching */}
      {!hasSearched && (
        <section className="w-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">All Jobs</h2>
            <span className="text-sm text-gray-500">{sortedAllJobs.length} jobs available</span>
          </div>

          <JobList jobs={sortedAllJobs} />
        </section>
      )}
    </div>
  )
}
