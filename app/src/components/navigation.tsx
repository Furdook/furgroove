"use client";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Navigation() {
  // Navigation items
  const navItems = ["Information", "Location", "Tickets", "DJs", "TOS"];
  const [navReady, setNavReady] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const underscore = document.getElementById("navbar__underscore")!;
      if (window.scrollY > 485 || window.innerWidth <= 840) {
        underscore.setAttribute("style", "opacity: 1;");
      } else {
        underscore.setAttribute("style", "opacity: 0;");
      }
    });

    window.addEventListener("resize", () => {
      const list = document.getElementById("navbar__list")!;
      handleNavOpen(false);
      if (window.innerWidth <= 840) {
        list.classList.add("hidden");
        setNavReady(true);
      } else {
        list.classList.remove("hidden");
        setNavReady(false);
      }
    });
  }

  const handleNavOpen = (state: boolean) => {
    if (navReady) {
      const body = document.querySelector("body")!;
      const list = document.getElementById("navbar__list")!;
      const nav = document.getElementById("navbar")!;

      if (state) {
        nav.classList.add("bg-primary-900");
        list.classList.remove("hidden");
        body.classList.add("overflow-hidden");
      } else {
        nav.classList.remove("bg-primary-900");
        list.classList.add("hidden");
        body.classList.remove("overflow-hidden");
      }
    }
  };

  useEffect(() => {
    if (navReady) {
      const input = document.getElementById(
        "burger__input"
      )! as HTMLInputElement;

      input.addEventListener("change", () => {
        handleNavOpen(input.checked);
      });
    }
    return () => {};
  }, [navReady]);

  useLayoutEffect(() => {
    if (window.innerWidth <= 840) {
      document.getElementById("navbar__list")!.classList.add("hidden");
      setNavReady(true);
    } else setNavReady(false);
  }, []);

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

  return (
    <nav
      id="navbar"
      className="fixed md:sticky top-0 w-screen h-screen md:h-auto md:bg-primary-900 z-40"
    >
      {navReady ? renderBurger() : null}
      <ul
        id="navbar__list"
        className="flex gap-8 justify-center mt-4 text-2xl uppercase tracking-wide md:my-4 pt-2 md:flex-row flex-col md:pl-0 pl-6 my-auto h-full"
      >
        {navItems.map((item) => {
          return (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  const input = document.getElementById(
                    "burger__input"
                  )! as HTMLInputElement;
                  if (input) {
                    input.checked = false;
                  }
                  handleNavOpen(false);
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <hr id="navbar__underscore" className="opacity-0 md:block" />
    </nav>
  );
}
