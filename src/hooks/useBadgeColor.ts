import { useMemo } from 'react'

export default function useBadgeColor(count: number): string {
  // 0‑5 bronze, 6‑10 silver, >10 gold
  return useMemo(() => {
    if (count > 10) return 'gold'
    if (count > 5) return 'silver'
    return 'bronze'
  }, [count])
}
