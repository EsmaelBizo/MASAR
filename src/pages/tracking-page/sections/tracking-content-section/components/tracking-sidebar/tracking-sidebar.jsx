import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { cn } from "../../../../../../lib/cn";
import { TrackingTimeline } from "./components/tracking-timeline/tracking-timeline";

export function TrackingSidebar({
  booking,
  originCity,
  destinationCity,
  company,
  approxDist,
  progressPercent,
  etaText,
  statusText,
  playing,
  onTogglePlay,
  onReset,
}) {
  return (
    <aside className="overflow-hidden rounded-[19px] border border-border bg-surface shadow-card">
      <div
        className={cn("ablaq-ribbon", playing && "ablaq-ribbon-animated")}
        aria-hidden="true"
      />
      <div className="p-5 max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-6 max-[900px]:gap-y-3 max-[650px]:block">
        <div className="flex items-center gap-2 text-[11px] font-bold text-secondary max-[900px]:col-span-full">
          <span className="size-2.5 animate-pulse-ring rounded-full bg-secondary" />{" "}
          رحلة بولمان قيد المتابعة{" "}
          <small
            dir="ltr"
            className="font-tabular mr-auto font-bold text-primary"
          >
            {booking.id}
          </small>
        </div>

        <div className="my-5 flex items-center justify-between gap-3 max-[900px]:col-span-full">
          <div>
            <small className="text-[10px] text-muted">
              {originCity.terminal}
            </small>
            <h2 className="my-0.5 font-heading text-[21px] font-bold">
              {originCity.name}
            </h2>
          </div>
          <span className="text-accent">
            <SairnaIcon name="arrow-left" size={21} />
          </span>
          <div className="text-left">
            <small className="text-[10px] text-muted">
              {destinationCity.terminal}
            </small>
            <h2 className="my-0.5 font-heading text-[21px] font-bold">
              {destinationCity.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2.5 max-[900px]:col-span-full">
          <CompanyLogo company={company} />
          <div className="flex flex-col">
            <b className="font-heading text-[13px]">{company.name}</b>
            <small className="text-[11px] text-muted">
              انطلاق الساعة{" "}
              <span dir="ltr" className="font-tabular font-bold">
                {booking.departure}
              </span>
            </small>
          </div>
        </div>

        <div className="my-5 max-[900px]:my-1 border-t border-dashed border-border max-[900px]:col-span-full" />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="m-0 font-heading text-[13px] font-bold">
              نسبة قطع المسافة
            </h3>
            <strong
              id="progress-label"
              className="font-tabular text-[14px] text-secondary"
            >
              {progressPercent}%
            </strong>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-surface-alt">
            <span
              id="progress-fill"
              className="block h-full rounded-full bg-[linear-gradient(90deg,#163A5F,#2E6F5E,#C88A32)] transition-[width] duration-150 ease-linear"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <TrackingTimeline
            originCity={originCity}
            destinationCity={destinationCity}
            departure={booking.departure}
            arrive={booking.arrive}
            statusText={statusText}
          />
        </div>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-2.5 max-[900px]:items-end">
            <div className="flex flex-col rounded-xl border border-border p-3">
              <span className="flex items-center gap-1.5 text-[10px] text-muted">
                <SairnaIcon name="route" size={15} className="text-primary" />{" "}
                المسافة
              </span>
              <b id="track-distance" className="font-tabular mt-1 text-[15px]">
                ~{approxDist} كم
              </b>
            </div>
            <div className="flex flex-col rounded-xl border border-border p-3">
              <span className="flex items-center gap-1.5 text-[10px] text-muted">
                <SairnaIcon name="clock" size={15} className="text-accent" />{" "}
                المتبقي
              </span>
              <b id="track-eta" className="mt-1 text-[14px]">
                {etaText}
              </b>
            </div>
          </div>

          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              className={cn(buttonVariants({ variant: "primary" }), "flex-1")}
              id="track-toggle"
              onClick={onTogglePlay}
            >
              <SairnaIcon name={playing ? "pause" : "play"} size={17} />{" "}
              {playing ? "إيقاف العرض" : "تشغيل العرض"}
            </button>
            <button
              type="button"
              className={buttonVariants({ variant: "outline", size: "square" })}
              onClick={onReset}
              aria-label="إعادة العرض"
            >
              <SairnaIcon name="refresh" size={18} />
            </button>
          </div>
        </div>

        <p className="mt-4 mb-0 flex items-start gap-2 text-[10px] leading-[1.75] text-muted max-[900px]:col-span-full [&>i]:flex-none">
          <SairnaIcon name="info" size={16} /> عرض تقريبي لمسار الرحلة
          بين المحافظات السورية.
        </p>
      </div>
    </aside>
  );
}

export default TrackingSidebar;
