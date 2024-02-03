import "./styles/Information.css";

function Information() {
  return (
    <main id="Information">
      <section id="info__main">
        <img id="info__bg" src="./party.webp" alt="" />
        <div id="info__bg__text">
          <p>
            The ship is setting sail at <strong className="pink">20:00</strong>{" "}
            and will explore Rotterdam from the water for 4 full hours. We got
            our own DJ's, known from Summerbo.at and several cons all over
            Europe. <br />
            They will play all kinds of styles so always something for you!
            Feeling like chilling a bit after dancing? Go cool down outside with
            a drink and snack! <br />
            All attendees get a badge with lanyard for attending the dance.We
            will also sell special t-shirts you can pre-order soon!
          </p>
        </div>
      </section>
      <aside id="info__aside">
        <h1 id="info__aside__boarding">
          <strong className="yellow">BOARDING:</strong> 19:30
        </h1>
        <h1 id="info__aside__time">
          START: <strong className="pink">20:00</strong>
        </h1>
        <h1 className="blue">4 HOURS</h1>
      </aside>
    </main>
  );
}

export default Information;
