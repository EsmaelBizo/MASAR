import heroSvg from "../../../../../../assets/images/hero.svg";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function HeroVisual() {
  return (
    <div className="animate-slide-up [animation-delay:120ms] relative min-w-0 py-3 pl-3 max-[900px]:p-0 max-[650px]:mt-5">
      <div className="relative overflow-visible rounded-[24px] border-2 border-accent/40 bg-limestone p-1.5 shadow-[0_28px_65px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-md">
        <img
          src={heroSvg}
          alt="شعار القوس السوري وحافلة بولمان مَسار الحديثة"
          className="block aspect-[1.45] w-full rounded-[20px] object-cover"
        />
        <div className="absolute top-7 max-[650px]:top-3 left-[-18px] max-[900px]:left-[-10px] flex items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-basalt shadow-card animate-float-top transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-md [&>i]:text-secondary">
          <SairnaIcon name="pin" size={18} />
          <div className="flex flex-col whitespace-nowrap">
            <b className="text-[12px] max-[900px]:text-[10px]">
              14 محافظة سورية
            </b>
            <small className="text-[10px] text-muted">
              ربط مباشر بين الكراجات
            </small>
          </div>
        </div>

        <div className="absolute right-[-18px] max-[900px]:right-[-10px] bottom-7 max-[650px]:bottom-3 flex items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-basalt shadow-card animate-float-bottom transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-md">
          <span className="grid size-9 place-items-center rounded-lg bg-soft-gold text-accent">
            <SairnaIcon name="shield" size={20} />
          </span>
          <div className="flex flex-col whitespace-nowrap">
            <b className="text-[12px] max-[900px]:text-[10px]">فئة VIP (2+1)</b>
            <small className="text-[10px] text-muted">مقعدك محجوز بالرقم</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
