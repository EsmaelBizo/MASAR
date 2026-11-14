import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";

export function AccountProfileCard({ user, bookingsCount, onLogout }) {
  return (
    <div className="overflow-hidden rounded-[19px] border border-border bg-surface text-center shadow-card">
      <div className="ablaq-ribbon" aria-hidden="true" />
      <div className="p-7">
        <div className="mx-auto mt-1 mb-3.5 grid size-[88px] place-items-center rounded-[28px] bg-navy font-heading text-[40px] font-bold text-accent">
          {user.name[0]}
        </div>
        <h2 className="m-0 font-heading text-[20px] font-bold">{user.name}</h2>
        <span className="font-tabular text-[12px] text-muted">
          {user.email}
        </span>
        <div className="my-5 flex items-center justify-center gap-2 rounded-xl bg-soft-teal p-3.5 text-[13px] font-bold text-secondary">
          <SairnaIcon name="ticket" size={19} />{" "}
          <b className="font-tabular">{bookingsCount}</b> تذاكر محفوظة
        </div>
        <button
          type="button"
          className={buttonVariants({ variant: "outline", fullWidth: true })}
          onClick={onLogout}
        >
          <SairnaIcon name="logout" size={17} /> تسجيل الخروج
        </button>
      </div>
    </div>
  );
}

export default AccountProfileCard;
