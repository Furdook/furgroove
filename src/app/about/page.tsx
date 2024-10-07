import Breadcrumb from "@/components/Breadcrumb";
import Information from "@/components/Information";
import Code from "./_components/Code";
import Team from "./_components/Team";
import HeaderImage from "@/components/HeaderImage";
import RevealFade from "@/components/RevealFade";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <HeaderImage />
        <Breadcrumb currentPage="About" />
      </header>
      <RevealFade>
        <div className="flex flex-col gap-4">
          <Information />
          <Code />
          <Team />
        </div>
      </RevealFade>
    </main>
  );
}
