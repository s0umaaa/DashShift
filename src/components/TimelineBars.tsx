// src/components/TimelineBars.tsx
import React, { useRef, useEffect, useState } from 'react'

/**
 * Horizontal Gantt‑style timeline that animates when it enters the viewport.
 * Each bar grows from 0 → target width once (no replay on subsequent scroll).
 */

const weeks = Array.from({ length: 12 }, (_, i) => `W${i + 1}`)

interface Bar {
  label: string
  start: number // inclusive (1‑based)
  end: number // inclusive
  /** Tailwind gradient classes WITHOUT the "bg-gradient-to-r" prefix */
  color: string
}

const bars: Bar[] = [
  { label: 'Scope', start: 1, end: 1, color: 'from-orange-500 to-pink-500' },
  { label: 'Research', start: 2, end: 4, color: 'from-rose-500 to-pink-500' },
  { label: 'Analysis', start: 4, end: 5, color: 'from-purple-500 to-violet-500' },
  { label: 'Ideation', start: 5, end: 8, color: 'from-yellow-500 to-amber-600' },
  { label: 'Prototyping', start: 8, end: 10, color: 'from-teal-500 to-cyan-500' },
  { label: 'Testing', start: 7, end: 11, color: 'from-green-500 to-lime-500' },
  { label: 'Presentation', start: 12, end: 12, color: 'from-blue-500 to-indigo-500' }
]

function TimelineBars(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="overflow-x-auto" aria-label="project timeline">
      {/* ───── Week header row ───── */}
      <div className="grid grid-cols-12 gap-1 mb-4 pl-24">
        {weeks.map((w) => (
          <div
            key={w}
            className="col-span-1 text-sm font-medium text-neutral-400 text-center"
          >
            {w}
          </div>
        ))}
      </div>
      
      {/* ───── Bars ───── */}
      <div className="space-y-3">
        {bars.map((bar, index) => {
          const left = ((bar.start - 1) / 12) * 100
          const width = ((bar.end - bar.start + 1) / 12) * 100
          
          return (
            <div key={bar.label} className="relative h-8">
              {/* Row label */}
              <span className="absolute left-0 top-0 h-full flex items-center font-semibold text-white w-20">
                {bar.label}
              </span>
              
              {/* Animated bar */}
              <div className="pl-24 h-full">
                <div
                  className={`h-full rounded-lg bg-gradient-to-r ${bar.color} transition-all duration-1000 ease-out`}
                  style={{
                    marginLeft: `${left}%`,
                    width: isVisible ? `${width}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimelineBars