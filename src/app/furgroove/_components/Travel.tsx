export default function Travel() {
  return (
    <section className="w-full rounded">
      <h2 className="text-yellow">Travel</h2>
      <div className="mt-4 flex w-full flex-col gap-4">
        <section className="flex flex-grow flex-col gap-4 sm:flex-row">
          <img
            src="/event/map.webp"
            alt=""
            className="rounded shadow-md sm:w-1/3"
          />
          <div
            className="flex flex-col rounded bg-primary-800/50 p-4 shadow-md sm:w-2/3"
            tabIndex={0}
          >
            <h3 className="text-xl">Four Seasons Leusden</h3>
            <article className="my-auto pb-10">
              <p className="mt-4" aria-label="Location Information">
                Join us in our new location at the Four Seasons Leusden. With a
                spectacular indoor bar, plenty of room to dance and a cozy
                outdoor section we are sure to level up the Furgroove
                experience.
              </p>
              <br />
              <p>
                Located at Kastanjelaan 1 in Leusden only a short distance from
                the A28 highway. Find more information about parking, public
                transport and hotels down below.
              </p>
            </article>
          </div>
        </section>
        <section className="flex flex-grow flex-col gap-4 sm:flex-row">
          <div
            className="flex flex-col rounded bg-primary-800/50 p-4 shadow-md max-sm:order-2 sm:w-2/3"
            tabIndex={0}
          >
            <h3 className="text-xl">Parking & Public Transport</h3>
            <article className="my-auto pb-10">
              <p>
                At the event location we have space for 60 vehicles, in the
                surrounding area you are sure to find mroe available parking
                with large parking garages nearby!
              </p>
              <br />
              <p>
                From Amerfoort Centraal you can take bus no. 17 or bus no. 80 to
                Groene Zoom, from here the event location is a short ~10min walk
                away.
              </p>
            </article>
          </div>
          <div
            className="flex flex-col rounded bg-primary-800/50 p-4 shadow-md sm:w-1/3"
            tabIndex={0}
          >
            <h3 className="text-xl">Nearby Hotels</h3>
            <h4 className="text-lg text-primary-300/50">Van Der Valk Hotel</h4>
            <a
              href="https://www.hotelleusden.nl/"
              className="hover:cursor-alias"
              target="_blank"
            >
              <img
                src="/event/vanderwalk.webp"
                alt=""
                className="mt-2 w-full rounded-inner"
              />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
