import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { gallery } from "@/constants";

export default function Gallery() {
  return (
    <main className="mx-auto flex max-w-4xl lg:w-screen">
      <section className="mt-24 flex-wrap px-6 pt-6 lg:px-0">
        <h1 className="w-full text-3xl text-pink">Gallery</h1>
        {gallery.map((item, index: any) => {
          return (
            <Dialog key={index}>
              <DialogTrigger className="relative min-w-56 flex-shrink-0 flex-grow basis-1/4 gap-6">
                <Card className="hover:cursor-zoom-in">
                  <img
                    src={item.image}
                    alt=""
                    height={400}
                    width={400}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                  <CardTitle className="pl-2 pt-2 text-left text-xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-md pl-2 text-left opacity-50">
                    Created by {item.createdBy}
                  </CardDescription>
                </Card>
              </DialogTrigger>
              <DialogContent className="w-fit max-w-4xl rounded-lg border-[1px] border-primary-800">
                <DialogHeader>
                  <img
                    src={item.image}
                    height={400}
                    width={400}
                    alt={item.title}
                    className="mb-4 rounded-md"
                  />
                  <DialogTitle className="text-left text-xl">
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="text-left text-lg opacity-50">
                    Created by {item.createdBy}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </section>
    </main>
  );
}
