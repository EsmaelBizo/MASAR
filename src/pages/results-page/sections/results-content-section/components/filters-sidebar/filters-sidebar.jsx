import { useCompaniesQuery } from "../../../../../../hooks/use-trips-query";
import { useBookingStore } from "../../../../../../store/use-booking-store";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { InfoNotice } from "../../../../../../components/shared/info-notice/info-notice";
import { FilterRadioGroup } from "./components/filter-radio-group/filter-radio-group";

const TIME_OPTIONS = [
  { value: "all", label: "كل الأوقات" },
  { value: "morning", label: "صباحاً (قبل 12:00)" },
  { value: "afternoon", label: "ظهراً (12:00–17:00)" },
  { value: "evening", label: "مساءً (بعد 17:00)" },
];

export function FiltersSidebar({ allTrips = [] }) {
  const companyFilter = useBookingStore((state) => state.companyFilter);
  const timeFilter = useBookingStore((state) => state.timeFilter);
  const setCompanyFilter = useBookingStore((state) => state.setCompanyFilter);
  const setTimeFilter = useBookingStore((state) => state.setTimeFilter);
  const clearFilters = useBookingStore((state) => state.clearFilters);
  const { data: companies = [] } = useCompaniesQuery();

  const companyOptions = [
    { value: "all", label: "كافة الشركات", count: allTrips.length },
    ...companies.map((company) => ({
      value: company.id,
      label: company.name,
      count: allTrips.filter(
        (trip) => String(trip.company.id) === String(company.id)
      ).length,
    })),
  ];

  return (
    <aside className="sticky top-[103px] max-[900px]:static max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-[25px] max-[900px]:gap-y-2.5 max-[650px]:gap-3 rounded-2xl border border-border bg-surface p-[22px] max-[900px]:p-[18px] max-[650px]:p-3.5">
      <div className="flex items-center justify-between gap-[7px] border-b border-border pb-[19px] max-[900px]:col-span-full">
        <h3 className="m-0 flex items-center gap-2 font-heading text-[14px] font-bold">
          <SairnaIcon name="filter" size={19} className="text-primary" /> تصفية
          الرحلات
        </h3>
        <button
          type="button"
          className="border-0 bg-transparent text-[12px] font-bold text-accent"
          onClick={clearFilters}
        >
          إعادة ضبط
        </button>
      </div>

      <FilterRadioGroup
        title="شركة البولمان"
        name="company-filter"
        options={companyOptions}
        selectedValue={companyFilter}
        onChange={setCompanyFilter}
      />

      <FilterRadioGroup
        title="فترة الانطلاق"
        name="time-filter"
        options={TIME_OPTIONS}
        selectedValue={timeFilter}
        onChange={setTimeFilter}
      />

      <InfoNotice
        iconName="shield"
        iconSize={22}
        variant="teal"
        className="mt-[25px] max-[900px]:mt-0 max-[650px]:col-span-full"
      >
        <b className="block text-[12px] text-secondary">
          شفافية الكراجات والمواعيد
        </b>
        <span className="text-text font-normal">
          جميع المواعيد تشمل اسم الكراج المعتمد وفئة البولمان (VIP 2+1 أو سياحي
          2+2).
        </span>
      </InfoNotice>
    </aside>
  );
}

export default FiltersSidebar;
