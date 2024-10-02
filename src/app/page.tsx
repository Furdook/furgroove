import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Information from "@/components/Information";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 overflow-clip">
      <section className="mt-[-4.5rem] flex h-screen bg-hero bg-center">
        <img
          src="/branding/inline_large.webp"
          alt="FurGroove logo"
          className="mx-auto my-auto"
        />
      </section>
      <Information />
      <Events />
      <Contact />
    </main>
  );
}
