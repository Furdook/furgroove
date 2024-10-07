export default function Announcement() {
  return (
    <section className="flex w-full flex-col rounded rounded-b-inner bg-pink p-4 shadow-mds">
      <h1 className="text-primary-900 font-semibold">FurGroove: 2. Edition</h1>
      <p className="text-primary-900 pb-6 pt-2">
        Tickets are now live for the second edition of FurGroove!
      </p>
      <a
        href="/furgroove"
        className="path rounded-inner w-fit bg-primary-900 px-8 py-2.5 shadow-md transition-colors duration-200 hover:bg-primary-800"
      >
        View event details
      </a>
    </section>
  );
}
