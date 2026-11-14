import { Fragment } from "react";
import { Container } from "../../../../layouts/container/container";
import { HERO_METRICS } from "../../data/home-data";
import { MetricItem } from "./components/metric-item/metric-item";

export function MetricsStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="flex min-h-[105px] items-center justify-around max-[650px]:grid max-[650px]:min-h-[140px] max-[650px]:grid-cols-2 max-[650px]:gap-x-2 max-[650px]:gap-y-4 max-[650px]:py-5">
        {HERO_METRICS.map((metric, index) => (
          <Fragment key={metric.id}>
            <MetricItem value={metric.value} label={metric.label} />
            {index < HERO_METRICS.length - 1 && (
              <span className="h-9 w-px bg-border max-[650px]:hidden" />
            )}
          </Fragment>
        ))}
      </Container>
    </section>
  );
}

export default MetricsStrip;
