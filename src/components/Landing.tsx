import logo from "../assets/logo.png";
import "./styles/Landing.css";

function Landing() {
  return (
    <>
      <div id="image__container">
        <img id="furgrooveImage" src={logo} alt="Furgroove logo" />
      </div>
      <h1 id="eventDate">27th of January</h1>
      <h2 id="eventLocation">FORT33 | Leusden, NL</h2>
    </>
  );
}

export default Landing;
