import { ColorHelper } from '@/lib/color-helper.ts'
import type { EventProps } from '@/components/archive/archived-events.tsx'

export const archivedEvents: EventProps[] = [
  {
    color: ColorHelper.Blue,
    title: 'FurGroove 2',
    content:
      'This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!',
  },
  {
    color: ColorHelper.Yellow,
    title: 'FurGroove: Sets Sail',
    content:
      'This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!',
  },
  {
    color: ColorHelper.Pink,
    title: 'FurGroove 1',
    content:
      'This first edition of FurGroove was hosted at the iconic Fort33 venue, lasting from 20:00 to 02:00. With over 150 attendees, this was a great beginning to the FurGroove series.',
  },
]
