import Reveal from "@/components/Reveal";
import { Carousel, Card } from "@/components/ui/cards";

export default function Team() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <Reveal>
      <h2 className="ml-4 text-yellow">Meet the team</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </Reveal>
  );
}

const data = [
  {
    title: "Hunter",
    description: "Founder & Registration",
    src: "/furries/hunter.webp",
  },
  {
    title: "Mai Tai",
    description: "Web Developer",
    src: "/furries/mai.webp",
  },
  {
    title: "Mayk",
    description: "Entertainment & Artist Relations",
    src: "/furries/beatbird.webp",
  },
  {
    title: "Vaelken",
    description: "Internal Coordinator",
    src: "/furries/ryan.png",
  },
  {
    title: "Menos",
    description: "Social Media & Security",
    src: "/furries/menos.webp",
  },
  {
    title: "Ryan",
    description: "Fursuit Lounge",
    src: "/furries/ryan.png",
  },
  {
    title: "Jay",
    description: "Finance",
    src: "/furries/jay.webp",
  },
];
