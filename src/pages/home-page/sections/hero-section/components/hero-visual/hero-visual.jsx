import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

const LIVE_CORRIDORS = [
  {
    id: "m5-vip",
    origin: "دمشق",
    destination: "حلب",
    highway: "أوتوستراد M5 الدولي",
    time: "رحلة كل ساعة",
    busClass: "VIP 2+1",
    status: "متاح للحجز",
  },
  {
    id: "coast-vip",
    origin: "دمشق",
    destination: "اللاذقية",
    highway: "أوتوستراد الساحل",
    time: "رحلات صباحية ومسائية",
    busClass: "VIP 2+1",
    status: "متاح للحجز",
  },
];

export function HeroVisual() {
  return (
    <div className="animate-slide-up [animation-delay:140ms] relative min-w-0">
      {/* Glassmorphic Live Boarding & Telemetry Showcase Card over Background */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/20 bg-[#090D14]/68 p-5 max-[650px]:p-4 text-[#F7F4EE] shadow-[0_28px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-500 ease-[var(--ease-masar-out)] hover:border-accent/55">
        <div
          className="ablaq-ribbon ablaq-ribbon-animated absolute inset-x-0 top-0"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="mt-1 mb-4 flex items-center justify-between gap-2 border-b border-white/12 pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl border border-accent/35 bg-accent/15 text-accent">
              <SairnaIcon name="bus" size={19} />
            </span>
            <div>
              <span className="editorial-eyebrow block text-[9.5px] text-accent">
                LIVE // DISPATCH BOARD
              </span>
              <strong className="font-heading text-[14.5px] text-white">
                لوحة انطلاق البولمانات المباشرة
              </strong>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[10.5px] font-bold text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            تحديث لحظي
          </span>
        </div>

        {/* Live Corridors List */}
        <div className="flex flex-col gap-2.5">
          {LIVE_CORRIDORS.map((item) => (
            <Link
              key={item.id}
              to={ROUTES.RESULTS}
              className="group/item flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-3 transition-all duration-250 hover:border-accent/45 hover:bg-white/[0.09]"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 font-heading text-[14px] font-bold text-white">
                  <span>{item.origin}</span>
                  <SairnaIcon
                    name="arrow-left"
                    size={14}
                    className="text-accent transition-transform duration-250 group-hover/item:-translate-x-1"
                  />
                  <span>{item.destination}</span>
                  <span className="rounded-md border border-accent/35 bg-accent/20 px-2 py-0.5 font-tabular text-[10px] font-bold text-accent">
                    {item.busClass}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#CBD7E4]">
                  <span className="inline-flex items-center gap-1">
                    <SairnaIcon name="route" size={12} className="text-secondary" />
                    {item.highway}
                  </span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
              </div>

              <span className="shrink-0 rounded-xl border border-white/15 bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors group-hover/item:border-accent group-hover/item:bg-accent group-hover/item:text-white">
                احجز الآن
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Highlights Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 pt-3 border-t border-white/12">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary/25 text-emerald-300">
              <SairnaIcon name="pin" size={16} />
            </span>
            <div className="min-w-0">
              <b className="block font-tabular text-[12px] text-white">
                14 محافظة سورية
              </b>
              <small className="block truncate text-[10px] text-[#94A3B8]">
                ربط مباشر بين الكراجات
              </small>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent/25 text-accent">
              <SairnaIcon name="shield" size={16} />
            </span>
            <div className="min-w-0">
              <b className="block font-tabular text-[12px] text-white">
                VIP Royal (2+1)
              </b>
              <small className="block truncate text-[10px] text-[#94A3B8]">
                مقعدك محجوز بالرقم
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
