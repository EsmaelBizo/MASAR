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
  "خريطة تفاعلية لخط سير البولمان",
  "تفاصيل الكراجات وبوابات الصعود",
];

export function TrackingPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-[82px] max-[650px]:py-[56px]">
      <Container>
        <div
          ref={ref}
          className={cn(
            "grid min-h-[430px] grid-cols-[0.92fr_1.08fr] max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 overflow-hidden rounded-[22px] border border-border bg-surface shadow-card transition-shadow duration-350 hover:shadow-card-md",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}
        >
          <div className="px-[48px] py-[46px] max-[900px]:px-7 max-[900px]:py-9 max-[650px]:px-6 max-[650px]:py-8">
            <Eyebrow>تتبّع خطوط سير البولمانات</Eyebrow>
            <h2 className="mt-3 mb-2 font-heading text-[28px] max-[650px]:text-[22px] font-semibold !leading-[1.5]">
              مسار رحلتك واضح..
              <br />
              <span className="text-secondary">
                من كراج الانطلاق حتى الوصول
              </span>
            </h2>
            <p className="mt-3.5 mb-5 text-[14px] leading-[1.9] text-muted">
              تابع خط سير البولمان عبر الأوتوستراد الدولي (M5 / M4)، وتعرّف على
              المسافة المتبقية وموعد الوصول التقديري إلى محطة الوصول الرئيسية.
            </p>
            {TRACKING_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="mb-3 flex items-center gap-2.5 text-[13px] font-bold text-text [&>i]:text-secondary"
              >
                <SairnaIcon name="check-circle" size={18} /> {benefit}
              </div>
            ))}
            <Link
              to={ROUTES.TRACKING}
              className={cn(buttonVariants({ variant: "navy" }), "mt-4")}
            >
              جرّب تتبّع البولمان <SairnaIcon name="arrow-left" size={18} />
            </Link>
            <small className="mt-3.5 block text-[10px] text-muted">
              * عرض بصري لمسار البولمان على الخريطة.
            </small>
          </div>

          <MapPreviewCard />
        </div>
      </Container>
    </section>
  );
}

export default TrackingPreviewSection;
