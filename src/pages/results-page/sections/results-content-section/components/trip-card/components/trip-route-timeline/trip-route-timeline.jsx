import { formatDuration } from "../../../../../../../../lib/formatters";
import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

export function TripRouteTimeline({ trip }) {
  const originTerminal = trip.originTerminal || trip.origin.terminal;
  const destinationTerminal =
    trip.destinationTerminal || trip.destination.terminal;

  return (
    <div className="mx-6 max-[650px]:mx-4 my-2 rounded-2xl border border-border/85 bg-surface-alt/75 p-4 max-[650px]:p-3.5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] max-[560px]:grid-cols-2 items-center gap-4 max-[650px]:gap-3">
        {/* Origin Block */}
        <div className="flex flex-col items-start min-w-0 max-[560px]:order-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-secondary shrink-0" />
            <small className="text-[10.5px] font-bold text-secondary">
              الانطلاق
            </small>
          </div>
          <b
            dir="ltr"
            className="mt-0.5 font-tabular text-[24px] max-[900px]:text-[21px] max-[650px]:text-[19px] font-bold leading-none text-primary dark:text-[#F7F4EE]"
          >
            {trip.departure}
          </b>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-1 min-w-0">
            <span className="font-heading text-[14px] max-[650px]:text-[13px] font-bold text-text">
              {trip.origin.name}
            </span>
            {originTerminal && (
              <span className="truncate text-[11.5px] text-muted">
                ({originTerminal})
              </span>
            )}
          </div>
          <small className="mt-0.5 truncate max-w-full text-[11px] text-muted">
            {trip.gate || "بوابة 04 — الحضور قبل 20 دقيقة"}
          </small>
        </div>

        {/* Center Route Connector */}
        <div className="flex min-w-[150px] max-[900px]:min-w-[120px] max-[560px]:col-span-2 max-[560px]:order-3 max-[560px]:mt-1 max-[560px]:pt-2.5 max-[560px]:border-t max-[560px]:border-border/60 flex-col items-center justify-center px-2">
          <span className="rounded-full border border-accent/30 bg-soft-gold px-2.5 py-0.5 font-tabular text-[11px] font-bold text-accent-deep dark:text-accent whitespace-nowrap">
            {formatDuration(trip.duration)} • ~{trip.distance} كم
          </span>

          <div className="my-2 flex w-full items-center justify-center gap-2 text-accent">
            <span className="size-2.5 shrink-0 rounded-full bg-secondary ring-4 ring-secondary/15" />
            <i className="h-[2px] flex-1 bg-gradient-to-l from-secondary via-accent to-primary" />
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-accent/40 bg-surface shadow-xs transition-transform duration-350 ease-[var(--ease-masar-out)] group-hover:-translate-x-1.5">
              <SairnaIcon
                name="bus"
                size={15}
                className="text-primary dark:text-accent"
              />
            </span>
            <i className="h-[2px] flex-1 bg-gradient-to-l from-primary via-accent to-secondary" />
            <span className="size-2.5 shrink-0 rounded-full bg-primary dark:bg-accent ring-4 ring-accent/15" />
          </div>

          <small className="text-[10.5px] font-bold text-secondary whitespace-nowrap">
            رحلة بولمان مباشرة دون توقف
          </small>
        </div>

        {/* Destination Block */}
        <div className="flex flex-col items-end text-left min-w-0 max-[560px]:order-2">
          <div className="flex items-center gap-1.5">
            <small className="text-[10.5px] font-bold text-accent">
              الوصول
            </small>
            <span className="size-2 rounded-full bg-accent shrink-0" />
          </div>
          <b
            dir="ltr"
            className="mt-0.5 font-tabular text-[24px] max-[900px]:text-[21px] max-[650px]:text-[19px] font-bold leading-none text-primary dark:text-[#F7F4EE]"
          >
            {trip.arrive}
          </b>
          <div className="mt-1.5 flex flex-wrap items-baseline justify-end gap-1 min-w-0">
            <span className="font-heading text-[14px] max-[650px]:text-[13px] font-bold text-text">
              {trip.destination.name}
            </span>
            {destinationTerminal && (
              <span className="truncate text-[11.5px] text-muted">
                ({destinationTerminal})
              </span>
            )}
          </div>
          <small className="mt-0.5 truncate max-w-full text-[11px] text-muted">
            صالة الوصول الرئيسية
          </small>
        </div>
      </div>
    </div>
  );
}

export default TripRouteTimeline;
