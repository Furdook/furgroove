"use client";

import { Archive, House, Images, Info } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    text: "Home",
    link: "/",
    icon: <House className="mx-auto" />,
  },
  {
    text: "About",
    link: "/about",
    icon: <Info className="mx-auto" />,
  },
  {
    text: "Gallery",
    link: "/gallery",
    icon: <Images className="mx-auto" />,
  },
  {
    text: "Archive",
    link: "/archive",
    icon: <Archive className="mx-auto" />,
  },
];

export function DesktopNavigation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const nav = document.querySelector("nav");

      nav!.style.transform =
        window.scrollY > scrollPosition &&
        window.scrollY > 10 &&
        window.screen.width > 640
          ? "translateY(-120%)"
          : "translateY(0)";

      setScrollPosition(window.scrollY);
    };
  }

  return (
    <nav className="sticky top-2 z-50 flex h-14 overflow-hidden rounded bg-primary-800/50 shadow-md backdrop-blur transition-transform duration-200 max-sm:hidden">
      <img
        src="/branding/inline_large.webp"
        alt="FurGroove logo"
        width={224}
        height={56}
        className="avoid-contrast "
      />
      <ul className="mx-auto flex w-full max-w-lg flex-row place-content-around items-center text-xl uppercase">
        {navItems.map((item) => (
          <li key={item.text} className="hover:cursor-pointer">
            <a href={item.link.toLowerCase()}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileNavigation() {
  return (
    <nav className="sticky bottom-4 z-50 h-16 rounded bg-primary-800/50 shadow-md backdrop-blur transition-all duration-200 sm:hidden">
      <ul className="flex h-16 w-full p-2">
        {navItems.map((item) => (
          <li
            key={item.text}
            tabIndex={1}
            className="w-1/4 place-content-center rounded-inner hover:cursor-pointer hover:bg-primary-900/50"
          >
            <a href={item.link.toLowerCase()}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
