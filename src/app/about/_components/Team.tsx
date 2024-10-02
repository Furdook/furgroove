import { Carousel, Card } from "@/components/ui/cards";

export default function Team() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <section className="my-24 rounded">
      <h2 className="ml-4 text-yellow">Meet the team</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </section>
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
    src: "/furries/hunter.webp",
  },
  {
    title: "Menos",
    description: "Social Media & Security",
    src: "/furries/menos.webp",
  },
  {
    title: "Ryan",
    description: "Fursuit Lounge",
    src: "/furries/beatbird.webp",
  },
  {
    title: "Jay",
    description: "Finance",
    src: "/furries/jay.webp",
  },
];
