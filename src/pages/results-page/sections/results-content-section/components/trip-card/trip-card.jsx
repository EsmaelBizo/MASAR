import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { useBookingStore } from "../../../../../../store/use-booking-store";
import { formatMoney } from "../../../../../../lib/formatters";
import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { ServiceBadges } from "../../../../../../components/shared/service-badges/service-badges";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { cn } from "../../../../../../lib/cn";
import { TripRouteTimeline } from "./components/trip-route-timeline/trip-route-timeline";

export function TripCard({ trip }) {
  const navigate = useNavigate();
  const selectTrip = useBookingStore((state) => state.selectTrip);

  const handleSelectTrip = () => {
    selectTrip(trip);
    navigate(ROUTES.BOOKING);
  };

  const isVip = trip.busClass === "vip" || trip.company?.busClass === "vip";
  const isLowSeats = trip.seats <= 6;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[22px] glass-obsidian shadow-card transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-1 hover:border-accent/65 hover:shadow-card-md border-r-[5px]",
        isVip ? "border-r-accent" : "border-r-secondary"
      )}
    >
      {/* Top Header: Company Info & Bus Class / Highway Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 pt-5 pb-3 max-[650px]:px-4 max-[650px]:pt-4 max-[650px]:pb-2.5">
        <div className="flex items-center gap-3 min-w-0">
          <CompanyLogo company={trip.company} />
          <div className="min-w-0 flex-1">
            <strong className="block truncate font-heading text-[16px] max-[650px]:text-[14.5px] text-text transition-colors group-hover:text-primary dark:group-hover:text-accent">
              {trip.company.name}
            </strong>
            <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11.5px]">
              <span className="inline-flex items-center gap-1 font-tabular font-bold text-accent [&_svg]:fill-[#C88A32]">
                <SairnaIcon name="star" size={13} /> {trip.company.rating}
              </span>
              <i className="not-italic text-muted">•</i>
              <span className="truncate font-sans font-medium text-muted">
                {trip.company.tag}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-[11px] font-bold whitespace-nowrap",
              isVip
                ? "border-accent/45 bg-soft-gold text-accent-deep dark:text-accent"
                : "border-secondary/40 bg-soft-teal text-secondary"
            )}
          >
            <SairnaIcon name="bus" size={14} />
            {trip.classLabel ||
              (isVip ? "VIP Royal Class 2+1" : "بولمان سياحي 2+2")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-secondary/35 bg-soft-teal px-2.5 py-1 text-[11px] font-bold text-secondary whitespace-nowrap">
            <SairnaIcon name="route" size={13} />
            {trip.highway || "أوتوستراد مباشر (M5)"}
          </span>
        </div>
      </div>

      {/* Route Timeline Box */}
      <TripRouteTimeline trip={trip} />

      {/* Bottom Footer: Features, Seat Availability, Price & CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 pt-3 pb-5 max-[650px]:px-4 max-[650px]:pb-4">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:items-center md:items-start lg:items-center justify-between gap-2.5 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <ServiceBadges company={trip.company} />
          </div>

          {isLowSeats ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-danger/25 bg-soft-danger px-2.5 py-1 text-[11px] font-bold text-danger whitespace-nowrap w-fit">
              <SairnaIcon name="info" size={13} /> بقي {trip.seats} مقاعد فقط —
              ثبّت مقعدك الآن
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-soft-teal px-2.5 py-1 text-[11px] font-bold text-secondary whitespace-nowrap w-fit">
              <SairnaIcon name="seat" size={13} /> متاح ({trip.seats} مقعد شاغر)
            </span>
          )}
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 md:border-r border-border pt-3.5 md:pt-0 md:pr-5 shrink-0">
          <div className="flex flex-col">
            <small className="text-[11px] font-medium text-muted whitespace-nowrap">
              سعر التذكرة للمقعد
            </small>
            <b className="font-tabular whitespace-nowrap text-[22px] max-[650px]:text-[19px] font-bold leading-tight text-primary dark:text-accent">
              {formatMoney(trip.price)}
            </b>
          </div>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "min-h-[44px] px-5 py-2.5 text-[13px] whitespace-nowrap shrink-0"
            )}
            onClick={handleSelectTrip}
          >
            اختر المقعد واحجز <SairnaIcon name="arrow-left" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default TripCard;
