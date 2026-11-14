import { useCompaniesQuery } from "../../../../hooks/use-trips-query";
import { useBookingStore } from "../../../../store/use-booking-store";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { CompanyPickCard } from "./components/company-pick-card/company-pick-card";

export function CompanyPickSection() {
  const companyFilter = useBookingStore((state) => state.companyFilter);
  const setCompanyFilter = useBookingStore((state) => state.setCompanyFilter);
  const { data: companies = [], isLoading } = useCompaniesQuery();

  return (
    <div className="mt-[31px]">
      <div className="mb-[15px] flex items-center max-[650px]:items-start justify-between gap-4">
        <div className="flex items-center gap-[11px]">
          <span className="font-tabular grid size-9 place-items-center rounded-xl bg-soft-gold text-[14px] font-bold text-accent-deep">
            01
          </span>
          <div>
            <h3 className="m-0 font-heading text-[15px] max-[650px]:text-[13px] font-bold">
              اختر شركة البولمان المعتمدة
            </h3>
            <p className="m-0 text-[12px] max-[650px]:text-[11px] text-muted">
              استعرض جميع الشركات أو حدد شركتك المفضلة لمقارنة رحلات VIP 2+1
              والسياحي.
            </p>
          </div>
        </div>
        <span className="flex max-[650px]:hidden items-center gap-[7px] text-[11px] font-bold text-muted">
          02 <SairnaIcon name="arrow-left" size={15} /> اختر موعد الانطلاق ورقم
          المقعد
        </span>
      </div>

      <div className="grid grid-cols-5 max-[650px]:grid-cols-3 gap-[11px] max-[650px]:gap-2">
        <CompanyPickCard
          isAll
          active={companyFilter === "all"}
          onSelect={() => setCompanyFilter("all")}
        />

        {isLoading ? (
          <span className="col-span-full py-4 text-center text-xs font-bold text-muted">
            جارٍ تحميل الشركات...
          </span>
        ) : companies.map((company) => (
          <CompanyPickCard
            key={company.id}
            company={company}
            active={companyFilter === company.id}
            onSelect={() => setCompanyFilter(company.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyPickSection;
