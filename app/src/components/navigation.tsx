"use client";

import { useLayoutEffect, useState } from "react";
import { navigation } from "@/constants";

export default function Navigation() {
  const [navReady, setNavReady] = useState(false);

  if (typeof window !== "undefined") {
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
        list.classList.add("h-screen");
        list.classList.add("flex");
      } else {
        nav.classList.remove("bg-primary-900");
        list.classList.add("hidden");
        body.classList.remove("overflow-hidden");
        list.classList.remove("h-screen");
        list.classList.remove("flex");
      }
    }
  };

  useLayoutEffect(() => {
    setNavReady(window.innerWidth <= 840);
  }, []);

  const renderBurger = () => {
    return (
      <label htmlFor="burger__input" className="z-40">
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
      className="fixed top-0 z-40 w-screen md:sticky md:h-auto md:bg-primary-900/70 md:backdrop-blur"
    >
      {navReady ? (
        <header className="fixed top-0 z-10 h-16 w-full border-b-[1px] border-white border-opacity-50 bg-primary-900/70 backdrop-blur">
          <img
            src="/logo.webp"
            alt=""
            height={50}
            width={200}
            className="absolute inset-x-0 top-0 mx-auto h-auto"
          />
          {renderBurger()}
        </header>
      ) : null}
      <ul
        id="navbar__list"
        className="m-auto mt-4 hidden w-full max-w-4xl flex-col justify-center gap-6 py-2 pl-6 text-2xl uppercase tracking-wide md:my-4 md:flex md:flex-row md:justify-around md:pl-0"
      >
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => {
                  handleNavOpen(false);
                  const input = document.getElementById(
                    "burger__input",
                  )! as HTMLInputElement;
                  if (input) {
                    input.checked = false;
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
