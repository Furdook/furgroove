export default function Location() {
  return (
    <section className="flex-col">
      <h2 className="ml-0 w-full text-left text-2xl underline decoration-accent-500 underline-offset-4">
        FORT33 - Leusden
      </h2>
      <div className="flex flex-row">
        <div className="relative my-auto flex-shrink">
          <p className="relative">
            <span className="absolute left-[-1rem] top-[-2rem]">“</span>
            The location for this edition is{" "}
            <strong className="text-accent-400">FORT33</strong>. A concert venue
            with a big stage and bar where our house DJ's will move your paws.
            Across the stage is a{" "}
            <strong className="text-accent-400">big bar</strong> where you can
            order drinks or some snacks. The bar accepts coins you can buy at
            the entrance. Coins can be bought with cash or card. Our location
            will also have a big enough{" "}
            <strong className="text-accent-400">fursuit lounge</strong> to cool
            down and store your suits. You can also get some water or dry up in
            front of the fans. The whole location is wheelchair friendly.
            <span className="absolute bottom-[-3.5rem]">”</span>
          </p>
        </div>
        <img src="/fort33.png" alt="" className="h-40" />
      </div>
      <hr className="w-full" />
      <p className="my-4 opacity-50">
        Bavoortseweg 25, 3833 BM Leusden, Netherlands
      </p>
      <a
        href="https://www.google.com/maps/place/Fort33+%7C+Poppodium+%7C+Live+muziek+%7C+Cultuurcentrum/@52.131597,5.4123335,17z/data=!3m1!4b1!4m6!3m5!1s0x47c645ca1aa6c905:0xade2abb0d2d81996!8m2!3d52.1315937!4d5.4149138!16s%2Fg%2F12qg23gbq?entry=ttu"
        target="_blank"
        className="cursor-alias outline-2 outline-accent-500 hover:outline"
      >
        <img
          src="/map.webp"
          alt=""
          className="aspect-square rounded-inner object-cover sm:aspect-auto"
        />
      </a>
    </section>
  );
}
