export function SeatLegendBar() {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-5 rounded-2xl glass-obsidian px-4 py-3 text-[12px] font-bold">
      <span className="flex items-center gap-2 text-text">
        <i className="size-4 rounded-[5px] border-2 border-secondary bg-surface" />{" "}
        متاح للحجز (Available)
      </span>
      <span className="flex items-center gap-2 text-text">
        <i className="size-4 rounded-[5px] border-2 border-accent-deep bg-accent shadow-[0_0_10px_rgba(200,138,50,0.45)]" />{" "}
        مقعدك المحدد (Selected)
      </span>
      <span className="flex items-center gap-2 text-muted">
        <i className="size-4 rounded-[5px] border-2 border-border/60 bg-surface-alt/70 opacity-60" />{" "}
        محجوز مسبقاً (Booked)
      </span>
    </div>
  );
}

export default SeatLegendBar;
