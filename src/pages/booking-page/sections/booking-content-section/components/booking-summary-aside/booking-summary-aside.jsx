import { useEffect, useRef, useState } from "react";
import { formatDateArabic, formatMoney } from "../../../../../../lib/formatters";
import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../lib/cn";

export function BookingSummaryAside({ trip, people, selectedSeats }) {
  const [isTotalPulsing, setIsTotalPulsing] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return undefined;
    }
    setIsTotalPulsing(true);
    const timer = setTimeout(() => setIsTotalPulsing(false), 200);
    return () => clearTimeout(timer);
  }, [selectedSeats.length, people]);

  const detailsRows = [
    { label: "تاريخ السفر", value: formatDateArabic(trip.date) },
    { label: "عدد المسافرين", value: people, tabular: true },
    {
      label: "أرقام المقاعد",
      value: selectedSeats.length > 0 ? selectedSeats.join(", ") : "لم تُحدّد بعد",
      tabular: true,
      dir: "ltr",
      accent: true,
    },
    { label: "سعر التذكرة للمقعد", value: formatMoney(trip.price), tabular: true },
  ];

  return (
    <aside className="sticky top-[110px] max-[900px]:static max-[900px]:-order-1 overflow-hidden rounded-[20px] max-[650px]:rounded-[15px] border border-border bg-surface shadow-card">
      <div className="ablaq-ribbon" aria-hidden="true" />
      <div className="p-6 max-[650px]:p-4">
        <div className="flex items-center gap-2 border-b border-border pb-4 text-primary">
          <SairnaIcon name="ticket" size={21} className="text-accent" />{" "}
          <h3 className="m-0 font-heading text-[16px] font-bold text-text">
            ملخص تذكرة مَسار
          </h3>
        </div>

        <div className="my-5 flex items-center gap-3">
          <CompanyLogo company={trip.company} />
          <div>
            <strong className="block font-heading text-[14px]">
              {trip.company.name}
            </strong>
            <small className="block text-[11px] font-semibold text-accent-deep">
              {trip.classLabel || trip.company.tag}
            </small>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface-alt p-3.5">
          <div className="flex flex-col items-start">
            <small className="text-[10px] text-muted">الانطلاق</small>
            <b className="font-heading text-[15px]">{trip.origin.name}</b>
            <span className="text-[10px] text-muted">
              {trip.origin.terminal}
            </span>
            <span
              dir="ltr"
              className="mt-0.5 font-tabular text-[12px] font-bold text-primary"
            >
              {trip.departure}
            </span>
          </div>
          <span className="text-accent">
            <SairnaIcon name="arrow-left" size={21} />
          </span>
          <div className="flex flex-col items-start">
            <small className="text-[10px] text-muted">الوصول</small>
            <b className="font-heading text-[15px]">{trip.destination.name}</b>
            <span className="text-[10px] text-muted">
              {trip.destination.terminal}
            </span>
            <span
              dir="ltr"
              className="mt-0.5 font-tabular text-[12px] font-bold text-primary"
            >
              {trip.arrive}
            </span>
          </div>
        </div>

        <div className="my-5 flex flex-col gap-3.5 max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-2.5">
          {detailsRows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-2 max-[650px]:flex-col max-[650px]:items-start"
            >
              <span className="text-[12px] text-muted">{row.label}</span>
              <strong
                dir={row.dir}
                className={`text-left max-[650px]:text-right text-[12px] ${
                  row.tabular ? "font-tabular" : ""
                } ${row.accent ? "text-accent-deep" : ""}`}
              >
                {row.value}
              </strong>
            </div>
          ))}
        </div>

        <div className="flex items-baseline justify-between gap-2 border-t border-dashed border-border pt-4 pb-2">
          <span className="text-[13px] font-bold">الإجمالي المستحق</span>
          <b
            className={cn(
              "inline-block origin-left font-tabular text-[21px] font-bold text-primary transition-transform duration-200 dark:text-accent",
              isTotalPulsing && "scale-105 text-accent"
            )}
          >
            {formatMoney(trip.price * people)}
          </b>
        </div>

        <p className="mt-3 mb-0 flex gap-2 rounded-xl bg-soft-teal p-2.5 text-[10px] font-semibold text-secondary [&>i]:shrink-0">
          <SairnaIcon name="shield" size={16} /> الحضور إلى الكراج قبل 20 دقيقة
          من الانطلاق مع إبراز رمز QR.
        </p>
      </div>
    </aside>
  );
}

export default BookingSummaryAside;
