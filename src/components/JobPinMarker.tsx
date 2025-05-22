// src/components/JobPinMarker.tsx
import { Marker } from '@react-google-maps/api'
import { Job } from '@/types/job'

interface Props {
  job: Job
  onClick: (id: string) => void
}

export default function JobPinMarker({ job, onClick }: Props) {
  const start = new Date(job.start)
  const end = new Date(job.end)

  const timeRange = `${start.getHours()}:00–${end.getHours()}:00`
  const wageText = `$${job.wage}/${job.wageType === 'hour' ? 'h' : 'day'}`
  const badgeChar = job.badge[0].toUpperCase()

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 24 32">
      <path d="M12 0C5.37 0 0 4.99 0 11.16c0 8.34 11.54 20.12 11.54 20.12.25.26.66.26.9 0 0 0 11.56-11.78 11.56-20.12C24 4.99 18.63 0 12 0z" fill="#FF7F2A"/>
      <circle cx="12" cy="11" r="5" fill="#FFFFFF"/>
      <text x="12" y="15" text-anchor="middle" font-family="Arial" font-size="10" font-weight="700" fill="#FFFFFF">${badgeChar}</text>
    </svg>
  `.trim()

  const svg = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString)}`

  return (
    <Marker
      position={job.location}
      onClick={() => onClick(job.id)}
      icon={{
        url: svg,
        scaledSize: new google.maps.Size(36, 48),
        anchor: new google.maps.Point(18, 48),
        labelOrigin: new google.maps.Point(18, 62)
      }}
      label={{
        text: `${timeRange}\n${wageText}`,
        className:
          'bg-white rounded-lg px-2 py-1 text-xs font-semibold text-black shadow whitespace-pre leading-tight text-center'
      }}
    />
  )
}
