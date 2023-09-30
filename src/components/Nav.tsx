import { useEffect, useState } from "react";
import burger from "../assets/burger.svg";
import x from "../assets/x.svg";
import "./styles/Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navItems = ["Information", "Location", "Tickets", "DJs", "TOS"];
  const [navReady, setNavReady] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const navigateTOS = () => {
    navigate("TOS");
  };

  /**
   * Check if the user has scrolled past the header.
   * If they have make navbar opaque, and make 'hr' visible.
   */
  onscroll = () => {
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

  /**
   * Check if the user has resized the window.
   * If the window is less than 841px wide, set the navbar ready to be opened.
   */
  onresize = () => {
    if (window.innerWidth < 841) setNavReady(true);
    else setNavReady(false);
  };

  /**
   * Sets the display of the navbar to the value passed.
   *
   * @param value The value to set the display of the navbar to.
   */
  const listSet = (value: string) => {
    const list = document.getElementById("navbar__list")!;
    list.setAttribute("style", `display: ${value};`);
  };

  /**
   * Sets the display of the button to the value passed.
   *
   * @param value The value to set the display of the button to.
   */
  const buttonSet = (value: string) => {
    const button = document.getElementById("navButton")!;
    button.setAttribute("style", `display: ${value};`);
  };

  /**
   * Opens and closes the navbar.
   */
  const openNav = () => {
    if (navReady) {
      const button = document.getElementById("navButton")!;
      const nav = document.getElementById("navbar__list")!;

      if (!navOpen) {
        setNavOpen(true);
        nav.classList.add("navOpened");
        button.innerHTML = `<img src=${x} alt="" />`;
        listSet("flex");
      } else {
        setNavOpen(false);
        nav.classList.remove("navOpened");
        button.innerHTML = `<img src=${burger} alt="" />`;
        listSet("none");
      }
    }
  };

  /**
   * If the navbar is ready, set the display of the button to 'flex'
   * and the display of the list to 'none'.
   */
  useEffect(() => {
    if (navReady) {
      buttonSet("flex");
      listSet("none");
    } else {
      buttonSet("none");
      listSet("flex");

      setNavOpen(false);
      document.getElementById(
        "navButton"
      )!.innerHTML = `<img src=${burger} alt="" />`;
    }
    document.getElementById("navbar__list")!.classList.toggle("closed");
  }, [navReady]);

  /**
   * Set the navbar ready to be opened if pages loads at less than 841px wide.
   */
  useEffect(() => {
    setNavReady(window.innerWidth < 840);
  }, []);

  return (
    <nav id="navbar">
      <div id="navButton" onClick={openNav}>
        <img src={burger} alt="" />
      </div>
      <ul id="navbar__list">
        {navItems.map((item) => {
          return (
            <li className="navbar__list__item" key={item}>
              <a
                href={`${item === "TOS" ? "#" : `#${item}`}`}
                onClick={item === "TOS" ? navigateTOS : openNav}
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
