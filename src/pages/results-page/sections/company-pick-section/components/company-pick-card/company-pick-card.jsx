import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../lib/cn";

const cardBaseClasses =
  "relative flex min-w-0 flex-col items-center gap-[7px] rounded-xl border px-[11px] py-[15px] max-[650px]:px-[5px] max-[650px]:py-3 transition-all duration-300 ease-[var(--ease-masar-spring)] hover:-translate-y-[3px] hover:border-accent active:scale-[0.97]";

export function CompanyPickCard({ company, isAll = false, active, onSelect }) {
  return (
    <button
      type="button"
      className={cn(
        cardBaseClasses,
        active
          ? "scale-[1.02] border-accent bg-soft-gold shadow-[0_6px_18px_rgba(200,138,50,0.18)] ring-2 ring-accent/25"
          : "border-border bg-surface hover:shadow-card"
      )}
      onClick={onSelect}
    >
      {active && (
        <span
          aria-hidden="true"
          className="absolute top-2 left-2 size-2 animate-pulse rounded-full bg-accent"
        />
      )}
      {isAll ? (
        <>
          <span className="grid size-[27px] place-items-center text-primary">
            <SairnaIcon name="bus" size={24} />
          </span>
          <span className="whitespace-nowrap max-[650px]:whitespace-normal max-[650px]:text-center max-[650px]:leading-[1.45] text-[12px] max-[650px]:text-[10px] font-bold text-text">
            كافة الشركات
          </span>
          <small className="text-[10px] text-muted">مقارنة شاملة</small>
        </>
      ) : (
        <>
          <CompanyLogo company={company} size="pick" />
          <span className="whitespace-nowrap max-[650px]:whitespace-normal max-[650px]:text-center max-[650px]:leading-[1.45] text-[11px] max-[650px]:text-[10px] font-bold text-text">
            {company.name}
          </span>
          <small className="font-tabular inline-flex items-center justify-center gap-[5px] text-[10px] text-muted [&>i]:text-accent">
            <SairnaIcon name="star" size={12} /> <span>{company.rating}</span>
          </small>
        </>
      )}
    </button>
  );
}

export default CompanyPickCard;
