// src/components/SearchBar.tsx
import { Search, Filter } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { BadgeKey } from '@/types/job'
import { BADGE_META } from '@/mocks/badges'

type SearchBarProps = {
  onFilter?: (query: string, badges: BadgeKey[]) => void
}

export default function SearchBar({ onFilter }: SearchBarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedBadges, setSelectedBadges] = useState<BadgeKey[]>(
    searchParams.get('badges')?.split(',').filter(badge => 
      Object.keys(BADGE_META).includes(badge)
    ) as BadgeKey[] || []
  )

  // Update state when URL parameters change
  useEffect(() => {
    const queryParam = searchParams.get('q') || ''
    const badgesParam = searchParams.get('badges')?.split(',').filter(badge => 
      Object.keys(BADGE_META).includes(badge)
    ) as BadgeKey[] || []
    
    setQuery(queryParam)
    setSelectedBadges(badgesParam)
  }, [searchParams])

  // Update URL parameters and trigger filtering
  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams)
    
    if (query) {
      newParams.set('q', query)
    } else {
      newParams.delete('q')
    }
    
    if (selectedBadges.length > 0) {
      newParams.set('badges', selectedBadges.join(','))
    } else {
      newParams.delete('badges')
    }
    
    // Debug: Log params before updating
    console.log('Updating search params:', Object.fromEntries(newParams.entries()))
    setSearchParams(newParams)
    
    // Notify parent component
    if (onFilter) {
      onFilter(query, selectedBadges)
    }
  }

  // Toggle badge selection
  const toggleBadge = (badge: BadgeKey) => {
    // Debug: Log before toggle
    console.log('Before toggle:', selectedBadges)
    
    if (selectedBadges.includes(badge)) {
      setSelectedBadges(selectedBadges.filter(b => b !== badge))
    } else {
      setSelectedBadges([...selectedBadges, badge])
    }
    
    // Debug: Log after toggle
    console.log('After toggle:', 
      selectedBadges.includes(badge) 
        ? selectedBadges.filter(b => b !== badge) 
        : [...selectedBadges, badge]
    )
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center w-full">
        <input
          type="text"
          placeholder="Search jobs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full pl-10 pr-14 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <Search className="absolute left-3 w-5 h-5 text-gray-400" />
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-12 p-1 hover:bg-gray-100 rounded-full"
          aria-label="Toggle filters"
        >
          <Filter 
            className={`w-5 h-5 ${selectedBadges.length > 0 ? 'text-primary' : 'text-gray-400'}`} 
          />
        </button>
        <button
          type="button"
          onClick={handleSearch}
          className="absolute right-3 bg-primary text-white p-1 rounded-md"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
      
      {/* Filter panel */}
      {showFilters && (
        <div className="mt-2 p-3 border rounded-lg shadow-md bg-white">
          <h3 className="font-medium mb-2">Filter by job type:</h3>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(BADGE_META) as BadgeKey[]).map(badge => (
              <button
                key={badge}
                onClick={() => toggleBadge(badge)}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedBadges.includes(badge)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {BADGE_META[badge].label}
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={() => {
                // Debug: Log before clearing
                console.log('Before clearing filters:', selectedBadges)
                setSelectedBadges([])
                
                // Always update URL params when clearing filters
                const newParams = new URLSearchParams(searchParams)
                newParams.delete('badges')
                setSearchParams(newParams)
                
                // Notify parent component
                if (onFilter) {
                  onFilter(query, [])
                }
              }}
              className="text-sm text-gray-600 hover:text-gray-800 mr-3"
            >
              Clear filters
            </button>
            <button
              onClick={() => {
                // Debug: Log before applying
                console.log('Applying filters with badges:', selectedBadges)
                handleSearch()
                setShowFilters(false)
              }}
              className="px-3 py-1 bg-primary text-white text-sm rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}