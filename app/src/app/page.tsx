import Information from "./information/page";
import Location from "./location/page";
import Tickets from "./tickets/page";

export default function Home() {
  return (
    <main className="flex flex-col max-w-6xl mx-auto">
      <Information />
      <Location />
      <Tickets />
    </main>
  );
}
