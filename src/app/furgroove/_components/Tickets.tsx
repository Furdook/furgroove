import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export default function Tickets() {
  return (
    <Reveal>
      <h2 className="text-pink">Tickets</h2>
      <div className="mt-4 flex flex-col sm:flex-row">
        <section className="flex flex-shrink-0 flex-col">
          <div className="my-auto">
            <h3 className="text-xl">Your ticket to FurGroove</h3>
            <p className="pr-4 text-primary-300/50">
              Tickets for this event come in three tiers
            </p>
          </div>
          <a
            href="https://eventix.shop/83fg7sdc"
            target="_blank"
            className="w-[calc(100%-1rem)] path hover:cursor-pointer bg-pink py-2 hover:bg-pink/80 text-primary-900 px-1.5 text-center hover:text-primary-900 rounded-inner max-sm:hidden"
          >
            Purchase Tickets
          </a>
        </section>
        <div className="ml-0 mt-4 flex w-full flex-row gap-4 sm:ml-auto sm:mt-0">
          <Ticket tier="Early Bird" price="20" src="icon_yellow.webp" />
          <Ticket tier="Standard" price="25" src="icon_blue.webp" />
          <Ticket tier="Late Bird" price="30" src="icon_pink.webp" />
        </div>
        <a
          href="https://eventix.shop/83fg7sdc"
          target="_blank"
          className="mt-4 w-full path bg-pink py-2 rounded-inner text-primary-900 text-center hover:bg-pink/80 hover:text-primary-900 px-1.5 sm:mt-0 sm:hidden sm:w-48"
        >
          Purchase Tickets
        </a>
      </div>
    </Reveal>
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
          width={84}
          height={84}
          className="mx-auto mt-4 w-2/3"
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
