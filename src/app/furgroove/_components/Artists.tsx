import { Card, Carousel } from "@/components/ui/cards";

export default function Artists() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <section className="rounded">
      <h2 className="text-blue">Artists</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    title: "Beatbird",
    description: "House & EDM",
    src: "/furries/beatbird.webp",
  },
  {
    title: "Menos",
    description: "Hardstyle",
    src: "/furries/menos.webp",
  },
  {
    title: "Beatbird",
    description: "House & EDM",
    src: "/furries/beatbird.webp",
  },
  {
    title: "Menos",
    description: "Hardstyle",
    src: "/furries/menos.webp",
  },
];
