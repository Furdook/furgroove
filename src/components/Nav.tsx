import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";

function Nav() {
  const navItems = ["Information", "Location", "Tickets", "DJs", "TOS"];
  const [navReady, setNavReady] = useState(window.innerWidth < 840);

  /**
   * Check if the user has scrolled past the header.
   * If they have make navbar opaque, and make 'hr' visible.
   */
  onscroll = () => {
    if (window.location.href.includes("TOS")) return;
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
    const archive = document.getElementById("archive")!;
    const list = document.getElementById("navbar__list")!;
    if (window.innerWidth > 840) {
      archive.setAttribute("style", "display: block;");
      list.setAttribute("style", "transform: translateX(0);");
    } else {
      archive.setAttribute("style", "display: none;");
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
      const archive = document.getElementById("archive")!;

      input.addEventListener("change", () => {
        const input = document.getElementById(
          "burger__input"
        ) as HTMLInputElement;

        if (input.checked) {
          archive.setAttribute("style", "display: block;");
          list.setAttribute("style", "transform: translateX(0);");
        } else {
          archive.setAttribute("style", "display: none;");
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
                href={`#${item}`}
                onClick={() => {
                  const input = document.getElementById(
                    "burger__input"
                  )! as HTMLInputElement;
                  if (input) {
                    input.checked = false;
                  }
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <Link id="archive" to="./archive/january">
        Archive
      </Link>
      <hr id="navbar__underscore" />
    </nav>
  );
}

export default Nav;
