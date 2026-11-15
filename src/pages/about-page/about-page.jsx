import { ROUTES } from "../../constants/routes";
import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { AboutStorySection } from "./sections/about-story-section/about-story-section";

export function AboutPage() {
  return (
    <main className="min-h-[75vh]">
      <PageBanner
        breadcrumbs={[
          { label: "الرئيسية", to: ROUTES.HOME },
          { label: "عن منصة مَسار" },
        ]}
        eyebrowCode="IDENTITY // MANIFESTO"
        eyebrowText="هوية ورؤية مَسار | MASAR"
        title="مَسار.."
        highlightedTitle="أصالة الضيافة وحداثة السفر"
        description="البوابة الرقمية الأولى في سوريا التي تجمع كافة شركات البولمانات المعتمدة في نافذة واحدة، بتصميم يمزج عراقة العمارة السورية بابتكارات النقل الذكي."
        iconName="sparkle"
      />
      <AboutStorySection />
    </main>
  );
}

export default AboutPage;
