import { useEffect, useState } from "react";
import { UNAVAILABLE_SEATS } from "../../../../../../data/booking-data";
import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../../../lib/cn";

const ROW_INDICES = Array.from({ length: 9 }, (_, i) => i + 1);

export function BusCabinMap({ isVip, selectedSeats = [], onSeatClick }) {
  const [shakingSeat, setShakingSeat] = useState(null);

  useEffect(() => {
    if (!shakingSeat) return undefined;
    const timer = setTimeout(() => setShakingSeat(null), 400);
    return () => clearTimeout(timer);
  }, [shakingSeat]);

  const handleButtonClick = (seatCode, isBusy) => {
    if (isBusy) {
      setShakingSeat(seatCode);
      return;
    }
    onSeatClick(seatCode);
  };

  const renderSeatButton = (seatCode) => {
    const isBusy = UNAVAILABLE_SEATS.has(seatCode);
    const isSelected = selectedSeats.includes(seatCode);
    const isShaking = shakingSeat === seatCode;

    return (
      <button
        key={seatCode}
        type="button"
        aria-disabled={isBusy}
        onClick={() => handleButtonClick(seatCode, isBusy)}
        className={cn(
          "relative flex h-[44px] min-w-0 items-center justify-center rounded-xl border-2 font-tabular text-[12px] font-bold transition-all duration-150",
          isBusy &&
            "cursor-not-allowed border-[#C8D0D8] bg-[#E2E6EC] dark:bg-[#2A394A] text-[#8E99A6] opacity-75",
          isShaking && "animate-shake",
          !isBusy &&
            isSelected &&
            "animate-seat-bounce border-secondary-deep bg-secondary text-white shadow-[0_6px_14px_rgba(46,111,94,0.28)] ring-2 ring-accent/45 hover:scale-[1.05]",
          !isBusy &&
            !isSelected &&
            "border-secondary bg-surface text-basalt dark:text-text hover:scale-[1.05] hover:border-accent hover:bg-soft-gold"
        )}
        aria-label={`مقعد ${seatCode}${isBusy ? " (محجوز)" : ""}`}
        aria-pressed={isSelected}
      >
        <span>{seatCode}</span>
        <span
          className={cn(
            "absolute top-1.5 bottom-1.5 left-1 w-1 rounded-full",
            isBusy
              ? "bg-[#B8C2CC]"
              : isSelected
                ? "bg-accent"
                : "bg-secondary/60"
          )}
          aria-hidden="true"
        />
      </button>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[28px] border-2 border-primary bg-surface-alt p-5 max-[370px]:px-3 shadow-[inset_0_0_0_4px_rgba(22,58,95,0.06)]">
      <div className="mb-4 flex items-center justify-between border-b border-dashed border-border pb-3.5">
        <div className="flex items-center gap-2 rounded-xl bg-navy px-3 py-2 text-[11px] font-bold text-white">
          <SairnaIcon name="steering" size={18} className="text-accent" />
          <span>السائق (DRIVER)</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-secondary/40 bg-soft-teal px-3 py-1.5 text-[11px] font-bold text-secondary">
          <span>باب الصعود (DOOR)</span>
        </div>
      </div>

      <div
        className={cn(
          "mb-2 grid items-center gap-2 text-center text-[10px] font-bold text-muted",
          isVip
            ? "grid-cols-[26px_1fr_34px_1fr_1fr]"
            : "grid-cols-[26px_1fr_1fr_22px_1fr_1fr]"
        )}
      >
        <span>صف</span>
        <span>نافذة فردي (A)</span>
        {!isVip && <span>ممر (B)</span>}
        <span className="text-[9px] text-primary">الممر</span>
        <span>{isVip ? "ممر (B)" : "ممر (C)"}</span>
        <span>{isVip ? "نافذة (C)" : "نافذة (D)"}</span>
      </div>

      <div>
        {ROW_INDICES.map((rowNum) => (
          <div
            key={rowNum}
            className={cn(
              "mb-2.5 grid items-center gap-2",
              isVip
                ? "grid-cols-[26px_1fr_34px_1fr_1fr]"
                : "grid-cols-[26px_1fr_1fr_22px_1fr_1fr]"
            )}
          >
            <span className="font-tabular text-center text-[11px] font-bold text-muted">
              {String(rowNum).padStart(2, "0")}
            </span>

            {renderSeatButton(`${rowNum}A`)}
            {!isVip && renderSeatButton(`${rowNum}B`)}

            <span
              className="text-center font-tabular text-[9px] font-bold tracking-tighter text-muted/60 select-none"
              aria-hidden="true"
            >
              {rowNum === 5 ? "VIP" : "⋮"}
            </span>

            {isVip ? (
              <>
                {renderSeatButton(`${rowNum}B`)}
                {renderSeatButton(`${rowNum}C`)}
              </>
            ) : (
              <>
                {renderSeatButton(`${rowNum}C`)}
                {renderSeatButton(`${rowNum}D`)}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-dashed border-border pt-2.5 text-center text-[10px] font-bold tracking-wider text-muted">
        {isVip
          ? "<<< ممر بولمان رجال الأعمال الواسع (WIDE VIP CORRIDOR 2+1) >>>"
          : "<<< ممر البولمان السياحي (STANDARD COACH 2+2) >>>"}
      </div>
    </div>
  );
}

export default BusCabinMap;
