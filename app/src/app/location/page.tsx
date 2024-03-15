import Image from "next/image";

export default function Location() {
  return (
    <section id="location" className="p-6 flex-wrap my-52">
      <p className="text-xl mb-12 max-w-[712px] w-[50ch] self-start flex-grow ml-0 b:mr-auto">
        The location is <strong className="text-yellow">Boot3</strong> from
        BOOT10. A big party ship with several rooms to dance and relax during
        the summerevening.
        <br /> Our DJ's will give a summer vibe feeling while we see the sunset
        near the Erasmusbrug. With a big bar there will be enough to drink.
        Coins can be bought with cash or card. <br />
        Our location will also have a big enough fursuit lounge to cool down and
        store your suits. You can also get some water or dry up in front of the
        fans.
      </p>
      <a
        href="https://www.google.com/maps/place/Boompjes+750,+3011+XZ+Rotterdam,+Netherlands/"
        target="_blank"
      >
        <img
          id="location__map"
          src="/map.webp"
          alt="Map of venue location"
          className="w-full b:w-96 max-w-[712px] mx-auto"
        />
      </a>
      <div className="b:mt-[-10rem] b:ml-0 b:mr-auto mx-auto max-w-[712px] w-full">
        <Image src="/boot10.svg" alt="Boot10 Logo" height={200} width={300} />
        <p className="uppercase opacity-50 relative">
          Boompjes 750 <br />
          3011 XZ - Rotterdam, NL
        </p>
      </div>
    </section>
  );
}
