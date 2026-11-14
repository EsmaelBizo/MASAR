import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { CITIES } from "../../../constants/cities";
import { COMPANIES } from "../../../constants/companies";
import { useBookingStore } from "../../../store/use-booking-store";
import { useThemeStore } from "../../../store/use-theme-store";
import { SairnaIcon } from "../../ui/sairna-icon";
import { cn } from "../../../lib/cn";

const QUICK_ROUTES = [
  { id: "dam-alp", origin: "damascus", destination: "aleppo", label: "دمشق ← حلب", sub: "أوتوستراد M5 · القابون — الراموسة" },
  { id: "dam-lat", origin: "damascus", destination: "latakia", label: "دمشق ← اللاذقية", sub: "خط الساحل السريع · 340 كم" },
  { id: "alp-lat", origin: "aleppo", destination: "latakia", label: "حلب ← اللاذقية", sub: "أوتوستراد M4 · الراموسة — اللاذقية" },
  { id: "dam-hom", origin: "damascus", destination: "homs", label: "دمشق ← حمص", sub: "رحلات سريعة كل ساعة · 162 كم" },
];

const PAGE_COMMANDS = [
  { id: "page-home", label: "الصفحة الرئيسية", sub: "استعراض شبكة مَسار والبحث الفوري", path: ROUTES.HOME, icon: "globe" },
  { id: "page-results", label: "احجز رحلة بولمان", sub: "مقارنة المواعيد وفئة VIP 2+1", path: ROUTES.RESULTS, icon: "bus" },
  { id: "page-tracking", label: "تتبّع مسار البولمان", sub: "الخريطة التفاعلية وبوابات الكراجات", path: ROUTES.TRACKING, icon: "navigation" },
  { id: "page-companies", label: "شركات النقل المعتمدة", sub: "قوافل الشام، أجنحة تدمر، الشهباء، درب الساحل", path: ROUTES.COMPANIES, icon: "shield" },
  { id: "page-trips", label: "تذاكري وحجوزاتي", sub: "عرض التذاكر الرقمية ورمز QR", path: ROUTES.TRIPS, icon: "ticket" },
  { id: "page-support", label: "مركز المساعدة والكراجات", sub: "الأسئلة الشائعة وعناوين الكراجات", path: ROUTES.SUPPORT, icon: "help" },
  { id: "page-about", label: "عن منصة مَسار", sub: "الهوية البصرية ومعايير الخدمة", path: ROUTES.ABOUT, icon: "info" },
];

export function CommandPalette() {
  const navigate = useNavigate();
  const setSearch = useBookingStore((state) => state.setSearch);
  const selectDestinationFromHome = useBookingStore((state) => state.selectDestinationFromHome);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpenEvent = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("masar:open-command", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("masar:open-command", onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [];

    QUICK_ROUTES.forEach((r) => {
      list.push({
        group: "خطوط سريعة",
        id: r.id,
        label: r.label,
        sub: r.sub,
        icon: "route",
        badge: "M5/M4",
        action: () => {
          setSearch({ origin: r.origin, destination: r.destination });
          navigate(ROUTES.RESULTS);
        },
      });
    });

    PAGE_COMMANDS.forEach((p) => {
      list.push({
        group: "التنقل السريع",
        id: p.id,
        label: p.label,
        sub: p.sub,
        icon: p.icon,
        action: () => navigate(p.path),
      });
    });

    CITIES.forEach((c) => {
      list.push({
        group: "المحافظات والكراجات (14)",
        id: `city-${c.id}`,
        label: `رحلات إلى ${c.name}`,
        sub: c.terminal,
        icon: "pin",
        badge: c.id.toUpperCase(),
        action: () => {
          selectDestinationFromHome(c.id);
          navigate(ROUTES.RESULTS);
        },
      });
    });

    COMPANIES.forEach((comp) => {
      list.push({
        group: "الشركات المعتمدة",
        id: `comp-${comp.id}`,
        label: comp.name,
        sub: comp.tag,
        icon: "bus",
        badge: `★ ${comp.rating}`,
        action: () => navigate(ROUTES.COMPANIES),
      });
    });

    list.push({
      group: "إعدادات الواجهة",
      id: "toggle-theme",
      label:
        theme === "dark"
          ? "التبديل إلى الوضع النهاري الكلسي (Limestone)"
          : "التبديل إلى الوضع الليلي الأوبسيدي (Obsidian)",
      sub: "تغيير سمة العرض الفوري",
      icon: theme === "dark" ? "sun" : "moon",
      badge: "THEME",
      action: () => toggleTheme(),
    });

    if (!q) return list.slice(0, 12);
    return list.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.sub.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [query, navigate, setSearch, selectDestinationFromHome, theme, toggleTheme]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (items.length ? (prev + 1) % items.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        items.length ? (prev - 1 + items.length) % items.length : 0
      );
    } else if (e.key === "Enter" && items[activeIndex]) {
      e.preventDefault();
      items[activeIndex].action();
      setOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-120 flex items-start justify-center bg-[#05080D]/75 px-4 pt-[11vh] backdrop-blur-md animate-fade"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="لوحة الأوامر السريعة"
    >
      <div
        className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-accent/35 bg-surface/95 shadow-[0_32px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl animate-page-enter"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />

        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <span className="grid size-8 place-items-center rounded-lg bg-soft-gold text-accent">
            <SairnaIcon name="search" size={17} />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن محافظة، كراج، شركة بولمان، أو صفحة..."
            className="w-full border-0 bg-transparent text-[14px] font-medium text-text placeholder:text-muted focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center rounded-md border border-border bg-surface-alt px-2 py-0.5 font-tabular text-[10px] font-bold text-muted">
            ESC
          </kbd>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2.5">
          {items.length === 0 ? (
            <div className="py-10 text-center text-[13px] text-muted">
              لا توجد نتائج مطابقة لـ «{query}»
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => {
                      item.action();
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-right transition-all duration-150",
                      isActive
                        ? "bg-soft-gold text-text ring-1 ring-accent/40"
                        : "text-text hover:bg-surface-alt"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-lg border transition-colors",
                          isActive
                            ? "border-accent/40 bg-accent text-white"
                            : "border-border bg-surface-alt text-accent"
                        )}
                      >
                        <SairnaIcon name={item.icon} size={17} />
                      </span>
                      <div className="min-w-0">
                        <div className="truncate font-heading text-[13px] font-bold">
                          {item.label}
                        </div>
                        <div className="truncate text-[11px] text-muted">
                          {item.sub}
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {item.badge && (
                        <span className="editorial-eyebrow rounded-md border border-border bg-surface-alt px-2 py-0.5 text-[9px] text-accent">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[10px] text-muted">
                        {item.group}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border bg-surface-alt/60 px-4 py-2 text-[10px] text-muted">
          <span>
            <span className="editorial-eyebrow text-accent">SYS // CMD+K</span>{" "}
            — لوحة الأوامر السريعة لمنصة مَسار
          </span>
          <span className="font-tabular hidden sm:inline">
            ↑↓ للتنقل · Enter للاختيار
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
