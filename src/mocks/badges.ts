// src/mocks/badges.ts
import { BadgeKey } from '@/types/job'
export interface BadgeMeta {
  label: string
  /** Lucide アイコン名（必ず存在する正式名称を使用） */
  icon: string
}
export const BADGE_META: Record<BadgeKey, BadgeMeta> = {
  barista: { label: 'Barista', icon: 'Coffee' },
  cleaner: { label: 'Cleaner', icon: 'Broom' },
  nailist: { label: 'Nailist', icon: 'Paintbrush' },
  dishwasher: { label: 'Dishwasher', icon: 'SprayCan' },
  waiter: { label: 'Waiter', icon: 'UtensilsCrossed' },
  cook: { label: 'Cook', icon: 'ChefHat' },
  // 以下の2つを追加
  kitchen: { label: 'Kitchen Hand', icon: 'Utensils' },
  cashier: { label: 'Cashier', icon: 'Receipt' }
}