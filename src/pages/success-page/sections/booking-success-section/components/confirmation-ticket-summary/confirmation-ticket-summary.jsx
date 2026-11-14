export function ConfirmationTicketSummary({
  bookingId,
  originName,
  destinationName,
  seats = [],
}) {
  return (
    <div className="my-5 flex max-[650px]:flex-wrap items-center justify-around gap-3.5 rounded-2xl border border-dashed border-secondary/45 bg-surface-alt px-4 py-5">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-muted">رقم التذكرة</span>
        <strong dir="ltr" className="font-tabular text-[15px] text-primary">
          {bookingId}
        </strong>
      </div>
      <span className="h-10 border-r border-dashed border-border" />
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-muted">خط السير</span>
        <strong className="font-heading text-[14px] text-text">
          {originName} ⟵ {destinationName}
        </strong>
      </div>
      <span className="h-10 border-r border-dashed border-border" />
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-muted">رقم المقعد</span>
        <strong
          dir="ltr"
          className="font-tabular text-[15px] text-accent-deep"
        >
          {seats.join(", ")}
        </strong>
      </div>
    </div>
  );
}

export default ConfirmationTicketSummary;
