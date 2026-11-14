import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function FaqAccordionList({ items = [] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.id}
          style={{ animationDelay: `${index * 60}ms` }}
          className="animate-slide-up group rounded-xl border border-border bg-surface px-5 py-1 shadow-card transition-all duration-250 hover:border-accent/60 open:border-accent open:shadow-card-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-heading text-[14px] font-bold transition-colors group-open:text-accent-deep [&::-webkit-details-marker]:hidden">
            {item.question}{" "}
            <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-surface-alt text-primary transition-all duration-300 ease-[var(--ease-masar-spring)] group-hover:bg-soft-gold group-open:rotate-45 group-open:bg-soft-gold group-open:text-accent">
              <SairnaIcon name="plus" size={16} />
            </span>
          </summary>
          <p className="animate-fade border-t border-border pt-3.5 pb-2.5 text-[13px] leading-[1.95] text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export default FaqAccordionList;
