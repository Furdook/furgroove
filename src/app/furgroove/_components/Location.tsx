import { Carousel, Card } from "@/components/ui/cards";

export default function Location() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);
  return (
    <section className="rounded">
      <h2 className="ml-4 text-blue">Location</h2>
      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </section>
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
