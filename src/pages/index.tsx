import Countdown from "@/components/home/countdown.tsx";
import { Events } from "@/components/home/events.tsx";
import Impressions from "@/components/home/impressions.tsx";
import Header from "@/components/layout/header.tsx";
import { Card } from "@/components/ui/card.tsx";
import { eventPreviews } from "@/data/event-previews.ts";
import { ColorHelper } from "@/lib/color-helper.ts";
// import { Button } from '@/components/ui/button.tsx'

export default function Home() {
	return (
		<main className="flex flex-col gap-16 pb-2 max-md:pt-14 md:pb-4">
			<Header />
			<div className="flex flex-col gap-2">
				<Card className="flex flex-col gap-2 p-4 rounded-b-md">
					<Card.Title color={ColorHelper.Pink}>FurGroove</Card.Title>
					<Card.Content>
						<p>
							Welcome to FurGroove. Events made by furries for furries. We host
							different events throughout the year ranging from regular dance
							parties to social events. Whether you wanna dance along to our
							DJs, have a drink with your friends or strut around in your
							fursuit FurGroove has something for everyone to enjoy!
						</p>
					</Card.Content>
				</Card>
				<Card className="flex flex-col bg-primary-700/50 gap-2 p-4 rounded-t-md">
					<Card.Title color={ColorHelper.Blue}>FurGroove 3</Card.Title>
					<Card.Content className="flex flex-col gap-2">
						<p>
							Tickets for FurGroove 3 releasing the 25th of October at 20:00 CET
						</p>
						<Countdown />
					</Card.Content>
				</Card>
			</div>
			<Events>
				{eventPreviews.map((event) => {
					return <Events.Content {...event} key={event.link} />;
				})}
			</Events>
			<Impressions />
		</main>
	);
}
