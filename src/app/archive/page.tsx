import Breadcrumb from "@/components/Breadcrumb";
import Card from "./_components/card";
import HeaderImage from "@/components/HeaderImage";

export type ArchiveItem = {
  title: string;
  date: string;
  description: string;
  artists: string[];
  location: string;
  gallery: string;
};

const archiveItems: ArchiveItem[] = [
  {
    title: "FurGroove: Set Sail",
    date: "10th of August 2024",
    description:
      "This event was hosted crusing through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. ",
    artists: ["Beatbird", "YellowStreak", "Menos"],
    location: "Rotterdam",
    gallery: "/",
  },
  {
    title: "FurGroove",
    date: "29th of January 2024",
    description:
      "This first edition of FurGroove was hosted at the iconic Fort33 venue, lasting from 20:00 to 02:00",

    artists: ["Beatbird", "Djem", "Stripe", "Menos"],
    location: "Leusden",
    gallery: "/",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <HeaderImage />
        <Breadcrumb currentPage="Archive" />
      </header>
      <h2 className="ml-4 text-pink">Archive</h2>
      <section className="rounded bg-primary-800/50 p-4 shadow-md">
        <h3 className="text-xl font-light uppercase text-blue">
          Prior events hosted by FurGroove
        </h3>
        <p>
          Here you'll find a summary of all of our passed events, from our very
          first in Leusden 2024 to our most recently held event.
        </p>
      </section>
      {archiveItems.map((item) => (
        <Card key={item.title} archivedEvent={item} />
      ))}
    </main>
  );
}
