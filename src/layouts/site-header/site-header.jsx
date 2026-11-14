import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MAIN_NAV_LINKS, ROUTES } from "../../constants/routes";
import { useThemeStore } from "../../store/use-theme-store";
import { useAuthStore } from "../../store/use-auth-store";
import { Container } from "../container/container";
import { BrandLogo } from "../../components/shared/brand-logo/brand-logo";
import { SairnaIcon } from "../../components/ui/sairna-icon";
import { buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/cn";
import { HeaderMobilePanel } from "./components/header-mobile-panel/header-mobile-panel";

export function SiteHeader() {
  const location = useLocation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const user = useAuthStore((state) => state.user);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isLinkActive = (linkPath) => {
    if (linkPath === ROUTES.HOME) {
      return location.pathname === ROUTES.HOME;
    }
    if (linkPath === ROUTES.RESULTS) {
      return (
        location.pathname === ROUTES.RESULTS ||
        location.pathname === ROUTES.BOOKING
      );
    }
    return location.pathname === linkPath;
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("masar:open-command"));
  };

  const userInitial = (user?.name || "م").trim()[0];
  const userFirstName = user?.name ? user.name.split(" ")[0] : "";

  return (
    <>
      <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />

      <div className="flex min-h-[34px] items-center justify-center gap-2.5 border-b border-accent/15 bg-navy dark:bg-[#05080D] px-3 py-1.5 text-center text-[11px] max-[650px]:text-[10px] font-medium text-[#F7F4EE]">
        <span className="size-2 animate-pulse-ring rounded-full bg-secondary" />
        <span>
          مَسار.. على الرحب والسعة بين كافة المحافظات السورية
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 editorial-eyebrow text-[9px] text-accent">
          MASAR.SY // V2.0
        </span>
      </div>

      <header className="sticky top-0 z-80 border-b border-accent/20 bg-navy/92 dark:bg-[#090D14]/85 text-white shadow-[0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-350">
        <Container className="flex h-[78px] max-[900px]:h-[70px] max-[650px]:h-[64px] items-center justify-between gap-4">
          <BrandLogo variant="header" />

          <nav
            className="mx-auto flex max-[960px]:hidden items-center gap-6 max-[1150px]:gap-4"
            aria-label="التنقل الرئيسي"
          >
            {MAIN_NAV_LINKS.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className={cn(
                    'relative py-6 text-[13px] max-[1150px]:text-[12px] font-semibold whitespace-nowrap transition-colors duration-300 ease-[var(--ease-masar-out)] after:content-[""] after:absolute after:right-1/2 after:bottom-[14px] after:h-[2.5px] after:rounded-full after:bg-accent after:translate-x-1/2 after:transition-[width] after:duration-350 after:ease-[var(--ease-masar-out)]',
                    active
                      ? "text-white after:w-[26px]"
                      : "text-white/70 hover:text-white after:w-0 hover:after:w-[26px]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 max-[1150px]:gap-2">
            <button
              type="button"
              onClick={openCommandPalette}
              className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/80 transition-all duration-300 ease-[var(--ease-masar-out)] hover:border-accent/60 hover:bg-white/10 hover:text-white"
              aria-label="فتح لوحة الأوامر السريعة"
              title="البحث السريع (Ctrl+K / ⌘K)"
            >
              <SairnaIcon name="search" size={14} className="text-accent" />
              <span>بحث سريع</span>
              <kbd className="rounded border border-white/20 bg-black/25 px-1.5 py-0.5 font-tabular text-[10px] text-accent">
                ⌘K
              </kbd>
            </button>

            <button
              className="group inline-grid size-10 max-[650px]:size-[35px] place-items-center rounded-xl border border-white/18 bg-white/8 text-white transition-all duration-300 ease-[var(--ease-masar-out)] hover:border-accent hover:bg-accent hover:text-white active:scale-95"
              type="button"
              onClick={toggleTheme}
              aria-label="تبديل المظهر"
              title={theme === "dark" ? "الوضع النهاري الكلسي" : "الوضع الليلي الأوبسيدي"}
            >
              <span className="inline-grid transition-transform duration-350 ease-[var(--ease-masar-spring)] group-hover:rotate-45">
                <SairnaIcon
                  name={theme === "light" ? "moon" : "sun"}
                  size={18}
                />
              </span>
            </button>

            {user ? (
              <Link
                to={ROUTES.ACCOUNT}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:border-accent/50 hover:bg-white/10"
              >
                <span className="grid size-[32px] max-[650px]:size-[30px] place-items-center rounded-full bg-accent font-bold text-white shadow-sm">
                  {userInitial}
                </span>
                <span className="max-[650px]:hidden">{userFirstName}</span>
                <SairnaIcon
                  name="chevron-down"
                  size={14}
                  className="max-[650px]:hidden text-accent"
                />
              </Link>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  className="max-[650px]:hidden whitespace-nowrap px-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-accent"
                >
                  دخول
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "sm" }),
                    "max-[650px]:hidden"
                  )}
                >
                  إنشاء حساب <SairnaIcon name="arrow-left" size={15} />
                </Link>
              </>
            )}

            <button
              type="button"
              className="hidden max-[960px]:inline-grid size-10 place-items-center rounded-xl border border-white/18 bg-white/8 text-white transition-colors hover:border-accent"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
            >
              <SairnaIcon name={menuOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </Container>

        <HeaderMobilePanel
          menuOpen={menuOpen}
          currentPathname={location.pathname}
          user={user}
        />
      </header>
    </>
  );
}

export default SiteHeader;
