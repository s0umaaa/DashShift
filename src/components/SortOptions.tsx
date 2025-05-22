// src/components/SortOptions.tsx
import { ArrowDownAZ, ArrowUpAZ, Clock } from 'lucide-react'
import { SortType } from '@/pages/HomePage'
import { useEffect, useState } from 'react'

interface SortOptionsProps {
  value: SortType
  onChange: (value: SortType) => void
}

export default function SortOptions({ value, onChange }: SortOptionsProps) {
  // Track active sort internally (for debugging)
  const [activeSort, setActiveSort] = useState<SortType>(value)
  
  // Update internal state when value prop changes
  useEffect(() => {
    setActiveSort(value)
  }, [value])
  
  // Function to update immediately on selection
  const handleSortChange = (newSort: SortType) => {
    console.log(`Changing sort from ${activeSort} to ${newSort}`) // Debug log
    setActiveSort(newSort) // Update internal state
    onChange(newSort) // Notify parent component
  }
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">Sort by:</h3>
        
        <div className="flex space-x-2 overflow-x-auto pb-1">
          <SortButton 
            label="Highest Pay" 
            icon={<ArrowDownAZ className="w-3.5 h-3.5" />} 
            active={activeSort === 'wage-desc'} 
            onClick={() => handleSortChange('wage-desc')} 
          />
          
          <SortButton 
            label="Lowest Pay" 
            icon={<ArrowUpAZ className="w-3.5 h-3.5" />} 
            active={activeSort === 'wage-asc'} 
            onClick={() => handleSortChange('wage-asc')} 
          />
          
          <SortButton 
            label="Longest Shift" 
            icon={<Clock className="w-3.5 h-3.5" />} 
            active={activeSort === 'duration-desc'} 
            onClick={() => handleSortChange('duration-desc')} 
          />
          
          <SortButton 
            label="Shortest Shift" 
            icon={<Clock className="w-3.5 h-3.5" />} 
            active={activeSort === 'duration-asc'} 
            onClick={() => handleSortChange('duration-asc')} 
          />
        </div>
      </div>
    </div>
  )
}

interface SortButtonProps {
  label: string
  icon: React.ReactNode
  active: boolean
  onClick: () => void
}

function SortButton({ label, icon, active, onClick }: SortButtonProps) {
  return (
    <button
      className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      onClick={onClick}
      type="button"
    >
      <span className="mr-1">{icon}</span>
      {label}
    </button>
  )
}