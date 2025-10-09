import { Carousel } from "@/components/ui/carousel.tsx";
import { venueCarousel } from "@/data/venue-carousel.ts";

export default function Venue() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-accent-blue p-4 text-2xl uppercase">Venue</h2>
			<Carousel>
				{venueCarousel.map((slide) => {
					return <Carousel.Slide {...slide} key={slide.title} />;
				})}
			</Carousel>
		</section>
	);
}
