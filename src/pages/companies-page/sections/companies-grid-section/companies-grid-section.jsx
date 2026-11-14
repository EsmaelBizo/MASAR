import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useCompaniesQuery } from "../../../../hooks/use-trips-query";
import { useBookingStore } from "../../../../store/use-booking-store";
import { Container } from "../../../../layouts/container/container";
import { CompanyCard } from "./components/company-card/company-card";
import { LoadingState } from "../../../../components/shared/loading-state/loading-state";

export function CompaniesGridSection() {
  const navigate = useNavigate();
  const { data: companies = [], isLoading, isError } = useCompaniesQuery();
  const setCompanyFilter = useBookingStore((state) => state.setCompanyFilter);

  const handleSelectCompany = (companyId) => {
    setCompanyFilter(companyId);
    navigate(ROUTES.RESULTS);
  };

  return (
    <Container as="section" className="py-[82px] max-[650px]:py-[56px]">
      {isLoading ? (
        <LoadingState label="جارٍ تحميل شركات النقل..." />
      ) : isError ? (
        <LoadingState
          label="تعذر تحميل شركات النقل. حاول مرة أخرى."
          className="text-danger"
        />
      ) : (
        <div className="grid grid-cols-4 max-[1150px]:grid-cols-2 max-[650px]:grid-cols-1 gap-[18px]">
          {companies.map((company, index) => (
            <div
              key={company.id}
              style={{ animationDelay: `${Math.min(index * 75, 320)}ms` }}
              className="animate-slide-up h-full"
            >
              <CompanyCard
                company={company}
                onSelectCompany={handleSelectCompany}
              />
            </div>
          ))}
        </div>
      )}
      <p className="mt-6 mb-0 text-[11px] text-muted">
        ملاحظة: أسماء الشركات والكراجات والمواعيد المعروضة في منصة «مَسار» مخصصة
        للنموذج التطبيقي والتدريبي.
      </p>
    </Container>
  );
}

export default CompaniesGridSection;
