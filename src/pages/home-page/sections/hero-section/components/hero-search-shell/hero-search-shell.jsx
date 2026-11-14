import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { SearchForm } from "../../../../../../components/shared/search-form/search-form";

export function HeroSearchShell() {
  return (
    <div className="group animate-slide-up [animation-delay:240ms] relative z-30 mt-7 overflow-hidden rounded-[18px] border border-border bg-surface text-text shadow-[0_22px_58px_rgba(15,41,68,0.24)]">
      <div
        className="ablaq-ribbon group-hover:ablaq-ribbon-animated"
        aria-hidden="true"
      />
      <div className="px-6 pt-5 pb-6 max-[650px]:px-3.5 max-[650px]:py-4">
        <div className="mb-4 flex items-center max-[650px]:items-start justify-between gap-2.5">
          <div className="flex items-center max-[650px]:flex-wrap gap-2.5">
            <span className="size-2.5 rounded-full bg-secondary shadow-[0_0_0_5px_var(--soft-teal)]" />
            <strong className="font-heading text-[16px] max-[650px]:text-[14px] text-primary">
              محرك البحث السريع بين المحافظات
            </strong>
            <span className="text-[12px] max-[650px]:basis-full max-[650px]:text-[11px] text-muted">
              حدد الكراج وتاريخ السفر واستعرض رحلات البولمان المتاحة فوراً
            </span>
          </div>
          <div className="inline-flex max-[650px]:hidden items-center gap-1.5 rounded-full bg-soft-gold px-3 py-1 text-[11px] font-bold text-accent-deep">
            <SairnaIcon name="sparkle" size={15} /> تأكيد فوري للمقعد
          </div>
        </div>
        <SearchForm context="home" />
      </div>
    </div>
  );
}

export default HeroSearchShell;
