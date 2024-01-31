import "./styles/Location.css";

function Location() {
  return (
    <section id="Location">
      <div id="text__container">
        <p>
          The location for this edition is{" "}
          <strong className="pink">BOOT 3</strong>. A concert venue with a big
          stage and bar where our house DJ's will move your paws. Across the
          stage is a <strong className="blue">big bar</strong> where you can
          order drinks or some snacks. The bar accepts coins you can buy at the
          entrance. Coins can be bought with cash or card.
          <br />
          <br />
          Our location will also have a big enough{" "}
          <strong className="yellow">fursuit lounge</strong> to cool down and
          store your suits. You can also get some water or dry up in front of
          the fans.
          <br />
          <br />
          The whole location is wheelchair friendly.
        </p>
      </div>
      <a
        href="https://www.google.com/maps/place/Boompjes+750,+3011+XZ+Rotterdam,+Netherlands/"
        target="_blank"
      >
        <img id="location__map" src="./map.webp" alt="Map of venue location" />
      </a>
      <div id="location__container">
        <img id="location__venue-logo" src="./boot10.svg" alt="Fort33 Logo" />
        <p id="location__address">
          Boompjes 750 <br />
          3011 XZ - Rotterdam, NL
        </p>
      </div>
    </section>
  );
}

export default Location;
