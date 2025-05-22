import { Job } from '@/types/job'

export const MOCK_JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Barista',
    company: 'Swanston Cafe',
    description:
      'Join our team as a barista and help us provide excellent customer service. Prepare and serve coffee beverages in a fast-paced environment.',
    street: 'Swanston St',
    start: '2025-04-26T07:00:00+10:00',
    end: '2025-04-26T12:00:00+10:00',
    wage: 30,
    wageType: 'hour',
    badge: 'barista',
    location: { lat: -37.806, lng: 144.963 }
  },
  {
    id: 'j2',
    title: 'Cleaner',
    company: 'Spruce Services',
    description: 'Keep offices sparkling clean on a flexible schedule.',
    street: 'Collins St',
    start: '2025-04-26T10:00:00+10:00',
    end: '2025-04-26T14:00:00+10:00',
    wage: 100,
    wageType: 'day',
    badge: 'cleaner',
    location: { lat: -37.817, lng: 144.955 }
  },
  {
    id: 'j3',
    title: 'Dishwasher',
    company: "Queen's Grill",
    description: 'Assist kitchen team by maintaining dish area cleanliness.',
    street: 'Russell St',
    start: '2025-04-26T18:00:00+10:00',
    end: '2025-04-26T22:00:00+10:00',
    wage: 28,
    wageType: 'hour',
    badge: 'dishwasher',
    location: { lat: -37.8105, lng: 144.971 }
  }
]
