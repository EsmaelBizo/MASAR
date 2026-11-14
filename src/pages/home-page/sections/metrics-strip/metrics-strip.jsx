import { Container } from "../../../../layouts/container/container";
import { HERO_METRICS } from "../../data/home-data";
import { MetricItem } from "./components/metric-item/metric-item";

const TELEMETRY_CODES = ["SYS // 01", "SYS // 02", "SYS // 03", "SYS // 04"];

export function MetricsStrip() {
  return (
    <section className="relative border-b border-border bg-bg py-8 max-[650px]:py-6">
      <Container>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-4 max-[650px]:gap-3">
          {HERO_METRICS.map((metric, index) => (
            <MetricItem
              key={metric.id}
              code={TELEMETRY_CODES[index] || `SYS // 0${index + 1}`}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MetricsStrip;
