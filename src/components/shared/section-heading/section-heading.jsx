import { Eyebrow } from "../../ui/eyebrow";
import { cn } from "../../../lib/cn";

export function SectionHeading({
  eyebrowText,
  title,
  highlightedTitle,
  highlightColor = "text-accent",
  description,
  centered = false,
  action,
  className,
}) {
  if (centered) {
    return (
      <div className={cn("mb-9 text-center", className)}>
        {eyebrowText && <Eyebrow>{eyebrowText}</Eyebrow>}
        <h2 className="mt-3 mb-1.5 font-heading text-[28px] max-[650px]:text-[22px] font-semibold text-text">
          {title}{" "}
          {highlightedTitle && (
            <span className={highlightColor}>{highlightedTitle}</span>
          )}
        </h2>
        {description && <p className="text-[14px] text-muted">{description}</p>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-7 flex max-[650px]:flex-col items-end max-[650px]:items-start justify-between gap-[25px] max-[650px]:gap-2.5",
        className
      )}
    >
      <div>
        {eyebrowText && <Eyebrow>{eyebrowText}</Eyebrow>}
        <h2 className="mt-3 mb-1.5 font-heading text-[28px] max-[650px]:text-[22px] font-semibold text-text">
          {title}{" "}
          {highlightedTitle && (
            <span className={highlightColor}>{highlightedTitle}</span>
          )}
        </h2>
        {description && <p className="text-[14px] text-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default SectionHeading;
