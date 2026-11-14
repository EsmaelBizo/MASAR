import { BookingHeaderSection } from "./sections/booking-header-section/booking-header-section";
import { BookingContentSection } from "./sections/booking-content-section/booking-content-section";

export function BookingPage() {
  return (
    <main className="min-h-[70vh]">
      <BookingHeaderSection />
      <BookingContentSection />
    </main>
  );
}

export default BookingPage;
