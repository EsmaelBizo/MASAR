import { Eyebrow } from "../../../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

const STAR_INDICES = [1, 2, 3, 4, 5];

const HERO_FEATURES = [
  "اختيار المقعد الفعلي (VIP 2+1)",
  "شركات وكراجات معتمدة",
  "تذكرة QR تعمل بدون إنترنت",
];

const AVATAR_ITEMS = [
  { char: "م", bgClass: "bg-accent text-white" },
  { char: "ش", bgClass: "bg-secondary text-white" },
  { char: "ح", bgClass: "bg-[#F7F4EE] text-navy" },
  { char: "د", bgClass: "bg-rose text-white" },
];

export function HeroCopy() {
  return (
    <div className="relative z-10 pb-6 max-[650px]:pb-0">
      <Eyebrow
        code="SYS // OVERVIEW"
        className="animate-slide-up border-accent/40 bg-white/8 text-[#F7F4EE]"
        starClassName="text-accent"
      >
        على الرحب والسعة في منصة مَسار | MASAR
      </Eyebrow>

      <h1 className="animate-slide-up [animation-delay:80ms] mt-5 mb-4 font-heading text-[44px] max-[1100px]:text-[36px] max-[900px]:text-[30px] max-[650px]:text-[26px] font-bold leading-[1.24] tracking-[-0.02em] text-white">
        احجز مقعدك في البولمان من بيتك..{" "}
        <span className="relative inline-block text-accent">
          وسافر ع الموعد
          <span
            className="absolute right-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-l from-accent via-accent/60 to-transparent"
            aria-hidden="true"
          />
        </span>
      </h1>

      <p className="animate-slide-up [animation-delay:150ms] mb-6 max-w-[540px] text-[16px] max-[900px]:text-[14.5px] leading-[1.7] text-[#CBD7E4]">
        البوابة الرقمية الأولى في سوريا التي تجمع شركات البولمان المعتمدة في
        نافذة واحدة. قارن المواعيد، اختر مقعدك بدقة (VIP 2+1 أو سياحي)، واستلم
        تذكرتك الرقمية بثوانٍ.
      </p>

      <div className="animate-slide-up [animation-delay:210ms] flex flex-wrap items-center gap-2.5">
        {HERO_FEATURES.map((feature) => (
          <span
            key={feature}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/6 px-3 py-1.5 text-[12px] font-semibold text-[#F7F4EE] backdrop-blur-md"
          >
            <SairnaIcon name="check-circle" size={15} className="text-accent" />
            {feature}
          </span>
        ))}
      </div>

      <div className="animate-slide-up [animation-delay:270ms] mt-8 max-[900px]:mt-6 flex max-[650px]:hidden items-center gap-4">
        <div className="flex flex-row">
          {AVATAR_ITEMS.map((item) => (
            <span
              key={item.char}
              className={`-ml-[7px] grid size-[36px] place-items-center rounded-full border-2 border-[#090D14] font-bold shadow-sm ${item.bgClass}`}
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
            <b className="mr-2 font-tabular text-[13px] text-white">4.9 / 5</b>
          </div>
          <small className="text-[11px] text-[#B8CADE]">
            ثقة المسافرين بين دمشق وحلب وتدمر والساحل
          </small>
        </div>
      </div>
    </div>
  );
}

export default HeroCopy;
