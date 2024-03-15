"use client";
import { useEffect, useLayoutEffect, useState } from "react";

import { navigation } from "@/constants";

export default function Navigation() {
  const [navReady, setNavReady] = useState(false);

  const handleUnderline = () => {
    const underscore = document.getElementById("navbar__underscore")!;
    if (window.scrollY > 485 && window.innerWidth > 840) {
      underscore.setAttribute("style", "opacity: 1;");
    } else {
      underscore.setAttribute("style", "opacity: 0;");
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      handleUnderline();
    });

    window.addEventListener("resize", () => {
      handleUnderline();

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
        <input
          id="burger__input"
          type="checkbox"
          onClick={() => {
            const input = document.getElementById(
              "burger__input",
            )! as HTMLInputElement;
            handleNavOpen(input.checked);
          }}
        />
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
      className="fixed top-0 z-40 h-screen w-screen md:sticky md:h-auto md:bg-primary-900"
    >
      {navReady ? renderBurger() : null}
      <ul
        id="navbar__list"
        className="m-auto mt-4 flex h-full w-full max-w-4xl flex-col justify-center gap-6 pl-6 pt-2 text-2xl uppercase tracking-wide md:my-4 md:flex-row md:justify-around md:pl-0"
      >
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => {
                  const input = document.getElementById(
                    "burger__input",
                  )! as HTMLInputElement;
                  if (input) {
                    input.checked = false;
                  }
                  handleNavOpen(false);
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <hr id="navbar__underscore" className="opacity-0 md:block" />
    </nav>
  );
}
