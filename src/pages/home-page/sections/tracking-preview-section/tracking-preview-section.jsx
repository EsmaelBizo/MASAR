import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../lib/cn";
import { MapPreviewCard } from "./components/map-preview-card/map-preview-card";
import { useScrollReveal } from "../../../../hooks/use-scroll-reveal";

const TRACKING_BENEFITS = [
  "خريطة تفاعلية لخط سير البولمان عبر 14 محافظة",
  "تفاصيل الكراجات وبوابات الصعود بدقة",
];

export function TrackingPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-[86px] max-[650px]:py-[56px]">
      <Container>
        <div
          ref={ref}
          className={cn(
            "grid min-h-[440px] grid-cols-[0.92fr_1.08fr] max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 overflow-hidden rounded-[24px] glass-obsidian shadow-card transition-all duration-400 ease-[var(--ease-masar-out)] hover:border-accent/50 hover:shadow-card-md",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}
        >
          <div className="px-[48px] py-[46px] max-[900px]:px-7 max-[900px]:py-9 max-[650px]:px-6 max-[650px]:py-8">
            <Eyebrow code="LIVE // TELEMETRY">تتبّع خطوط سير البولمانات</Eyebrow>
            <h2 className="mt-4 mb-2.5 font-heading text-[30px] max-[650px]:text-[23px] font-bold leading-[1.35] text-text">
              مسار رحلتك واضح..
              <br />
              <span className="text-secondary">
                من كراج الانطلاق حتى الوصول
              </span>
            </h2>
            <p className="mt-3 mb-6 text-[14.5px] leading-[1.8] text-muted">
              تابع خط سير البولمان عبر الأوتوستراد الدولي (M5 / M4)، وتعرّف على
              المسافة المتبقية وموعد الوصول التقديري إلى محطة الوصول الرئيسية.
            </p>
            {TRACKING_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="mb-3 flex items-center gap-2.5 text-[13px] font-bold text-text"
              >
                <SairnaIcon name="check-circle" size={18} className="text-secondary" />
                <span>{benefit}</span>
              </div>
            ))}
            <Link
              to={ROUTES.TRACKING}
              className={cn(buttonVariants({ variant: "primary" }), "mt-5")}
            >
              جرّب تتبّع البولمان <SairnaIcon name="arrow-left" size={18} />
            </Link>
            <small className="mt-3.5 block text-[10.5px] text-muted">
              * عرض بصري تفاعلي لمسار البولمان على الخريطة السورية.
            </small>
          </div>

          <MapPreviewCard />
        </div>
      </Container>
    </section>
  );
}

export default TrackingPreviewSection;
