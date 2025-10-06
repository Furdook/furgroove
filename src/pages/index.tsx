import { Card } from '@/components/ui/card.tsx'
import { Events } from '@/components/home/events.tsx'
import { ColorHelper } from '@/lib/color-helper.ts'
import Header from '@/components/layout/header.tsx'
import { eventPreviews } from '@/data/event-previews.ts'
import Impressions from '@/components/home/impressions.tsx'
// import { Button } from '@/components/ui/button.tsx'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 pb-2 max-md:pt-14 md:pb-4">
      <Header />
      <div className="flex flex-col gap-2">
        <Card className="flex flex-col gap-2 p-4 rounded-b-sm">
          <Card.Title color={ColorHelper.Pink}>FurGroove</Card.Title>
          <Card.Content>
            <p>
              Welcome to FurGroove. Events made by furries for furries. We host different events
              throughout the year ranging from regular dance parties to social events. Whether you
              wanna dance along to our DJs, have a drink with your friends or strut around in your
              fursuit FurGroove has something for everyone to enjoy!
            </p>
          </Card.Content>
        </Card>

        <Card className="flex flex-col gap-2 p-4 rounded-t-sm bg-primary-700/50">
          <Card.Title color={ColorHelper.Blue}>FurGroove 3</Card.Title>
          <Card.Content className="flex flex-col gap-3">
            <p className="">
              FurGroove is back this winter! Club Four ‘Wonderland’ Seasons in Leusden is once again
              our venue. With a nice dancefloor, delicious drinks and enough chill areas you can
              entertain yourselves from 20:00 till 02:00u. Our DJ’s will play the latest tunes and
              best hits. Of course we also make sure that fursuiting is not a hassle with our own
              Fursuit Oasis.
            </p>
            {/*<Button className="w-fit px-10 rounded-md bg-accent-yellow hover:bg-accent-yellow/50 text-primary-950 font-bold">
              Event page
            </Button>*/}
          </Card.Content>
        </Card>
      </div>
      <Events>
        {eventPreviews.map((event) => {
          return <Events.Content {...event} key={event.link} />
        })}
      </Events>

      <Impressions />
    </main>
  )
}
