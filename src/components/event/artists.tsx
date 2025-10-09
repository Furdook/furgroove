// import { Carousel } from '@/components/ui/carousel.tsx'
// import { artistsPerforming } from '@/data/artists-performing.ts'

export default function Artists() {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-accent-blue p-4 text-2xl uppercase mb-12">
				Artists to be announced
			</h2>
			{/*<Carousel>
        {artistsPerforming.map((slide) => {
          return <Carousel.Slide {...slide} key={slide.title} />
        })}
      </Carousel>*/}
		</section>
	);
}
