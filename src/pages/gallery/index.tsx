import { Breadcrumb } from '@/components/ui/breadcrumb.tsx'
import { HomeIcon } from 'lucide-react'
import Galleries from '@/components/gallery/galleries.tsx'

export default function Gallery() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">
              <HomeIcon size={16} aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Gallery</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
      <main className="flex flex-col gap-12 pb-4">
        <Galleries />
      </main>
    </>
  )
}
