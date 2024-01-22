import "./2024.01.css";

import logo from "./2024.01.assets/logo.png";
import party from "../assets/party.webp";
import venue from "../assets/venue.png";
import map from "../assets/map.webp";
import beatbird from "../assets/beatbird.webp";
import djem from "../assets/djem.webp";
import stripe from "../assets/stripe.webp";
import menos from "../assets/menos.webp";

import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navItems = ["Information", "Location", "Tickets", "DJs", "TOS"];
  const [navReady, setNavReady] = useState(window.innerWidth < 840);

  const navigate = useNavigate();

  /**
   * Navigate to the TOS page.
   */
  const navigateTOS = () => {
    navigate("TOS");
  };

  /**
   * Check if the user has scrolled past the header.
   * If they have make navbar opaque, and make 'hr' visible.
   */
  onscroll = () => {
    if (window.location.pathname.includes("TOS")) return;
    const underscore = document.getElementById("navbar__underscore")!;
    const navbar = document.getElementById("navbar")!;

    if (window.scrollY > 485 || window.innerWidth < 841) {
      underscore.setAttribute("style", "opacity: 1;");
      navbar.setAttribute("style", "background-color: var(--dark-clr);");
    } else {
      underscore.setAttribute("style", "opacity: 0;");
      navbar.setAttribute("style", "background-color: transparent;");
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth < 841) setNavReady(true);
    else setNavReady(false);

    setNav();
  });

  const setNav = () => {
    const list = document.getElementById("navbar__list")!;
    if (window.innerWidth > 840) {
      list.setAttribute("style", "transform: translateX(0);");
    } else {
      list.setAttribute("style", "transform: translateX(-100%);");
    }
  };

  const renderBurger = () => {
    return (
      <label htmlFor="burger__input">
        <input id="burger__input" type="checkbox" />
        <div id="burger">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
    );
  };

  useEffect(() => {
    if (navReady) {
      const input = document.getElementById("burger__input")!;
      const list = document.getElementById("navbar__list")!;

      input.addEventListener("change", () => {
        const input = document.getElementById(
          "burger__input"
        ) as HTMLInputElement;

        if (input.checked) {
          list.setAttribute("style", "transform: translateX(0);");
        } else {
          list.setAttribute("style", "transform: translateX(-100%);");
        }
      });
    }
    return () => {};
  }, [navReady]);

  useLayoutEffect(() => {
    setNav();
  });

  return (
    <nav id="navbar">
      {navReady ? renderBurger() : null}
      <ul id="navbar__list">
        {navItems.map((item) => {
          return (
            <li className="navbar__list__item" key={item}>
              <a
                href={`${item === "/TOS" ? "#" : `#${item}`}`}
                onClick={() => {
                  const input = document.getElementById(
                    "burger__input"
                  )! as HTMLInputElement;
                  if (input) {
                    input.checked = false;
                  }
                  if (item === "TOS") {
                    navigateTOS();
                  }
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <hr id="navbar__underscore" />
    </nav>
  );
}

function Landing() {
  return (
    <>
      <div id="image__container">
        <img id="furgrooveImage" src={logo} alt="Furgroove logo" />
      </div>
      <h1 id="eventDate">27th of January</h1>
      <h2 id="eventLocation">FORT33 | Leusden, NL</h2>
    </>
  );
}

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
        <div id="info__shape"></div>
        <h1 id="info__aside__time">
          START: <strong className="pink">20:00</strong>
        </h1>
        <h1 className="blue">6 HOURS</h1>
      </aside>
    </main>
  );
}

function Location() {
  return (
    <section id="Location">
      <div id="text__container">
        <p>
          The location for this edition is{" "}
          <strong className="pink">FORT33</strong>. A concert venue with a big
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
      <img id="location__map" src={map} alt="Map of venue location" />
      <div id="location__container">
        <img id="location__venue-logo" src={venue} alt="Fort33 Logo" />
        <p id="location__address">
          Bavoortseweg 25 <br />
          3833 BM - Leusden, NL
        </p>
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section id="Tickets">
      <h1>Prices</h1>
      <h3 className="yellow">Early Bird Ticket</h3>
      <h2>15€</h2>
      <h3 className="blue">Standard Ticket</h3>
      <h2>17.50€</h2>
      <h3 className="pink">Late Bird Ticket</h3>
      <h2>20€</h2>
      <p className="fade">*prices include a 2.5€ service fee</p>
      <div id="button__container">
        <button
          onClick={() =>
            window.open(
              "https://fort33.stager.co/web/tickets/111327623",
              "_blank"
            )
          }
        >
          TICKETS
        </button>
      </div>
      <p className="fade">*external site</p>
    </section>
  );
}

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

function Contact() {
  return (
    <section id="Contact">
      <button onClick={() => window.open("https://t.me/furgroove", "_blank")}>
        Telegram Group Chat
      </button>
      <br />
      <button
        onClick={() => window.open("https://t.me/furgrooveinfo", "_blank")}
      >
        Telegram Announcements
      </button>
      <img src={logo} alt="" />
    </section>
  );
}

export function TOS() {
  const navigate = useNavigate();

  /**
   * Navigate to the previous page.
   */
  const goback = () => {
    navigate("/archive/january");
  };

  return (
    <main id="tos">
      <button onClick={goback}>Go back</button>
      <h1 className="blue">Code of Conduct</h1>
      <p>
        We want to build the best party ever for you. To make sure that
        everything runs smoothly and fun we have a few rules for everyone.
        Please make yourself familiar with them. Most are common sense but we
        still want to be sure you know what to expect. The rules will be
        enforced by the Party Crew. Please listen to them at all times and
        follow their requests. If you have any problem with one of the crew
        members, please let one of the party staff members know.
      </p>
      <ul>
        <li>Always treat each other with respect.</li>
        <li>Always follow the directions by the Party Crew.</li>
        <li>You are liable for any damage you might cause.</li>
        <li>We do not accept any kind of harassment, period.</li>
      </ul>
      <p>
        While we are inside a location we are still visible for the other
        public. Please behave like that and give the best impression.
      </p>
      <h2 className="pink">Registration</h2>
      <ul>
        <li>You have to be at least 18 on the day of the party to attend.</li>
        <li>
          Only staff and registered attendees are allowed inside the location
        </li>
        <li>
          Attendees are required to wear their badge and lanyard at all times
          during the party.
        </li>
        <li>Badges need to be shown upon request by staff.</li>
      </ul>

      <h2 className="yellow">Location Rules</h2>
      <ul>
        <li>
          It is not allowed to climb over any railings or walk on parts that are
          off limit for attendees.
        </li>
        <li>
          It is not allowed to bring your own beverages or food to the party.
        </li>
        <li>
          It is not allowed to smoke outside of the designated smoke area.
        </li>
        <li>
          It is not allowed to bring any dogs, cats or other pets onboard.
        </li>
        <li>
          Please do not use personal music players while at the location. We
          have music for a reason.
        </li>
      </ul>
      <h2 className="blue">Clothing and Decency</h2>
      <ul>
        <li>
          Nudity exceeding the equivalent of bathing suits is not allowed.
        </li>
        <li>
          Sexual behavior that goes beyond a mere display of affection is not
          allowed in public.
        </li>
        <li>
          Display of fetish gear is not permitted in public, even if it is part
          of a costume.
        </li>
      </ul>
      <h2 className="pink">Alcohol and Drugs</h2>
      <ul>
        <li>It is forbidden to bring or use drugs to the party.</li>
        <li>
          If we find you in the possession of or distributing illegal or
          controlled substances we will notify the local authorities and the
          venue FORT33.
        </li>
        <li>
          Smoking and vaping is only allowed in the designated smoking areas.
        </li>
      </ul>
      <h2 className="yellow">Photography and Video</h2>
      <p>
        Everyone is welcome to take pictures and capture memories for private
        use. Selling or using the videos and pictures for profitable companies
        is not allowed.
      </p>
    </main>
  );
}

function Jan_2024() {
  return (
    <>
      <Landing />
      <Nav />
      <main id="mainContent">
        <Information />
        <Location />
        <Tickets />
        <DJs />
        <Contact />
      </main>
    </>
  );
}

export default Jan_2024;
