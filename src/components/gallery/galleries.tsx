import { galleryItems } from '@/data/gallery-items.ts'
import Item from '@/components/gallery/item.tsx'

export default function Galleries() {
  return (
    <section>
      <h2 className="text-accent-pink p-2 text-2xl uppercase md:p-4 md:pb-0">Gallery</h2>
      <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 pt-4">
        <div className="flex flex-col gap-2 md:gap-4">
          <Item {...galleryItems[0]} />
          <Item {...galleryItems[6]} />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <Item {...galleryItems[1]} />
          <Item {...galleryItems[4]} />
          <Item {...galleryItems[7]} />
        </div>
        <div className="flex flex-col sm:grid grid-cols-2 md:flex md:flex-col gap-2 md:gap-4 max-md:col-span-2">
          <Item {...galleryItems[5]} className="max-md:row-span-2" />
          <Item {...galleryItems[2]} />
          <Item {...galleryItems[3]} />
        </div>
      </div>
    </section>
  )
}
