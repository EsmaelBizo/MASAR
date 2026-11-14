import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

export function ReviewPassengersList({ passengers = [], selectedSeats = [] }) {
  return (
    <div className="mb-4 rounded-2xl border border-border p-5">
      <h3 className="mb-3.5 font-heading text-[15px] font-bold">
        قائمة المسافرين والمقاعد المخصصة
      </h3>
      {passengers.map((passenger, index) => (
        <div
          key={index}
          className="flex items-center gap-3 border-t border-border py-3"
        >
          <span className="grid size-10 place-items-center rounded-full bg-soft-teal text-secondary">
            <SairnaIcon name="user" size={19} />
          </span>
          <div className="flex flex-col">
            <b className="text-[13px]">{passenger.name}</b>
            <span dir="ltr" className="font-tabular text-[12px] text-muted">
              {passenger.phone}
            </span>
          </div>
          <small
            dir="ltr"
            className="font-tabular mr-auto rounded-lg bg-soft-gold px-3 py-1 font-bold text-accent-deep"
          >
            Seat {selectedSeats[index]}
          </small>
        </div>
      ))}
    </div>
  );
}

export default ReviewPassengersList;
