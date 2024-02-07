import { useEffect, useLayoutEffect, useState } from "react";
import "./styles/Nav.css";

function Nav() {
  // Navigation items
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
    setNav();
  };

  /**
   * If the user resizes the window, check if the navbar should be ready.
   * Used when resizing to smaller window sizes to update the nacigation menu.
   */
  window.addEventListener("resize", () => {
    if (window.innerWidth < 841) setNavReady(true);
    else setNavReady(false);

    setNav();
  });

  /**
   * Moves naviagtion menu in or out of view depending on window size.
   */
  const setNav = () => {
    const list = document.getElementById("navbar__list")!;
    if (window.innerWidth > 840) {
      list.setAttribute("style", "transform: translateX(0);");
    } else {
      list.setAttribute("style", "transform: translateX(-100%);");
    }
  };

  /**
   * Renders the burger menu icon for smaller screens.
   * CSS only solution.
   */
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

  /**
   * Adds event listener to the burger menu icon.
   */
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

  /**
   * Used to set the navigation menu when the component is first rendered.
   */
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
      <hr id="navbar__underscore" />
    </nav>
  );
}

export default Nav;
