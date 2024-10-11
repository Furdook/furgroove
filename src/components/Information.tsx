import Announcement from "./Announcement";
import Reveal from "./Reveal";

export default function Information() {
  return (
    <Reveal>
      <Announcement />
      <section className="flex mt-2  rounded-t-inner relative w-full flex-col gap-4 rounded bg-primary-800/50 p-4 pb-8 shadow-md">
        <h1 className="text-pink">FurGroove</h1>
        <p>
          Welcome to Furgroove. Events made by furries for furries. We host
          different events throughout the year ranging from regular dance
          parties to 18+ events. Whether you wanna dance along to our DJ’s, have
          a drink with your friends or strut around in your fursuit Furgroove
          has something for everyone to enjoy!
        </p>
        <img
          src="/paws.webp"
          alt=""
          className="absolute h-full right-0 top-0 opacity-10 saturate-0 translate"
        />
      </section>
    </Reveal>
  );
}
