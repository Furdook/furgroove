import "./styles/DJs.css";
import DJ from "./DJ";

function DJs() {
  return (
    <section id="DJs">
      <DJ
        name="beatbird"
        quote="The one and only Dutch DJ Bird! Living close to the venue so it's
          almost like home. Loves to play all kinds of styles!"
      />
      <DJ
        name="djem"
        quote="If you have ever been at a big furry convention you would have heard
          the beats of our French DJ Djem. He loves to play harder styles and
          will definitly let you move to sound of his beats."
      />
      <DJ
        name="stripe"
        quote="The Mash-up king of Germany! He is the only one that can mix schlagers
          with baby shark and still make it sound good. Famous for the Dead Dog
          Parties at Eurofurence and Cologne FurDance."
      />
      <DJ
        name="menos"
        quote="One of our Dutch DJ's that will end the evening with one mission; Make
          everyone like hardstyle! Get ready for some bangers, sing-a-longs and
          a bass that will blow you away."
      />
    </section>
  );
}

export default DJs;
