import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";

export function SupportContactAside() {
  return (
    <div className="self-start overflow-hidden rounded-[18px] border border-border bg-surface shadow-card">
      <div className="ablaq-ribbon" aria-hidden="true" />
      <div className="p-7 [&>i]:text-accent">
        <SairnaIcon name="headphones" size={32} />
        <h2 className="my-3.5 font-heading text-[20px] font-bold">
          على الرحب والسعة
        </h2>
        <p className="mb-5 text-[12px] leading-[1.8] text-muted">
          فريق خدمة المسافرين في منصة «مَسار» جاهز لمساعدتك في استفسارات
          الكراجات والمواعيد وتذاكر الصعود الرقمية.
        </p>
        <Link
          to={ROUTES.HOME}
          className={buttonVariants({ variant: "primary" })}
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default SupportContactAside;
