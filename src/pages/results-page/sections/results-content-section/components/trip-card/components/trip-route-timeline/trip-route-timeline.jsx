import { formatDuration } from "../../../../../../../../lib/formatters";
import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

export function TripRouteTimeline({ trip }) {
  return (
    <div className="mx-6 max-[650px]:mx-3.5 my-2 rounded-2xl border border-border/80 bg-surface-alt/75 p-4 max-[650px]:p-3">
      <div className="flex items-center justify-between gap-4 max-[650px]:gap-2">
        <div className="flex min-w-[95px] flex-col">
          <b
            dir="ltr"
            className="font-tabular text-[22px] max-[650px]:text-[18px] font-bold leading-[1.25] text-primary dark:text-[#F7F4EE]"
          >
            {trip.departure}
          </b>
          <span className="mt-1 font-heading text-[13px] max-[650px]:text-[12px] font-bold text-text">
            {trip.origin.name} ({trip.originTerminal || trip.origin.terminal})
          </span>
          <small className="mt-0.5 text-[11px] text-muted">
            {trip.gate || "بوابة 04 — الحضور قبل 20 دقيقة"}
          </small>
        </div>

        <div className="flex min-w-[115px] max-[650px]:min-w-[80px] flex-1 flex-col items-center">
          <span className="font-tabular text-[11px] font-bold text-accent">
            {formatDuration(trip.duration)} (~{trip.distance} كم)
          </span>
          <div className="my-1.5 flex w-full items-center justify-center gap-2 text-accent">
            <span className="size-2.5 rounded-full bg-primary dark:bg-accent" />
            <i className="h-[2px] flex-1 bg-gradient-to-l from-secondary via-accent to-primary" />
            <SairnaIcon
              name="bus"
              size={18}
              className="text-primary dark:text-accent transition-transform duration-350 ease-[var(--ease-masar-out)] group-hover:-translate-x-2"
            />
            <i className="h-[2px] flex-1 bg-gradient-to-l from-primary via-accent to-secondary" />
            <span className="size-2.5 rounded-full bg-secondary" />
          </div>
          <small className="text-[11px] font-bold text-secondary">
            رحلة بولمان مباشرة
          </small>
        </div>

        <div className="flex min-w-[95px] flex-col text-left">
          <b
            dir="ltr"
            className="font-tabular text-[22px] max-[650px]:text-[18px] font-bold leading-[1.25] text-primary dark:text-[#F7F4EE]"
          >
            {trip.arrive}
          </b>
          <span className="mt-1 font-heading text-[13px] max-[650px]:text-[12px] font-bold text-text">
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
