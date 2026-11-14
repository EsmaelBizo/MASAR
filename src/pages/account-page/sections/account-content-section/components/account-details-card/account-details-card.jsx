import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { cn } from "../../../../../../lib/cn";

export function AccountDetailsCard({ user }) {
  const rows = [
    { label: "الاسم الكامل", value: user.name },
    {
      label: "البريد الإلكتروني",
      value: user.email,
      dir: "ltr",
      className: "font-tabular",
    },
    {
      label: "عضوية المسافر",
      value: "مسافر معتمد في مَسار",
      className: "text-accent-deep",
    },
  ];

  return (
    <div className="rounded-[19px] border border-border bg-surface p-7 shadow-card">
      <h2 className="border-b border-border pb-4 font-heading text-[20px] font-bold">
        معلومات المسافر
      </h2>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-3.5 border-b border-border py-4 text-[13px]"
        >
          <span className="text-muted">{row.label}</span>
          <b dir={row.dir} className={row.className}>
            {row.value}
          </b>
        </div>
      ))}
      <Link
        to={ROUTES.TRIPS}
        className={cn(buttonVariants({ variant: "primary" }), "mt-6")}
      >
        استعراض تذاكري وحجوزاتي <SairnaIcon name="arrow-left" size={17} />
      </Link>
    </div>
  );
}

export default AccountDetailsCard;
