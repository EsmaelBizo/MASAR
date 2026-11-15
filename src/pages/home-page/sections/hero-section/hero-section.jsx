import { useState } from "react";
import { Container } from "../../../../layouts/container/container";
import { HeroCopy } from "./components/hero-copy/hero-copy";
import { HeroVisual } from "./components/hero-visual/hero-visual";
import { HeroSearchShell } from "./components/hero-search-shell/hero-search-shell";

const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85";

export function HeroSection() {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden border-b border-accent/25 bg-[#090D14] pt-[72px] pb-[86px] max-[900px]:pt-[52px] max-[900px]:pb-[68px] max-[650px]:pt-9 max-[650px]:pb-[54px] text-white"
    >
      {/* 1. Full-Bleed Cinema Hero Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {!bgFailed ? (
          <img
            src={HERO_BACKGROUND_IMAGE}
            alt="بولمان سفر حديث على الطريق السريع"
            onError={() => setBgFailed(true)}
            className="h-full w-full scale-[1.02] object-cover object-center brightness-[0.82] contrast-[1.08] saturate-[1.06] transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#090D14] via-[#163A5F] to-[#0F2944]" />
        )}

        {/* Multi-layered editorial overlays for global-standard contrast & RTL text legibility */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(270deg,rgba(9,13,20,0.94)_0%,rgba(15,41,68,0.84)_46%,rgba(9,13,20,0.58)_78%,rgba(9,13,20,0.76)_100%)]
            max-[900px]:bg-[linear-gradient(180deg,rgba(9,13,20,0.88)_0%,rgba(15,41,68,0.82)_55%,rgba(9,13,20,0.95)_100%)]
          "
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/25 to-[#090D14]/65"
          aria-hidden="true"
        />
      </div>

      {/* 2. Architectural Heritage Grid & Subtle Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-arch-grid opacity-35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-6 right-[-120px] z-[1] size-[460px] rounded-full bg-[radial-gradient(circle,rgba(200,138,50,0.22),transparent_68%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-140px] left-[18%] z-[1] size-[440px] rounded-full bg-[radial-gradient(circle,rgba(46,111,94,0.2),transparent_70%)]"
        aria-hidden="true"
      />

      {/* 3. Foreground Content & Floating Telemetry over Background */}
      <Container className="relative z-10">
        <div className="grid min-h-[430px] max-[900px]:min-h-0 grid-cols-[1.18fr_0.82fr] max-[960px]:grid-cols-1 items-center gap-10 max-[960px]:gap-7">
          <HeroCopy />
          {/* <HeroVisual /> */}
        </div>

        {/* <HeroSearchShell /> */}
      </Container>
    </section>
  );
}

export default HeroSection;
