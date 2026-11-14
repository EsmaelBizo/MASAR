import { Container } from "../../../../layouts/container/container";
import { HeroCopy } from "./components/hero-copy/hero-copy";
import { HeroVisual } from "./components/hero-visual/hero-visual";
import { HeroSearchShell } from "./components/hero-search-shell/hero-search-shell";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[56px] pb-[72px] max-[650px]:pt-8 max-[650px]:pb-[52px] text-white">
      <div
        className="pointer-events-none absolute -top-36 -left-28 size-[520px] rounded-full border border-dashed border-accent/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 right-[-120px] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(200,138,50,0.16),transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid min-h-[410px] grid-cols-[1.02fr_0.98fr] max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 items-center gap-9 max-[900px]:gap-4 max-[650px]:gap-0">
          <HeroCopy />
          <HeroVisual />
        </div>

        <HeroSearchShell />
      </Container>
    </section>
  );
}

export default HeroSection;
