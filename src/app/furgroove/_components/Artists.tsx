import Reveal from "@/components/Reveal";
import { Card, Carousel } from "@/components/ui/cards";

export default function Artists() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <Reveal>
      <h2 className="text-blue pb-32">Artists Announcing Soon</h2>
      {/* <div className="h-full w-full">
        <Carousel items={cards} />
      </div> */}
    </Reveal>
  );
}

const data = [
  {
    title: "Beatbird",
    description: "House & EDM",
    src: "/furries/mayk.webp",
  },
  {
    title: "Menos",
    description: "Hardstyle",
    src: "/furries/menos.webp",
  },
];
