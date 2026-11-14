import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useBookingStore } from "../../../../store/use-booking-store";
import { useAuthStore } from "../../../../store/use-auth-store";
import { useToastStore } from "../../../../store/use-toast-store";
import { Container } from "../../../../layouts/container/container";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../lib/cn";
import { SeatStage } from "./components/seat-stage/seat-stage";
import { PassengerStage } from "./components/passenger-stage/passenger-stage";
import { ReviewStage } from "./components/review-stage/review-stage";
import { BookingSummaryAside } from "./components/booking-summary-aside/booking-summary-aside";
import { useCreateBookingMutation } from "../../../../hooks/use-bookings-query";

export function BookingContentSection() {
  const navigate = useNavigate();
  const search = useBookingStore((state) => state.search);
  const selectedTrip = useBookingStore((state) => state.selectedTrip);
  const selectedSeats = useBookingStore((state) => state.selectedSeats);
  const bookingStep = useBookingStore((state) => state.bookingStep);
  const setBookingStep = useBookingStore((state) => state.setBookingStep);
  const passengers = useBookingStore((state) => state.passengers);
  const setPassengers = useBookingStore((state) => state.setPassengers);
  const paymentMethod = useBookingStore((state) => state.paymentMethod);
  const addBooking = useBookingStore((state) => state.addBooking);

  const user = useAuthStore((state) => state.user);
  const setAfterAuthRoute = useAuthStore((state) => state.setAfterAuthRoute);
  const showToast = useToastStore((state) => state.showToast);
  const createBookingMutation = useCreateBookingMutation();

  const activeTrip = selectedTrip;

  useEffect(() => {
    if (!activeTrip) navigate(ROUTES.RESULTS, { replace: true });
  }, [activeTrip, navigate]);

  if (!activeTrip) return null;

  const people = Number(search.people) || 1;

  const [passengerForms, setPassengerForms] = useState(() =>
    Array.from({ length: people }, (_, index) => ({
      name: passengers[index]?.name || (index === 0 ? user?.name || "" : ""),
      phone: passengers[index]?.phone || "",
    }))
  );

  useEffect(() => {
    setPassengerForms((prev) =>
      Array.from({ length: people }, (_, index) => ({
        name:
          passengers[index]?.name ||
          prev[index]?.name ||
          (index === 0 ? user?.name || "" : ""),
        phone: passengers[index]?.phone || prev[index]?.phone || "",
      }))
    );
  }, [people, passengers, user?.name]);

  const handlePassengerChange = (index, field, value) => {
    setPassengerForms((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      )
    );
  };

  const validatePassengers = () => {
    const validated = [];
    for (let i = 0; i < people; i += 1) {
      const name = (passengerForms[i]?.name || "").trim();
      const phone = (passengerForms[i]?.phone || "").trim();

      if (!name || name.length < 3) {
        showToast(
          "يرجى إدخال الاسم الكامل لكل مسافر (3 أحرف على الأقل).",
          "error"
        );
        return false;
      }
      if (!/^[+\d\s-]{9,18}$/.test(phone)) {
        showToast("يرجى إدخال رقم هاتف جوال صحيح لكل مسافر.", "error");
        return false;
      }
      validated.push({ name, phone });
    }
    setPassengers(validated);
    return true;
  };

  const handleConfirmBooking = async () => {
    if (!user) {
      setAfterAuthRoute(ROUTES.BOOKING);
      showToast("سجّل دخولك أولاً لتثبيت المقعد وإصدار تذكرة مَسار.", "error");
      navigate(ROUTES.LOGIN);
      return;
    }

    const bookingInput = {
      tripId: activeTrip.backendId || activeTrip.id,
      seats: [...selectedSeats],
      passengers,
      paymentMethod,
    };

    try {
      const booking = await createBookingMutation.mutateAsync(bookingInput);
      const newBooking = {
        ...booking,
        id: booking?.id || booking?.code || `MSR-${String(Date.now()).slice(-6)}`,
        origin: activeTrip.origin.id,
        destination: activeTrip.destination.id,
        originName: activeTrip.origin.name,
        destinationName: activeTrip.destination.name,
        date: activeTrip.date,
        departure: activeTrip.departure,
        arrive: activeTrip.arrive,
        companyId: activeTrip.company.id,
        busClass: activeTrip.busClass,
        classLabel: activeTrip.classLabel,
        seats: [...selectedSeats],
        people,
        total: booking?.total ?? activeTrip.price * people,
        passengers,
        status: booking?.status || "confirmed",
        createdAt: booking?.createdAt || new Date().toISOString(),
      };

      addBooking(newBooking);
      navigate(ROUTES.SUCCESS);
    } catch (error) {
      showToast(
        error.response?.data?.message ||
          error.message ||
          "تعذر تثبيت الحجز. حاول مرة أخرى.",
        "error"
      );
    }
  };

  const handleNext = () => {
    if (bookingStep === "seats") {
      if (selectedSeats.length !== people) {
        showToast(
          `يرجى اختيار ${people} مقعد من مخطط البولمان قبل المتابعة.`,
          "error"
        );
        return;
      }
      setBookingStep("passengers");
    } else if (bookingStep === "passengers") {
      if (!validatePassengers()) return;
      setBookingStep("review");
    } else {
      handleConfirmBooking();
    }
  };

  const handleBack = () => {
    if (bookingStep === "review") {
      setBookingStep("passengers");
    } else {
      setBookingStep("seats");
    }
  };

  return (
    <Container
      as="section"
      className="grid grid-cols-[minmax(0,1fr)_335px] max-[1150px]:grid-cols-[minmax(0,1fr)_295px] max-[900px]:grid-cols-1 items-start gap-5 pb-[90px] max-[650px]:pb-[55px]"
    >
      <div className="min-w-0 rounded-[20px] max-[650px]:rounded-[15px] border border-border bg-surface p-7 max-[650px]:p-4 shadow-card">
        <div key={bookingStep} className="animate-slide-in-rtl">
          {bookingStep === "seats" && (
            <SeatStage people={people} trip={activeTrip} />
          )}
          {bookingStep === "passengers" && (
            <PassengerStage
              people={people}
              selectedSeats={selectedSeats}
              passengerForms={passengerForms}
              onPassengerChange={handlePassengerChange}
            />
          )}
          {bookingStep === "review" && <ReviewStage />}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
          {bookingStep === "seats" ? (
            <Link
              to={ROUTES.RESULTS}
              className={cn(
                buttonVariants({ variant: "subtle" }),
                "max-[650px]:px-3 max-[650px]:text-[11px]"
              )}
            >
              <SairnaIcon name="arrow-right" size={17} /> رجوع للرحلات
            </Link>
          ) : (
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: "subtle" }),
                "max-[650px]:px-3 max-[650px]:text-[11px]"
              )}
              onClick={handleBack}
            >
              <SairnaIcon name="arrow-right" size={17} /> الخطوة السابقة
            </button>
          )}

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "max-[650px]:px-4 max-[650px]:text-[12px]"
            )}
            onClick={handleNext}
            disabled={createBookingMutation.isPending}
            aria-busy={createBookingMutation.isPending}
          >
            {bookingStep === "review"
              ? createBookingMutation.isPending
                ? "جارٍ تثبيت الحجز..."
                : "تأكيد الحجز وإصدار التذكرة"
              : "متابعة الحجز"}{" "}
            <SairnaIcon name="arrow-left" size={17} />
          </button>
        </div>
      </div>

      <BookingSummaryAside
        trip={activeTrip}
        people={people}
        selectedSeats={selectedSeats}
      />
    </Container>
  );
}

export default BookingContentSection;
