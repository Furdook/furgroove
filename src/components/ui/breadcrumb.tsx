import { ChevronRightIcon, MoreHorizontal } from "lucide-react";
import type React from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

export function Breadcrumb({
	className,
	...props
}: React.ComponentProps<"nav">) {
	return (
		<nav
			aria-label="breadcrumb"
			{...props}
			className={cn("pt-20 pl-2 md:pt-4 md:pl-4", className)}
		/>
	);
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
	return (
		<ol
			className={cn(
				"text-primary-50/80 flex flex-wrap items-center gap-2 text-sm break-words",
				className,
			)}
			{...props}
		/>
	);
}
Breadcrumb.List = BreadcrumbList;

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
	return (
		<li
			className={cn(
				"hover:text-primary-50 inline-flex items-center gap-2",
				className,
			)}
			{...props}
		/>
	);
}
Breadcrumb.Item = BreadcrumbItem;

function BreadcrumbLink({
	to,
	className,
	...props
}: React.ComponentProps<"a"> & {
	to: string;
}) {
	return (
		<NavLink
			to={to}
			className={cn("transition-colors", className)}
			{...props}
		/>
	);
}
Breadcrumb.Link = BreadcrumbLink;

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			role="presentation"
			aria-disabled="true"
			aria-current="page"
			className={cn("hover:text-primary-50/80 font-normal", className)}
			{...props}
		/>
	);
}
Breadcrumb.Page = BreadcrumbPage;

function BreadcrumbSeparator({
	className,
	...props
}: React.ComponentProps<"li">) {
	return (
		<li role="presentation" aria-hidden="true" className={className} {...props}>
			<ChevronRightIcon size={16} />
		</li>
	);
}
Breadcrumb.Separator = BreadcrumbSeparator;

function BreadcrumbEllipsis({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			role="presentation"
			aria-hidden="true"
			className={cn("flex size-5 items-center justify-center", className)}
			{...props}
		>
			<MoreHorizontal size={16} />
			<span className="sr-only">More</span>
		</span>
	);
}
Breadcrumb.Ellipsis = BreadcrumbEllipsis;
