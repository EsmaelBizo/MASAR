import { formatDateArabic, formatMoney } from "../../../../../lib/formatters";

export function TicketMetaGrid({ booking, company }) {
  const items = [
    { label: "شركة البولمان", value: company.name, className: "text-[13px] text-text" },
    {
      label: "تاريخ السفر",
      value: formatDateArabic(booking.date),
      className: "text-[13px] text-text",
    },
    {
      label: "وقت الانطلاق",
      value: booking.departure,
      dir: "ltr",
      className: "font-tabular text-[14px] text-text",
    },
    {
      label: "رقم المقعد",
      value: booking.seats.join(", "),
      dir: "ltr",
      className: "font-tabular text-[14px] text-accent-deep",
    },
    {
      label: "إجمالي التذكرة",
      value: formatMoney(booking.total),
      className: "font-tabular text-[14px] text-secondary",
    },
    {
      label: "فئة الحافلة",
      value: booking.classLabel || company.tag,
      className: "text-[12px] text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3.5 border-y border-dashed border-border py-4">
      {items.map((item) => (
        <span key={item.label} className="flex flex-col text-[11px] text-muted">
          {item.label}{" "}
          <b dir={item.dir} className={`mt-0.5 ${item.className}`}>
            {item.value}
          </b>
        </span>
      ))}
    </div>
  );
}

export default TicketMetaGrid;
