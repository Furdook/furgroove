import Image from "next/image";
import { Card, CardDescription, CardTitle, CardContent } from "./ui/card";

export default function Artist(props: { name: string; quote: string }) {
  return (
    <Card
      className={`${props.name} flex max-w-[712px] md:max-w-full p-6 md:mx-auto text-primary-900 gap-6 md:even:flex-row-reverse flex-col md:flex-row`}
    >
      <CardContent className="relative p-0 mb-6">
        <Image
          src="/map.webp"
          alt=""
          height={400}
          width={400}
          className="border-colour z-0 relative w-full"
        />
        <CardTitle className="title-bg-colour w-fit px-8 py-4 mx-auto mt-[-2.5rem] inset-x-0 z-10 absolute text-2xl uppercase font-normal">
          {props.name}
        </CardTitle>
      </CardContent>
      <CardDescription className="quote-bg-colour h-fit w-full text-wrap p-6 my-auto max-w-[50ch] text-lg">
        {props.quote}
      </CardDescription>
    </Card>
  );
}
