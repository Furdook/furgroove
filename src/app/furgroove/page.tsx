import Information from "./_components/Information";
import Location from "./_components/Location";
import Travel from "./_components/Travel";
import Tickets from "./_components/Tickets";
import Artists from "./_components/Artists";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Breadcrumb currentPage="FurGroove" />
      <section className="mt-[-14.75rem] flex h-screen rounded bg-hero bg-center sm:mt-[-15.25rem]">
        <img
          src="/branding/inline_large.webp"
          alt="FurGroove logo"
          className="avoid-contrast mx-auto my-auto"
        />
      </section>
      <Information />
      <Location />
      <Travel />
      <Tickets />
      <Artists />
    </main>
  );
}
