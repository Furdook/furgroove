import Breadcrumb from "@/components/Breadcrumb";
import Information from "@/components/Information";
import Code from "./_components/Code";
import Team from "./_components/Team";
import HeaderImage from "@/components/HeaderImage";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <HeaderImage />
        <Breadcrumb currentPage="About" />
      </header>
      <Reveal>
        <div className="flex flex-col gap-4">
          <Information />
          <Code />
          <Team />
        </div>
      </Reveal>
    </main>
  );
}
