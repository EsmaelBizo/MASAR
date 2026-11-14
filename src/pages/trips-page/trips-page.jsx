import { ROUTES } from "../../constants/routes";
import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { TripsContentSection } from "./sections/trips-content-section/trips-content-section";

export function TripsPage() {
  return (
    <main className="min-h-[70vh]">
      <PageBanner
        breadcrumbs={[
          { label: "الرئيسية", to: ROUTES.HOME },
          { label: "حجوزاتي وتذاكري" },
        ]}
        eyebrowText="التذاكر الرقمية المرتبطة بحسابك"
        title="تذاكر البولمان"
        highlightedTitle="محفوظة في هاتفك"
        description="أبرز تذكرتك الإلكترونية ورمز QR عند بوابة الصعود في الكراج دون الحاجة للاتصال بالإنترنت."
      />
      <TripsContentSection />
    </main>
  );
}

export default TripsPage;
