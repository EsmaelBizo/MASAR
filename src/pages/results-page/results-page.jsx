import { ROUTES } from "../../constants/routes";
import { getCityById } from "../../constants/cities";
import { useBookingStore } from "../../store/use-booking-store";
import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { ResultsContentSection } from "./sections/results-content-section/results-content-section";

export function ResultsPage() {
  const search = useBookingStore((state) => state.search);
  const originCity = getCityById(search.origin);
  const destinationCity = getCityById(search.destination);

  return (
    <main className="min-h-[70vh]">
      <PageBanner
        breadcrumbs={[
          { label: "الرئيسية", to: ROUTES.HOME },
          { label: "رحلات البولمان المتاحة" },
        ]}
        eyebrowText="مَسار | جدول الرحلات بين المحافظات"
        title="قارن المواعيد.."
        highlightedTitle="وثبّت مقعدك في البولمان"
        description={`من ${originCity.terminal} إلى ${destinationCity.terminal} — اختر فئة VIP (2+1) أو البولمان السياحي (2+2).`}
        iconName="bus"
      />
      <ResultsContentSection />
    </main>
  );
}

export default ResultsPage;
