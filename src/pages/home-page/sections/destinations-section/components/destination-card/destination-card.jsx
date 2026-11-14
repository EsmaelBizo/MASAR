import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../lib/cn";

export function DestinationCard({ destination, index = 0, featured = false, onSelect }) {
  return (
    <button
      type="button"
      className="group relative block size-full overflow-hidden rounded-[22px] border border-border bg-surface-alt p-0 text-right shadow-card transition-all duration-400 ease-[var(--ease-masar-out)] hover:-translate-y-1.5 hover:border-accent/70 hover:shadow-card-md"
      onClick={() => onSelect(destination.id)}
    >
      <img
        src={destination.image}
        alt={`وجهة ${destination.name}`}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[var(--ease-masar-out)] group-hover:scale-[1.07]"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,20,0.12)_0%,rgba(9,13,20,0.45)_55%,rgba(9,13,20,0.92)_100%)] transition-opacity duration-350"
        aria-hidden="true"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 max-[650px]:p-4 text-white">
        <div className="flex items-center justify-between">
          <span className="editorial-eyebrow rounded-full border border-accent/40 bg-[#090D14]/65 px-2.5 py-1 text-[9.5px] text-accent backdrop-blur-md">
            HUB // 0{index + 1}
          </span>
          {featured && (
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-[#F7F4EE] backdrop-blur-md">
              الخط الأكثر طلباً
            </span>
          )}
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-col transition-transform duration-350 ease-[var(--ease-masar-out)] group-hover:-translate-y-0.5">
            <strong
              className={cn(
                "font-heading font-bold leading-[1.2]",
                featured ? "text-[28px] max-[650px]:text-[21px]" : "text-[21px] max-[650px]:text-[18px]"
              )}
            >
              {destination.name}
            </strong>
            <small className="mt-1 text-[12px] max-[650px]:text-[11px] text-[#CBD7E4]">
              {destination.description}
            </small>
          </div>

          <span className="grid size-[40px] max-[650px]:size-[34px] shrink-0 place-items-center rounded-full border border-accent/50 bg-[#090D14]/70 text-accent backdrop-blur-md transition-all duration-350 ease-[var(--ease-masar-spring)] group-hover:-translate-x-1.5 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
            <SairnaIcon name="arrow-left" size={18} />
          </span>
        </div>
      </div>
    </button>
  );
}

export default DestinationCard;
