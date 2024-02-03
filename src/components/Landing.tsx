import "./styles/Landing.css";
import logo from "/logo.webp";

function Landing() {
  return (
    <>
      <div id="image__container">
        <img id="furgrooveImage" src={logo} alt="Furgroove logo" />
      </div>
      <h1 id="eventDate">10th of August</h1>
      <h2 id="eventLocation">BOOT 3 | Rotterdam, NL</h2>
    </>
  );
}

export default Landing;
