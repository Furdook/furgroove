import "./styles/Information.css";
import party from "../assets/party.webp";

function Information() {
  return (
    <main id="Information">
      <section id="info__main">
        <img id="info__bg" src={party} alt="" />
        <div id="info__bg__text">
          <p>
            The party starts at <strong className="pink">20:00</strong> and will
            keep you busy for <strong className="blue">6 full hours</strong>. We
            got our own DJ's, known from{" "}
            <strong className="yellow">Summerbo.at</strong> and several cons all
            over Europe. They will play all kinds of styles so always something
            for you!
            <br />
            <br />
            Feeling like chilling a bit after dancing? Go cool down outside with
            a drink and snack!
            <br />
            <br />
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
        <h1 className="blue">6 HOURS</h1>
      </aside>
    </main>
  );
}

export default Information;
