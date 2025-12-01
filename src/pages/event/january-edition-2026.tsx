import Artists from "@/components/event/artists.tsx";
import Breadcrumbs from "@/components/event/breadcrumbs.tsx";
import Tickets from "@/components/event/tickets.tsx";
import TravelBento from "@/components/event/travel.tsx";
import Venue from "@/components/event/venue.tsx";
import Header from "@/components/layout/header.tsx";
import { Card } from "@/components/ui/card.tsx";
import { venueCarouselFourSeasons } from "@/data/venue-carousel.ts";
import { ColorHelper } from "@/lib/color-helper.ts";

export default function JanuaryEdition2026() {
	return (
		<>
			<Breadcrumbs pageTitle="FurGroove 3 - January" />
			<main className="relative mb-4 flex flex-col gap-16 max-md:pt-14">
				<Header />
				<Card className="flex flex-col gap-2 p-4">
					<Card.Title color={ColorHelper.Pink}>FurGroove 3</Card.Title>
					<Card.Content>
						<h3 className="text-primary-50/80 -mt-2 mb-4 text-xl">
							24th of January 2026
						</h3>
						<p>
							Get ready for the third edition of FurGroove, once again lighting
							up Club Four Seasons in Leusden! Expect chill drinks, a warm
							crowd, and beats that’ll keep you dancing all night long. For our
							fursuiters, the Oasis will be open again — the perfect spot to
							refresh, suit up, and fluff out! And if you need to cool down, the
							outdoor area will be open too. This is the furry party of the
							season — good vibes, great music, and the best community around.
							Don’t miss it!
						</p>
					</Card.Content>
				</Card>

				<Venue carousel={venueCarouselFourSeasons} />

				<TravelBento>
					<TravelBento.Map src="/images/event/map.webp" />
					<TravelBento.Location title="Four Seasons Leusden">
						<Card.Content className="my-auto flex flex-col gap-6">
							<p>
								Join us once again at Club Four Seasons in Leusden, the perfect
								spot for dancing, drinks, and great vibes! With a spacious dance
								floor, a fully stocked indoor bar, and a cozy outdoor area to
								chill and chat, it’s everything you love about FurGroove —
								turned up a notch.
							</p>
							<p>
								Located at Kastanjelaan 1 in Leusden, only a short distance from
								the A28 highway. Find more information about parking, public
								transport and hotels down below.
							</p>
						</Card.Content>
					</TravelBento.Location>

					<TravelBento.Transport title="Parking & Public Transport">
						<Card.Content className="my-auto flex flex-col gap-6">
							<p>
								At the event location we have space for 60 vehicles, in the
								surrounding area you are sure to find more available parking
								nearby!
							</p>
							<p>
								From Amerfoort Centraal you can take bus no. 17 to
								Plesmanstraat, from here the event location is a short ~7min
								walk away. If you are staying at the VanderValk hotel it is a
								~10min walk to FurGroove.
							</p>
						</Card.Content>
					</TravelBento.Transport>

					<TravelBento.Hotel title="Nearby Hotels">
						<Card.Content className="flex flex-col gap-2">
							<h3 className="text-xl opacity-50">Bastion Hotel Amersfoort</h3>
							<img
								src="/images/event/bastion.webp"
								className="aspect-square rounded-md"
								alt="Van der Valk hotel room"
							/>
						</Card.Content>
					</TravelBento.Hotel>
				</TravelBento>

				<Tickets />
				<Artists />
			</main>
		</>
	);
}
