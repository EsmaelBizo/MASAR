import heroSvg from "../../../../../../assets/images/hero.svg";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function HeroVisual() {
  return (
    <div className="animate-slide-up [animation-delay:120ms] relative min-w-0 py-3 pl-3 max-[900px]:p-0 max-[650px]:mt-6">
      <div className="relative overflow-visible rounded-[26px] border border-accent/45 bg-[#111824]/85 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 ease-[var(--ease-masar-out)] hover:-translate-y-1.5">
        <div className="overflow-hidden rounded-[20px] bg-limestone">
          <img
            src={heroSvg}
            alt="شعار القوس السوري وحافلة بولمان مَسار الحديثة"
            className="block aspect-[1.42] w-full object-cover"
          />
        </div>

        <div className="absolute top-6 max-[650px]:top-3 left-[-18px] max-[900px]:left-[-8px] flex items-center gap-2.5 rounded-2xl border border-accent/35 bg-[#111824]/92 px-3.5 py-2.5 text-[#F7F4EE] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl animate-float-top transition-all duration-350 hover:-translate-y-1.5">
          <span className="grid size-8 place-items-center rounded-lg bg-secondary/20 text-secondary">
            <SairnaIcon name="pin" size={17} />
          </span>
          <div className="flex flex-col whitespace-nowrap">
            <b className="font-tabular text-[12px] max-[900px]:text-[10.5px]">
              14 محافظة سورية
            </b>
            <small className="text-[10px] text-[#94A3B8]">
              ربط مباشر بين الكراجات
            </small>
          </div>
        </div>

        <div className="absolute right-[-18px] max-[900px]:right-[-8px] bottom-6 max-[650px]:bottom-3 flex items-center gap-2.5 rounded-2xl border border-accent/35 bg-[#111824]/92 px-3.5 py-2.5 text-[#F7F4EE] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl animate-float-bottom transition-all duration-350 hover:-translate-y-1.5">
          <span className="grid size-8 place-items-center rounded-lg bg-accent/20 text-accent">
            <SairnaIcon name="shield" size={18} />
          </span>
          <div className="flex flex-col whitespace-nowrap">
            <b className="font-tabular text-[12px] max-[900px]:text-[10.5px]">
              VIP Royal (2+1)
            </b>
            <small className="text-[10px] text-[#94A3B8]">
              مقعدك محجوز بالرقم
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
