import { NavLink } from "react-router";

export default function NotFound() {
	return (
		<main className="relative p-4 pb-0  flex flex-col gap-6 mt-12 max-md:pt-14">
			<h2 className="text-xl">
				<span className="font-bold text-accent-pink text-4xl">404</span> -
				Oopsie, seems the page you tried to access doesn't exist :(
			</h2>
			<NavLink
				to="/"
				className="text-lg underline decoration-accent-pink underline-offset-4 w-fit"
			>
				Take me back to the home page
			</NavLink>
			<img
				src="/images/not-found-reaction.webp"
				alt="Not found reaction sticker"
				height={256}
				width={256}
				className="ml-auto"
			/>
		</main>
	);
}
