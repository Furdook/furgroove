import Artist from "@/components/artist";

export default function Artists() {
  return (
    <section id="artists" className="flex-col gap-12 w-full">
      <Artist
        name="beatbird"
        quote="The one and only Dutch DJ Bird! Living close to the venue so it's
          almost like home. Loves to play all kinds of styles!"
      />
      <Artist
        name="yellowstreak"
        quote="If you have ever been at a big furry convention you would have heard
          the beats of our French DJ Djem. He loves to play harder styles and
          will definitly let you move to sound of his beats."
      />
      <Artist
        name="menos"
        quote="One of our Dutch DJ's that will end the evening with one mission; Make everyone like hardstyle! Get ready for some bangers, sing-a-longs and a bass that will blow you away."
      />
    </section>
  );
}
