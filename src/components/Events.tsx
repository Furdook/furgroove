import Reveal from "./Reveal";
interface IEvent {
  name: string;
  date: string;
  path: string;
  colour: string;
  description: string;
  location: string;
}

const eventsList: IEvent[] = [
  {
    name: "FurGroove: AD Edition",
    location: "Leusden",
    date: "POSTPONED",
    path: "/afterdark",
    colour: "yellow",
    description:
      "Come join us to a place where you can be yourself! FurGroove AD edition welcomes not only furries but also puppies, gearheads and everyone with an open mind. Together with Fort33 we want to celebrate life and have an awesome tailwagging night with purrfect DJ's and atmosphere!",
  },
  {
    name: "FurGroove: Summer",
    location: "Leusden",
    date: "July 12th 2025",
    path: "/summer-edition-2025",
    colour: "pink",
    description:
      "The party starts at 20:00 and will keep you busy for 6 full hours. We got our own DJ's, known from Summerbo.at and several cons all over Europe. They will play all kinds of styles so always something for you! Feeling like chilling a bit after dancing? Go cool down outside with a drink and snack!",
  },
  {
    name: "FurGroove",
    location: "TBA",
    date: "TO BE ANNOUCED",
    path: "/",
    colour: "blue",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Events() {
  return (
    <section id="Skip">
      <h2 className="text-blue">Events</h2>
      <div className="grid gap-4 py-8">
        {eventsList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: IEvent }) {
  return (
    <Reveal>
      <section className="relative flex flex-col md:gap-8 md:flex-row">
        <div className="bg-primary-800 h-[calc(100%+1rem)] w-px left-1 absolute hidden sm:block"></div>

        <div
          className={`${event.colour} hidden sm:block my-auto min-w-60 before:absolute before:top-1/2 before:h-2 before:w-2 before:rounded-inner md:before:content-['']`}
        >
          <h3 className="ml-8 max-md:hidden text-nowrap uppercase">
            {event.name}
          </h3>
          <h4
            className={`ml-8 max-md:hidden text-nowrap font-light  ${event.date === "POSTPONED" ? "text-yellow" : "text-primary-300/75"}`}
          >
            {event.date}
          </h4>
        </div>

        <div className="rounded max-md:bg-primary-800/50 max-md:shadow-md p-4 sm:max-md:ml-6 flex flex-col">
          <div
            className={`absolute w-full max-md:hidden h-1 md:h-5/6 md:w-1 rounded md:left-64 ${event.colour === "pink" ? "bg-pink" : event.colour === "yellow" ? "bg-yellow" : "bg-blue"}`}
          ></div>

          <h3 className="md:hidden text-nowrap uppercase">{event.name}</h3>
          <h4
            className={`md:hidden pb-4 text-nowrap font-light  ${event.date === "POSTPONED" ? "text-yellow" : "text-primary-300/75"}`}
          >
            {event.date}
          </h4>
          <p className={`pb-4 ${event.path === "/" ? "blur-sm" : ""}`}>
            {event.description}
          </p>

          <a
            href={event.path}
            className={`path rounded-inner bg-primary-800/50 max-md:hover:opacity-60 md:hover:text-primary-900 text-primary-900 md:text-primary-300 w-fit px-8 py-2 shadow-md transition-colors duration-200  ${event.path === "/" ? "hover:cursor-not-allowed" : ""} ${event.colour === "yellow" ? "md:hover:bg-yellow max-md:bg-yellow" : event.colour === "pink" ? "md:hover:bg-pink max-md:bg-pink" : "md:hover:bg-blue max-md:bg-blue"}`}
          >
            {event.path === "/" ? "Coming Soon" : "Go to event"}
          </a>
        </div>
      </section>
    </Reveal>
  );
}
