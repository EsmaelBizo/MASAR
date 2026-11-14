import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { AboutStorySection } from "./sections/about-story-section/about-story-section";

export function AboutPage() {
  return (
    <main className="min-h-[70vh]">
      <PageBanner
        eyebrowText="هوية ورؤية مَسار | MASAR"
        title="مَسار.."
        highlightedTitle="أصالة الضيافة وحداثة السفر"
        description="البوابة الرقمية الأولى في سوريا التي تجمع كافة شركات البولمانات المعتمدة في نافذة واحدة."
      />
      <AboutStorySection />
    </main>
  );
}

export default AboutPage;
