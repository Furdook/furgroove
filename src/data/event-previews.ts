import { ColorHelper } from '@/lib/color-helper.ts'
import type { EventProps } from '@/components/home/events.tsx'

export const eventPreviews: EventProps[] = [
  {
    title: 'FurGroove 3',
    date: 'January 5th 2024',
    content:
      'FurGroove is back this winter! Club Four ‘Wonderland’ Seasons in Leusden is once again our venue.\n' +
      'With a nice dancefloor, delicious drinks and enough chill areas you can entertain yourselves from 20:00 till 02:00u. Our DJ’s will play the latest tunes and best hits. Of course we also make sure that fursuiting is not a hassle with our own Fursuit Oasis.',
    link: '/event/january-edition-2026',
    color: ColorHelper.Pink,
  },
  {
    title: 'FurGroove 4',
    date: 'TBD',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '',
    color: ColorHelper.Blue,
    teaser: true,
  },
]
