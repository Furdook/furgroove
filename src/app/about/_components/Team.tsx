import { Carousel, Card } from "@/components/ui/cards";

export default function Team() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <>
      <h2 className="ml-4 mt-4 text-yellow">Meet the team</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </>
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
    description: "Web & Socials",
    src: "/furries/mai.webp",
  },
  {
    title: "Mayk",
    description: "Entertainment & Artist Relations",
    src: "/furries/mayk.webp",
  },
  {
    title: "Menos",
    description: "Security",
    src: "/furries/menos.webp",
  },
  {
    title: "Vaelken",
    description: "Internal Coordinator",
    src: "/furries/vaelken.webp",
  },
  {
    title: "Ryan",
    description: "Fursuit Lounge",
    src: "/furries/ryan.webp",
  },
  {
    title: "Jay",
    description: "Finance",
    src: "/furries/jay.webp",
  },
];
