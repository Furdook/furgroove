"use client";

export default function Footer() {
  return (
    <footer className="mb-8 mt-4 rounded bg-primary-800/50 p-4 shadow-md">
      <img
        src="/branding/inline_small.webp"
        alt="FurGroove logo"
        className="mb-4 ml-[-0.75rem]"
      />
      <div className="flex flex-row gap-4">
        <section className="avoid-contrast flex w-full flex-col">
          <a href="">Telegram Group</a>
          <a href="">Telegram Announcements</a>
          <section className="avoid-contrast mt-4 flex flex-col md:mt-auto md:flex-row md:gap-4">
            <p className="mt-4 text-primary-300/50 max-md:order-3">
              org.no.123.456.789.101
            </p>
            <a href="" className="mt-4 flex gap-2 max-md:order-1 md:ml-auto">
              <img
                src="/icons/x.png"
                alt="X logo"
                className="rounded-inner max-md:order-2"
              />
              FurGrooveNL
            </a>
            <a href="" className="flex gap-2 max-md:order-1 md:mt-4">
              <img
                src="/icons/bsky.png"
                alt="Bluesky logo"
                className="rounded-inner max-md:order-2"
              />
              furgroove.bsky.social
            </a>
          </section>
        </section>
      </div>
    </footer>
  );
}