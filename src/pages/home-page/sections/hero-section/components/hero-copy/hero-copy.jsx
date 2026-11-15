import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { Eyebrow } from "../../../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

const STAR_INDICES = [1, 2, 3, 4, 5];

const HERO_FEATURES = [
  { label: "اختيار المقعد الفعلي (VIP 2+1)", icon: "seat" },
  { label: "شركات وكراجات معتمدة", icon: "shield" },
  { label: "تذكرة QR فورية دون إنترنت", icon: "ticket" },
];

const QUICK_ROUTES = [
  { label: "دمشق ⟵ حلب", badge: "M5 VIP" },
  { label: "دمشق ⟵ اللاذقية", badge: "الساحل" },
  { label: "حلب ⟵ حمص", badge: "مباشر" },
];

const AVATAR_ITEMS = [
  { char: "م", bgClass: "bg-accent text-white" },
  { char: "ش", bgClass: "bg-secondary text-white" },
  { char: "ح", bgClass: "bg-[#F7F4EE] text-navy" },
  { char: "د", bgClass: "bg-rose text-white" },
];

export function HeroCopy() {
  return (
    <div className="relative z-10 pb-2">
      <div className="flex flex-wrap items-center gap-2.5">
        <Eyebrow
          code="MASAR // SYRIA INTERCITY"
          className="animate-slide-up border-accent/45 bg-[#090D14]/65 text-[#F7F4EE] backdrop-blur-md shadow-sm"
          starClassName="text-accent"
        >
          على الرحب والسعة في منصة مَسار | MASAR
        </Eyebrow>

        <span className="animate-slide-up [animation-delay:40ms] inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-md">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          حجز فوري مباشر 24/7
        </span>
      </div>

      <h1 className="animate-slide-up [animation-delay:80ms] mt-5 mb-4 font-heading text-[48px] max-[1150px]:text-[40px] max-[900px]:text-[34px] max-[650px]:text-[27px] font-bold leading-[1.2] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
        احجز مقعدك في البولمان من بيتك..{" "}
        <span className="relative inline-block text-accent">
          وسافر ع الموعد
          <span
            className="absolute right-0 -bottom-1.5 h-[3.5px] w-full rounded-full bg-gradient-to-l from-accent via-accent/75 to-transparent"
            aria-hidden="true"
          />
        </span>
      </h1>

      <p className="animate-slide-up [animation-delay:150ms] mb-6 max-w-[590px] text-[16.5px] max-[900px]:text-[15px] max-[650px]:text-[14px] leading-[1.78] text-[#E2E8F0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
        البوابة الرقمية الأولى في سوريا التي تجمع شركات البولمان المعتمدة في
        نافذة واحدة. قارن المواعيد والأسعار، اختر مقعدك الفعلي بدقة{" "}
        <strong className="font-semibold text-white">(VIP 2+1 أو سياحي)</strong>
        ، واستلم تذكرتك الرقمية بثوانٍ.
      </p>

      {/* Feature Pills */}
      <div className="animate-slide-up [animation-delay:210ms] flex flex-wrap items-center gap-2.5">
        {HERO_FEATURES.map((feature) => (
          <span
            key={feature.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#090D14]/60 px-3.5 py-2 text-[12.5px] max-[650px]:text-[11.5px] font-semibold text-[#F7F4EE] shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-md transition-colors duration-200 hover:border-accent/55 hover:bg-[#090D14]/80"
          >
            <SairnaIcon name={feature.icon} size={15} className="text-accent" />
            {feature.label}
          </span>
        ))}
      </div>

      {/* Trust & Popular Corridors Strip */}
      <div className="animate-slide-up [animation-delay:270ms] mt-7 pt-6 border-t border-white/12 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex flex-row">
            {AVATAR_ITEMS.map((item) => (
              <span
                key={item.char}
                className={`-ml-[8px] grid size-[38px] place-items-center rounded-full border-2 border-[#090D14] text-[13px] font-bold shadow-md ${item.bgClass}`}
              >
                {item.char}
              </span>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[13px] text-accent [&_svg]:fill-[#C88A32]">
              {STAR_INDICES.map((star) => (
                <SairnaIcon key={star} name="star" size={14} />
              ))}
              <b className="mr-1.5 font-tabular text-[13.5px] text-white">
                4.9 / 5
              </b>
            </div>
            <small className="block text-[11.5px] text-[#CBD7E4]">
              ثقة آلاف المسافرين عبر 14 محافظة سورية
            </small>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 max-[650px]:w-full">
          <span className="text-[11px] font-bold text-[#94A3B8]">
            الخطوط الأكثر طلباً:
          </span>
          {QUICK_ROUTES.map((item) => (
            <Link
              key={item.label}
              to={ROUTES.RESULTS}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/8 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-200 hover:border-accent/60 hover:bg-accent/20"
            >
              <span>{item.label}</span>
              <span className="rounded bg-accent/25 px-1.5 py-0.5 text-[9.5px] text-accent">
                {item.badge}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroCopy;
