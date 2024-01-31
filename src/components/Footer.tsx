import "./styles/Contact.css";

function Footer() {
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
      <a href="./#archive" id="archive">
        <button>Archive - January 2024</button>
      </a>
      <img src="./logo.png" alt="event logo" id="footer__logo" />
    </section>
  );
}

export default Footer;
