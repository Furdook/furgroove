export default function Header() {
  return (
    <div className="relative h-screen w-full md:h-fit">
      <img
        src="/images/backdrop.webp"
        height={640}
        width={1024}
        alt="Backdrop"
        role="presentation"
        className="h-full object-cover"
      />
      <img
        src="/vectors/logo.svg"
        width={720}
        alt="FurGroove logo"
        role="presentation"
        className="absolute top-1/3 left-1/2 -translate-x-1/2"
      />
    </div>
  )
}
