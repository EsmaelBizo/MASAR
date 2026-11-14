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

  const userInitial = (user?.name || "م").trim()[0];
  const userFirstName = user?.name ? user.name.split(" ")[0] : "";

  return (
    <>
      <div className="ablaq-ribbon ablaq-ribbon-animated" aria-hidden="true" />

      <div className="flex min-h-[34px] items-center justify-center gap-2.5 bg-primary-deep px-3 py-1.5 text-center text-[11px] max-[650px]:text-[10px] font-medium text-[#F7F4EE]">
        <span className="size-2 animate-pulse-ring rounded-full bg-secondary" />{" "}
        مَسار.. دربك سالك ومقعدك محفوظ بين كل المحافظات السورية{" "}
        <span className="inline-flex items-center justify-center text-accent">
          <SairnaIcon name="sparkle" size={13} />
        </span>
      </div>

      <header className="sticky top-0 z-80 border-b border-white/12 bg-navy/95 text-white shadow-[0_8px_30px_rgba(22,58,95,0.18)] backdrop-blur-md transition-colors duration-300">
        <Container className="flex h-[82px] max-[900px]:h-[72px] max-[650px]:h-[66px] items-center justify-between gap-[22px]">
          <BrandLogo variant="header" />

          <nav
            className="mx-auto flex max-[900px]:hidden items-center gap-7 max-[1150px]:gap-4"
            aria-label="التنقل الرئيسي"
          >
            {MAIN_NAV_LINKS.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className={cn(
                    'relative py-7 text-[13px] max-[1150px]:text-[12px] font-semibold whitespace-nowrap transition-colors duration-250 after:content-[""] after:absolute after:right-1/2 after:bottom-[16px] after:h-[3px] after:rounded-full after:bg-accent after:translate-x-1/2 after:transition-[width] after:duration-300 after:ease-[var(--ease-masar-spring)]',
                    active
                      ? "text-white after:w-[28px]"
                      : "text-white/75 hover:text-white after:w-0 hover:after:w-[28px]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 max-[1150px]:gap-2">
            <button
              className="group inline-grid size-10 max-[650px]:size-[35px] place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white active:scale-95"
              type="button"
              onClick={toggleTheme}
              aria-label="تبديل المظهر"
              title="تبديل المظهر"
            >
              <span className="inline-grid transition-transform duration-300 ease-[var(--ease-masar-spring)] group-hover:rotate-45">
                <SairnaIcon
                  name={theme === "light" ? "moon" : "sun"}
                  size={19}
                />
              </span>
            </button>

            {user ? (
              <Link
                to={ROUTES.ACCOUNT}
                className="flex items-center gap-2 rounded-xl px-2 py-1 text-[12px] font-bold text-white transition-colors hover:bg-white/10"
              >
                <span className="grid size-[35px] max-[650px]:size-[33px] place-items-center rounded-full bg-accent font-bold text-white shadow-sm">
                  {userInitial}
                </span>
                <span className="max-[650px]:hidden">{userFirstName}</span>
                <SairnaIcon
                  name="chevron-down"
                  size={14}
                  className="max-[650px]:hidden"
                />
              </Link>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  className="max-[650px]:hidden whitespace-nowrap text-[13px] font-semibold text-white/90 transition-colors hover:text-accent"
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
                  إنشاء حساب <SairnaIcon name="arrow-left" size={16} />
                </Link>
              </>
            )}

            <button
              type="button"
              className="hidden max-[900px]:inline-grid size-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:border-accent"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
            >
              <SairnaIcon name={menuOpen ? "x" : "menu"} size={24} />
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
