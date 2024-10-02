export default function Information() {
  return (
    <section
      id="Skip"
      className="relative min-h-72 w-full flex-col overflow-hidden rounded bg-primary-800/50 shadow-md md:p-4"
    >
      <img
        src="/event/cutout.webp"
        className="avoid-contrast absolute right-0 top-0 h-full"
        alt="FurGroove art"
      />
      <div className="z-10 h-full max-md:bg-primary-900/50 max-md:p-4 max-md:backdrop-blur">
        <h1 className="text-pink">FurGroove</h1>
        <h2 className="mb-6 text-xl text-primary-300/85">25th of January</h2>
        <p className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Aspernatur ut saepe eaque delectus ipsa consectetur <br />
          sint aliquam sunt pariatur blanditiis? Aliquam <br />
          magnam expedita ea quod adipisci facilis <br />
          culpa esse ex. <br />
          <br />
          Four Seasons Leusden Welcomes us!
        </p>
      </div>
    </section>
  );
}
