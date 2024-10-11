import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Information from "@/components/Information";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Reveal>
        <div className="flex h-[calc(100svh-8rem)] relative">
          <img
            src="/backdrop.webp"
            role="presentation"
            alt=""
            className="object-center object-cover w-full"
          />
          <img
            src="/vectors/lined_with_head.svg"
            alt="FurGroove logo"
            className="absolute inset-0 w-4/5 left-1/2 sm:bottom-1/2 max-sm:top-1/2 -translate-y-1/2 -translate-x-1/2  sm:translate-y-2/3"
          />
        </div>
      </Reveal>
      <Information />
      <Events />
      <Contact />
    </main>
  );
}
