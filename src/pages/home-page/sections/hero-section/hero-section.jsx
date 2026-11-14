import { Container } from "../../../../layouts/container/container";
import { HeroCopy } from "./components/hero-copy/hero-copy";
import { HeroVisual } from "./components/hero-visual/hero-visual";
import { HeroSearchShell } from "./components/hero-search-shell/hero-search-shell";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-accent/20 bg-navy dark:bg-[#090D14] pt-[60px] pb-[78px] max-[650px]:pt-8 max-[650px]:pb-[52px] text-white">
      {/* Architectural Grid & Atmospheric Radial Glows */}
      <div
        className="pointer-events-none absolute inset-0 bg-arch-grid opacity-65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-44 -left-32 size-[560px] rounded-full border border-dashed border-accent/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -left-12 size-[380px] rotate-45 rounded-[36px] border border-accent/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-[-140px] size-[440px] rounded-full bg-[radial-gradient(circle,rgba(200,138,50,0.2),transparent_68%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-120px] left-[22%] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(46,111,94,0.16),transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid min-h-[420px] grid-cols-[1.06fr_0.94fr] max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 items-center gap-10 max-[900px]:gap-5 max-[650px]:gap-0">
          <HeroCopy />
          <HeroVisual />
        </div>

        <HeroSearchShell />
      </Container>
    </section>
  );
}

export default HeroSection;
