"use client";
import Breadcrumb from "@/components/Breadcrumb";
import HeaderImage from "@/components/HeaderImage";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <HeaderImage />
        <Breadcrumb currentPage="Gallery" />
      </header>
      <h2 className="ml-4 mb-4 text-pink">Gallery</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index: number) => {
          return <GalleryItem key={item.title} index={index} item={item} />;
        })}
      </div>
    </main>
  );
}

type Item = {
  title: string;
  artist: string;
  src: string;
};

const items: Item[] = [
  {
    title: "Sticker Design",
    artist: "@niveddoesart",
    src: "/gallery/sticker.webp",
  },
  {
    title: "Sticker Design",
    artist: "@niveddoesart",
    src: "/gallery/sticker-2.webp",
  },
  {
    title: "Banner Art",
    artist: "@Thlaylii",
    src: "/gallery/banner.webp",
  },
  {
    title: "Lanyard Design",
    artist: "@imbluewisp",
    src: "/gallery/lanyard.webp",
  },
  {
    title: "Badge Design",
    artist: "@Aviverine",
    src: "/gallery/badge.webp",
  },
];

function GalleryItem({ item, index }: { item: Item; index: number }) {
  return (
    <Dialog>
      <DialogTrigger className="aspect-square w-full  sm:w-[calc(100%/2-0.5rem)] md:w-[calc(100%/3-2rem/3)] sm:hover:scale-105 transition-transform duration-200 hover:cursor-zoom-in">
        <motion.img
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              delay: 0.1 * index,
              ease: "easeOut",
              once: true,
            },
          }}
          src={item.src}
          alt={item.title}
          width={300}
          height={300}
          className="h-full w-full rounded object-cover"
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">{item.title}</DialogTitle>
          <DialogDescription>
            <img
              src={item.src}
              alt={item.title}
              width={600}
              height={600}
              className="rounded-inner"
              loading="lazy"
            />
          </DialogDescription>
          <DialogFooter className="pt-2">Created by {item.artist}</DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
