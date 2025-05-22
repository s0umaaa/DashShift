// src/components/BadgeIcon.tsx
import React from 'react'
import * as Icons from 'lucide-react'
import clsx from 'clsx'
import { BADGE_META } from '@/mocks/badges'
import { BadgeKey } from '@/types/job'

type LucideComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>
type RankColor = 'gold' | 'silver' | 'bronze' | undefined

interface Props {
  badge: BadgeKey
  count?: number
  className?: string
  size?: number
  variant?: 'default' | 'filled' | 'gradient'
}

/* ─────────────────────────── Rank Helper ─────────────────────────── */
function getBadgeRank(count: number): RankColor {
  if (count >= 5) return 'gold'
  if (count >= 3) return 'silver'
  if (count >= 1) return 'bronze'
  return undefined
}

/* ─────────────────────────── Component ─────────────────────────── */
export default function BadgeIcon({
  badge,
  count = 0,
  className,
  size = 48,
  variant = 'default'
}: Props) {
  const rank = getBadgeRank(count)
  const { icon } = BADGE_META[badge]
  const iconsMap = Icons as unknown as Record<string, LucideComponent>
  const Icon = iconsMap[icon] ?? iconsMap.HelpCircle

  /* ----- 色定義（立体メダル用にリング色・影色も含む） ----- */
  const rankColors = {
    gold: {
      bg: 'bg-gradient-to-br from-amber-50 to-amber-200',
      bgSolid: 'bg-amber-100',
      border: 'border-amber-300',
      ring: 'ring-amber-200',
      icon: 'text-amber-600',
      shadow: 'shadow-amber-300/40'
    },
    silver: {
      bg: 'bg-gradient-to-br from-slate-50 to-slate-200',
      bgSolid: 'bg-slate-100',
      border: 'border-slate-300',
      ring: 'ring-slate-200',
      icon: 'text-slate-600',
      shadow: 'shadow-slate-300/40'
    },
    bronze: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-200',
      bgSolid: 'bg-orange-100',
      border: 'border-orange-300',
      ring: 'ring-orange-200',
      icon: 'text-orange-700',
      shadow: 'shadow-orange-300/40'
    },
    default: {
      bg: 'bg-gradient-to-br from-gray-50 to-gray-200',
      bgSolid: 'bg-gray-100',
      border: 'border-gray-300',
      ring: 'ring-gray-200',
      icon: 'text-gray-600',
      shadow: 'shadow-gray-300/40'
    }
  } as const

  const color = rank ? rankColors[rank] : rankColors.default

  /* ----- variant によってベース背景を切り替え ----- */
  let variantClasses = ''
  switch (variant) {
    case 'filled':
      variantClasses = color.bgSolid
      break
    case 'gradient':
      variantClasses = color.bg
      break
    default:
      variantClasses = color.bg // default もグラデでメダル感
      break
  }

  return (
    <div
      className={clsx(
        'relative flex items-center justify-center rounded-full',
        'border-2',
        color.border,
        'ring-2',
        color.ring,
        'ring-offset-2 ring-offset-white',
        'shadow-lg',
        color.shadow,
        variantClasses,
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* ハイライト (光沢感) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 40%, transparent 65%)'
        }}
      />
      {/* アイコン本体 */}
      <Icon
        className={clsx(color.icon, 'relative')}
        style={{ width: size * 0.55, height: size * 0.55 }}
      />
    </div>
  )
}
