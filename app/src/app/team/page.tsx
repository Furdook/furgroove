import Artist from "@/components/artist";

import { team } from "@/constants";

export default function Team() {
  return (
    <main className="mx-auto my-12 flex max-w-4xl flex-col gap-12 px-6 b:px-0">
      <h1 className="mb-6 w-full text-3xl text-yellow">Meet the Team!</h1>
      <section className="w-full flex-col gap-12">
        {team.map((member, index) => {
          return <Artist key={index} {...member} />;
        })}
      </section>
    </main>
  );
}
