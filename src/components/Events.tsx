interface IEvent {
  name: string;
  date: string;
  path: string;
  colour: string;
  description: string;
}

const eventsList: IEvent[] = [
  {
    name: "FurGroove: AD Edition",
    date: "POSTPONED",
    path: "/afterdark",
    colour: "yellow",
    description:
      "Come join us to a place where you can be yourself! FurGroove AD edition welcomes not only furries but also puppies, gearheads and everyone with an open mind. Together with Fort33 we want to celebrate life and have an awesome tailwagging night with purrfect DJ's and atmosphere!",
  },
  {
    name: "FurGroove",
    date: "January 25th 2025",
    path: "/furgroove",
    colour: "pink",
    description:
      "The party starts at 20:00 and will keep you busy for 6 full hours. We got our own DJ's, known from Summerbo.at and several cons all over Europe. They will play all kinds of styles so always something for you! Feeling like chilling a bit after dancing? Go cool down outside with a drink and snack!",
  },
  {
    name: "FurGroove",
    date: "TO BE ANNOUCED",
    path: "/",
    colour: "blue",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Events() {
  return (
    <div className="relative ml-4">
      <h2 className="text-blue">Events</h2>
      <section className="mt-16 flex flex-col gap-16 py-8 before:absolute before:top-16 before:ml-1 before:h-[95%] before:w-px before:rounded before:bg-primary-800 before:content-['']">
        {eventsList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </section>
    </div>
  );
}

function EventCard({ event }: { event: IEvent }) {
  return (
    <section id="Skip" className="relative flex flex-col gap-8 md:flex-row">
      <div
        className={`${event.colour} my-auto min-w-60 before:absolute before:top-1/2 before:h-2 before:w-2 before:rounded-inner before:content-['']`}
      >
        <h3 className="ml-8 text-nowrap uppercase">{event.name}</h3>
        <h4 className="ml-8 text-nowrap font-light text-primary-300/75">
          {event.date}
        </h4>
      </div>
      <article
        className={`${event.colour} flex-grow-0 before:absolute before:h-1 before:w-full before:rounded-inner before:content-[''] max-md:before:ml-8 max-md:before:mt-[-1rem] md:before:h-full md:before:w-1`}
      >
        <p className={`ml-8 pb-4 ${event.path === "/" ? "blur-sm" : ""}`}>
          {event.description}
        </p>
        <a
          href={event.path}
          className={`path ml-8 rounded-inner bg-primary-800/50 px-8 py-2.5 shadow-md transition-colors duration-200 hover:bg-primary-800 ${event.path === "/" ? "hover:cursor-not-allowed" : ""}`}
        >
          {event.path === "/" ? "Coming Soon" : "Go to event"}
        </a>
      </article>
    </section>
  );
}
