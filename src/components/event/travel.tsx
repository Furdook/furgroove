import { Card } from '@/components/ui/card.tsx'

export default function Travel() {
  return (
    <section className="mt-12 flex flex-col gap-4">
      <h2 className="text-accent-yellow p-4 text-2xl uppercase">Travel</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="aspect-square p-0 max-md:order-2 max-md:w-[calc(100vw-1rem)]">
          <img
            src="/images/event/map.webp"
            alt="Map of venue location"
            className="w-full object-cover"
          />
        </Card>
        <Card className="col-span-2 flex flex-col max-md:order-1 max-md:gap-4">
          <Card.Title>Four Seasons Leusden</Card.Title>
          <Card.Content className="my-auto flex flex-col gap-6">
            <p>
              Join us in our new location at the Four Seasons Leusden. With a spectacular indoor
              bar, plenty of room to dance and a cozy outdoor section we are sure to level up the
              Furgroove experience.
            </p>
            <p>
              ALocated at Kastanjelaan 1 in Leusden only a short distance from the A28 highway. Find
              more information about parking, public transport and hotels down below.
            </p>
          </Card.Content>
        </Card>
        <Card className="col-span-2 flex flex-col max-md:order-3 max-md:gap-4">
          <Card.Title>Parking & Public Transport</Card.Title>
          <Card.Content className="my-auto flex flex-col gap-6">
            <p>
              At the event location we have space for 60 vehicles, in the surrounding area you are
              sure to find more available parking nearby!
            </p>
            <p>
              From Amerfoort Centraal you can take bus no. 17 to Plesmanstraat, from here the event
              location is a short ~7min walk away. If you are staying at the VanderValk hotel it is
              a ~10min walk to FurGroove.
            </p>
          </Card.Content>
        </Card>
        <Card className="max-md:order-4 max-md:w-[calc(100vw-1rem)]">
          <Card.Title>Nearby Hotels</Card.Title>
          <Card.Content className="flex flex-col gap-2">
            <h3 className="text-xl opacity-50">Van Der Valk Hotel</h3>
            <img
              src="/images/event/vanderwalk.webp"
              className="aspect-square rounded-md"
              alt="Van der Valk hotel room"
            />
          </Card.Content>
        </Card>
      </div>
    </section>
  )
}
