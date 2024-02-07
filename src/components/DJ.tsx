import "./styles/DJs.css";

/**
 * Component to make a DJ section. Every other DJ will be displayed in a different color
 * as well as opposite order of quote and name/image
 *
 * @param props name of the DJ and a quote from them.
 * @returns a DJ component displaying the name and quote of the DJ.
 */
function DJ(props: { name: string; quote: string }) {
  return (
    <section className={"dj " + props.name}>
      <div className="dj__image">
        <img src={"./" + props.name + ".webp"} alt="Image of Artist" />
        <h1 className="dj__name">{props.name}</h1>
      </div>
      <p className="dj__quote">{props.quote}</p>
    </section>
  );
}

export default DJ;
