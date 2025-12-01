import type { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card.tsx";

interface TravelBentoProps extends PropsWithChildren {
	excludeTitle?: boolean;
}

export default function TravelBento({
	excludeTitle,
	...props
}: TravelBentoProps) {
	return (
		<section className="flex flex-col gap-4">
			{!excludeTitle && (
				<h2 className="text-accent-yellow p-4 text-2xl uppercase">Travel</h2>
			)}
			<div
				className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3"
				{...props}
			/>
		</section>
	);
}

interface TravelMapProps {
	src: string;
}

function TravelMap({ src }: TravelMapProps) {
	return (
		<Card className="aspect-square p-0 max-md:order-2 max-md:w-[calc(100vw-1rem)]">
			<img
				src={src}
				alt="Map of venue location"
				className="w-full object-cover"
			/>
		</Card>
	);
}
TravelBento.Map = TravelMap;

interface TravelLocationProps extends PropsWithChildren {
	title: string;
}

function TravelLocation({ title, children }: TravelLocationProps) {
	return (
		<Card className="col-span-2 flex flex-col max-md:order-1 max-md:gap-4">
			<Card.Title>{title}</Card.Title>
			{children}
		</Card>
	);
}
TravelBento.Location = TravelLocation;

interface TravelTransportProps extends PropsWithChildren {
	title: string;
}

function TravelTransport({ title, children }: TravelTransportProps) {
	return (
		<Card className="col-span-2 flex flex-col max-md:order-3 max-md:gap-4">
			<Card.Title>{title}</Card.Title>
			{children}
		</Card>
	);
}
TravelBento.Transport = TravelTransport;

interface TravelHotelProps extends PropsWithChildren {
	title: string;
}

function TravelHotel({ title, children }: TravelHotelProps) {
	return (
		<Card className="max-md:order-4 max-md:w-[calc(100vw-1rem)]">
			<Card.Title>{title}</Card.Title>
			{children}
		</Card>
	);
}
TravelBento.Hotel = TravelHotel;
