import Reveal from "@/components/Reveal";
import { Card, Carousel } from "@/components/ui/cards";

export default function Artists() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <Reveal>
      <h2 className="text-blue">Artists</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </Reveal>
  );
}

const data = [
  {
    title: "Kim",
    description: "Criss-Cross",
    src: "/furries/kim.webp",
  },
  {
    title: "Stripe",
    description: "Mashup Madness",
    src: "/furries/stripe.webp",
  },
  {
    title: "YellowStreak",
    description: "Dance & House",
    src: "/furries/yellowstreak.webp",
  },
  {
    title: "BeatBird x Menos",
    description: "PowerHour",
    src: "/furries/bottoms.png",
  },
  {
    title: "Spirou",
    description: "Filthy Bass",
    src: "/furries/spirou.webp",
  },
];
