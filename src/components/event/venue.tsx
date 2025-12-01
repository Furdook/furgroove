import {
	Carousel,
	type CarouselSlideProps,
} from "@/components/ui/carousel.tsx";

interface VenueProps {
	carousel: CarouselSlideProps[];
}

export default function Venue({ carousel }: VenueProps) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-accent-blue p-4 text-2xl uppercase">Venue</h2>
			<Carousel>
				{carousel.map((slide) => {
					return <Carousel.Slide {...slide} key={slide.title} />;
				})}
			</Carousel>
		</section>
	);
}
