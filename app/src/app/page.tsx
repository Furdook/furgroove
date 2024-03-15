import Information from "./information/page";
import Location from "./location/page";

export default function Home() {
  return (
    <main className="flex flex-col max-w-6xl mx-auto">
      <Information />
      <Location />
    </main>
  );
}
