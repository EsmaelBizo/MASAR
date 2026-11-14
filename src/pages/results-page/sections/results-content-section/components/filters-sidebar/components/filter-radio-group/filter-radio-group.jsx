export function FilterRadioGroup({ title, name, options, selectedValue, onChange }) {
  return (
    <div className="pt-[22px] max-[900px]:p-[5px] max-[650px]:p-0">
      <h4 className="mb-[13px] font-heading text-[12px] max-[650px]:text-[11px] font-bold">
        {title}
      </h4>
      <div className="flex flex-col gap-3 max-[650px]:gap-[9px]">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2.5 text-[12px] max-[650px]:text-[11px] font-medium text-muted"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="cursor-pointer accent-accent"
            />{" "}
            {option.label}{" "}
            {typeof option.count === "number" && (
              <span className="font-tabular mr-auto rounded-[6px] bg-surface-alt px-[7px] text-[10px]">
                {option.count}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterRadioGroup;
