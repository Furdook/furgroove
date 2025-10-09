import { cn } from "@/lib/utils.ts";

export interface ItemProps {
	image: string;
	title: string;
	artist: string;
	className?: string;
}

export default function Item({ className, ...item }: ItemProps) {
	return (
		<div className={cn("relative h-fit w-full shadow-md", className)}>
			<img
				src={item.image}
				alt={item.title}
				className="rounded-xl md:rounded-2xl w-full"
			/>
			<span className="absolute bottom-2 left-2 bg-primary-800 px-2.5 py-1.5 rounded-lg md:rounded-xl shadow-md border-effect font-medium">
				{item.title} by {item.artist}
			</span>
		</div>
	);
}
