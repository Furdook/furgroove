import Breadcrumb from "@/components/Breadcrumb";
import HeaderImage from "@/components/HeaderImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <HeaderImage />
        <Breadcrumb currentPage="Gallery" />
      </header>
      <h2 className="ml-4 text-pink">Gallery</h2>
      <section className="flex flex-wrap gap-4">
        {items.map((item) => {
          return <GalleryItem key={item.title} {...item} />;
        })}
      </section>
    </main>
  );
}

type Item = {
  title: string;
  artist: string;
  src: string;
};

const items: Item[] = [
  {
    title: "Mai Tai",
    artist: "my mum",
    src: "/furries/mai.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
  {
    title: "Something",
    artist: "Someone",
    src: "/404.webp",
  },
];

function GalleryItem(item: Item) {
  return (
    <Dialog>
      <DialogTrigger className="aspect-square w-full rounded bg-primary-800 sm:w-[calc(100%/2-0.5rem)] md:w-[calc(100%/3-2rem/3)]">
        <img
          src={item.src}
          alt={item.title}
          className="h-full rounded object-cover"
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>
            <img
              src={item.src}
              alt={item.title}
              className="rounded-inner"
              loading="lazy"
            />
          </DialogDescription>
          <DialogFooter>Created by {item.artist}</DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
