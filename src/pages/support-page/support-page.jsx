import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { SupportFaqSection } from "./sections/support-faq-section/support-faq-section";

export function SupportPage() {
  return (
    <main className="min-h-[70vh]">
      <PageBanner
        eyebrowText="مركز مساعدة المسافرين"
        title="إرشادات الحجز والسفر عبر"
        highlightedTitle="مَسار"
        description="إجابات وافية حول حجز البولمانات، فئات المقاعد (2+1)، والكراجات المعتمدة."
      />
      <SupportFaqSection />
    </main>
  );
}

export default SupportPage;
