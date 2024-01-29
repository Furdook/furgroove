import "./styles/DJs.css";

function DJ(props: { name: string; quote: string }) {
  return (
    <section className={"dj " + props.name}>
      <div className="dj__image">
        <img src={"src/assets/" + props.name + ".webp"} alt="Image of Artist" />
        <h1 className="dj__name">{props.name}</h1>
      </div>
      <p className="dj__quote">{props.quote}</p>
    </section>
  );
}

export default DJ;
