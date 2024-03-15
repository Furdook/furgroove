import { Button } from "@/components/ui/button";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="mb-56 h-screen flex-col gap-0 text-2xl font-semibold"
    >
      <h1 className="mb-6 text-4xl uppercase">Prices</h1>
      <h2 className="mb-2 text-yellow">Early Bird Ticket</h2>
      <h3>27.50€</h3>
      <h2 className="mb-2 mt-6 text-blue">Standard Ticket</h2>
      <h3>30€</h3>
      <h2 className="mb-2 mt-6 text-pink">Late Ticket</h2>
      <h3>32.50€</h3>
      <Button className="mt-8">TICKETS</Button>
    </section>
  );
}
