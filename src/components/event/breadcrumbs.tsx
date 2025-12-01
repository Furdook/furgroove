import { HomeIcon } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb.tsx";

interface Props {
	pageTitle: string;
}

export default function Breadcrumbs({ pageTitle }: Props) {
	return (
		<Breadcrumb className="absolute z-10">
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link to="/">
						<HomeIcon size={16} aria-hidden="true" />
						<span className="sr-only">Home</span>
					</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Ellipsis />
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>{pageTitle}</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb>
	);
}
