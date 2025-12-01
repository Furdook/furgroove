import { NavLink } from "react-router";
import Breadcrumbs from "@/components/event/breadcrumbs.tsx";
import TravelBento from "@/components/event/travel.tsx";
import Header from "@/components/layout/header.tsx";
import { Card } from "@/components/ui/card.tsx";
import { ColorHelper } from "@/lib/color-helper.ts";

export default function SocialEvents() {
	return (
		<>
			<Breadcrumbs pageTitle="FurGroove Social Meet" />
			<main className="relative mb-4 flex flex-col gap-2 md:gap-4 max-md:pt-14">
				<Header />

				<Card className="flex flex-col gap-2 p-4">
					<Card.Title color={ColorHelper.Pink}>
						FurGroove Social Meet
					</Card.Title>
					<Card.Content>
						<p>
							After the high-energy dance parties, we’re pressing pause for a
							chill afternoon to catch up with friends, old and new. Join us in
							the heart of Utrecht for a laid-back social gathering at Bar
							Josefien—no dancefloor required! Once every 3 months we open up
							the bar for all furries in the Netherlands.
						</p>
						<ul className=" relative py-6 gap-2 flex flex-col">
							<li>
								<b className="text-accent-pink">When?</b> Saturday, 4 October
								2025, 13:00–17:00h
							</li>
							<li>
								<b className="text-accent-blue">Where?</b> Bar Josefien, Utrecht
								— a charming and cozy community spot
							</li>
							<li>
								<b className="text-accent-yellow">What’s included?</b> A €5
								ticket includes one free drink—relax, sip, and chat
							</li>
						</ul>
					</Card.Content>
				</Card>

				<TravelBento excludeTitle>
					<TravelBento.Map src="/images/event/map.webp" />
					<TravelBento.Location title="Bar Josefien">
						<Card.Content className="my-auto flex flex-col gap-6">
							<p>
								Bar Josefien is the bigger bar we host social meets. With plenty
								of room for everyone we can also host games/quizzes there. With
								a few beers on tap and many other drinks available there is
								always something you will enjoy. Your first drink is on us, rest
								you can pay by card at the bar itself.
							</p>
							<p>
								Bar Josefien is a short 15-minute walk from Utrecht Central
								Station. Just walk towards Neude and from there enter the
								Voorstraat until the Bar is on the left side. Address:
								Voorstraat 96, 3512 AV Utrecht
							</p>
						</Card.Content>
					</TravelBento.Location>
				</TravelBento>

				<Card>
					<Card.Title>Rules</Card.Title>
					<Card.Content>
						<ul className="list-paw relative py-4 pl-10">
							<li>
								No fursuits please, space is limited and there is no changing
								area. This is a social event, no fursuitwalk.
							</li>
							<li>
								Do not bring your own drinks, we are at a bar and would love to
								do this more often.
							</li>
							<li>
								Full is full, if you want to visit last second it is possible if
								there is still space.
							</li>
							<li>
								All other rules also apply to this event, you can find them
								here:{" "}
								<NavLink to="/about/code-of-conduct">Code of Conduct</NavLink>
							</li>
						</ul>
					</Card.Content>
				</Card>

				<p className="text-xl text-accent-pink pl-2 md:pl-4 my-8">
					More information and new dates coming soon...
				</p>
			</main>
		</>
	);
}
