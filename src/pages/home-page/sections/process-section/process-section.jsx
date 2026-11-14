import { PROCESS_STEPS } from '../../data/home-data';
import { Eyebrow } from '../../../../components/ui/eyebrow';
import { SairnaIcon } from '../../../../components/ui/sairna-icon';
import { cn } from '../../../../lib/cn';
import { useScrollReveal } from '../../../../hooks/use-scroll-reveal';

const ICON_COLOR_MAP = {
  0: 'border-primary/30 bg-primary/10 text-primary dark:text-accent dark:border-accent/30 dark:bg-accent/10',
  1: 'border-accent/35 bg-soft-gold text-accent',
  2: 'border-secondary/35 bg-soft-teal text-secondary',
};

const STEP_CODES = ['STEP // SEARCH', 'STEP // SEAT 2+1', 'STEP // QR PASS'];

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative border-y border-border bg-surface-alt/50 py-[86px] max-[650px]:py-[56px]">
      <div className="site-container">
        <div className="mb-10 text-center">
          <Eyebrow code="WORKFLOW // 03">تجربة حجز رقمية موثوقة</Eyebrow>
          <h2 className="mt-3.5 mb-2 font-heading text-[32px] max-[650px]:text-[24px] font-bold text-text">
            3 خطوات فقط.. <span className="text-accent">ومقعدك في البولمان جاهز</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-[15px] text-muted">
            وداعاً للانتظار في الكراجات؛ ثبّت مقعدك المفضل من شاشة هاتفك بثوانٍ.
          </p>
        </div>

        <div
          ref={ref}
          className="relative grid grid-cols-3 max-[650px]:grid-cols-1 gap-5 max-[650px]:gap-3.5"
        >
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              style={{
                animationDelay: `${index * 110}ms`,
              }}
              className={cn(
                'group relative overflow-hidden rounded-[22px] glass-obsidian p-7 max-[900px]:p-5 shadow-card transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-2 hover:border-accent/65 hover:shadow-card-md',
                isVisible ? 'animate-slide-up' : 'opacity-0'
              )}
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={cn(
                    'grid size-[54px] place-items-center rounded-2xl border transition-transform duration-350 ease-[var(--ease-masar-spring)] group-hover:scale-110 group-hover:-rotate-3',
                    ICON_COLOR_MAP[index] || ICON_COLOR_MAP[0]
                  )}
                >
                  <SairnaIcon name={step.icon} size={25} />
                </div>
                <span className="font-tabular text-[38px] font-bold leading-none text-border transition-colors duration-300 group-hover:text-accent/45">
                  {step.number}
                </span>
              </div>

              <span className="editorial-eyebrow mb-2 block text-[10px] text-accent">
                {STEP_CODES[index] || `STEP // 0${index + 1}`}
              </span>

              <h3 className="mb-2 font-heading text-[19px] max-[650px]:text-[16px] font-bold text-text">
                {step.title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.75] text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
