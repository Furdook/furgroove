import "./styles/Tickets.css";

function Tickets() {
  return (
    <section id="Tickets">
      <h1>Prices</h1>
      <h3 className="yellow">Early Bird Ticket</h3>
      <h2>27.50€</h2>
      <h3 className="blue">Standard Ticket</h3>
      <h2>30€</h2>
      <p className="fade">*prices include a 2.5€ service fee</p>
      <div id="button__container">
        <button
          onClick={() =>
            window.open(
              "https://fort33.stager.co/web/tickets/111327623",
              "_blank"
            )
          }
        >
          TICKETS
        </button>
      </div>
      <p className="fade">*external site</p>
    </section>
  );
}

export default Tickets;
