import { Breadcrumb } from '@/components/ui/breadcrumb.tsx'
import { HomeIcon } from 'lucide-react'

export default function CodeOfConduct() {
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
            <Breadcrumb.Link to="/about">About</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Code of Conduct</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
      <main className="flex flex-col gap-2.5 p-2 pb-12 md:p-4">
        <h2 className="text-accent-pink pt-4 text-2xl uppercase">Code of Conduct</h2>
        <p className="pt-4">
          We want to build the best party ever for you. To make sure that everything runs smoothly
          and fun we have a few rules for everyone. Please make yourself familiar with them. Most
          are common sense but we still want to be sure you know what to expect. The rules will be
          enforced by the Party Crew. Please listen to them at all times and follow their requests.
          If you have any problem with one of the crew members, please let one of the party staff
          members know.
        </p>
        <ul className="list-paw relative py-4 pl-12">
          <li>Always treat each other with respect.</li>
          <li>Always follow the directions by the Party Crew.</li>
          <li>You are liable for any damage you might cause.</li>
          <li>We do not accept any kind of harassment, period.</li>
          <li>
            While we are inside a location we are still visible for the other public. Please behave
            like that and give the best impression.
          </li>
        </ul>
        <h3 className="text-xl">Registration</h3>
        <ul className="list-paw relative py-4 pl-12">
          <li>You have to be at least 18 on the day of the party to attend.</li>
          <li>Only staff and registered attendees are allowed inside the location.</li>
          <li>
            Attendees are required to wear their badge and lanyard at all times during the party.
          </li>
          <li>Badges need to be shown upon request by staff.</li>
        </ul>
        <h3 className="text-xl">Venue Rules</h3>
        <ul className="list-paw relative py-4 pl-12">
          <li>
            It is not allowed to climb over any railings or walk on parts that are off limits for
            attendees.
          </li>
          <li>It is not allowed to bring your own beverages or food to the party.</li>
          <li>It is not allowed to smoke outside of the designated smoke area.</li>
          <li>
            Please do not use personal music players while at the location. We have music for a
            reason.
          </li>
        </ul>
        <h3 className="text-xl">Clothing & Decency</h3>
        <ul className="list-paw relative py-4 pl-12">
          <li>Nudity exceeding the equivalent of bathing suits is not allowed.</li>
          <li>
            Sexual behavior that goes beyond a mere display of affection is not allowed in public.
          </li>
          <li>
            Display of fetish gear is not permitted in public, even if it is part of a costume.
          </li>
        </ul>
        <h3 className="pt-2 pb-4 text-xl">Drugs & Alcohol</h3>
        <p>
          It is forbidden to bring or use drugs to the party. If we find you in the possession of or
          distributing illegal or controlled substances we will notify the local authorities and the
          venue. Smoking and vaping is only allowed in the designated smoking areas.
        </p>
        <h3 className="pt-6 pb-4 text-xl">Photography & Video</h3>
        <p>
          Everyone is welcome to take pictures and capture memories for private use. Selling or
          using the videos and pictures for profitable companies is not allowed.
        </p>
      </main>
    </>
  )
}
