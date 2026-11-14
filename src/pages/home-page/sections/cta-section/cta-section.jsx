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
    <section className="pb-[85px] max-[650px]:pb-[54px]">
      <Container>
        <div
          ref={ref}
          className={cn(
            "group relative overflow-hidden rounded-[22px] bg-navy text-white shadow-card-md transition-all duration-350 hover:shadow-[0_26px_65px_rgba(22,58,95,0.28)]",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}
        >
          <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />
          <div className="flex max-[650px]:flex-col items-center max-[650px]:items-start justify-between gap-[30px] max-[650px]:gap-5 px-[56px] py-[40px] max-[650px]:px-6 max-[650px]:py-7">
            <div className="relative z-10">
              <Eyebrow
                className="border-accent/40 bg-white/10 text-[#F7F4EE]"
                starClassName="text-accent"
              >
                على الرحب والسعة
              </Eyebrow>
              <h2 className="mt-3 mb-1.5 font-heading text-[30px] max-[650px]:text-[24px] font-bold">
                مَسار.. دربك سالك ومقعدك محفوظ بين كل المحافظات
              </h2>
              <p className="m-0 text-[14px] text-[#DCE6F0]">
                اختر وجهتك الآن، حدد رقم مقعدك في البولمان، واستلم تذكرتك
                الإلكترونية فوراً.
              </p>
            </div>
            <Link
              to={ROUTES.RESULTS}
              className={cn(
                buttonVariants({ variant: "primary" }),
                "relative z-20"
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
