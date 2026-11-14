import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { BOOKING_STEPS } from "../../data/booking-data";
import { useBookingStore } from "../../../../store/use-booking-store";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { BookingStepper } from "./components/booking-stepper/booking-stepper";

export function BookingHeaderSection() {
  const bookingStep = useBookingStore((state) => state.bookingStep);
  const currentStepIndex = BOOKING_STEPS.findIndex(
    ([key]) => key === bookingStep
  );

  return (
    <Container as="section" className="pt-[30px] max-[650px]:pt-5">
      <div className="mb-5 flex items-center gap-2 text-[11px] font-bold text-muted">
        <Link to={ROUTES.HOME} className="hover:text-primary">
          الرئيسية
        </Link>
        <SairnaIcon name="chevron-left" size={14} />
        <Link to={ROUTES.RESULTS} className="hover:text-primary">
          رحلات البولمان
        </Link>
        <SairnaIcon name="chevron-left" size={14} />
        <span className="text-primary">تثبيت المقعد والتذكرة</span>
      </div>

      <div className="flex items-end justify-between gap-5">
        <div>
          <Eyebrow>خطوات تثبيت الحجز في مَسار</Eyebrow>
          <h1 className="mt-2.5 mb-0 font-heading text-[30px] max-[650px]:text-[24px] font-bold">
            احجز مقعدك في البولمان{" "}
            <span className="text-accent">بدقة وأمان</span>
          </h1>
        </div>
        <Link
          to={ROUTES.RESULTS}
          className="inline-flex items-center gap-2 font-bold text-muted max-[650px]:text-[11px] hover:text-primary"
        >
          <SairnaIcon name="arrow-right" size={17} /> تغيير موعد الرحلة
        </Link>
      </div>

      <BookingStepper
        steps={BOOKING_STEPS}
        currentStepIndex={currentStepIndex}
      />
    </Container>
  );
}

export default BookingHeaderSection;
