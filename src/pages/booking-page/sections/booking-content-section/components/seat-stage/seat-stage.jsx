import { useBookingStore } from "../../../../../../store/use-booking-store";
import { useToastStore } from "../../../../../../store/use-toast-store";
import { useTripSeatsQuery } from "../../../../../../hooks/use-trips-query";
import { SeatLegendBar } from "./components/seat-legend-bar/seat-legend-bar";
import { BusCabinMap } from "./components/bus-cabin-map/bus-cabin-map";
import { SeatSelectionAside } from "./components/seat-selection-aside/seat-selection-aside";

export function SeatStage({ people, trip }) {
  const selectedSeats = useBookingStore((state) => state.selectedSeats);
  const toggleSeat = useBookingStore((state) => state.toggleSeat);
  const showToast = useToastStore((state) => state.showToast);
  const tripSeatsQuery = useTripSeatsQuery(trip?.backendId || trip?.id);

  const isVip =
    !trip || trip.busClass === "vip" || trip.company?.busClass === "vip";

  const handleSeatClick = (seatCode) => {
    const isAlreadySelected = selectedSeats.includes(seatCode);
    if (!isAlreadySelected && selectedSeats.length >= people) {
      showToast(
        `مسموح باختيار ${people} مقعد فقط حسب عدد المسافرين.`,
        "error"
      );
      return;
    }
    toggleSeat(seatCode);
  };

  return (
    <>
      <div className="mb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mb-1 flex items-center gap-2.5 font-heading text-[20px] max-[650px]:text-[17px] font-bold [&>i]:text-accent">
            مخطط اختيار المقاعد التفاعلي{" "}
            <span className="rounded-lg bg-soft-gold px-2.5 py-0.5 text-[12px] text-accent-deep">
              {isVip ? "بولمان VIP (2+1)" : "بولمان سياحي (2+2)"}
            </span>
          </h2>
        </div>
        <p className="m-0 text-[13px] text-muted">
          اختر {people} {people === 1 ? "مقعد" : "مقاعد"} من هيكل البولمان أدناه
          (بجانب النافذة الفردي A أو المقاعد المزدوجة B/C).
        </p>
      </div>

      <SeatLegendBar />

      {tripSeatsQuery.isLoading && (
        <p className="mb-4 text-[13px] font-bold text-muted">
          جارٍ تحميل المقاعد المحجوزة...
        </p>
      )}
      {tripSeatsQuery.isError && (
        <p className="mb-4 text-[13px] font-bold text-danger">
          تعذر تحميل حالة المقاعد. أعد المحاولة قبل اختيار المقعد.
        </p>
      )}

      <div className="grid grid-cols-[minmax(290px,1.15fr)_minmax(200px,0.85fr)] max-[650px]:grid-cols-1 gap-6 max-[1150px]:gap-4">
        <BusCabinMap
          isVip={isVip}
          selectedSeats={selectedSeats}
          onSeatClick={handleSeatClick}
          occupiedSeats={tripSeatsQuery.data?.occupiedSeats || []}
          isLoading={tripSeatsQuery.isLoading}
          isError={tripSeatsQuery.isError}
        />
        <SeatSelectionAside selectedSeats={selectedSeats} people={people} />
      </div>
    </>
  );
}

export default SeatStage;
