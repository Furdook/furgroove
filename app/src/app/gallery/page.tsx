import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { gallery } from "@/constants";

export default function Gallery() {
  return (
    <main className="mx-auto flex max-w-4xl lg:w-screen">
      <section className="mt-24 flex-wrap px-6 pt-6 lg:px-0 mb-24">
        <h1 className="w-full text-3xl">Gallery</h1>
        {
          /**
           * Renders a grid of cards with an image, a title, a created by credit and the artist's social media account
           * */
          gallery.map((item, index) => {
            return (
              <Card
                key={index}
                className="relative min-w-56 flex-shrink-0 flex-grow basis-1/4 gap-6"
              >
                <img
                  src={item.image}
                  alt=""
                  className="aspect-square w-full rounded-sm"
                />
                <CardTitle className="pl-2 pt-2 text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-md pl-2 opacity-50">
                  Created by {item.createdBy}
                </CardDescription>
              </Card>
            );
          })
        }
      </section>
    </main>
  );
}
