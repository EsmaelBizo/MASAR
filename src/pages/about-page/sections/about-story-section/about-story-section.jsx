import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import heroSvg from "../../../../assets/images/hero.svg";
import { Container } from "../../../../layouts/container/container";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";

export function AboutStorySection() {
  return (
    <Container
      as="section"
      className="grid grid-cols-2 max-[650px]:grid-cols-1 items-center gap-[45px] py-[82px] max-[650px]:py-[56px]"
    >
      <div className="animate-slide-up">
        <h2 className="mb-3 font-heading text-[26px] max-[650px]:text-[22px] font-bold text-primary">
          التراث المعماري السوري يلتقي بحركة النقل الحديث
        </h2>
        <p className="mb-4 text-[14px] leading-[1.9] text-muted">
          تستمد منصة «مَسار» هويتها من تاريخ القوافل وطريق الحرير الذي ربط حلب
          بدمشق وتدمر والساحل، وتجمع بين أصالة العمارة السورية (الأبلق الدمشقي،
          الحجر الحلبي، والنجمة الثمانية) وبين أرقى معايير منصات السفر الرقمية.
        </p>
        <p className="mb-6 text-[14px] leading-[1.9] text-muted">
          رسالتنا هي إنهاء عناء الانتظار في الكراجات والبحث عن تذاكر في أوقات
          الذروة والأعياد، عبر نظام حجز إلكتروني فوري يتيح للمسافر مقارنة
          المواعيد، اختيار رقم مقعده بدقة (VIP 2+1 أو سياحي)، والحصول على تذكرته
          الرقمية بثوانٍ.
        </p>
        <Link
          to={ROUTES.RESULTS}
          className={buttonVariants({ variant: "primary" })}
        >
          احجز مقعدك الآن <SairnaIcon name="arrow-left" size={17} />
        </Link>
      </div>
      <div className="animate-slide-up [animation-delay:120ms]">
        <img
          src={heroSvg}
          alt="شعار القوس السوري وحافلة بولمان مَسار"
          className="rounded-[22px] border-2 border-accent/35 shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:border-accent hover:shadow-card-md"
        />
      </div>
    </Container>
  );
}

export default AboutStorySection;
