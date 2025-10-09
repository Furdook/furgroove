import type { EventProps } from "@/components/archive/archived-events.tsx";
import { ColorHelper } from "@/lib/color-helper.ts";

export const archivedEvents: EventProps[] = [
	{
		color: ColorHelper.Blue,
		title: "FurGroove: Summer Edition",
		content:
			"What an incredible evening it was! On July 12th, over 250 furries and friends gathered at Four Seasons Leusden for a warm summer celebration full of music, lights, and good vibes.\n" +
			"\n" +
			"From the sunny afternoon beats to the late-night energy on the dance floor, every set brought something unique — tropical grooves from Beatbird, deep house rhythms by YellowStreak, and a high-energy finale by Menos. The atmosphere was electric, and the dance floor never stopped moving!",
	},
	{
		color: ColorHelper.Yellow,
		title: "FurGroove 2",
		content:
			"This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!",
	},
	{
		color: ColorHelper.Pink,
		title: "FurGroove: Sets Sail",
		content:
			"This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!",
	},
	{
		color: ColorHelper.Blue,
		title: "FurGroove 1",
		content:
			"This first edition of FurGroove was hosted at the iconic Fort33 venue, lasting from 20:00 to 02:00. With over 150 attendees, this was a great beginning to the FurGroove series.",
	},
];
