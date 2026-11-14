import { useEffect } from "react";
import { useBookingStore } from "../../../store/use-booking-store";
import { useToastStore } from "../../../store/use-toast-store";
import { getCityById } from "../../../constants/cities";
import { getCompanyById } from "../../../constants/companies";
import { SairnaIcon } from "../../ui/sairna-icon";
import { buttonVariants } from "../../ui/button";
import { cn } from "../../../lib/cn";
import { TicketQrCode } from "./components/ticket-qr-code/ticket-qr-code";
import { TicketMetaGrid } from "./components/ticket-meta-grid/ticket-meta-grid";

export function TicketModal() {
  const activeTicketModal = useBookingStore((state) => state.activeTicketModal);
  const closeTicketModal = useBookingStore((state) => state.closeTicketModal);
  const showToast = useToastStore((state) => state.showToast);

  useEffect(() => {
    if (!activeTicketModal) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeTicketModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTicketModal, closeTicketModal]);

  if (!activeTicketModal) return null;

  const company = getCompanyById(activeTicketModal.companyId);
  const originCity = {
    ...getCityById(
      activeTicketModal.originName || activeTicketModal.origin
    ),
    name:
      activeTicketModal.originName ||
      getCityById(activeTicketModal.origin).name,
  };
  const destinationCity = {
    ...getCityById(
      activeTicketModal.destinationName || activeTicketModal.destination
    ),
    name:
      activeTicketModal.destinationName ||
      getCityById(activeTicketModal.destination).name,
  };

  const handleCopyCode = () => {
    const bookingId = activeTicketModal.id;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(bookingId)
        .then(() => showToast("تم نسخ رقم تذكرة مَسار."))
        .catch(() => showToast(`رقم التذكرة: ${bookingId}`));
    } else {
      showToast(`رقم التذكرة: ${bookingId}`);
    }
  };

  const handleScrimClick = (event) => {
    if (event.target === event.currentTarget) {
      closeTicketModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] grid animate-fade place-items-center overflow-y-auto bg-[rgba(22,58,95,0.68)] p-5 backdrop-blur-[6px] max-[650px]:p-3"
      onClick={handleScrimClick}
    >
      <div
        className="animate-pop relative my-auto flex max-h-[calc(100dvh-40px)] w-[min(580px,100%)] flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_40px_90px_rgba(0,0,0,0.3)] max-[650px]:max-h-[calc(100dvh-24px)]"
        role="dialog"
        aria-modal="true"
        aria-label="تذكرة صعود مَسار الرقمية"
      >
        <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "icon" }),
            "absolute top-[18px] left-3.5 z-20 size-[34px] border-white/25 bg-white/10 text-white hover:bg-accent hover:text-white"
          )}
          onClick={closeTicketModal}
          aria-label="إغلاق"
        >
          <SairnaIcon name="x" size={20} />
        </button>

        <div className="flex shrink-0 items-center gap-3 bg-navy px-6 py-5 text-white max-[650px]:px-5 max-[650px]:py-4">
          <span className="grid size-10 place-items-center rounded-xl border border-accent/40 bg-white/10 text-accent max-[650px]:size-9">
            <SairnaIcon name="ticket" size={23} />
          </span>
          <div>
            <span className="block font-heading text-[16px] font-bold">
              تذكرة صعود إلكترونية (E-Ticket)
            </span>
            <small className="text-[11px] text-[#DCE6F0]">
              مَسار.. دربك سالك ومقعدك محفوظ
            </small>
          </div>
          <strong
            dir="ltr"
            className="mr-auto font-tabular text-[13px] tracking-widest text-accent"
          >
            MASAR.SY
          </strong>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain p-6 max-[650px]:p-4">
          <div className="flex items-center justify-between rounded-xl bg-surface-alt px-4 py-3">
            <div>
              <small className="block text-[11px] text-muted">
                رقم الحجز المرجعي
              </small>
              <strong
                dir="ltr"
                className="font-tabular text-[20px] font-bold text-primary"
              >
                {activeTicketModal.id}
              </strong>
            </div>
            <span className="rounded-full bg-soft-teal px-3 py-1 text-[11px] font-bold text-secondary">
              مؤكدة · صالحة للصعود
            </span>
          </div>

          <div className="my-4 flex items-center justify-between gap-2.5">
            <div>
              <span className="block font-heading text-[22px] max-[650px]:text-[18px] font-bold text-text">
                {originCity.name}
              </span>
              <small className="text-[11px] text-muted">
                {originCity.terminal}
              </small>
            </div>
            <div className="flex flex-col items-center text-accent">
              <SairnaIcon name="arrow-left" size={24} />
              <span className="text-[10px] font-bold text-secondary">
                بولمان مباشر
              </span>
            </div>
            <div className="text-left">
              <span className="block font-heading text-[22px] max-[650px]:text-[18px] font-bold text-text">
                {destinationCity.name}
              </span>
              <small className="text-[11px] text-muted">
                {destinationCity.terminal}
              </small>
            </div>
          </div>

          <TicketMetaGrid booking={activeTicketModal} company={company} />

          <div className="my-4 flex items-center gap-3 rounded-xl border border-border bg-surface-alt/60 p-3">
            <TicketQrCode />
            <div className="text-[11px] leading-[1.7] text-muted">
              <b className="block text-[12px] text-text">
                امسح رمز QR عند باب البولمان
              </b>
              احفظ رقم الحجز ورمز QR، ويرجى الحضور إلى الكراج قبل 20 دقيقة من
              موعد الانطلاق.
            </div>
          </div>

          <button
            type="button"
            className={buttonVariants({ variant: "primary", fullWidth: true })}
            onClick={handleCopyCode}
          >
            <SairnaIcon name="copy" size={17} /> نسخ رقم الحجز ومشاركة التذكرة
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketModal;
