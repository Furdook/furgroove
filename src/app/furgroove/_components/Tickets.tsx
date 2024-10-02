import { Button } from "@/components/ui/button";

export default function Tickets() {
  return (
    <section className="h-full">
      <h2 className="text-pink">Tickets</h2>
      <div className="mt-4 flex flex-col sm:flex-row">
        <section className="avoid-contrast flex flex-shrink-0 flex-col">
          <div className="my-auto">
            <h3 className="text-xl">Your ticket to FurGroove</h3>
            <p className="pr-4 text-primary-300/50">
              Tickets for this event come in three tiers
            </p>
          </div>
          <Button
            variant="pink"
            className="w-[calc(100%-1rem)] rounded-inner hover:cursor-not-allowed max-sm:hidden"
          >
            Purchase Ticket
          </Button>
        </section>
        <div className="ml-0 mt-4 flex w-full flex-row gap-4 sm:ml-auto sm:mt-0">
          <Ticket tier="Early Bird" price="20" src="icon_yellow.webp" />
          <Ticket tier="Standard" price="25" src="icon_blue.webp" />
          <Ticket tier="Late Bird" price="30" src="icon_pink.webp" />
        </div>
        <Button
          variant="pink"
          className="mt-4 w-full rounded-inner sm:mt-0 sm:hidden sm:w-48"
        >
          Purchase Ticket
        </Button>
      </div>
    </section>
  );
}

const Ticket = ({
  tier,
  price,
  src,
}: {
  tier: string;
  price: string;
  src: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-1 sm:max-w-32 sm:first-of-type:ml-auto">
      <div className="flex aspect-square w-full flex-col rounded-inner bg-primary-800/50 shadow-md">
        <img
          src={`/branding/${src}`}
          alt="FurGroove Logo"
          className="avoid-contrast mx-auto mt-4 w-2/3"
          loading="lazy"
        />
        <h4 className="mx-auto mb-2 mt-auto truncate text-xl uppercase max-[420px]:text-xs sm:max-md:text-sm">
          {tier}
        </h4>
      </div>
      <div className="flex h-10 w-full rounded-inner bg-primary-800/50 shadow-md">
        <p className="m-auto text-xl">{price}€</p>
      </div>
    </div>
  );
};
