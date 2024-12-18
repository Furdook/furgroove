import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tosItems = [
  "Always treat each other with respect.",
  "Always follow the directions by the Party Crew.",
  "You are liable for any damage you might cause.",
  "We do not accept any kind of harassment, period.",
  "While we are inside a location we are still visible for the other public. Please behave like that and give the best impression.",
];
const tos = [
  {
    title: "Registration",
    content: [
      "You have to be at least 18 on the day of the party to attend.",
      "Only staff and registered attendees are allowed inside the location.",
      "After ticket inspection you get a wristband. Losing this wristband means no more access!",
    ],
  },
  {
    title: "Venue Rules",
    content: [
      "It is not allowed to climb over any railings or walk on parts that are off limits for attendees.",
      "It is not allowed to bring your own beverages or food to the party.",
      "It is not allowed to smoke outside of the designated smoke area.",
      "Please do not use personal music players while at the location. We have music for a reason.",
    ],
  },
  {
    title: "Clothing and Decency",
    content: [
      "No bare genitals / buttocks, fake or real.",
      "Sexual behavior that goes beyond a mere display of affection is not allowed in public.",
      "No floggers/paddles or other devices. Same goes for inflatables.",
    ],
  },
  {
    title: "Drugs and Alcohol",
    content: `It is forbidden to bring or use drugs to the party.
              If we find you in the possession of or distributing illegal or controlled substances we will notify the local authorities and the venue FORT33.
              Smoking and vaping is only allowed in the designated smoking areas.`,
  },
  {
    title: "Photography and Video",
    content:
      "Everyone is welcome to take pictures and capture memories for private use. Selling or using the videos and pictures for profitable companies is not allowed.",
  },
];

export default function COC() {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded bg-afterdark-800 p-6"
    >
      <h3 className="text-2xl underline decoration-accent-500 underline-offset-4">
        Code of Conduct
      </h3>
      <p className="pt-4 leading-8">
        We want to build the best party ever for you. To make sure that
        everything runs smoothly and fun we have a few rules for everyone.
        Please make yourself familiar with them. Most are common sense but we
        still want to be sure you know what to expect. The rules will be
        enforced by the Party Crew. Please listen to them at all times and
        follow their requests. If you have any problem with one of the crew
        members, please let one of the party staff members know.
      </p>
      <ul className="py-4 pl-6 text-accent-500">
        {tosItems.map((item, index) => {
          return (
            <li key={index} className="list-disc pt-6 lg:pt-4">
              <p className="text-accent-300">{item}</p>
            </li>
          );
        })}
      </ul>
      {
        /**
         * Renders an accordion with the title and content of the terms of service
         */
        tos.map((item, index) => {
          return (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className="decoration-accent-500 underline-offset-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="leading-8">
                {
                  /**
                   * If the content is a string, it will be rendered as a paragraph.
                   * If it is an array, it will be rendered as a list of bullet points
                   */
                  typeof item.content === "string" ? (
                    item.content
                  ) : (
                    <ul className="pl-6 text-accent-500">
                      {item.content.map((bulletPoint, index) => {
                        return (
                          <li key={index} className="list-disc pt-2">
                            <p className="text-accent-300">{bulletPoint}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )
                }
              </AccordionContent>
            </AccordionItem>
          );
        })
      }
    </Accordion>
  );
}
