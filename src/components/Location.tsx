import "./styles/Location.css";
import map from "/map.webp";
import venue from "/boot10.svg";

function Location() {
  return (
    <section id="Location">
      <div id="text__container">
        <p>
          he location is <strong className="yellow">Boot3</strong> from BOOT10.
          A big party ship with several rooms to dance and relax during the
          summerevening.
          <br /> Our DJ's will give a summer vibe feeling while we see the
          sunset near the Erasmusbrug. With a big bar there will be enough to
          drink. Coins can be bought with cash or card. <br />
          Our location will also have a big enough fursuit lounge to cool down
          and store your suits. You can also get some water or dry up in front
          of the fans.
        </p>
      </div>
      <a
        href="https://www.google.com/maps/place/Boompjes+750,+3011+XZ+Rotterdam,+Netherlands/"
        target="_blank"
      >
        <img id="location__map" src={map} alt="Map of venue location" />
      </a>
      <div id="location__container">
        <img id="location__venue-logo" src={venue} alt="Boot10 Logo" />
        <p id="location__address">
          Boompjes 750 <br />
          3011 XZ - Rotterdam, NL
        </p>
      </div>
    </section>
  );
}

export default Location;
