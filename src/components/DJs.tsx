import "./styles/DJs.css";

import beatbird from "../assets/beatbird.jpg";
import yellowstreak from "../assets/yellowstreak.jpg";

function DJs() {
  return (
    <section id="DJs">
      <section className="dj beatbird">
        <div className="dj__image">
          <img src={beatbird} alt="" />
          <div className="dj__name">
            <h1>Beatbird</h1>
          </div>
        </div>
        <div className="dj__quote">
          <p>
            The one and only Dutch DJ Bird! Living close to the venue so it's
            almost like home.Loves to play all kinds of styles!
          </p>
        </div>
      </section>
      <section className="dj yellowstreak">
        <div className="dj__quote">
          <p>
            A German DJ famous from Summerbo.at and plenty of other German
            Furdances!
          </p>
        </div>
        <div className="dj__image">
          <img src={yellowstreak} alt="" />
          <div className="dj__name">
            <h1>Yellowstreak</h1>
          </div>
        </div>
      </section>
      <section className="dj stripe">
        <div className="dj__image">
          <img src={beatbird} alt="" />
          <div className="dj__name">
            <h1>Stripe</h1>
          </div>
        </div>
        <div className="dj__quote">
          <p>
            The one and only Dutch DJ Bird! Living close to the venue so it's
            almost like home.Loves to play all kinds of styles!
          </p>
        </div>
      </section>
      <section className="dj menos">
        <div className="dj__quote">
          <p>
            A gay af Dutch fur
          </p>
        </div>
        <div className="dj__image">
          <img src={yellowstreak} alt="" />
          <div className="dj__name">
            <h1>Menos</h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DJs;
