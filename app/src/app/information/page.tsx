import Image from "next/image";

export default function Information() {
  return (
    <section
      id="info"
      className="lg:flex-row flex-col w-full p-6 mt-96  h-screen"
    >
      <section className="h-fit relative m-0">
        <Image
          src="/party.webp"
          alt="FurGroove"
          width={2000}
          height={500}
          className="object-cover border-4 border-blue rotate-[-10deg] lg:w-[2000px] w-[650px]"
        />
        <div className="bg-primary-900/90 md:ml-10 pl-10 md:pl-24 p-6 text-lg md:text-xl w-screen md:left-[-5rem] md:w-[50rem] lg:w-[54rem] absolute md:pr-24">
          <p className="border-l-blue border-l-4 px-6">
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
        className="ml-auto text-right relative justify-end w-full text-4xl space-y-6 lg:mt-0 mt-24 max-w-[712px] mx-auto"
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
