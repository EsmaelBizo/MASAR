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
        "group relative overflow-hidden rounded-xl border border-border bg-surface transition-all duration-250 hover:-translate-y-[3px] hover:border-accent/60 hover:shadow-card-md border-r-[6px]",
        isVip
          ? "border-r-accent"
          : "border-r-secondary"
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-6 pt-5 pb-3 max-[650px]:px-3.5 max-[650px]:pt-4">
        <div className="flex items-center gap-3">
          <CompanyLogo company={trip.company} />
          <div>
            <strong className="block font-heading text-[14px] max-[650px]:text-[13px] text-text">
              {trip.company.name}
            </strong>
            <span className="flex items-center gap-1 font-tabular text-[11px] font-bold text-accent">
              <SairnaIcon name="star" size={14} /> {trip.company.rating}{" "}
              <i className="not-italic text-muted">·</i>{" "}
              <span className="font-sans text-muted">{trip.company.tag}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold",
              isVip
                ? "border-accent bg-soft-gold text-accent-deep"
                : "border-secondary bg-soft-teal text-secondary"
            )}
          >
            <SairnaIcon name="bus" size={15} />{" "}
            {trip.classLabel ||
              (isVip ? "VIP Royal Class 2+1" : "بولمان سياحي 2+2")}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border border-secondary/35 bg-soft-teal px-2.5 py-1 text-[11px] font-bold text-secondary">
            <SairnaIcon name="route" size={14} />{" "}
            {trip.highway || "مباشرة — أوتوستراد M5"}
          </span>
        </div>
      </div>

      <TripRouteTimeline trip={trip} />

      <div className="flex max-[650px]:flex-col items-center max-[650px]:items-stretch justify-between gap-4 px-6 pt-2 pb-5 max-[650px]:px-3.5 max-[650px]:pb-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <ServiceBadges company={trip.company} />
          </div>

          {isLowSeats ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-danger">
              <SairnaIcon name="info" size={14} /> بقي {trip.seats} مقاعد فقط على
              هذه الرحلة — ثبّت مقعدك الآن
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-secondary">
              <SairnaIcon name="seat" size={14} /> متاح ({trip.seats} مقعد شاغر)
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-r max-[650px]:border-r-0 max-[650px]:border-t border-border pr-5 max-[650px]:pt-3 max-[650px]:pr-0">
          <div className="flex flex-col">
            <small className="text-[11px] text-muted">
              سعر التذكرة للمقعد:
            </small>
            <b className="font-tabular whitespace-nowrap text-[20px] max-[650px]:text-[18px] font-bold text-primary dark:text-accent">
              {formatMoney(trip.price)}
            </b>
          </div>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "min-h-[44px] px-5 py-2.5 text-[13px]"
            )}
            onClick={handleSelectTrip}
          >
            احجز مقعدك <SairnaIcon name="arrow-left" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default TripCard;
