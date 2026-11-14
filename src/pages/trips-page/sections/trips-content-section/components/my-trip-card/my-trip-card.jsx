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

  const company = getCompanyById(booking.companyId);
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
    <article className="group overflow-hidden rounded-[18px] border border-border bg-surface shadow-card transition-all duration-300 ease-[var(--ease-masar-out)] hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-md">
      <div
        className="ablaq-ribbon group-hover:ablaq-ribbon-animated"
        aria-hidden="true"
      />
      <div className="flex items-center justify-between gap-[15px] border-b border-dashed border-border bg-surface-alt px-6 py-4 max-[650px]:p-3.5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-navy text-accent transition-transform duration-300 group-hover:scale-105">
            <SairnaIcon name="ticket" size={20} />
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted">رقم تذكرة مَسار</span>
            <b dir="ltr" className="font-tabular text-[14px] text-primary">
              {booking.id}
            </b>
          </div>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold",
            booking.demo
              ? "bg-soft-gold text-accent-deep"
              : "bg-soft-teal text-secondary"
          )}
        >
          <SairnaIcon name={booking.demo ? "info" : "check-circle"} size={15} />{" "}
          {booking.demo ? "تذكرة توضيحية (VIP 2+1)" : "حجز مؤكد · جاهز للصعود"}
        </span>
      </div>

      <div className="grid grid-cols-[1.15fr_1fr] max-[650px]:grid-cols-1 items-center gap-6 px-6 py-6 max-[650px]:px-4 max-[650px]:py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <small className="text-[10px] text-muted">
              {originCity.terminal}
            </small>
            <h3 className="my-0.5 font-heading text-[21px] max-[650px]:text-[18px] font-bold">
              {originCity.name}
            </h3>
            <b dir="ltr" className="font-tabular text-[14px] text-primary">
              {booking.departure}
            </b>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1.5 text-accent">
            <span className="transition-transform duration-300 ease-[var(--ease-masar-out)] group-hover:-translate-x-2">
              <SairnaIcon name="bus" size={20} className="text-primary" />
            </span>
            <div className="w-full border-t border-dashed border-accent" />
            <small className="whitespace-nowrap max-[650px]:whitespace-normal max-[650px]:text-center text-[10px] font-semibold text-secondary">
              {formatDateArabic(booking.date)}
            </small>
          </div>
          <div className="flex flex-col text-left">
            <small className="text-[10px] text-muted">
              {destinationCity.terminal}
            </small>
            <h3 className="my-0.5 font-heading text-[21px] max-[650px]:text-[18px] font-bold">
              {destinationCity.name}
            </h3>
            <b dir="ltr" className="font-tabular text-[14px] text-primary">
              {booking.arrive}
            </b>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 border-r border-border pr-6 max-[650px]:border-t max-[650px]:border-r-0 max-[650px]:pt-4 max-[650px]:pr-0">
          <span className="flex items-center gap-2 text-[12px] font-bold text-text">
            <CompanyLogo company={company} size="tiny" /> {company.name}
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold text-accent-deep">
            <SairnaIcon name="seat" size={16} /> المقعد المخصص:{" "}
            <b dir="ltr" className="font-tabular">
              {booking.seats.join(", ")}
            </b>
          </span>
          <span className="flex items-center gap-2 font-tabular text-[12px] font-bold text-secondary">
            <SairnaIcon name="wallet" size={16} /> {formatMoney(booking.total)}
          </span>
        </div>
      </div>

      <div className="flex max-[650px]:flex-wrap gap-2.5 border-t border-border px-6 py-4 max-[650px]:p-3.5">
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "min-h-[40px] text-[12px] max-[650px]:flex-1"
          )}
          onClick={() => openTicketModal(booking)}
        >
          <SairnaIcon name="ticket" size={17} /> عرض التذكرة ورمز QR
        </button>
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "min-h-[40px] text-[12px] max-[650px]:flex-1"
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
