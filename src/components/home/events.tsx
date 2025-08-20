import React from 'react'
import { ColorHelper } from '@/lib/color-helper.ts'
import { NavLink } from 'react-router'

function Events({ children }: React.PropsWithChildren) {
  return (
    <section className="flex flex-col gap-4 md:gap-12 md:p-4">
      <h2 className="text-accent-blue text-2xl uppercase max-md:pl-4">Events</h2>
      {children}
    </section>
  )
}

export interface EventProps {
  title: string
  date: string
  content: string
  link: string
  color: ColorHelper
  teaser?: boolean
}

function Event(event: EventProps) {
  return (
    <div className="relative flex gap-10 md:pl-8">
      <div className="relative my-auto min-w-48 text-nowrap max-md:hidden">
        <div
          style={{ backgroundColor: event.color }}
          className="absolute top-1/2 -left-8 h-2 w-2 rounded-full"
          role="presentation"
        />
        <h3 className="text-lg uppercase">{event.title}</h3>
        <p>{event.date}</p>
      </div>

      <div className="max-md:bg-primary-700/25 border-t-primary-100/10 border-l-primary-100/10 ring-primary-700/20 relative flex flex-col gap-4 p-2 pl-8 max-md:rounded-lg max-md:border-t max-md:border-l max-md:p-4 max-md:shadow-md max-md:ring">
        <div
          style={{ backgroundColor: event.color }}
          className="absolute left-0 h-full w-1.5 rounded-full max-md:hidden"
          role="presentation"
        />
        <section className="md:hidden">
          <h3 className="text-xl uppercase">{event.title}</h3>
          <p className="text-lg opacity-80">{event.date}</p>
        </section>
        <p className={`${event.teaser && 'blur-sm'}`}>{event.content}</p>
        {!event.teaser && (
          <NavLink
            style={{ backgroundColor: event.color }}
            title={event.title}
            to={event.link}
            className="text-primary-950 w-max rounded-lg px-8 py-1.5 font-semibold transition-colors duration-150 hover:opacity-80"
          >
            Go to event
          </NavLink>
        )}
      </div>
    </div>
  )
}

Events.Content = Event

export { Events, Event }
