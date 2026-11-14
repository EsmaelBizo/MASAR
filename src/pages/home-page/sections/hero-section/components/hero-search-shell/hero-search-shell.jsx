import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { SearchForm } from "../../../../../../components/shared/search-form/search-form";

export function HeroSearchShell() {
  return (
    <div className="group animate-slide-up [animation-delay:240ms] relative z-30 mt-8 overflow-hidden rounded-[22px] glass-obsidian text-text shadow-[0_28px_75px_rgba(0,0,0,0.32)]">
      <div
        className="ablaq-ribbon ablaq-ribbon-animated"
        aria-hidden="true"
      />
      <div className="px-6 pt-5 pb-6 max-[650px]:px-3.5 max-[650px]:py-4">
        <div className="mb-4 flex items-center max-[650px]:items-start justify-between gap-2.5">
          <div className="flex items-center max-[650px]:flex-wrap gap-2.5">
            <span className="size-2.5 animate-pulse-ring rounded-full bg-secondary" />
            <span className="editorial-eyebrow hidden sm:inline text-accent">
              SEARCH // ENGINE
            </span>
            <strong className="font-heading text-[16px] max-[650px]:text-[14px] text-primary dark:text-[#F7F4EE]">
              محرك البحث السريع بين المحافظات
            </strong>
            <span className="text-[12px] max-[650px]:basis-full max-[650px]:text-[11px] text-muted">
              حدد الكراج وتاريخ السفر واستعرض رحلات البولمان المتاحة فوراً
            </span>
          </div>
          <div className="inline-flex max-[650px]:hidden items-center gap-1.5 rounded-full border border-accent/30 bg-soft-gold px-3 py-1 text-[11px] font-bold text-accent-deep dark:text-accent">
            <SairnaIcon name="sparkle" size={14} /> تأكيد فوري للمقعد
          </div>
        </div>
        <SearchForm context="home" />
      </div>
    </div>
  );
}

export default HeroSearchShell;
