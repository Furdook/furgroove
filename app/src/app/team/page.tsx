import Artist from "@/components/artist";
import { team } from "@/constants";

export default function Team() {
  return (
    <main className="mx-auto my-12 flex max-w-[65.5rem] flex-col gap-12">
      <h1 className="mb-6 w-full pl-6 text-3xl text-yellow">Meet the Team!</h1>
      <section className="w-full flex-col gap-12">
        {team.map((member, index) => {
          return <Artist key={index} {...member} />;
        })}
      </section>
    </main>
  );
}
