import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

export function TrackingTimeline({
  originCity,
  destinationCity,
  departure,
  arrive,
  statusText,
}) {
  const stops = [
    {
      key: "origin",
      icon: "check",
      iconSize: 13,
      badgeBg: "bg-secondary",
      title: originCity.name,
      subtitle: originCity.terminal,
      time: departure,
      timeClass: "font-tabular font-bold text-muted",
      timeDir: "ltr",
    },
    {
      key: "enroute",
      icon: "bus",
      iconSize: 14,
      badgeBg: "bg-accent",
      title: "على الأوتوستراد الدولي",
      subtitle: statusText,
      subtitleId: "current-status",
      time: "الآن*",
      timeClass: "font-bold text-accent-deep",
    },
    {
      key: "destination",
      icon: "pin",
      iconSize: 13,
      badgeBg: "bg-navy",
      title: destinationCity.name,
      subtitle: destinationCity.terminal,
      time: arrive,
      timeClass: "font-tabular font-bold text-muted",
      timeDir: "ltr",
    },
  ];

  return (
    <div className="relative mt-6 mb-4 before:content-[''] before:absolute before:top-[15px] before:right-[15px] before:bottom-[26px] before:border-r-2 before:border-dashed before:border-border">
      {stops.map((stop, index) => (
        <div
          key={stop.key}
          className={`relative flex items-start gap-3 ${
            index < stops.length - 1 ? "mb-6" : ""
          }`}
        >
          <span
            className={`relative z-20 grid size-[31px] shrink-0 basis-[31px] place-items-center rounded-full border-[3px] border-surface ${stop.badgeBg} text-white`}
          >
            <SairnaIcon name={stop.icon} size={stop.iconSize} />
          </span>
          <div className="flex flex-col">
            <b className="text-[12px]">{stop.title}</b>
            <small id={stop.subtitleId} className="text-[10px] text-muted">
              {stop.subtitle}
            </small>
          </div>
          <time
            dir={stop.timeDir}
            className={`mr-auto whitespace-nowrap text-[11px] ${stop.timeClass}`}
          >
            {stop.time}
          </time>
        </div>
      ))}
    </div>
  );
}

export default TrackingTimeline;
