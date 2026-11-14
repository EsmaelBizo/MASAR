import { useBookingStore } from "../../../../../../store/use-booking-store";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { ReviewPassengersList } from "./components/review-passengers-list/review-passengers-list";
import { PaymentChoiceGroup } from "./components/payment-choice-group/payment-choice-group";

export function ReviewStage() {
  const passengers = useBookingStore((state) => state.passengers);
  const selectedSeats = useBookingStore((state) => state.selectedSeats);
  const paymentMethod = useBookingStore((state) => state.paymentMethod);
  const setPaymentMethod = useBookingStore((state) => state.setPaymentMethod);

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-1 flex items-center gap-2.5 font-heading text-[20px] max-[650px]:text-[17px] font-bold [&>i]:text-secondary">
          مراجعة الحجز وإصدار التذكرة الرقمية{" "}
          <SairnaIcon name="check-circle" size={24} />
        </h2>
        <p className="m-0 text-[13px] text-muted">
          تحقق من أسماء المسافرين وأرقام المقاعد قبل تثبيت تذكرة البولمان.
        </p>
      </div>

      <ReviewPassengersList
        passengers={passengers}
        selectedSeats={selectedSeats}
      />

      <PaymentChoiceGroup
        paymentMethod={paymentMethod}
        onSelectMethod={setPaymentMethod}
      />

      <p className="flex items-center gap-2 text-[12px] font-semibold text-secondary">
        <SairnaIcon name="shield" size={18} /> بتأكيد الحجز، تُحفظ تذكرتك
        الإلكترونية في حسابك ضمن قائمة «حجوزاتي» لإبرازها في الكراج.
      </p>
    </>
  );
}

export default ReviewStage;
