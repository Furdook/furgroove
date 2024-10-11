import Reveal from "@/components/Reveal";

export default function Travel() {
  return (
    <Reveal>
      <h2 className="text-yellow">Travel</h2>
      <div className="mt-4 flex w-full flex-col gap-4">
        <div className="flex flex-grow flex-col gap-4 sm:flex-row">
          <a
            href="https://www.google.com/maps/place/Four+Seasons:+Food,+drinks+%26+fun/@52.1396611,5.4197851,17z/data=!4m15!1m8!3m7!1s0x47c645cfadfcc98b:0x65893caf1f4e289!2sKastanjelaan,+3833+AN+Leusden,+Netherlands!3b1!8m2!3d52.1392663!4d5.4210783!16s%2Fg%2F1v1vcd4f!3m5!1s0x47c6450965046305:0x81233670f92dcf7d!8m2!3d52.1401034!4d5.4215753!16s%2Fg%2F11jkbp5n0k?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
            className="rounded shadow-md sm:w-1/3 w-full overflow-hidden hover:cursor-alias bg-primary-800/50 flex justify-center items-center sm:p-4 md:p-0"
            target="_blank"
          >
            <img
              src="/event/map.webp"
              alt="Map of the Event Location"
              width={256}
              height={256}
              loading="lazy"
              className="max-sm:w-full hover:scale-105 transition-transform duration-200  md:w-full aspect-square rounded-inner"
            />
          </a>
          <section
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
          </section>
        </div>
        <div className="flex flex-grow flex-col gap-4 sm:flex-row">
          <section
            className="flex flex-col rounded bg-primary-800/50 p-4 shadow-md max-sm:order-2 sm:w-2/3"
            tabIndex={0}
          >
            <h3 className="text-xl">Parking & Public Transport</h3>
            <article className="my-auto pb-10">
              <p>
                At the event location we have space for 60 vehicles, in the
                surrounding area you are sure to find more available parking
                nearby!
              </p>
              <br />
              <p>
                From Amerfoort Centraal you can take bus no. 17 to
                Plesmanstraat, from here the event location is a short ~7min
                walk away. If you are staying at the VanderValk hotel it is a
                ~10min walk to FurGroove.
              </p>
            </article>
          </section>
          <div
            className="flex flex-col rounded bg-primary-800/50 p-4 shadow-md sm:w-1/3"
            tabIndex={0}
          >
            <h3 className="text-xl">Nearby Hotels</h3>
            <h4 className="text-lg text-primary-300/50">Van Der Valk Hotel</h4>
            <a
              href="https://www.hotelleusden.nl/"
              className="hover:cursor-alias"
              aria-label="Van Der Valk Hotel"
              target="_blank"
            >
              <img
                src="/event/vanderwalk.webp"
                alt="Picture of Van Der Valk Hotel"
                width={256}
                height={256}
                loading="lazy"
                className="mt-2 w-full rounded-inner hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
