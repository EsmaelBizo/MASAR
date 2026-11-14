import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { ServiceBadges } from "../../../../../../components/shared/service-badges/service-badges";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { cn } from "../../../../../../lib/cn";

export function CompanyCard({ company, onSelectCompany }) {
  const isVip = company.busClass === "vip";

  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ease-[var(--ease-masar-out)] hover:-translate-y-2 hover:border-accent/65 hover:shadow-card-md border-t-4 flex flex-col justify-between h-full",
        isVip ? "border-t-accent" : "border-t-secondary"
      )}
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-2">
          <div className="transition-transform duration-300 ease-[var(--ease-masar-spring)] group-hover:scale-105">
            <CompanyLogo company={company} size="large" />
          </div>
          <span className="font-tabular inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-soft-gold px-2.5 py-1 text-[11px] font-bold text-accent-deep">
            <SairnaIcon name="star" size={14} /> {company.rating} / 5
          </span>
        </div>
        <span
          className={cn(
            "mb-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold",
            isVip
              ? "bg-soft-gold text-accent-deep"
              : "bg-soft-teal text-secondary"
          )}
        >
          {company.tag}
        </span>
        <h2 className="mb-2 font-heading text-[18px] font-bold transition-colors duration-250 group-hover:text-primary">
          {company.name}
        </h2>
        <p className="min-h-[68px] max-[1150px]:min-h-0 text-[12px] leading-[1.85] text-muted">
          {company.about}
        </p>
        <div className="my-3.5 flex flex-wrap gap-1.5">
          <ServiceBadges company={company} />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-3 border-t border-border py-3.5">
          <div className="flex flex-col">
            <b className="font-tabular text-[16px] text-primary">14 محافظة</b>
            <small className="text-[10px] text-muted">تغطية الكراجات</small>
          </div>
          <div className="flex flex-col">
            <b className="text-[15px] text-secondary">يومياً</b>
            <small className="text-[10px] text-muted">رحلات منتظمة</small>
          </div>
        </div>
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "primary", fullWidth: true }),
            "mt-2 px-2 text-[12px]"
          )}
          onClick={() => onSelectCompany(company.id)}
        >
          استعراض رحلات الشركة <SairnaIcon name="arrow-left" size={17} />
        </button>
      </div>
    </article>
  );
}

export default CompanyCard;
