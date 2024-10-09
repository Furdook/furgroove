"use client";
import Breadcrumb from "@/components/Breadcrumb";
import HeaderImage from "@/components/HeaderImage";
import { motion } from "framer-motion";

type ArchiveItem = {
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
      "This event was hosted crusing through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!",
    artists: ["Beatbird", "YellowStreak", "Menos"],
    location: "Rotterdam",
    gallery: "/",
  },
  {
    title: "FurGroove",
    date: "29th of January 2024",
    description:
      "This first edition of FurGroove was hosted at the iconic Fort33 venue, lasting from 20:00 to 02:00. With over 150 attendees, this was a great beginning to the FurGroove series.",

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
      <div className="flex flex-col gap-4">
        <h2 className="ml-4 text-pink">Archive</h2>
        {archiveItems.map((item, index) => (
          <Card key={item.title} archivedEvent={item} index={index} />
        ))}
      </div>
    </main>
  );
}

import { Image } from "lucide-react";

function Card({
  archivedEvent,
  index,
}: {
  archivedEvent: ArchiveItem;
  index: number;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.1 * index,
          ease: "easeOut",
          once: true,
        },
      }}
      className="rounded bg-primary-800/50 p-4 shadow-md"
    >
      <h3 className="text-xl font-light uppercase text-blue">
        {archivedEvent.title}
      </h3>
      <h4 className="mb-4 uppercase ">{archivedEvent.date}</h4>
      <p>{archivedEvent.description}</p>
      <p className="mt-4 ">Artists who performed at this event:</p>
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
        <p className="mt-auto flex gap-2 text-lg text-primary-300/60">
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
    </motion.section>
  );
}
