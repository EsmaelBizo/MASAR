import { useEffect, useState } from "react";
import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../../../lib/cn";

const ROW_INDICES = Array.from({ length: 9 }, (_, i) => i + 1);

function getSeatCodes(isVip) {
  return ROW_INDICES.flatMap((rowNum) =>
    isVip
      ? [`${rowNum}A`, `${rowNum}B`, `${rowNum}C`]
      : [`${rowNum}A`, `${rowNum}B`, `${rowNum}C`, `${rowNum}D`]
  );
}

function normalizeSeatCode(seat, seatCodes) {
  const value =
    seat && typeof seat === "object"
      ? seat.seatNumber ?? seat.number ?? seat.code ?? seat.id
      : seat;

  if (typeof value === "number" || /^\d+$/.test(String(value))) {
    return seatCodes[Number(value) - 1];
  }

  return String(value || "").trim().toUpperCase();
}

export function BusCabinMap({
  isVip,
  selectedSeats = [],
  onSeatClick,
  occupiedSeats = [],
  isLoading = false,
  isError = false,
}) {
  const [shakingSeat, setShakingSeat] = useState(null);
  const seatCodes = getSeatCodes(isVip);
  const unavailableSeats = new Set(
    occupiedSeats
      .map((seat) => normalizeSeatCode(seat, seatCodes))
      .filter(Boolean)
  );

  useEffect(() => {
    if (!shakingSeat) return undefined;
    const timer = setTimeout(() => setShakingSeat(null), 400);
    return () => clearTimeout(timer);
  }, [shakingSeat]);

  const handleButtonClick = (seatCode, isBusy) => {
    if (isBusy || isLoading || isError) {
      setShakingSeat(seatCode);
      return;
    }
    onSeatClick(seatCode);
  };

  const renderSeatButton = (seatCode) => {
    const isBusy = unavailableSeats.has(seatCode);
    const isSelected = selectedSeats.includes(seatCode);
    const isShaking = shakingSeat === seatCode;
    const isDisabled = isBusy || isLoading || isError;

    return (
      <button
        key={seatCode}
        type="button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={() => handleButtonClick(seatCode, isBusy)}
        className={cn(
          "relative flex h-[46px] min-w-0 items-center justify-center rounded-xl border-2 font-tabular text-[12px] font-bold transition-all duration-200 ease-[var(--ease-masar-out)]",
          (isBusy || isLoading || isError) &&
            "cursor-not-allowed border-border/60 bg-surface-alt/70 text-muted/45 opacity-60",
          isShaking && "animate-shake",
          !isBusy &&
            isSelected &&
            "animate-seat-bounce border-accent-deep bg-accent text-white shadow-[0_8px_20px_rgba(200,138,50,0.42)] ring-2 ring-accent/35 hover:scale-[1.04]",
          !isBusy &&
            !isSelected &&
            "border-secondary/80 bg-surface text-text hover:scale-[1.05] hover:border-accent hover:bg-soft-gold"
        )}
        aria-label={`مقعد ${seatCode}${isBusy ? " (محجوز)" : ""}`}
        aria-pressed={isSelected}
      >
        <span>{seatCode}</span>
        <span
          className={cn(
            "absolute top-1.5 bottom-1.5 left-1 w-1 rounded-full",
            isBusy
              ? "bg-border"
              : isSelected
                ? "bg-white/75"
                : "bg-secondary/65"
          )}
          aria-hidden="true"
        />
      </button>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[400px] rounded-[28px] border-2 border-primary/60 dark:border-accent/40 glass-obsidian p-5 max-[370px]:px-3 shadow-card-md">
      <div className="mb-4 flex items-center justify-between border-b border-dashed border-border pb-3.5">
        <div className="flex items-center gap-2 rounded-xl bg-navy dark:bg-[#090D14] border border-accent/25 px-3 py-2 text-[11px] font-bold text-white">
          <SairnaIcon name="steering" size={17} className="text-accent" />
          <span className="editorial-eyebrow text-[10px]">DRIVER</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-secondary/40 bg-soft-teal px-3 py-1.5 text-[11px] font-bold text-secondary">
          <span className="editorial-eyebrow text-[10px]">DOOR // باب الصعود</span>
        </div>
      </div>

      <div
        className={cn(
          "mb-2.5 grid items-center gap-2 text-center text-[10px] font-bold text-muted",
          isVip
            ? "grid-cols-[26px_1fr_34px_1fr_1fr]"
            : "grid-cols-[26px_1fr_1fr_22px_1fr_1fr]"
        )}
      >
        <span>صف</span>
        <span>نافذة (A)</span>
        {!isVip && <span>ممر (B)</span>}
        <span className="text-[9px] text-accent">الممر</span>
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
              className="text-center font-tabular text-[9px] font-bold tracking-tighter text-accent/55 select-none"
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

      <div className="mt-3.5 border-t border-dashed border-border pt-3 text-center editorial-eyebrow text-[9.5px] text-muted">
        {isVip
          ? "<<< WIDE VIP CORRIDOR 2+1 >>>"
          : "<<< STANDARD COACH CORRIDOR 2+2 >>>"}
      </div>
    </div>
  );
}

export default BusCabinMap;
