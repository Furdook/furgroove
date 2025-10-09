import { Carousel } from "@/components/ui/carousel.tsx";
import { teamMembers } from "@/data/team-members.ts";

export default function Team() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-accent-blue p-2 text-2xl uppercase md:p-4">Team</h2>
			<Carousel>
				{teamMembers.map((slide) => {
					return <Carousel.Slide {...slide} key={slide.title} />;
				})}
			</Carousel>
		</section>
	);
}
