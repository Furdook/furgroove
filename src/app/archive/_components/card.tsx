import { ArchiveItem } from "@/app/archive/page";
import { Image } from "lucide-react";

export default function Card({
  archivedEvent,
}: {
  archivedEvent: ArchiveItem;
}) {
  return (
    <section className="rounded bg-primary-800/50 p-4 shadow-md">
      <h3 className="text-xl font-light uppercase text-yellow">
        {archivedEvent.title} - {archivedEvent.date}
      </h3>
      <p>{archivedEvent.description}</p>
      <h4 className="mt-4 text-lg text-pink">
        Artists who performed at this event:
      </h4>
      <div className="mb-4 flex gap-1">
        {archivedEvent.artists.map((artist) => {
          return (
            <p key={artist}>
              {artist}{" "}
              {archivedEvent.artists.indexOf(artist) ===
              archivedEvent.artists.length - 1
                ? ""
                : "-"}
            </p>
          );
        })}
      </div>
      <div className="flex gap-4">
        <p className="mt-auto flex gap-2 text-lg text-primary-300/50">
          {archivedEvent.location}
        </p>
        <a
          href={archivedEvent.gallery}
          className="path ml-auto flex gap-2 rounded-inner bg-primary-800/50 px-4 py-1.5 transition-colors duration-200 hover:bg-primary-800 hover:shadow-xl"
        >
          <Image size={20} className="mt-0.5" />
          Picture Gallery
        </a>
      </div>
    </section>
  );
}
