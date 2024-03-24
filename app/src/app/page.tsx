import Toast from "@/components/toast";
import Artists from "./artists/page";
import Information from "./information/page";
import Location from "./location/page";
import Tickets from "./tickets/page";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col">
      <Toast />
      <Information />
      <Location />
      <Tickets />
      <Artists />
    </main>
  );
}
