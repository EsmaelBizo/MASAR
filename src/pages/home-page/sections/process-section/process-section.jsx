import { PROCESS_STEPS } from '../../data/home-data';
import { Eyebrow } from '../../../../components/ui/eyebrow';
import { SairnaIcon } from '../../../../components/ui/sairna-icon';
import { cn } from '../../../../lib/cn';
import { useScrollReveal } from '../../../../hooks/use-scroll-reveal';

const ICON_COLOR_MAP = {
  0: 'bg-[#E8EFF6] text-primary',
  1: 'bg-soft-gold text-accent',
  2: 'bg-soft-teal text-secondary',
};

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="border-y border-border bg-surface-alt py-[82px] max-[650px]:py-[56px]">
      <div className="site-container">
        <div className="mb-9 text-center">
          <Eyebrow>تجربة حجز رقمية موثوقة</Eyebrow>
          <h2 className="mt-3 mb-1.5 font-heading text-[28px] max-[650px]:text-[22px] font-semibold">
            3 خطوات فقط.. <span className="text-secondary">ومقعدك في البولمان جاهز</span>
          </h2>
          <p className="text-[14px] text-muted">
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
                'group relative overflow-hidden rounded-[18px] border border-border bg-surface p-7 max-[900px]:p-5 max-[650px]:grid max-[650px]:grid-cols-[50px_1fr] max-[650px]:gap-x-3.5 max-[650px]:gap-y-1 transition-all duration-300 ease-[var(--ease-masar-out)] hover:-translate-y-2 hover:border-accent/60 hover:shadow-card-md',
                isVisible ? 'animate-slide-up' : 'opacity-0'
              )}
            >
              <span className="font-tabular absolute top-3.5 max-[650px]:top-1 left-6 max-[650px]:left-4 text-[48px] font-bold leading-none text-border transition-colors duration-300 group-hover:text-accent/30">
                {step.number}
              </span>
              <div
                className={cn(
                  'mb-5 max-[650px]:mb-0 max-[650px]:row-span-2 grid size-[58px] max-[650px]:size-12 place-items-center rounded-2xl transition-transform duration-300 ease-[var(--ease-masar-spring)] group-hover:scale-110 group-hover:-rotate-3',
                  ICON_COLOR_MAP[index] || ICON_COLOR_MAP[0]
                )}
              >
                <SairnaIcon
                  name={step.icon}
                  size={27}
                  className="max-[650px]:!size-6"
                />
              </div>
              <h3 className="mb-2 max-[650px]:mb-0 font-heading text-[18px] max-[650px]:text-[15px] font-semibold text-text">
                {step.title}
              </h3>
              <p className="m-0 text-[13px] max-[650px]:text-[12px] leading-[1.8] text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
