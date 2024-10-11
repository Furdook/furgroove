"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  description?: string;
  title: string;
  location?: boolean;
};

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="relative w-full">
      <div
        className="scrollbar flex w-full overflow-x-scroll scroll-smooth py-6"
        ref={carouselRef}
      >
        <div className={cn("flex max-w-lg flex-row justify-start gap-4 pl-4")}>
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.25 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="rounded"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ card }: { card: Card }) => {
  return (
    <motion.div
      tabIndex={0}
      className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded shadow-md transition-transform duration-200 hover:-translate-y-2 md:h-[30rem] md:w-80"
    >
      <div className="relative z-40 h-36 w-full bg-primary-800/50 p-8 backdrop-blur duration-200 group-hover:opacity-0">
        <motion.p className="text-md uppercase">{card.title}</motion.p>
        <motion.p className="text-md mt-2 max-w-xs font-semibold sm:text-lg md:text-2xl">
          {card.description}
        </motion.p>
      </div>
      <img
        src={card.src}
        alt={card.description || card.title}
        className={`absolute inset-0 z-10 h-full rounded object-cover shadow-md`}
        loading="lazy"
      />
    </motion.div>
  );
};
