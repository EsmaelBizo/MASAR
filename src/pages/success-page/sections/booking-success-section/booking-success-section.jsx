import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { getCityById } from "../../../../constants/cities";
import { useBookingStore } from "../../../../store/use-booking-store";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { EmptyStateCard } from "../../../../components/shared/empty-state-card/empty-state-card";
import { ConfirmationTicketSummary } from "./components/confirmation-ticket-summary/confirmation-ticket-summary";

export function BookingSuccessSection() {
  const navigate = useNavigate();
  const lastBooking = useBookingStore((state) => state.lastBooking);
  const setTrackId = useBookingStore((state) => state.setTrackId);
  const openTicketModal = useBookingStore((state) => state.openTicketModal);

  const booking = lastBooking;

  if (!booking) {
    return (
      <Container
        as="section"
        className="grid min-h-[70vh] place-items-center pt-[70px] pb-[85px]"
      >
        <EmptyStateCard
          iconName="ticket"
          title="لا يوجد حجز جديد حالياً"
          description="يمكنك البحث عن رحلة بولمان جديدة وتثبيت مقعدك فوراً."
          action={
            <Link
              to={ROUTES.RESULTS}
              className={buttonVariants({ variant: "primary" })}
            >
              ابحث عن رحلة بولمان
            </Link>
          }
        />
      </Container>
    );
  }

  const originCity = {
    ...getCityById(booking.originName || booking.origin),
    name: booking.originName || getCityById(booking.origin).name,
  };
  const destinationCity = {
    ...getCityById(booking.destinationName || booking.destination),
    name: booking.destinationName || getCityById(booking.destination).name,
  };

  const handleTrackTrip = () => {
    setTrackId(booking.id);
    navigate(`${ROUTES.TRACKING}?bookingId=${encodeURIComponent(booking.id)}`);
  };

  return (
    <Container
      as="section"
      className="grid min-h-[70vh] place-items-center pt-[65px] pb-[85px] max-[650px]:pt-10 max-[650px]:pb-[50px]"
    >
      <div className="animate-slide-up w-[min(660px,100%)] overflow-hidden rounded-[24px] border border-border bg-surface text-center shadow-card-md">
        <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />
        <div className="px-[45px] py-[46px] max-[650px]:px-5 max-[650px]:py-8">
          <div className="mx-auto mb-5 grid size-[82px] animate-pop place-items-center rounded-full bg-soft-teal text-secondary shadow-[0_0_0_8px_rgba(46,111,94,0.12)]">
            <SairnaIcon name="check" size={42} />
          </div>
          <div className="animate-slide-up [animation-delay:90ms]">
            <Eyebrow>تم إصدار تذكرة الصعود الرقمية</Eyebrow>
            <h1 className="mt-3.5 mb-2.5 font-heading text-[28px] max-[650px]:text-[22px] font-bold text-primary">
              تذكرتك صارت جاهزة!{" "}
              <span className="text-secondary">
                رافقتك السلامة في حلك وترحالك
              </span>
            </h1>
            <p className="mx-auto mb-6 max-w-[490px] text-[14px] leading-[1.8] text-muted">
              يرجى الحضور إلى الكراج ({originCity.terminal}) قبل 20 دقيقة من
              الانطلاق، وإبراز رمز الاستجابة السريعة (QR) عند باب البولمان.
            </p>
          </div>

          <div className="animate-slide-up [animation-delay:170ms]">
            <ConfirmationTicketSummary
              bookingId={booking.id}
              originName={originCity.name}
              destinationName={destinationCity.name}
              seats={booking.seats}
            />
          </div>

          <div className="animate-slide-up [animation-delay:240ms] flex max-[650px]:flex-col justify-center gap-3">
            <button
              type="button"
              className={buttonVariants({ variant: "primary" })}
              onClick={() => openTicketModal(booking)}
            >
              عرض التذكرة ورمز QR <SairnaIcon name="ticket" size={17} />
            </button>
            <Link
              to={ROUTES.TRIPS}
              className={buttonVariants({ variant: "navy" })}
            >
              الذهاب إلى حجوزاتي
            </Link>
            <button
              type="button"
              className={buttonVariants({ variant: "outline" })}
              onClick={handleTrackTrip}
            >
              تتبّع مسار البولمان <SairnaIcon name="route" size={17} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BookingSuccessSection;
