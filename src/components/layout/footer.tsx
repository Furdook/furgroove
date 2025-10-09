import { NavLink } from "react-router";
import BlueskyIcon from "@/components/assets/bluesky-icon.tsx";
import TwitterIcon from "@/components/assets/twitter-icon.tsx";
import Logo from "/vectors/logo.svg";

export default function Footer() {
	return (
		<footer className="card border-effect mb-4 flex flex-col gap-2 p-4">
			<img
				src={Logo}
				height={48}
				width={192}
				alt="FurGroove logo"
				className="-mt-2 -ml-3"
			/>
			<ul>
				<li>
					<a href="https://t.me/furgroove" target="_blank" rel="noreferrer">
						Telegram Group
					</a>
				</li>
				<li>
					<a href="https://t.me/furgrooveinfo" target="_blank" rel="noreferrer">
						Telegram Channel
					</a>
				</li>
				<li>
					<NavLink to="/about/code-of-conduct">Code of Conduct</NavLink>
				</li>
				<div className="flex flex-col sm:flex-row sm:gap-4 mt-4">
					<p className="opacity-50 max-sm:order-3 max-sm:mt-4">
						kvk.no: 95840346
					</p>
					<a
						href="https://x.com/furgrooveNL"
						target="_blank"
						rel="noreferrer"
						className="sm:ml-auto hover:underline decoration-accent-pink flex gap-1 items-center"
					>
						<TwitterIcon /> FurGrooveNL
					</a>
					<a
						href="https://bsky.app/profile/furgroove.club"
						target="_blank"
						rel="noreferrer"
						className="hover:underline decoration-accent-pink flex gap-1 items-center"
					>
						<BlueskyIcon /> furgroove.club
					</a>
				</div>
			</ul>
		</footer>
	);
}
