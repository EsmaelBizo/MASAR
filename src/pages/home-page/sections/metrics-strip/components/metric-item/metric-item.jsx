import { useCountUp } from "../../../../../../hooks/use-count-up";

export function MetricItem({ value, label }) {
  const { ref, displayValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col text-center">
      <strong className="font-tabular text-[26px] max-[650px]:text-[22px] font-bold leading-[1.35] text-primary dark:text-accent">
        {displayValue}
      </strong>
      <span className="text-[12px] max-[650px]:text-[11px] font-semibold text-muted">
        {label}
      </span>
    </div>
  );
}

export default MetricItem;
