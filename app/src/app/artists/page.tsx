import Artist from "@/components/artist";
import { artists } from "@/constants";

export default function Artists() {
  return (
    <section id="artists" className="w-full flex-col gap-12">
      {artists.map((artist, index: any) => {
        return <Artist key={index} {...artist} />;
      })}
    </section>
  );
}
