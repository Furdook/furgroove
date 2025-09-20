import { Breadcrumb } from '@/components/ui/breadcrumb.tsx'
import { HomeIcon } from 'lucide-react'
import Header from '@/components/layout/header.tsx'
import { Card } from '@/components/ui/card.tsx'
import { ColorHelper } from '@/lib/color-helper.ts'
import Venue from '@/components/event/venue.tsx'
import Travel from '@/components/event/travel.tsx'
import Tickets from '@/components/event/tickets.tsx'
import Artists from '@/components/event/artists.tsx'

export default function JanuaryEdition2026() {
  return (
    <>
      <Breadcrumb className="absolute z-10">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">
              <HomeIcon size={16} aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Ellipsis />
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>FurGroove 3 - January 2026</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>

      <main className="relative mb-4 flex flex-col gap-16 max-md:pt-14">
        <Header />
        <Card className="flex flex-col gap-2 p-4">
          <Card.Title color={ColorHelper.Pink}>FurGroove: Summer Edition</Card.Title>
          <Card.Content>
            <h3 className="text-primary-50/80 -mt-2 mb-4 text-xl">12th of July 2025</h3>
            <p>
              After the smashing success of FurGroove earlier this year, it’s time to soak up the
              sun and feel the summer magic at FurGroove Summer! Get ready to dance the night away
              on our vibrant and spacious dance floor as our amazing DJs spin the hottest summer
              beats at the stunning Four Seasons Leusden. Need to cool off? Take a dip in our
              outdoor dipping pool or sip on refreshing cocktails while enjoying the warm summer
              breeze. This is the ultimate summer party—you don’t want to miss it!
            </p>
          </Card.Content>
        </Card>

        <Venue />
        <Travel />
        <Tickets />
        <Artists />
      </main>
    </>
  )
}
