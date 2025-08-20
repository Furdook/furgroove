import Logo from '/vectors/logo.svg'

export default function Footer() {
  return (
    <footer className="card border-effect mb-4 flex flex-col gap-2 p-4">
      <img src={Logo} height={48} width={192} alt="FurGroove logo" className="-mt-2 -ml-3" />
      <ul>
        <li>
          <a href="https://t.me/furgroove" target="_blank" rel="noreferrer">
            Telegram Group
          </a>
        </li>
        <li>
          <a href="https://t.me/furgrooveinfo" target="_blank" rel="noreferrer">
            Telegram Channel
          </a>
        </li>
        <p className="mt-4 opacity-50">kvk.no: 95840346</p>
      </ul>
    </footer>
  )
}
