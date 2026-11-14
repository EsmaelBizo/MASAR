import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { MiniRouteGraphic } from "../mini-route-graphic/mini-route-graphic";

export function MapPreviewCard() {
  return (
    <div className="relative flex flex-col justify-center border-r max-[650px]:border-r-0 max-[650px]:border-t border-border bg-surface-alt p-7 max-[900px]:p-4">
      <div className="mb-3.5 flex items-center gap-2 text-[12px] font-bold text-primary">
        <span className="size-2.5 rounded-full bg-secondary shadow-[0_0_0_5px_rgba(46,111,94,0.18)]" />{" "}
        مسار الأوتوستراد الدولي{" "}
        <b className="mr-auto text-accent-deep">دمشق ⟵ حلب (M5)</b>
      </div>
      <MiniRouteGraphic />
      <div className="mt-3.5 flex items-center gap-4 text-[12px] font-bold text-primary">
        <span className="flex items-center gap-1.5">
          <SairnaIcon name="pin" size={15} className="text-secondary" /> كراج
          القابون
        </span>
        <div className="relative h-0.5 flex-1 bg-border">
          <span className="absolute -top-1 right-[48%] size-2.5 rounded-full bg-accent" />
        </div>
        <span className="flex items-center gap-1.5">
          <SairnaIcon name="pin" size={15} className="text-primary" /> كراج
          الراموسة
        </span>
      </div>
    </div>
  );
}

export default MapPreviewCard;
