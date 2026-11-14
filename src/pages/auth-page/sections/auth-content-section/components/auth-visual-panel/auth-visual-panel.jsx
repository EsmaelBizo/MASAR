import heroSvg from "../../../../../../assets/images/hero.svg";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

export function AuthVisualPanel() {
  return (
    <div className="relative flex max-[650px]:-order-1 max-[650px]:min-h-[290px] flex-col overflow-hidden bg-navy px-9 py-10 max-[650px]:p-6 text-white">
      <div className="ablaq-ribbon absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="relative z-20 my-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-[#F7F4EE]">
          <SairnaIcon name="sparkle" size={16} className="text-accent" /> مَسار |
          MASAR
        </span>
        <h2 className="mt-5 mb-1.5 font-heading text-[34px] max-[900px]:text-[26px] font-bold leading-[1.4] text-white">
          دربك سالك..
          <br />
          <span className="text-accent">ومقعدك محفوظ.</span>
        </h2>
        <p className="text-[13px] text-[#DCE6F0]">
          أصالة الضيافة السورية وتقنيات الحجز الرقمي الحديثة في منصة واحدة.
        </p>
      </div>
      <img
        src={heroSvg}
        alt="بوابة مَسار وحافلة البولمان"
        className="h-[350px] object-cover relative w-full rounded-2xl border border-accent/30 shadow-[0_22px_46px_rgba(0,0,0,0.28)] max-[650px]:mt-4"
      />
      <div className="relative mt-6 flex max-[650px]:hidden items-center gap-6 text-[12px] text-[#DCE6F0]">
        <span className="flex items-center gap-2">
          <SairnaIcon name="shield" size={18} className="text-accent" /> كراجات
          وشركات معتمدة
        </span>
        <span className="flex items-center gap-2">
          <SairnaIcon name="ticket" size={18} className="text-accent" /> تذكرة
          صعود فورية (QR)
        </span>
      </div>
    </div>
  );
}

export default AuthVisualPanel;
