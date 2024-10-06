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
    src: "/event/venue_4.webp",
    location: true,
  },
  {
    title: "Lounge area",
    description: "With Plentry of Seating",
    src: "/event/venue_1.webp",
    location: true,
  },
  {
    title: "Bar",
    src: "/event/venue_2.webp",
    location: true,
  },
  {
    title: "Dance Floor",
    description: "All the Space You'll Need",
    src: "/event/venue_3.webp",
    location: true,
  },
];
