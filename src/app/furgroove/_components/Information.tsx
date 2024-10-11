import Reveal from "@/components/Reveal";

export default function Information() {
  return (
    <Reveal>
      <section
        id="Skip"
        className="relative min-h-72 w-full flex-col overflow-hidden rounded bg-primary-800/50 shadow-md md:p-4"
      >
        <img
          src="/event/cutout.webp"
          className="absolute right-0 top-0 h-full"
          alt="FurGroove art"
        />
        <div className="z-10 h-full max-md:bg-primary-900/50 max-md:p-4 max-md:backdrop-blur">
          <h1 className="text-pink">FurGroove</h1>
          <h2 className="mb-6 text-xl text-primary-300/85">25th of January</h2>
          <p className="pb-10">
            After the great success of FurGroove and FurGroove: Sets Sail,
            <br />
            it is time for the next edition of FurGroove! Be prepared to
            <br />
            move your paws on our vibrant and spacious dance floor
            <br />
            with great music by our DJs at our stunning venue:
            <br />
            Four Seasons Leusden.
            <br />
            <br />
            Warm up your paws, and get your tickets now!
          </p>
        </div>
      </section>
    </Reveal>
  );
}
