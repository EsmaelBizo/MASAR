import { ROUTES } from "../../constants/routes";
import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { CompaniesGridSection } from "./sections/companies-grid-section/companies-grid-section";

export function CompaniesPage() {
  return (
    <main className="min-h-[70vh]">
      <PageBanner
        breadcrumbs={[
          { label: "الرئيسية", to: ROUTES.HOME },
          { label: "شركات البولمان المعتمدة" },
        ]}
        eyebrowText="شركاء مَسار في المحافظات السورية"
        title="أسطول بولمانات حديث"
        highlightedTitle="يربط سوريا بأمان"
        description="قارن بين شركات النقل المعتمدة وفئات الحافلات (VIP 2+1 أو السياحي 2+2) واختر الرحلة الأنسب لك."
      />
      <CompaniesGridSection />
    </main>
  );
}

export default CompaniesPage;
