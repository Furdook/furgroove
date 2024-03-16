export default function Location() {
  return (
    <section id="location" className="my-52 flex-wrap p-6">
      <p className="sm:max-w-[712px] mb-12 ml-0 max-w-[50ch] flex-grow self-start text-xl b:mr-auto">
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
        className="w-full max-w-[712px] b:max-w-[400px]"
      >
        <img
          id="location__map"
          src="/map.webp"
          alt="Map of venue location"
          height={400}
          width={400}
          className="mx-auto w-full b:w-96"
        />
      </a>
      <div className="mx-auto w-full max-w-[712px] b:ml-0 b:mr-auto b:mt-[-10rem]">
        <img src="/boot10.svg" alt="Boot10 Logo" height={200} width={300} />
        <p className="relative uppercase opacity-50">
          Boompjes 750 <br />
          3011 XZ - Rotterdam, NL
        </p>
      </div>
    </section>
  );
}
