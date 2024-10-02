import Breadcrumb from "@/components/Breadcrumb";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-2">
      <Breadcrumb currentPage="404 - Not Found" />
      <h2 className="ml-4 text-pink">Hmm, Something went wrong here</h2>
      <img src="/404.webp" alt="" loading="lazy" />
    </main>
  );
}
