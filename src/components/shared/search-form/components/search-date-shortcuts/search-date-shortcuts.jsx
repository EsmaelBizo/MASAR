import { cn } from "../../../../../lib/cn";

function getQuickDateIso(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function getNextWeekendIso() {
  const d = new Date();
  const day = d.getDay();
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  d.setDate(d.getDate() + daysUntilFriday);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function SearchDateShortcuts({ selectedDate, onSelectDate }) {
  const shortcuts = [
    { label: "اليوم", iso: getQuickDateIso(0) },
    { label: "غداً", iso: getQuickDateIso(1) },
    { label: "نهاية الأسبوع", iso: getNextWeekendIso() },
  ];

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
      <span className="font-semibold text-muted">اختيار سريع للتاريخ:</span>
      {shortcuts.map((shortcut) => {
        const active = selectedDate === shortcut.iso;
        return (
          <button
            key={shortcut.label}
            type="button"
            onClick={() => onSelectDate(shortcut.iso)}
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] font-bold transition-colors",
              active
                ? "border-secondary bg-secondary text-white"
                : "border-border bg-surface-alt text-text hover:border-accent hover:text-accent"
            )}
          >
            {shortcut.label}
          </button>
        );
      })}
    </div>
  );
}

export default SearchDateShortcuts;
