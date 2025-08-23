import { galleryItems } from '@/data/gallery-items.ts'
import Item from '@/components/gallery/item.tsx'


export default function Galleries() {
    const items = galleryItems
  return (
      <section><h2 className="text-accent-pink p-2 text-2xl uppercase md:p-4 md:pb-0">Gallery</h2>
    <div className="sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-2 pt-4">

        <div className="flex flex-col gap-2">
            <Item {...items[0]} />
            <Item {...items[1]} />
        </div>
        <div className="flex flex-col gap-2">
            <Item {...items[2]} />
        </div>
        <div className="flex col-span-1 max-md:col-span-2 md:flex-col gap-2">
            <Item {...items[3]} />
            <Item {...items[4]} />
        </div>
    </div></section>
  )
}
