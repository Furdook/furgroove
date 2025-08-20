import { ColorHelper } from '@/lib/color-helper.ts'
import type { EventProps } from '@/components/home/events.tsx'

export const eventPreviews: EventProps[] = [
  {
    title: 'FurGroove: Summer',
    date: 'July 5th 2025',
    content:
      'Get ready for the ultimate summer party! The fun kicks off at 20:00 and keeps the energy high for six unforgettable hours. Our resident and new DJs, known from FurGroove, Eurofurence and several cons across Europe, will be spinning the hottest summer tunes—all styles, all vibes, all night long! Need a breather? Step outside, feel the warm summer breeze, and cool down with a refreshing drink and tasty snacks.',
    link: '/event/summer-edition-2025',
    color: ColorHelper.Pink,
  },
  {
    title: 'FurGroove 3',
    date: 'January 2026',
    content:
      'Get ready for the ultimate summer party! The fun kicks off at 20:00 and keeps the energy high for six unforgettable hours. Our resident and new DJs, known from FurGroove, Eurofurence and several cons across Europe, will be spinning the hottest summer tunes—all styles, all vibes, all night long! Need a breather? Step outside, feel the warm summer breeze, and cool down with a refreshing drink and tasty snacks.',
    link: '',
    color: ColorHelper.Blue,
    teaser: true,
  },
  {
    title: 'FurGroove',
    date: 'TBD',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
    color: ColorHelper.Yellow,
    teaser: true,
  },
]
