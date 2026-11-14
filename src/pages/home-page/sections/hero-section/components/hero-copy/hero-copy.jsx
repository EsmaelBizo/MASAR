import { Eyebrow } from "../../../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";

const STAR_INDICES = [1, 2, 3, 4, 5];

const HERO_FEATURES = [
  "اختيار المقعد الفعلي (2+1)",
  "كراجات وشركات معتمدة",
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
    <div className="relative z-10 pb-7 max-[650px]:pb-0">
      <Eyebrow
        className="animate-slide-up border-accent/40 bg-white/10 text-[#F7F4EE]"
        starClassName="text-accent"
      >
        على الرحب والسعة في منصة مَسار | MASAR
      </Eyebrow>

      <h1 className="animate-slide-up [animation-delay:80ms] mt-4 mb-3.5 font-heading text-[36px] max-[900px]:text-[30px] max-[650px]:text-[26px] font-bold leading-[1.3] text-white">
        احجز مقعدك في البولمان من بيتك..{" "}
        <span className="text-accent">وسافر ع الموعد</span>
      </h1>

      <p className="animate-slide-up [animation-delay:160ms] mb-6 max-w-[520px] text-[16px] max-[900px]:text-[14px] max-[650px]:text-[15px] leading-[1.75] text-[#DCE6F0]">
        مَسار.. دربك سالك ومقعدك محفوظ بين كل المحافظات. قارن مواعيد شركات
        البولمان المعتمدة، اختر رقم مقعدك (VIP 2+1 أو سياحي)، واستلم تذكرتك
        الرقمية فوراً دون عناء الانتظار في الكراجات.
      </p>

      <div className="animate-slide-up [animation-delay:220ms] flex flex-wrap items-center gap-5 max-[900px]:gap-3">
        {HERO_FEATURES.map((feature) => (
          <span
            key={feature}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-[#F7F4EE] [&>i]:text-accent"
          >
            <SairnaIcon name="check-circle" size={17} /> {feature}
          </span>
        ))}
      </div>

      <div className="animate-slide-up [animation-delay:280ms] mt-8 max-[900px]:mt-6 flex max-[650px]:hidden items-center gap-3.5">
        <div className="flex flex-row">
          {AVATAR_ITEMS.map((item) => (
            <span
              key={item.char}
              className={`-ml-[7px] grid size-[36px] place-items-center rounded-full border-2 border-navy font-bold ${item.bgClass}`}
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
            <b className="mr-2 font-tabular text-[13px] text-white">4.9/5</b>
          </div>
          <small className="text-[11px] text-[#DCE6F0]">
            ثقة المسافرين بين دمشق وحلب وتدمر والساحل
          </small>
        </div>
      </div>
    </div>
  );
}

export default HeroCopy;
