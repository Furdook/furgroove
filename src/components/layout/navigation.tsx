import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button.tsx";
import { navigationItems } from "@/data/navigation-items.ts";
import { cn } from "@/lib/utils.ts";
import Logo from "/vectors/logo.svg";

export default function Navigation() {
	const [navigationOpen, setNavigationOpen] = useState(false);

	const open = () => {
		const navItems = document.getElementById("navigationItems");
		if (navItems) {
			navItems.classList.toggle("hidden");
			setNavigationOpen(!navigationOpen);
		}
	};

	const close = () => {
		const navigation = document.getElementById("navigationItems");
		if (navigation && window.innerWidth < 768) {
			navigation.classList.add("hidden");
			setNavigationOpen(false);
		}
	};

	window.addEventListener("resize", close);
	window.addEventListener("scroll", close);

	return (
		<nav className="card border-effect fixed top-2 z-20 inline-flex min-h-14 w-[calc(100%-1rem)] items-center md:sticky md:w-full">
			<img
				src={Logo}
				height={48}
				width={192}
				alt="FurGroove logo"
				className="absolute max-md:top-1 md:relative"
			/>
			<ul
				id="navigationItems"
				className="ml-4 hidden w-full max-w-lg flex-col place-content-around max-md:mt-14 max-md:pb-4 md:mx-auto md:flex md:flex-row"
			>
				{navigationItems.map((item: NavigationItem) => {
					return (
						<NavigationItem
							onClick={close}
							key={item.href}
							href={item.href}
							content={item.content}
						/>
					);
				})}
			</ul>
			<Button
				variant="icon"
				className="text-primary-50 mt-2 mr-2 mb-auto ml-auto aspect-square h-10 bg-transparent shadow-none md:hidden"
				onClick={open}
			>
				{!navigationOpen ? <AlignJustify /> : <X />}
			</Button>
		</nav>
	);
}

export interface NavigationItem {
	content: string;
	href: string;
	icon?: string;
	onClick?: () => void;
}

function NavigationItem({ content, href, onClick }: NavigationItem) {
	return (
		<li
			key={href}
			className="hover:bg-primary-700/50 w-fit rounded-lg px-4 py-2 transition-colors"
		>
			<NavLink
				to={href}
				onClick={onClick}
				target={content === "Store" ? "_blank" : ""}
				className={cn("text-xl", !href.startsWith("/") && "cursor-alias")}
			>
				{content}
			</NavLink>
		</li>
	);
}
