// src/components/JobCard.tsx
import { Job } from '@/types/job'
import { Link } from 'react-router-dom'
import BadgeIcon from './BadgeIcon'
import { Clock, MapPin, DollarSign, Building } from 'lucide-react'
import { format, isSameDay } from 'date-fns'

interface Props {
  job: Job
}

export default function JobCard({ job }: Props) {
  const start = new Date(job.start)
  const end = new Date(job.end)
  const timeRange = `${format(start, 'H:mm')} – ${format(end, 'H:mm')}`
  
  // Display date (Today, Tomorrow, or date)
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  let dateDisplay = format(start, 'MMM d (EEE)')
  if (isSameDay(start, today)) {
    dateDisplay = 'Today'
  } else if (isSameDay(start, tomorrow)) {
    dateDisplay = 'Tomorrow'
  }

  // Calculate working hours
  const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
  const hourDisplay = hours === Math.floor(hours) 
    ? `${hours}h` 
    : `${Math.floor(hours)}h ${Math.round((hours % 1) * 60)}m`

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="flex rounded-xl bg-white p-3 shadow-md hover:shadow-lg transition-all relative overflow-hidden border border-gray-100"
    >
      {/* Badge icon - Left */}
      <div className="mr-3 self-center">
        <BadgeIcon 
          badge={job.badge} 
          count={3} // This will determine the badge color (gold/silver/bronze)
          variant="gradient" 
          className="badge-hover-effect" 
          size={56}
        />
      </div>
      
      {/* Information content - Center */}
      <div className="flex-1 min-w-0">
        {/* Date label */}
        <div className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded-md mb-1">
          {dateDisplay}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 truncate">{job.title}</h3>
        
        {/* Company name */}
        <div className="flex items-center text-sm text-gray-600 mt-0.5">
          <Building className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="truncate">{job.company}</span>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="truncate">{job.street}</span>
        </div>
        
        {/* Time */}
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span>{timeRange} ({hourDisplay})</span>
        </div>
      </div>
      
      {/* Hourly wage - Right */}
      <div className="flex flex-col items-end justify-between ml-2">
        <div className="flex items-center text-lg font-bold text-primary">
          <DollarSign className="w-4 h-4" />
          <span>{job.wage}</span>
          <span className="text-xs font-medium ml-0.5">/{job.wageType === 'hour' ? 'h' : 'day'}</span>
        </div>
        
        {/* Estimated earnings */}
        <div className="text-xs text-gray-500 mt-auto">
          Est. ${Math.round(job.wage * hours)}
        </div>
      </div>
      
      {/* Color accent - Left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
    </Link>
  )
}