// src/components/JobPin.tsx
import { OverlayView } from '@react-google-maps/api'
import { Job } from '@/types/job'
import { MouseEvent } from 'react'
import clsx from 'clsx'

interface Props {
  job: Job
  onClick: (id: string) => void
}

/**
 * オレンジピン＋白バブルでスクリーンショットの UI を再現。
 */
export default function JobPin({ job, onClick }: Props) {
  const start = new Date(job.start)
  const end = new Date(job.end)
  const timeRange = `${start.getHours()}:00–${end.getHours()}:00`
  const wage = `$${job.wage}/${job.wageType === 'hour' ? 'h' : 'day'}`
  const badgeChar = job.badge[0].toUpperCase()

  const pinSvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='48' viewBox='0 0 24 32' fill='none'>
      <path d='M12 0C5.37 0 0 4.99 0 11.16c0 8.34 11.54 20.12 11.54 20.12.25.26.66.26.9 0 0 0 11.56-11.78 11.56-20.12C24 4.99 18.63 0 12 0z' fill='#FF7F2A'/>
      <circle cx='12' cy='11' r='5' fill='#FFF'/>
    </svg>`)

  function handle(e: MouseEvent) {
    e.stopPropagation()
    onClick(job.id)
  }

  return (
    <OverlayView position={job.location} mapPaneName="overlayMouseTarget">
      <div className="flex flex-col items-center -translate-y-6">
        <button type="button" onClick={handle} className="relative">
          <img src={`data:image/svg+xml,${pinSvg}`} alt="" width={36} height={48} />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
            {badgeChar}
          </span>
        </button>

        <div
          onClick={handle}
          className={clsx(
            'mt-1 rounded-lg px-3 py-1 bg-white text-xs font-semibold text-black shadow cursor-pointer whitespace-nowrap text-center'
          )}
        >
          <div>{timeRange}</div>
          <div>{wage}</div>
        </div>
      </div>
    </OverlayView>
  )
}
