import { formatDateArabic } from "../../../../../../lib/formatters";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function ResultsToolbar({
  count,
  originCity,
  destinationCity,
  date,
  people,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="mt-[38px] max-[650px]:mt-7 mb-[22px] max-[650px]:mb-[18px] flex max-[650px]:flex-col items-end max-[650px]:items-start justify-between gap-[18px] max-[650px]:gap-[11px]">
      <div>
        <h2 className="mb-1 flex flex-wrap items-center gap-3 font-heading text-[22px] max-[650px]:text-[18px] font-semibold">
          <span className="font-tabular">{count}</span> رحلات بولمان متاحة{" "}
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-secondary/30 bg-soft-teal px-3 py-1 text-[13px] max-[650px]:text-[11px] text-secondary">
            {originCity.name} <SairnaIcon name="arrow-left" size={16} />{" "}
            {destinationCity.name}
          </span>
        </h2>
        <p className="m-0 flex items-center gap-1.5 text-[12px] text-muted">
          <SairnaIcon name="calendar" size={15} className="text-accent" />{" "}
          {formatDateArabic(date)} · {people}{" "}
          {people === 1 ? "مسافر" : "مسافرين"}
        </p>
      </div>

      <div className="flex items-center gap-2.5 text-[12px] font-bold">
        <label htmlFor="sort-select" className="whitespace-nowrap text-muted">
          ترتيب حسب
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="min-h-[42px] cursor-pointer rounded-[10px] border border-border bg-surface px-3 text-text"
        >
          <option value="earliest">أبكر موعد انطلاق</option>
          <option value="cheap">الأقل سعراً</option>
          <option value="quick">الأقصر مدة</option>
        </select>
      </div>
    </div>
  );
}

export default ResultsToolbar;
