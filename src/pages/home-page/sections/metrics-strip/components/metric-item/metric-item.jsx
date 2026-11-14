import { useCountUp } from "../../../../../../hooks/use-count-up";

export function MetricItem({ code, value, label }) {
  const { ref, displayValue } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl glass-obsidian p-5 max-[650px]:p-4 shadow-card transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-1 hover:border-accent/55 hover:shadow-card-md"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="editorial-eyebrow text-[10px] text-muted group-hover:text-accent transition-colors">
          {code}
        </span>
        <span className="size-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
      </div>
      <strong className="block font-tabular text-[30px] max-[650px]:text-[24px] font-bold leading-[1.2] text-primary dark:text-accent">
        {displayValue}
      </strong>
      <span className="mt-1 block text-[12.5px] max-[650px]:text-[11.5px] font-semibold text-muted">
        {label}
      </span>
    </div>
  );
}

export default MetricItem;
