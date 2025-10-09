import { NavLink } from "react-router";
import { cn } from "@/lib/utils.ts";

export default function Tickets() {
	const currentDate = new Date();
	const regDate = new Date(2025, 9, 25, 20);
	const ticketsDisabled = currentDate <= regDate;

	const renderTicket = (ticket: {
		title: string;
		src: string;
		price: number;
	}) => {
		return (
			<div className="flex w-full flex-col gap-1 sm:max-w-32 sm:first-of-type:ml-auto">
				<div className="bg-primary-700/25 relative aspect-square rounded-md shadow-md">
					<img src={ticket.src} alt="" className="mx-auto mt-2 w-2/3" />
					<span className="absolute bottom-2 w-full text-center text-lg uppercase">
						{ticket.title}
					</span>
				</div>
				<div className="bg-primary-700/25 flex h-10 items-center justify-center rounded-md shadow-md">
					<span className="text-xl">{ticket.price}€</span>
				</div>
			</div>
		);
	};
	return (
		<section className="px-2 md:px-4">
			<h2 className="text-accent-pink pb-4 max-md:pl-2 text-2xl uppercase">
				Tickets
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-4">
					<div className="my-auto flex flex-col gap-1 max-md:pl-2">
						<h3 className="text-xl">Your ticket to FurGroove</h3>
						<h4 className="text-lg opacity-75">
							Tickets for this event come in three tiers
						</h4>
					</div>
					<a
						target="_blank"
						href="https://eventix.shop/83fg7sdc"
						rel="noreferrer"
						className={cn(
							"bg-accent-pink text-primary-900 hidden max-w-96 rounded-md px-2.5 py-2 text-center sm:block",
							ticketsDisabled && "sm:hidden",
						)}
					>
						Purchase ticket
					</a>
				</div>

				<div className="flex gap-2 sm:gap-4">
					{tickets.map((ticket) => renderTicket(ticket))}
				</div>
				<a
					target="_blank"
					href="https://eventix.shop/83fg7sdc"
					rel="noreferrer"
					className={cn(
						"bg-accent-pink text-primary-900 block rounded-md px-2.5 py-2 text-center sm:hidden",
						ticketsDisabled && "hidden",
					)}
				>
					Purchase ticket
				</a>
			</div>
			<p className="pt-4 text-primary-200/50 max-md:pl-3">
				Be sure to check out our{" "}
				<NavLink
					to="/about/code-of-conduct"
					className="underline text-primary-100/80 decoration-accent-pink underline-offset-6 decoration-2"
				>
					code of conduct
				</NavLink>{" "}
				before attending.
			</p>
		</section>
	);
}

const tickets = [
	{
		title: "Early bird",
		price: 20,
		src: "/branding/icon_pink.webp",
	},
	{
		title: "Regular",
		price: 25,
		src: "/branding/icon_blue.webp",
	},
	{
		title: "Late bird",
		price: 30,
		src: "/branding/icon_yellow.webp",
	},
];
