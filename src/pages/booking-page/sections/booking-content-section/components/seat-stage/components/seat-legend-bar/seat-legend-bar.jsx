export function SeatLegendBar() {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-5 rounded-xl border border-border bg-surface-alt/70 px-4 py-3 text-[12px] font-bold">
      <span className="flex items-center gap-2 text-text">
        <i className="size-4 rounded-[5px] border-2 border-secondary bg-surface" />{" "}
        متاح للحجز (Available)
      </span>
      <span className="flex items-center gap-2 text-text">
        <i className="size-4 rounded-[5px] border-2 border-accent-deep bg-accent" />{" "}
        مقعدك المحدد (Selected)
      </span>
      <span className="flex items-center gap-2 text-muted">
        <i className="size-4 rounded-[5px] border-2 border-[#C8D0D8] bg-[#E2E6EC]" />{" "}
        محجوز مسبقاً (Booked)
      </span>
    </div>
  );
}

export default SeatLegendBar;
