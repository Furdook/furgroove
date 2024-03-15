import Image from "next/image";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { gallery } from "@/constants";

export default function Gallery() {
  return (
    <main className="mx-auto flex max-w-4xl lg:w-screen">
      <section className="mb-24 mt-12 flex-wrap px-6 lg:px-0">
        <h1 className="w-full text-3xl text-pink">Gallery</h1>
        {gallery.map((item, index: any) => {
          return (
            <Card
              key={index}
              className="relative min-w-56 flex-shrink-0 flex-grow basis-1/4 gap-6"
            >
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className="aspect-square w-full rounded-sm"
              />
              <CardTitle className="pl-2 pt-2 text-xl">{item.title}</CardTitle>
              <CardDescription className="text-md pl-2 opacity-50">
                Created by {item.createdBy}
              </CardDescription>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
