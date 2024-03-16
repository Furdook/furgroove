import { Card, CardDescription, CardTitle, CardContent } from "./ui/card";

export default function Artist(props: {
  name: string;
  quote: string;
  image: string;
  position?: string;
  className?: string;
}) {
  return (
    <Card
      id={props.className}
      className={`${props.className ? "team-member" : ""} flex max-w-[712px] flex-col gap-6 text-primary-900 max-[935px]:px-6 md:mx-auto md:max-w-full md:flex-row md:even:flex-row-reverse`}
    >
      <CardContent className="relative mb-6 p-0">
        <img
          src={props.image}
          alt=""
          height={360}
          width={360}
          className="border-colour relative z-0 w-full"
        />
        <CardTitle className="title-bg-colour absolute inset-x-0 z-10 mx-auto mt-[-2.5rem] w-fit px-8 py-4 text-2xl font-normal uppercase">
          {props.name}
        </CardTitle>
        {props.position && (
          <CardContent className="position-colour text-md absolute inset-x-0 mx-auto w-full px-8 py-4 font-normal uppercase">
            <CardDescription className="mx-auto mt-4 text-center align-middle font-medium tracking-wide">
              {props.position}
            </CardDescription>
          </CardContent>
        )}
      </CardContent>
      <CardDescription className="quote-bg-colour mx-auto my-auto h-fit w-full text-wrap p-6 text-lg">
        {props.quote}
      </CardDescription>
    </Card>
  );
}
