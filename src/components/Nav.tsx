import "./styles/Nav.css";

function Nav() {
  const navItems = ["Information", "Location", "Tickets", "DJs", "TOS"];

  onscroll = () => {
    if (window.scrollY > 485) {
      document
        .getElementById("navbar__underscore")!
        .setAttribute("style", "opacity: 1;");
      document
        .getElementById("navbar")!
        .setAttribute("style", "background-color: var(--dark-clr);");
    } else {
      document
        .getElementById("navbar__underscore")!
        .setAttribute("style", "opacity: 0;");
      document
        .getElementById("navbar")!
        .setAttribute("style", "background-color: transparent;");
    }
  };

  return (
    <nav id="navbar">
      <ul id="navbar__list">
        {navItems.map((item) => {
          return (
            <li className="navbar__list__item" key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      <hr id="navbar__underscore" />
    </nav>
  );
}

export default Nav;
