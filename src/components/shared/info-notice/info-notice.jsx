import { SairnaIcon } from "../../ui/sairna-icon";
import { cn } from "../../../lib/cn";

const VARIANT_STYLES = {
  teal: "border border-secondary/30 bg-soft-teal text-secondary",
  gold: "border border-accent/30 bg-soft-gold text-accent-deep",
  subtle: "bg-surface-alt text-muted [&>i]:text-secondary",
  danger: "border border-danger/30 bg-soft-danger text-danger",
};

export function InfoNotice({
  iconName = "info",
  iconSize = 18,
  variant = "teal",
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-xl p-3.5 text-[11px] font-semibold leading-[1.8] [&>i]:mt-0.5 [&>i]:shrink-0",
        VARIANT_STYLES[variant] || VARIANT_STYLES.teal,
        className
      )}
    >
      <SairnaIcon name={iconName} size={iconSize} />
      <div>{children}</div>
    </div>
  );
}

export default InfoNotice;
