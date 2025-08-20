import { Breadcrumb } from '@/components/ui/breadcrumb.tsx'
import { HomeIcon } from 'lucide-react'
import Team from '@/components/about/team.tsx'
import Information from '@/components/about/information.tsx'
// import BecomeAMember from "@/components/about/become-a-member.tsx";

export default function About() {
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
            <Breadcrumb.Page>About</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>

      <main className="flex flex-col gap-12 pb-4">
        <Information />
        <Team />
        {/* <BecomeAMember /> */}
      </main>
    </>
  )
}
