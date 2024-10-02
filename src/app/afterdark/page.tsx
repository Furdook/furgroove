import COC from "./_components/Coc";
import Tickets from "./_components/Tickets";
import Information from "./_components/Information";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  return (
    <main className="afterdark flex flex-col gap-64">
      <Breadcrumb currentPage="FurGroove: AD Edition" />
      <section className="mt-[-6rem] flex flex-col">
        <img src="/branding/afterdark_inline.webp" alt="" />
      </section>
      <section className="flex rounded bg-afterdark-800 p-6 shadow-md">
        <h3 className="mx-auto text-lg text-accent-500">
          This event has been postponed until further notice
        </h3>
      </section>
      <Information />
      <Tickets />
      <COC />
    </main>
  );
}
