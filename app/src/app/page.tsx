import Image from "next/image";

import { Button } from "@/components/ui/button";

import Artists from "./artists/page";
import Information from "./information/page";
import Location from "./location/page";
import Tickets from "./tickets/page";

export default function Home() {
  return (
    <main className="flex flex-col max-w-6xl mx-auto">
      <Information />
      <Location />
      <Tickets />
      <Artists />
      <Button className="mt-24 mx-auto w-64 text-xl font-medium">
        Telegram Group Chat
      </Button>
      <Button className="my-4 w-64 mx-auto font-medium text-xl">
        Telegram Channel
      </Button>
      <Button className="mb-24 w-64 mx-auto font-medium text-xl">
        Website Archive
      </Button>
      <Image
        src="/logo.webp"
        alt=""
        height={100}
        width={500}
        className="mx-auto mb-12"
      />
    </main>
  );
}
