import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { SiteHeader } from "../site-header/site-header";
import { SiteFooter } from "../site-footer/site-footer";
import { ToastNotification } from "../../components/ui/toast-notification";
import { TicketModal } from "../../components/shared/ticket-modal/ticket-modal";

export function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const hideFooter = location.pathname === ROUTES.TRACKING;

  return (
    <div className="overflow-hidden">
      <SiteHeader />
      <main key={location.pathname} className="animate-page-enter">
        <Outlet />
      </main>
      {!hideFooter && <SiteFooter />}
      <TicketModal />
      <ToastNotification />
    </div>
  );
}
