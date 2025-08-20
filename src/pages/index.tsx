import { Card } from '@/components/ui/card.tsx'
import { Events } from '@/components/home/events.tsx'
import { ColorHelper } from '@/lib/color-helper.ts'
import Header from '@/components/layout/header.tsx'
import { eventPreviews } from '@/data/event-previews.ts'
import Impressions from '@/components/home/impressions.tsx'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 pb-2 max-md:pt-14 md:pb-4">
      <Header />
      <Card className="flex flex-col gap-2 p-4">
        <Card.Title color={ColorHelper.Pink}>FurGroove</Card.Title>
        <Card.Content>
          <p>
            Welcome to FurGroove. Events made by furries for furries. We host different events
            throughout the year ranging from regular dance parties to 18+ events. Whether you wanna
            dance along to our DJs, have a drink with your friends or strut around in your fursuit
            FurGroove has something for everyone to enjoy!
          </p>
        </Card.Content>
      </Card>

      <Events>
        {eventPreviews.map((event) => {
          return <Events.Content {...event} key={event.link} />
        })}
      </Events>

      <Impressions />
    </main>
  )
}
