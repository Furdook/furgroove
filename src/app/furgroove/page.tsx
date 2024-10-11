import Information from "./_components/Information";
import Location from "./_components/Location";
import Travel from "./_components/Travel";
import Tickets from "./_components/Tickets";
import Artists from "./_components/Artists";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Breadcrumb currentPage="FurGroove" />
      <Reveal>
        <div className="flex h-[calc(100svh-8rem)] relative">
          <img
            src="/backdrop.webp"
            role="presentation"
            className="object-center object-cover w-full"
          />
          <img
            src="/vectors/lined_with_head.svg"
            alt="FurGroove logo"
            className="absolute inset-0 w-4/5 left-1/2 max-sm:top-1/2 -translate-y-1/2 sm:bottom-1/2 -translate-x-1/2  sm:translate-y-2/3"
          />
        </div>
      </Reveal>
      <main className="flex flex-col gap-32 mt-32">
        <Information />
        <Location />
        <Travel />
        <Tickets />
        <Artists />
      </main>
    </div>
  );
}
