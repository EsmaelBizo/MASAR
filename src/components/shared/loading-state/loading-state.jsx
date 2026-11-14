import { Loader2 } from "lucide-react";
import { cn } from "../../../lib/cn";

export function LoadingState({
  label = "جارٍ التحميل...",
  className,
  size = 24,
}) {
  return (
    <div
      className={cn(
        "flex min-h-[150px] items-center justify-center gap-2 rounded-[20px] border border-border bg-surface px-6 py-10 text-sm font-bold text-muted",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <Loader2 className="animate-spin text-accent" size={size} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export default LoadingState;
