export interface ItemProps {
  image: string
  title: string
  artist: string
}

export default function Item(item: ItemProps) {
  return (
    <div className="grid-rows-subgrid nth-of-type-[3]:row-span-2 relative">
      <img src={item.image} alt={item.title} className="rounded-xl md:rounded-2xl " />
        <span className="absolute bottom-2 left-2 bg-primary-800 px-2.5 py-1.5 rounded-lg md:rounded-xl shadow-md border-effect font-medium">{item.title} by {item.artist}</span>
    </div>
  )
}
