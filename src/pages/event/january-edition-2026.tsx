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
          <Card.Title color={ColorHelper.Pink}>FurGroove 3</Card.Title>
          <Card.Content>
            <h3 className="text-primary-50/80 -mt-2 mb-4 text-xl">24th of January 2026</h3>
            <p>
              Get ready for the third edition of FurGroove, once again lighting up Club Four Seasons
              in Leusden! Expect chill drinks, a warm crowd, and beats that’ll keep you dancing all
              night long. For our fursuiters, the Oasis will be open again — the perfect spot to
              refresh, suit up, and fluff out! And if you need to cool down, the outdoor area will
              be open too. This is the furry party of the season — good vibes, great music, and the
              best community around. Don’t miss it!
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
