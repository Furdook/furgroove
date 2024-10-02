import { Card, CardContent, CardTitle } from "@/components/ui/card";

const tickets = [
  {
    type: "Early Bird",
    colour: "bg-primary-600",
    price: "€15",
    size: "w-full",
  },
  {
    type: "Standard",
    colour: "bg-primary-700",
    price: "€20",
    size: "w-4/5",
  },
  {
    type: "Late Bird",
    colour: "bg-primary-800",
    price: "€25",
    size: "w-3/5",
  },
];

export default function Tickets() {
  return (
    <section className="flex flex-col">
      <section className="flex flex-row gap-6">
        {tickets.map((ticket, index) => {
          return (
            <Card
              key={index}
              className={`ticket ${ticket.type === "Early Bird" ? "bg-afterdark-600" : ticket.type === "Standard" ? "bg-afterdark-700" : "bg-afterdark-800"} rounded-none flex aspect-[1/2] w-4/12 flex-col text-center align-middle`}
            >
              <CardTitle className="pt-4 max-sm:text-sm sm:pt-12 sm:text-2xl lg:text-3xl">
                {ticket.type}
              </CardTitle>
              <CardContent className="pl-0 text-sm text-accent-300/50 max-md:p-0 sm:text-xl md:mx-auto">
                Ticket
              </CardContent>
              <CardContent className="mx-auto mt-[-2rem] p-0 pt-8 text-xl text-accent-400 sm:pt-[25%] sm:text-4xl md:mt-0">
                {ticket.price}
              </CardContent>
              <div className="ticket-seperator absolute bottom-1/3 w-full border-2 border-afterdark-900 max-md:hidden"></div>
              <img
                src="/branding/afterdark_icon.webp"
                alt=""
                className={`mx-auto mt-auto pb-4 md:pb-8 ${ticket.size} `}
              />
            </Card>
          );
        })}
      </section>
      <h3 className="mx-auto mt-48 text-xl text-accent-400">
        You can no longer purchase a ticket for this event
      </h3>
    </section>
  );
}
