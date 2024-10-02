import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Information() {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src="/event/djboy.webp"
        alt="Beatbird performing at FurGroove 1!"
        className="aspect-square rounded shadow-md md:max-w-96"
      />
      <article className="flex flex-col max-md:pt-6 md:pl-6">
        <p className="my-auto leading-8">
          Come join us to a place where you can be yourself! FurGroove AD
          edition welcomes not only furries but also puppies, gearheads and
          everyone with an open mind. Together with [REDACTED] we want to
          celebrate life and have an awesome tailwagging night with purrfect
          DJ's and atmosphere!
        </p>
        <Card className="mt-6 flex flex-row rounded bg-afterdark-800 py-2 md:mt-auto">
          <CardContent className="flex flex-col pl-0">
            <CardTitle className="text-accent-400">November</CardTitle>
            <CardTitle className="text-4xl">
              2<strong className="text-2xl opacity-50">TH</strong>
            </CardTitle>
            <hr className="my-2 w-full border-accent-400" />
            <CardDescription className="text-2xl">20:00</CardDescription>
          </CardContent>
          <MoveRight
            className="mx-auto my-auto flex-grow text-accent-400"
            size={64}
            strokeWidth={1}
          ></MoveRight>
          <CardContent className="ml-auto flex flex-col pr-0 text-right">
            <CardTitle className="text-accent-400">November</CardTitle>
            <CardTitle className="text-4xl">
              3<strong className="text-2xl opacity-50">TH</strong>
            </CardTitle>
            <hr className="my-2 w-full border-accent-400" />
            <CardDescription className="text-2xl">02:00</CardDescription>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
