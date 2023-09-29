import "./styles/Tickets.css";

function Tickets() {
  return (
    <section id="Tickets">
      <h1>Prices</h1>
      <h3 className="yellow">Early Bird Ticket</h3>
      <h2>15€</h2>
      <h3 className="blue">Standard Ticket</h3>
      <h2>20€</h2>
      <p className="fade">*prices include a 2.5€ service fee</p>
      <div id="button__container">
        <button>TICKETS</button>
      </div>
      <p className="fade">*external site</p>
    </section>
  );
}

export default Tickets;
