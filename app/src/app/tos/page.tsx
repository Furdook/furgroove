import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { tos } from "@/constants";

export default function TOS() {
  return (
    <main className="mx-auto my-6 max-w-4xl px-6 b:px-0">
      <h1 className="w-full text-3xl text-blue">Code of Conduct</h1>
      <p className="pt-4 leading-8">
        We want to build the best party ever for you. To make sure that
        everything runs smoothly and fun we have a few rules for everyone.
        Please make yourself familiar with them. Most are common sense but we
        still want to be sure you know what to expect. The rules will be
        enforced by the Party Crew. Please listen to them at all times and
        follow their requests. If you have any problem with one of the crew
        members, please let one of the party staff members know.
      </p>
      <ul className="my-4 list-disc pl-4 text-yellow">
        <li>
          <p className="text-white">Always treat each other with respect.</p>
        </li>
        <li>
          <p className="text-white">
            Always follow the directions by the Party Crew.
          </p>
        </li>
        <li>
          <p className="text-white">
            You are liable for any damage you might cause.
          </p>
        </li>
        <li>
          <p className="text-white">
            We do not accept any kind of harassment, period.
          </p>
        </li>
      </ul>
      <p className="mb-4">
        While we are inside a location we are still visible for the other
        public. Please behave like that and give the best impression.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-md py-6 text-lg"
      >
        {
          /**
           * Renders an accordion with the title and content of the terms of service
           */
          tos.map((item, index) => {
            return (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger
                  className={`${item.colour} decoration-4 underline-offset-2`}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-8">
                  {
                    /**
                     * If the content is a string, it will be rendered as a paragraph.
                     * If it is an array, it will be rendered as a list of bullet points
                     */
                    typeof item.content === "string" ? (
                      item.content
                    ) : (
                      <ul className={`${item.colour} pl-6`}>
                        {item.content.map((bulletPoint, index) => {
                          return (
                            <li key={index} className="list-disc pt-2">
                              <p className="text-white">{bulletPoint}</p>
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
    </main>
  );
}
