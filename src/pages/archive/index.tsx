import { HomeIcon } from "lucide-react";
import { Archives } from "@/components/archive/archived-events.tsx";
import { Breadcrumb } from "@/components/ui/breadcrumb.tsx";
import { archivedEvents } from "@/data/archive-items.ts";

export default function Archive() {
	return (
		<>
			<Breadcrumb>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link to="/">
							<HomeIcon size={16} aria-hidden="true" />
							<span className="sr-only">Home</span>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>Archive</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb>

			<main className="flex flex-col gap-12 pb-4">
				<Archives>
					{archivedEvents.map((event) => {
						return <Archives.Event {...event} key={event.title} />;
					})}
				</Archives>
			</main>
		</>
	);
}
