import { Card } from '@/components/ui/card.tsx'
import React from 'react'
import { ColorHelper } from '@/lib/color-helper.ts'

export function Archives({ children }: React.PropsWithChildren) {
  return (
    <section className="flex flex-col gap-4 max-md:pt-6">
      <h2 className="text-accent-pink p-2 text-2xl uppercase md:p-4">Archive</h2>
      {children}
    </section>
  )
}

export interface EventProps {
  color: ColorHelper
  title: string
  content: string
}

function Event(event: EventProps) {
  return (
    <Card className="flex flex-col gap-2">
      <Card.Title color={event.color}>{event.title}</Card.Title>
      <Card.Content>
        <p>{event.content}</p>
      </Card.Content>
    </Card>
  )
}
Archives.Event = Event
