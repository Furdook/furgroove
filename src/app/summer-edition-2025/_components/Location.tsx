import Reveal from "@/components/Reveal";
import { Carousel, Card } from "@/components/ui/cards";

export default function Location() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <Reveal>
      <h2 className="ml-4 text-blue">Location</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </Reveal>
  );
}

const data = [
  {
    title: "Bar",
    description: "Get a drink from our scenic bar",
    src: "/event/venue_4.webp",
    location: true,
  },
  {
    title: "Lounge area",
    description: "Recharge and get ready for more fun",
    src: "/event/venue_1.webp",
    location: true,
  },
  {
    title: "Meet new furries",
    description: "Make the night unforgettable",
    src: "/event/venue_2.webp",
    location: true,
  },
  {
    title: "Dance Floor",
    description: "Own the night on our vibrant dance floor",
    src: "/event/venue_3.webp",
    location: true,
  },
];
