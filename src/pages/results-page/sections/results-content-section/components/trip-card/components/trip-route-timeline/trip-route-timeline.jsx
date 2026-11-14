import { formatDuration } from "../../../../../../../../lib/formatters";
import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

export function TripRouteTimeline({ trip }) {
  return (
    <div className="mx-6 max-[650px]:mx-3.5 my-2 rounded-xl border border-border/70 bg-surface-alt/70 p-4 max-[650px]:p-3">
      <div className="flex items-center justify-between gap-4 max-[650px]:gap-2">
        <div className="flex min-w-[90px] flex-col">
          <b
            dir="ltr"
            className="font-tabular text-[22px] max-[650px]:text-[18px] font-bold leading-[1.3] text-primary"
          >
            {trip.departure}
          </b>
          <span className="mt-0.5 font-heading text-[13px] max-[650px]:text-[12px] font-bold text-text">
            {trip.origin.name} ({trip.originTerminal || trip.origin.terminal})
          </span>
          <small className="mt-0.5 text-[11px] text-muted">
            {trip.gate || "بوابة 04 — الحضور قبل 20 دقيقة"}
          </small>
        </div>

        <div className="flex min-w-[115px] max-[650px]:min-w-[80px] flex-1 flex-col items-center">
          <span className="font-tabular text-[11px] font-bold text-accent-deep">
            {formatDuration(trip.duration)} (~{trip.distance} كم)
          </span>
          <div className="my-1.5 flex w-full items-center justify-center gap-2 text-accent">
            <span className="size-2.5 rounded-full bg-primary" />
            <i className="h-0.5 flex-1 bg-accent" />
            <SairnaIcon
              name="bus"
              size={18}
              className="text-primary transition-transform duration-300 ease-[var(--ease-masar-out)] group-hover:-translate-x-2"
            />
            <i className="h-0.5 flex-1 bg-accent" />
            <span className="size-2.5 rounded-full bg-secondary" />
          </div>
          <small className="text-[11px] font-bold text-secondary">
            رحلة بولمان مباشرة
          </small>
        </div>

        <div className="flex min-w-[90px] flex-col text-left">
          <b
            dir="ltr"
            className="font-tabular text-[22px] max-[650px]:text-[18px] font-bold leading-[1.3] text-primary"
          >
            {trip.arrive}
          </b>
          <span className="mt-0.5 font-heading text-[13px] max-[650px]:text-[12px] font-bold text-text">
            {trip.destination.name} (
            {trip.destinationTerminal || trip.destination.terminal})
          </span>
          <small className="mt-0.5 text-[11px] text-muted">
            صالة الوصول الرئيسية
          </small>
        </div>
      </div>
    </div>
  );
}

export default TripRouteTimeline;
