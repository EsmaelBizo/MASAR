import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useCitiesQuery } from "../../../hooks/use-trips-query";
import { useBookingStore } from "../../../store/use-booking-store";
import { useToastStore } from "../../../store/use-toast-store";
import { getTodayIso } from "../../../lib/formatters";
import { SairnaIcon } from "../../ui/sairna-icon";
import { buttonVariants } from "../../ui/button";
import { cn } from "../../../lib/cn";
import { SearchDateShortcuts } from "./components/search-date-shortcuts/search-date-shortcuts";

const PEOPLE_OPTIONS = [1, 2, 3, 4];

export function SearchForm({ context = "home" }) {
  const navigate = useNavigate();
  const search = useBookingStore((state) => state.search);
  const setSearch = useBookingStore((state) => state.setSearch);
  const showToast = useToastStore((state) => state.showToast);
  const { data: cities = [], isLoading: citiesLoading } = useCitiesQuery();

  const [origin, setOrigin] = useState(search.origin);
  const [destination, setDestination] = useState(search.destination);
  const [date, setDate] = useState(search.date);
  const [people, setPeople] = useState(search.people);
  const [swapCount, setSwapCount] = useState(0);

  useEffect(() => {
    setOrigin(search.origin);
    setDestination(search.destination);
    setDate(search.date);
    setPeople(search.people);
  }, [search.origin, search.destination, search.date, search.people]);

  const handleSwap = () => {
    setSwapCount((prev) => prev + 1);
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (origin === destination) {
      showToast("يرجى اختيار محافظتين مختلفتين لعرض رحلات البولمان.", "error");
      return;
    }
    setSearch({
      origin,
      destination,
      date,
      people: Number(people),
    });
    navigate(ROUTES.RESULTS);
  };

  const isCompact = context === "results";

  const fieldBaseClasses = cn(
    "relative flex min-w-0 items-center gap-2.5 max-[1150px]:gap-1.5 max-[650px]:gap-1 rounded-xl border border-border bg-surface px-3.5 max-[1150px]:px-2.5 max-[650px]:px-[9px] pt-[11px] max-[650px]:pt-2 pb-[5px] max-[650px]:pb-1 transition-all duration-200 focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(200,138,50,0.14)]",
    isCompact
      ? "h-[58px] max-[900px]:h-[56px] max-[650px]:h-[53px]"
      : "h-[62px] max-[900px]:h-[56px] max-[650px]:h-[58px]"
  );

  const labelClasses =
    "absolute top-[7px] right-3.5 max-[650px]:right-[9px] text-[10px] max-[370px]:text-[9px] font-bold text-muted";

  const selectClasses =
    "mt-[11px] max-[650px]:mt-2.5 h-[30px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[12px] max-[370px]:text-[11px] font-bold text-text outline-none [&>option]:bg-white [&>option]:text-[#23272D]";

  const iconClasses = "mt-3 shrink-0 text-primary max-[650px]:!size-4";

  return (
    <div>
      <form
        className={cn(
          "grid items-end grid-cols-[1.15fr_38px_1.15fr_1fr_0.75fr_1.18fr] max-[1150px]:grid-cols-[1fr_30px_1fr_1fr_0.7fr_1.1fr] max-[900px]:grid-cols-[1fr_32px_1fr_1fr_1fr] max-[650px]:grid-cols-[1fr_30px_1fr] max-[370px]:grid-cols-[1fr_24px_1fr]",
          isCompact
            ? "gap-[9px] max-[1150px]:gap-[7px] max-[900px]:gap-2 max-[650px]:gap-[9px] max-[370px]:gap-1.5"
            : "gap-[11px] max-[1150px]:gap-[7px] max-[900px]:gap-2 max-[650px]:gap-[9px] max-[370px]:gap-1.5"
        )}
        onSubmit={handleSubmit}
      >
        <label
          key={`origin-${swapCount}`}
          className={cn(
            fieldBaseClasses,
            "max-[650px]:col-start-1",
            swapCount > 0 && "animate-fade"
          )}
        >
          <span className={labelClasses}>من محافظة (نقطة الانطلاق)</span>
          <SairnaIcon name="pin" size={19} className={iconClasses} />
          <select
            name="origin"
            aria-label="محافظة الانطلاق"
            className={selectClasses}
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
            disabled={citiesLoading}
          >
            {citiesLoading && <option>جارٍ تحميل المدن...</option>}
            {cities.map((city) => (
              <option key={city.id} value={city.slug || city.id}>
                {city.name} ({city.terminal})
              </option>
            ))}
          </select>
        </label>

        <button
          className="mb-[11px] max-[900px]:mb-2 grid h-[38px] w-[38px] max-[1150px]:w-[30px] max-[900px]:w-[32px] max-[650px]:col-start-2 max-[650px]:w-[30px] max-[370px]:w-[24px] place-items-center rounded-[10px] border border-accent/30 bg-soft-gold text-accent-deep transition-colors duration-250 hover:bg-accent hover:text-white active:scale-95"
          type="button"
          onClick={handleSwap}
          aria-label="تبديل الاتجاه السريع"
          title="تبديل الاتجاه السريع (⇄)"
        >
          <span
            style={{ transform: `rotate(${swapCount * 180}deg)` }}
            className="inline-grid transition-transform duration-500 ease-[var(--ease-masar-spring)]"
          >
            <SairnaIcon name="swap" size={19} />
          </span>
        </button>

        <label
          key={`dest-${swapCount}`}
          className={cn(
            fieldBaseClasses,
            "max-[650px]:col-start-3",
            swapCount > 0 && "animate-fade"
          )}
        >
          <span className={labelClasses}>إلى محافظة (الوجهة)</span>
          <SairnaIcon name="pin" size={19} className={iconClasses} />
          <select
            name="destination"
            aria-label="محافظة الوصول"
            className={selectClasses}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            disabled={citiesLoading}
          >
            {citiesLoading && <option>جارٍ تحميل المدن...</option>}
            {cities.map((city) => (
              <option key={city.id} value={city.slug || city.id}>
                {city.name} ({city.terminal})
              </option>
            ))}
          </select>
        </label>

        <label
          className={cn(
            fieldBaseClasses,
            "max-[650px]:col-span-2 max-[650px]:col-start-1"
          )}
        >
          <span className={labelClasses}>تاريخ السفر</span>
          <SairnaIcon name="calendar" size={19} className={iconClasses} />
          <input
            name="date"
            type="date"
            value={date}
            min={getTodayIso()}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-[11px] max-[650px]:mt-2.5 h-[30px] w-full min-w-0 cursor-default appearance-none border-0 bg-transparent p-0 font-tabular text-[12px] font-bold text-text outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60"
          />
        </label>

        <label className={cn(fieldBaseClasses, "max-[650px]:col-start-3")}>
          <span className={labelClasses}>المسافرون</span>
          <SairnaIcon name="users" size={19} className={iconClasses} />
          <select
            name="people"
            aria-label="عدد المسافرين"
            className={selectClasses}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          >
            {PEOPLE_OPTIONS.map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "مسافر" : "مسافرين"}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "w-full px-3.5 py-2.5 text-[13px] max-[1150px]:text-[11px] max-[900px]:col-span-full max-[900px]:text-[13px] max-[650px]:col-span-full",
            isCompact
              ? "h-[58px] max-[900px]:h-[49px] max-[650px]:h-[46px]"
              : "h-[62px] max-[900px]:h-[50px]"
          )}
        >
          <SairnaIcon name="search" size={19} /> ابحث عن بولمان
        </button>
      </form>

      <SearchDateShortcuts selectedDate={date} onSelectDate={setDate} />
    </div>
  );
}

export default SearchForm;
