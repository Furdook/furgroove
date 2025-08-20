import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'

export function Carousel({ children }: React.PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const checkScroll = () => {
    // @ts-expect-error ref.current is null on initial render
    const { scrollLeft, scrollWidth, clientWidth } = ref.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
  }

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -336, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 336, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={ref}
        onScroll={checkScroll}
        className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none]"
      >
        <div className="inline-flex justify-start gap-4 pt-2">{children}</div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="icon" onClick={scrollLeft} disabled={!canScrollLeft}>
          <ChevronLeftIcon />
        </Button>
        <Button variant="icon" onClick={scrollRight} disabled={!canScrollRight}>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  )
}

export interface CarouselSlideProps {
  title: string
  description: string
  src: string
}

function CarouselSlide(content: CarouselSlideProps) {
  return (
    <div className="group relative flex h-[30rem] w-xs flex-col gap-4 overflow-hidden rounded-2xl shadow-md transition-transform duration-150 hover:-translate-y-2">
      <div className="bg-primary-800/50 absolute inset-0 h-fit p-8 backdrop-blur-md transition-opacity duration-150 group-hover:opacity-0">
        <h3 className="uppercase">{content.title}</h3>
        <h4 className="mt-2 text-2xl font-semibold">{content.description}</h4>
      </div>
      <img
        src={content.src}
        alt={content.title}
        height={480}
        width={320}
        className="h-full object-cover"
      />
    </div>
  )
}
Carousel.Slide = CarouselSlide
