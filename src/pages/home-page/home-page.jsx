import { HeroSection } from "./sections/hero-section/hero-section";
import { MetricsStrip } from "./sections/metrics-strip/metrics-strip";
import { DestinationsSection } from "./sections/destinations-section/destinations-section";
import { ProcessSection } from "./sections/process-section/process-section";
import { TrackingPreviewSection } from "./sections/tracking-preview-section/tracking-preview-section";
import { CtaSection } from "./sections/cta-section/cta-section";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <MetricsStrip />
      <DestinationsSection />
      <ProcessSection />
      <TrackingPreviewSection />
      <CtaSection />
    </main>
  );
}

export default HomePage;
