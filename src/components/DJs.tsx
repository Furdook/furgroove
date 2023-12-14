import "./styles/DJs.css";

import beatbird from "../assets/beatbird.webp";
import djem from "../assets/djem.webp";
import stripe from "../assets/stripe.webp";
import menos from "../assets/menos.webp";

function DJs() {
  return (
    <section id="DJs">
      <section className="dj beatbird">
        <div className="dj__image">
          <img src={beatbird} alt="" />
          <h1 className="dj__name">Beatbird</h1>
        </div>
        <p className="dj__quote">
          The one and only Dutch DJ Bird! Living close to the venue so it's
          almost like home. Loves to play all kinds of styles!
        </p>
      </section>
      <section className="dj djem">
        <p className="dj__quote">
          If you have ever been at a big furry convention you would have heard
          the beats of our French DJ Djem. He loves to play harder styles and
          will definitly let you move to sound of his beats.
        </p>
        <div className="dj__image">
          <img src={djem} alt="" />
          <h1 className="dj__name">Djem</h1>
        </div>
      </section>
      <section className="dj stripe">
        <div className="dj__image">
          <img src={stripe} alt="" />
          <h1 className="dj__name">Stripe</h1>
        </div>
        <p className="dj__quote">
          The Mash-up king of Germany! He is the only one that can mix schlagers
          with baby shark and still make it sound good. Famous for the Dead Dog
          Parties at Eurofurence and Cologne FurDance.
        </p>
      </section>
      <section className="dj menos">
        <p className="dj__quote">
          One of our Dutch DJ's that will end the evening with one mission; Make
          everyone like hardstyle! Get ready for some bangers, sing-a-longs and
          a bass that will blow you away.
        </p>
        <div className="dj__image">
          <img src={menos} alt="" />
          <h1 className="dj__name">Menos</h1>
        </div>
      </section>
    </section>
  );
}

export default DJs;
