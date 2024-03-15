import { Button } from "@/components/ui/button";

export default function Tickets() {
  return (
    <section
      id="Tickets"
      className="flex-col text-2xl h-screen font-semibold gap-0"
    >
      <h1 className="text-4xl uppercase mb-6">Prices</h1>
      <h2 className="text-yellow mb-2">Early Bird Ticket</h2>
      <h3>27.50€</h3>
      <h2 className="text-blue mt-6 mb-2">Standard Ticket</h2>
      <h3>30€</h3>
      <h2 className="text-pink mt-6 mb-2">Late Ticket</h2>
      <h3>32.50€</h3>
      <Button className="mt-6">TICKETS</Button>
    </section>
  );
}
