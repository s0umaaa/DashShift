// src/types/job.ts
export type WageType = 'hour' | 'day'
export interface Job {
  id: string
  title: string
  company: string
  description: string
  street: string
  start: string
  end: string
  wage: number
  wageType: WageType
  badge: BadgeKey
  location: {
    lat: number
    lng: number
  }
}
export type BadgeKey = 'barista' | 'cleaner' | 'nailist' | 'dishwasher' | 'waiter' | 'cook' | 'kitchen' | 'cashier'