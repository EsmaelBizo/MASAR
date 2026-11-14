import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function DestinationCard({ destination, onSelect }) {
  return (
    <button
      type="button"
      className="group relative block aspect-[0.87] max-[900px]:aspect-[1.35] max-[650px]:aspect-[0.98] w-full overflow-hidden rounded-[18px] border border-border p-0 text-right shadow-card transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-2 hover:border-accent/80 hover:shadow-[0_22px_50px_rgba(22,58,95,0.18)]"
      onClick={() => onSelect(destination.id)}
    >
      <img
        src={destination.image}
        alt={`وجهة ${destination.name}`}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[var(--ease-masar-out)] group-hover:scale-[1.09]"
      />
      <span className="absolute inset-0 flex items-end justify-between bg-[linear-gradient(0deg,rgba(22,58,95,0.92)_0%,rgba(22,58,95,0.34)_55%,transparent_85%)] p-5 max-[650px]:p-3.5 text-white transition-opacity duration-300">
        <span className="flex flex-col transition-transform duration-300 ease-[var(--ease-masar-out)] group-hover:-translate-y-0.5">
          <strong className="font-heading text-[21px] max-[650px]:text-[18px]">
            {destination.name}
          </strong>
          <small className="text-[11px] max-[650px]:text-[10px] text-[#DCE6F0]">
            {destination.description}
          </small>
        </span>
        <span className="grid size-[38px] max-[650px]:size-[30px] place-items-center rounded-full border border-white/40 bg-white/15 backdrop-blur-xs transition-all duration-300 ease-[var(--ease-masar-spring)] group-hover:-translate-x-1.5 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent">
          <SairnaIcon name="arrow-left" size={18} />
        </span>
      </span>
    </button>
  );
}

export default DestinationCard;
