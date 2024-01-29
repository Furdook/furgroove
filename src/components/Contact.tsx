import "./styles/Contact.css";
import logo from "../assets/logo.png";

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
      <img src={logo} alt="event logo" id="footer__logo" />
    </section>
  );
}

export default Contact;
