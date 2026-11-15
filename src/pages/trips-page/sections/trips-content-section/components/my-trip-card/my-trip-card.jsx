import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { getCityById } from "../../../../../../constants/cities";
import { getCompanyById } from "../../../../../../constants/companies";
import { useBookingStore } from "../../../../../../store/use-booking-store";
import { formatDateArabic, formatMoney } from "../../../../../../lib/formatters";
import { CompanyLogo } from "../../../../../../components/shared/company-logo/company-logo";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { cn } from "../../../../../../lib/cn";

export function MyTripCard({ booking }) {
  const navigate = useNavigate();
  const setTrackId = useBookingStore((state) => state.setTrackId);
  const openTicketModal = useBookingStore((state) => state.openTicketModal);

  const company = booking.company || getCompanyById(booking.companyId);
  const originCity = {
    ...getCityById(booking.originName || booking.origin),
    name: booking.originName || getCityById(booking.origin).name,
  };
  const destinationCity = {
    ...getCityById(booking.destinationName || booking.destination),
    name: booking.destinationName || getCityById(booking.destination).name,
  };

  const handleTrack = () => {
    setTrackId(booking.id);
    navigate(`${ROUTES.TRACKING}?bookingId=${encodeURIComponent(booking.id)}`);
  };

  return (
    <article className="group overflow-hidden rounded-[22px] glass-obsidian shadow-card transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-md">
      <div
        className="ablaq-ribbon group-hover:ablaq-ribbon-animated"
        aria-hidden="true"
      />

      {/* Ticket Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-border bg-surface-alt/70 px-6 py-4 max-[650px]:px-4 max-[650px]:py-3.5">
        <div className="flex items-center gap-3 min-w-0">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-accent transition-transform duration-300 group-hover:scale-105">
            <SairnaIcon name="ticket" size={20} />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] text-muted">رقم تذكرة مَسار</span>
            <b
              dir="ltr"
              className="truncate font-tabular text-[14.5px] font-bold text-primary dark:text-accent"
            >
              {booking.id}
            </b>
          </div>
        </div>

        <span
          className={cn(
            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-bold",
            booking.demo
              ? "border-accent/35 bg-soft-gold text-accent-deep dark:text-accent"
              : "border-secondary/35 bg-soft-teal text-secondary"
          )}
        >
          <SairnaIcon name={booking.demo ? "info" : "check-circle"} size={15} />{" "}
          {booking.demo ? "تذكرة توضيحية (VIP 2+1)" : "حجز مؤكد · جاهز للصعود"}
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-[1.2fr_1fr] max-[860px]:grid-cols-1 items-center gap-6 px-6 py-5 max-[650px]:px-4 max-[650px]:py-4">
        {/* Route Timeline */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] max-[520px]:grid-cols-2 items-center gap-3 rounded-2xl border border-border/80 bg-surface-alt/55 p-4 max-[650px]:p-3.5">
          <div className="flex flex-col items-start min-w-0 max-[520px]:order-1">
            <small className="truncate max-w-full text-[10.5px] text-muted">
              {originCity.terminal}
            </small>
            <h3 className="my-0.5 font-heading text-[20px] max-[650px]:text-[17px] font-bold text-text">
              {originCity.name}
            </h3>
            <b
              dir="ltr"
              className="font-tabular text-[15px] font-bold text-primary dark:text-accent"
            >
              {booking.departure}
            </b>
          </div>

          <div className="flex min-w-[110px] max-[520px]:col-span-2 max-[520px]:order-3 max-[520px]:mt-1 max-[520px]:pt-2 max-[520px]:border-t max-[520px]:border-border/60 flex-col items-center gap-1 text-accent px-2">
            <span className="transition-transform duration-300 ease-[var(--ease-masar-out)] group-hover:-translate-x-1.5">
              <SairnaIcon
                name="bus"
                size={19}
                className="text-primary dark:text-accent"
              />
            </span>
            <div className="w-full border-t border-dashed border-accent/70" />
            <small className="whitespace-nowrap text-[10.5px] font-bold text-secondary">
              {formatDateArabic(booking.date)}
            </small>
          </div>

          <div className="flex flex-col items-end text-left min-w-0 max-[520px]:order-2">
            <small className="truncate max-w-full text-[10.5px] text-muted">
              {destinationCity.terminal}
            </small>
            <h3 className="my-0.5 font-heading text-[20px] max-[650px]:text-[17px] font-bold text-text">
              {destinationCity.name}
            </h3>
            <b
              dir="ltr"
              className="font-tabular text-[15px] font-bold text-primary dark:text-accent"
            >
              {booking.arrive}
            </b>
          </div>
        </div>

        {/* Booking Details Meta Grid */}
        <div className="grid grid-cols-3 max-[520px]:grid-cols-1 gap-3 border-r max-[860px]:border-r-0 max-[860px]:border-t border-border pr-6 max-[860px]:pt-4 max-[860px]:pr-0">
          <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface-alt/45 p-2.5 min-w-0">
            <CompanyLogo company={company} size="tiny" />
            <div className="min-w-0">
              <small className="block text-[10px] text-muted">الناقل</small>
              <strong className="block truncate text-[12px] font-bold text-text">
                {company.name}
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface-alt/45 p-2.5 min-w-0">
            <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-soft-gold text-accent-deep dark:text-accent">
              <SairnaIcon name="seat" size={15} />
            </span>
            <div className="min-w-0">
              <small className="block text-[10px] text-muted">المقاعد</small>
              <b
                dir="ltr"
                className="block truncate font-tabular text-[12.5px] font-bold text-accent-deep dark:text-accent"
              >
                {booking.seats.join(", ")}
              </b>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface-alt/45 p-2.5 min-w-0">
            <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-soft-teal text-secondary">
              <SairnaIcon name="wallet" size={15} />
            </span>
            <div className="min-w-0">
              <small className="block text-[10px] text-muted">الإجمالي</small>
              <b className="block truncate font-tabular text-[12.5px] font-bold text-secondary">
                {formatMoney(booking.total)}
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Footer */}
      <div className="flex flex-wrap items-center justify-end gap-2.5 border-t border-border bg-surface-alt/30 px-6 py-3.5 max-[650px]:px-4 max-[650px]:py-3">
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "min-h-[42px] px-4 text-[12.5px] max-[560px]:flex-1"
          )}
          onClick={() => openTicketModal(booking)}
        >
          <SairnaIcon name="ticket" size={17} /> عرض التذكرة ورمز QR
        </button>
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "min-h-[42px] px-4 text-[12.5px] max-[560px]:flex-1"
          )}
          onClick={handleTrack}
        >
          <SairnaIcon name="route" size={17} /> تتبّع البولمان على الخريطة
        </button>
      </div>
    </article>
  );
}

export default MyTripCard;
