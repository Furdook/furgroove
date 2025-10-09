import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils.ts";

export function Button({
	className,
	variant,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	return (
		<button className={cn(buttonVariants({ variant, className }))} {...props} />
	);
}

const buttonVariants = cva(
	"rounded-lg shadow-md inline-flex gap-2 transition-color duration-150",
	{
		variants: {
			variant: {
				default: "bg-primary-700 px-3 py-1.5 hover:bg-primary-700/50",
				icon: "rounded-full bg-primary-700 p-2 hover:bg-primary-700/50 disabled:opacity-50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
