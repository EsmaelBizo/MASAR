import { SairnaIcon } from "../../ui/sairna-icon";
import { cn } from "../../../lib/cn";

export function EmptyStateCard({
  iconName = "info",
  iconSize = 42,
  title,
  description,
  action,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-dashed border-border bg-surface px-6 py-[70px] text-center [&>i]:text-accent",
        className
      )}
    >
      <SairnaIcon name={iconName} size={iconSize} />
      {title && (
        <h3 className="mt-4 mb-1 font-heading text-[20px] font-bold text-text">
          {title}
        </h3>
      )}
      {description && <p className="mb-[21px] text-muted">{description}</p>}
      {action}
    </div>
  );
}

export default EmptyStateCard;
