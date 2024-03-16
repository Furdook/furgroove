export default function Information() {
  return (
    <section
      id="info"
      className="mt-96 h-screen w-full flex-col p-6  lg:flex-row"
    >
      <section className="relative m-0 h-fit">
        <img
          src="/party.webp"
          alt="FurGroove"
          width={2000}
          height={500}
          className="w-[650px] rotate-[-10deg] border-4 border-blue object-cover lg:w-[2000px]"
        />
        <div className="absolute w-screen bg-primary-900/90 p-6 pl-10 text-lg md:left-[-5rem] md:ml-10 md:w-[50rem] md:pl-24 md:pr-24 md:text-xl lg:w-[54rem]">
          <p className="border-l-4 border-l-blue px-6">
            The ship is setting sail at{" "}
            <strong className="text-pink">20:00</strong> and will explore
            Rotterdam from the water for 4 full hours. We got our own DJ's,
            known from Summerbo.at and several cons all over Europe. <br />
            They will play all kinds of styles so always something for you!
            Feeling like chilling a bit after dancing? Go cool down outside with
            a drink and snack! <br />
            All attendees get a badge with lanyard for attending the dance. We
            will also sell special t-shirts you can pre-order soon!
          </p>
        </div>
      </section>

      <aside
        id="info__aside"
        className="relative mx-auto ml-auto mt-24 w-full max-w-[712px] justify-end space-y-6 text-right text-4xl lg:mt-0"
      >
        <h1 id="info__aside__boarding">
          <strong className="text-yellow">BOARDING:</strong> 19:30
        </h1>
        <h1 id="info__aside__time">
          START: <strong className="text-pink">20:00</strong>
        </h1>
        <h1 className="text-blue">4 HOURS</h1>
      </aside>
    </section>
  );
}
