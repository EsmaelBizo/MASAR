import { Link } from "react-router-dom";
import { MAIN_NAV_LINKS, ROUTES } from "../../../../constants/routes";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { cn } from "../../../../lib/cn";

export function HeaderMobilePanel({ menuOpen, currentPathname, user }) {
  return (
    <div
      className={cn(
        "hidden border-t border-white/15 bg-navy/95 px-7 max-[650px]:px-5 py-3 text-white backdrop-blur-md",
        menuOpen && "max-[900px]:block animate-slide-up"
      )}
    >
      {MAIN_NAV_LINKS.map((link) => (
        <Link
          key={link.id}
          to={link.path}
          className={cn(
            "group flex items-center justify-between border-b border-white/10 px-2 py-3 font-semibold transition-colors hover:text-accent",
            currentPathname === link.path && "text-accent"
          )}
        >
          {link.label}
          <SairnaIcon
            name="chevron-left"
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
        </Link>
      ))}

      {user ? (
        <Link
          to={ROUTES.ACCOUNT}
          className="flex items-center justify-between border-b border-white/10 px-2 py-3 font-semibold transition-colors hover:text-accent"
        >
          حسابي
        </Link>
      ) : (
        <>
          <Link
            to={ROUTES.LOGIN}
            className="flex items-center justify-between border-b border-white/10 px-2 py-3 font-semibold transition-colors hover:text-accent"
          >
            تسجيل الدخول
          </Link>
          <Link
            to={ROUTES.REGISTER}
            className="flex items-center justify-between border-b border-white/10 px-2 py-3 font-semibold text-accent"
          >
            إنشاء حساب
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderMobilePanel;
