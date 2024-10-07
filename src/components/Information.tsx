import Announcement from "./Announcement";
import RevealFade from "./RevealFade";

export default function Information() {
  return (
    <RevealFade>
      <Announcement />
      <section className="flex mt-2 rounded-t-inner w-full flex-col gap-4 rounded bg-primary-800/50 p-4 pb-8 shadow-md">
        <h1 className="text-pink">FurGroove</h1>
        <p>
          Welcome to Furgroove. Events made by furries for furries. We host
          different events throughout the year ranging from regular dance
          parties to 18+ events. Whether you wanna dance along to our DJ’s, have
          a drink with your friends or strut around in your fursuit Furgroove
          has something for everyone to enjoy!
        </p>
      </section>
    </RevealFade>
  );
}
