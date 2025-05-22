import { format, addDays } from 'date-fns'
import clsx from 'clsx'

interface Props {
  value: number
  onChange: (idx: number) => void
  days?: number
}

export default function DateTabs({ value, onChange, days = 4 }: Props) {
  const today = new Date()

  return (
    <div className="flex overflow-x-auto px-2 gap-2 py-2 bg-white">
      {Array.from({ length: days }, (_, i) => {
        const date = addDays(today, i)
        const label = i === 0 ? 'Today' : format(date, 'EEE d')
        return (
          <button
            key={i}
            type="button"
            className={clsx(
              'px-4 py-1 rounded-full border',
              value === i ? 'bg-primary text-white' : 'bg-white'
            )}
            onClick={() => onChange(i)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
