import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../lib/cn";
import { useScrollReveal } from "../../../../hooks/use-scroll-reveal";

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="pb-[88px] max-[650px]:pb-[54px]">
      <Container>
        <div
          ref={ref}
          className={cn(
            "group relative overflow-hidden rounded-[24px] border border-accent/35 bg-navy dark:bg-[#0D1420] text-white shadow-card-md transition-all duration-400 ease-[var(--ease-masar-out)] hover:border-accent/65 hover:shadow-[0_28px_75px_rgba(0,0,0,0.45)]",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}
        >
          <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-arch-grid opacity-50" aria-hidden="true" />

          <div className="relative z-10 flex max-[650px]:flex-col items-center max-[650px]:items-start justify-between gap-[30px] max-[650px]:gap-5 px-[56px] py-[44px] max-[650px]:px-6 max-[650px]:py-7">
            <div>
              <Eyebrow
                code="READY // BOARDING"
                className="border-accent/40 bg-white/8 text-[#F7F4EE]"
                starClassName="text-accent"
              >
                على الرحب والسعة
              </Eyebrow>
              <h2 className="mt-3.5 mb-2 font-heading text-[32px] max-[650px]:text-[24px] font-bold leading-[1.25]">
                مَسار.. دربك سالك ومقعدك محفوظ بين كل المحافظات
              </h2>
              <p className="m-0 max-w-[540px] text-[14.5px] text-[#CBD7E4]">
                اختر وجهتك الآن، حدد رقم مقعدك في البولمان، واستلم تذكرتك
                الإلكترونية فوراً.
              </p>
            </div>
            <Link
              to={ROUTES.RESULTS}
              className={cn(
                buttonVariants({ variant: "primary" }),
                "relative z-20 shrink-0"
              )}
            >
              احجز مقعدك الآن <SairnaIcon name="arrow-left" size={18} />
            </Link>
            <div className="pointer-events-none absolute top-[-140px] left-[22%] size-[230px] animate-pulse rounded-full border border-accent/25 transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute right-[30%] bottom-[-360px] size-[430px] rounded-full border border-accent/20 transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaSection;
