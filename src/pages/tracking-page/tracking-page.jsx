import { useSearchParams } from "react-router-dom";
import { getCityById } from "../../constants/cities";
import { useBookingStore } from "../../store/use-booking-store";
import { useBookingByIdQuery } from "../../hooks/use-bookings-query";
import { EmptyStateCard } from "../../components/shared/empty-state-card/empty-state-card";
import { TrackingHeaderSection } from "./sections/tracking-header-section/tracking-header-section";
import { TrackingContentSection } from "./sections/tracking-content-section/tracking-content-section";

export function TrackingPage() {
  const [searchParams] = useSearchParams();
  const storedTrackId = useBookingStore((state) => state.trackId);
  const lastBooking = useBookingStore((state) => state.lastBooking);
  const trackId = searchParams.get("bookingId") || storedTrackId;
  const { data: serverBooking, isLoading, isError } = useBookingByIdQuery(trackId);
  const activeBooking =
    serverBooking ||
    (String(lastBooking?.id) === String(trackId) ? lastBooking : null);

  if (!activeBooking) {
    return (
      <main className="bg-bg px-5 py-20">
        <EmptyStateCard
          iconName={isLoading ? "info" : "route"}
          title={isLoading ? "جارٍ تحميل بيانات الرحلة" : "تعذر تحميل بيانات الرحلة"}
          description={
            isError
              ? "تأكد من تسجيل الدخول وأن رقم الحجز صحيح."
              : "افتح التتبع من حجز موجود في حسابك."
          }
        />
      </main>
    );
  }

  const originCity = {
    ...getCityById(activeBooking.originName || activeBooking.origin),
    name: activeBooking.originName || getCityById(activeBooking.origin).name,
  };
  const destinationCity = {
    ...getCityById(activeBooking.destinationName || activeBooking.destination),
    name:
      activeBooking.destinationName ||
      getCityById(activeBooking.destination).name,
  };

  return (
    <main className="bg-bg pb-[60px]">
      <TrackingHeaderSection
        originCity={originCity}
        destinationCity={destinationCity}
      />
      <TrackingContentSection
        activeBooking={activeBooking}
        originCity={originCity}
        destinationCity={destinationCity}
      />
    </main>
  );
}

export default TrackingPage;
