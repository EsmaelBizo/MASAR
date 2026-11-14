import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";

export function TrackingHeaderSection({ originCity, destinationCity }) {
  return (
    <Container
      as="section"
      className="flex max-[650px]:flex-col items-end max-[650px]:items-start justify-between gap-5 pt-[29px] pb-[25px]"
    >
      <div>
        <div className="mb-4 flex items-center gap-2 text-[11px] font-bold text-muted">
          <Link to={ROUTES.HOME} className="hover:text-primary">
            الرئيسية
          </Link>
          <SairnaIcon name="chevron-left" size={14} />
          <Link to={ROUTES.TRIPS} className="hover:text-primary">
            حجوزاتي
          </Link>
          <SairnaIcon name="chevron-left" size={14} />
          <span className="text-primary">تتبّع مسار البولمان</span>
        </div>
        <Eyebrow>متابعة مسار الرحلة على الخريطة</Eyebrow>
        <h1 className="mt-2.5 mb-0 flex flex-wrap items-center gap-4 font-heading text-[28px] max-[650px]:text-[23px] font-bold">
          مسار البولمان لحظة بلحظة{" "}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-soft-teal px-3 py-1 text-[11px] text-secondary">
            <SairnaIcon name="navigation" size={14} /> عرض مسار الرحلة
          </span>
        </h1>
        <p className="mt-1.5 mb-0 text-[13px] text-muted">
          عرض خط السير بين {originCity.terminal} و{destinationCity.terminal}.
        </p>
      </div>

      <div>
        <Link
          to={ROUTES.TRIPS}
          className={buttonVariants({ variant: "outline" })}
        >
          <SairnaIcon name="arrow-right" size={17} /> كل التذاكر والحجوزات
        </Link>
      </div>
    </Container>
  );
}

export default TrackingHeaderSection;
