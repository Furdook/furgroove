import { NavLink } from 'react-router'

export default function Information() {
  return (
    <section className="flex flex-col gap-2 p-2 max-md:pt-6 md:p-4">
      <h2 className="text-accent-pink text-2xl uppercase">General</h2>
      <p>
        We wish to create the best atmosphere possible for everyone attending FurGroove, we
        therefore encourage you to read our&nbsp;
        <NavLink
          title="Code of conduct"
          to="/about/code-of-conduct"
          className="decoration-accent-pink none underline underline-offset-4"
        >
          Code of Conduct
        </NavLink>
        &nbsp;before attending the party. Here you may also find general rulesets for the event, in
        addition to our dress code. If you have any further questions not listed, you can contact us
        though our&nbsp;
        <a
          title="Telegram Group Chat"
          href="https://t.me/furgroove"
          target="_blank"
          rel="noreferrer"
          className="decoration-accent-pink none underline underline-offset-4"
        >
          Telegram Group Chat
        </a>
        , or by E-mail at&nbsp;
        <a href="mailto:info@furgroove.club">info@furgroove.club</a>.
      </p>
    </section>
  )
}
