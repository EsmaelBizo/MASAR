import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import heroSvg from "../../../../assets/images/hero.svg";
import syriaMapImg from "../../../../assets/images/syria-map.png";
import { Container } from "../../../../layouts/container/container";
import { Eyebrow } from "../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../lib/cn";

const ABOUT_METRICS = [
  {
    code: "NET // 01",
    value: "14",
    label: "محافظة وكراج رئيسي",
    detail: "تغطية شاملة لكافة المحافظات السورية",
    icon: "pin",
    accentClass: "text-accent bg-soft-gold border-accent/30",
  },
  {
    code: "VIP // 02",
    value: "2+1",
    label: "بولمانات رجال الأعمال",
    detail: "اختيار رقم المقعد الفعلي من المخطط",
    icon: "seat",
    accentClass: "text-secondary bg-soft-teal border-secondary/30",
  },
  {
    code: "OPS // 03",
    value: "+40",
    label: "رحلة يومية منتظمة",
    detail: "مواعيد صباحية ومسائية دقيقة",
    icon: "bus",
    accentClass: "text-primary dark:text-accent bg-primary/10 border-primary/25",
  },
  {
    code: "PASS // 04",
    value: "100%",
    label: "تذكرة QR رقمية فورية",
    detail: "تعمل بدون إنترنت عند بوابة الصعود",
    icon: "ticket",
    accentClass: "text-accent bg-soft-gold border-accent/30",
  },
];

const HERITAGE_PILLARS = [
  {
    code: "HERITAGE // ABLAQ",
    icon: "sparkle",
    title: "هوية معمارية سورية أصيلة",
    description:
      "استلهمنا نظامنا البصري من فن «الأبلق الدمشقي» المتناوب، دفء الحجر الكلسي الحلبي، ووهج الذهبي التدمري لنقدم تجربة رقمية تعبّر عن روح سوريا.",
    badge: "الأبلق والحجر الحلبي",
  },
  {
    code: "BOOKING // PRECISION",
    icon: "seat",
    title: "حجز شفاف ومقعد مضمون بالرقم",
    description:
      "وداعاً للانتظار في الكراجات؛ تصفّح مخطط مقصورة البولمان التفاعلي (VIP 2+1 أو السياحي 2+2)، اختر مقعدك الفردي أو المزدوج، واستلم تذكرتك بثوانٍ.",
    badge: "مخطط مقاعد تفاعلي",
  },
  {
    code: "TELEMETRY // M5 & M4",
    icon: "route",
    title: "تتبّع حيّ لخطوط السير والكراجات",
    description:
      "معلومات واضحة حول بوابات الانطلاق في كراج القابون والراموسة واللاذقية وحمص، مع عرض تفاعلي لمسار الرحلة عبر الأوتوستراد الدولي.",
    badge: "أوتوستراد M5 / M4",
  },
];

const COLOR_SWATCHES = [
  {
    name: "الأزرق الدمشقي",
    hex: "#163A5F",
    role: "الثقة والعمق المؤسسي",
    bgStyle: "#163A5F",
  },
  {
    name: "الأخضر الحلبي",
    hex: "#2E6F5E",
    role: "الأمان وحيوية المسارات",
    bgStyle: "#2E6F5E",
  },
  {
    name: "الذهبي التدمري",
    hex: "#C88A32",
    role: "الضيافة وفئة VIP الملكية",
    bgStyle: "#C88A32",
  },
  {
    name: "الحجر الكلسي",
    hex: "#F7F4EE",
    role: "صفاء الواجهات النهارية",
    bgStyle: "#F7F4EE",
    darkText: true,
  },
];

const JOURNEY_HIGHLIGHTS = [
  "مقارنة فورية بين شركات البولمان المعتمدة والأسعار الرسمية.",
  "تحديد بوابة الصعود وموعد الانطلاق الدقيق في كل كراج.",
  "إصدار تذكرة إلكترونية مزودة برمز QR جاهز للمسح الفوري.",
  "دعم متكامل للوضع الليلي (Obsidian) والنهاري لراحة العين.",
];

export function AboutStorySection() {
  return (
    <div className="py-[72px] max-[650px]:py-[48px] space-y-[76px] max-[650px]:space-y-[52px]">
      {/* 1. Editorial Story & Architectural Showcase */}
      <Container as="section">
        <div className="grid grid-cols-[1.08fr_0.92fr] max-[960px]:grid-cols-1 items-center gap-11 max-[960px]:gap-8">
          <div className="animate-slide-up">
            <Eyebrow code="STORY // MASAR">قصتنا ورؤيتنا</Eyebrow>

            <h2 className="mt-4 mb-4 font-heading text-[34px] max-[900px]:text-[28px] max-[650px]:text-[23px] font-bold leading-[1.28] text-text">
              التراث المعماري السوري يلتقي{" "}
              <span className="text-accent">بحركة النقل الحديث</span>
            </h2>

            <p className="mb-4 text-[15px] leading-[1.85] text-muted">
              تستمد منصة <strong className="text-text">«مَسار | MASAR»</strong>{" "}
              هويتها من تاريخ القوافل وطريق الحرير الذي ربط حلب بدمشق وتدمر
              والساحل، وتجمع بين أصالة العمارة السورية (الأبلق الدمشقي، الحجر
              الحلبي، والنجمة الثمانية) وبين أرقى معايير منصات السفر الرقمية
              العالمية.
            </p>

            <p className="mb-6 text-[15px] leading-[1.85] text-muted">
              رسالتنا هي إنهاء عناء الانتظار في الكراجات والبحث عن تذاكر في
              أوقات الذروة والأعياد، عبر نظام حجز إلكتروني فوري يتيح للمسافر
              مقارنة المواعيد، اختيار رقم مقعده بدقة (VIP 2+1 أو سياحي)،
              والحصول على تذكرته الرقمية بثوانٍ.
            </p>

            {/* Checklist */}
            <div className="mb-7 grid grid-cols-2 max-[650px]:grid-cols-1 gap-3">
              {JOURNEY_HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-alt/65 p-3 text-[12.5px] font-semibold text-text"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                    <SairnaIcon name="check" size={13} />
                  </span>
                  <span className="leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={ROUTES.RESULTS}
                className={cn(buttonVariants({ variant: "primary" }), "px-6")}
              >
                احجز مقعدك الآن <SairnaIcon name="arrow-left" size={17} />
              </Link>
              <Link
                to={ROUTES.COMPANIES}
                className={cn(buttonVariants({ variant: "outline" }), "px-5")}
              >
                استعرض شركات البولمان
              </Link>
            </div>
          </div>

          {/* Visual Showcase Frame */}
          <div className="animate-slide-up [animation-delay:120ms] relative">
            <div className="group relative overflow-hidden rounded-[26px] glass-obsidian p-3 shadow-card-md transition-all duration-500 hover:border-accent/60">
              <div
                className="ablaq-ribbon ablaq-ribbon-animated rounded-t-[18px]"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[20px] bg-navy">
                <img
                  src={heroSvg}
                  alt="شعار القوس السوري وحافلة بولمان مَسار"
                  className="block aspect-[1.38] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D14]/85 via-transparent to-transparent" />

                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/15 bg-[#090D14]/75 px-4 py-3 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-xl bg-accent/20 text-accent">
                      <SairnaIcon name="shield" size={18} />
                    </span>
                    <div>
                      <strong className="block font-heading text-[13px] text-white">
                        النظام البصري المعماري v2.0
                      </strong>
                      <small className="text-[11px] text-[#CBD7E4]">
                        مستوحى من القوس السوري والنجمة الثمانية
                      </small>
                    </div>
                  </div>
                  <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 font-tabular text-[11px] font-bold text-accent">
                    MASAR // 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Key Telemetry & Coverage Metrics Strip */}
      <Container as="section">
        <div className="grid grid-cols-4 max-[960px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4">
          {ABOUT_METRICS.map((item, idx) => (
            <div
              key={item.code}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="group animate-slide-up relative overflow-hidden rounded-[22px] glass-obsidian p-5 shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:border-accent/55 hover:shadow-card-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="editorial-eyebrow text-[10px] text-muted">
                  {item.code}
                </span>
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-110",
                    item.accentClass
                  )}
                >
                  <SairnaIcon name={item.icon} size={19} />
                </span>
              </div>
              <b className="block font-tabular text-[32px] font-bold leading-none text-primary dark:text-accent">
                {item.value}
              </b>
              <strong className="mt-2 block font-heading text-[15px] text-text">
                {item.label}
              </strong>
              <p className="mt-1 mb-0 text-[12px] text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* 3. Three Core Pillars (Bento Grid) */}
      <section className="border-y border-border bg-surface-alt/45 py-[72px] max-[650px]:py-[48px]">
        <Container>
          <div className="mb-10 text-center max-w-[640px] mx-auto">
            <Eyebrow code="PILLARS // 03">مرتكزات منصة مَسار</Eyebrow>
            <h2 className="mt-3.5 mb-2.5 font-heading text-[30px] max-[650px]:text-[23px] font-bold text-text">
              لماذا يختار المسافرون{" "}
              <span className="text-accent">منصة مَسار؟</span>
            </h2>
            <p className="m-0 text-[14.5px] leading-[1.75] text-muted">
              صممنا كل تفصيل في المنصة ليجمع بين الموثوقية العالية وسهولة
              الوصول على جميع الشاشات والأجهزة.
            </p>
          </div>

          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-5">
            {HERITAGE_PILLARS.map((pillar, index) => (
              <article
                key={pillar.code}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] glass-obsidian p-6 shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-card-md"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-2">
                    <span className="grid size-12 place-items-center rounded-2xl border border-accent/35 bg-soft-gold text-accent transition-transform duration-300 group-hover:scale-105">
                      <SairnaIcon name={pillar.icon} size={22} />
                    </span>
                    <span className="rounded-full border border-border bg-surface-alt px-3 py-1 text-[11px] font-bold text-secondary">
                      {pillar.badge}
                    </span>
                  </div>

                  <span className="editorial-eyebrow mb-1.5 block text-[10px] text-accent">
                    {pillar.code}
                  </span>

                  <h3 className="mb-2.5 font-heading text-[19px] font-bold text-text">
                    {pillar.title}
                  </h3>

                  <p className="m-0 text-[13.5px] leading-[1.8] text-muted">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-3.5 text-[11.5px] font-bold text-primary dark:text-accent">
                  <span>معيار مَسار المعتمد</span>
                  <span className="font-tabular text-muted">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Syrian Heritage Palette & National Network Map Bento */}
      <Container as="section">
        <div className="grid grid-cols-[1fr_1.05fr] max-[960px]:grid-cols-1 gap-6 items-stretch">
          {/* Palette Card */}
          <div className="flex flex-col justify-between rounded-[24px] glass-obsidian p-7 max-[650px]:p-5 shadow-card">
            <div>
              <Eyebrow code="PALETTE // SYRIAN HERITAGE">
                ألوان الهوية السورية
              </Eyebrow>
              <h3 className="mt-3.5 mb-2 font-heading text-[24px] max-[650px]:text-[20px] font-bold text-text">
                لوحة ألوان مستمدة من المدن السورية
              </h3>
              <p className="mb-5 text-[13.5px] leading-[1.75] text-muted">
                كل لون في منصة «مَسار» يحمل دلالة ثقافية ومعمارية من مدننا
                السورية العريقة، مع تباين مدروس لسهولة القراءة ليلاً ونهاراً:
              </p>

              <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-3">
                {COLOR_SWATCHES.map((swatch) => (
                  <div
                    key={swatch.hex}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface-alt/70 p-3 transition-colors hover:border-accent/45"
                  >
                    <span
                      className="size-10 shrink-0 rounded-xl border border-black/10 shadow-sm"
                      style={{ backgroundColor: swatch.bgStyle }}
                    />
                    <div className="min-w-0">
                      <strong className="block truncate font-heading text-[13px] text-text">
                        {swatch.name}
                      </strong>
                      <small className="block truncate text-[11px] text-muted">
                        {swatch.role}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-accent/25 bg-soft-gold px-4 py-3 text-[12px] font-bold text-accent-deep dark:text-accent">
              <span className="flex items-center gap-2">
                <SairnaIcon name="sparkle" size={16} /> شريط الأبلق الحركي المميز
              </span>
              <span className="font-tabular text-[11px]">v2.0 DESIGN</span>
            </div>
          </div>

          {/* National Network & CTA Card */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-accent/35 bg-navy dark:bg-[#0D1420] p-7 max-[650px]:p-5 text-white shadow-card-md">
            <div
              className="ablaq-ribbon ablaq-ribbon-animated absolute inset-x-0 top-0"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Eyebrow
                  code="NETWORK // 14 GOVERNORATES"
                  className="border-accent/40 bg-white/10 text-[#F7F4EE]"
                  starClassName="text-accent"
                >
                  شبكة الخطوط الوطنية
                </Eyebrow>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-300">
                  ربط مباشر M5 • M4
                </span>
              </div>

              <h3 className="mt-3.5 mb-2 font-heading text-[24px] max-[650px]:text-[20px] font-bold text-white">
                من كراج القابون إلى الراموسة والساحل
              </h3>
              <p className="mb-4 text-[13.5px] leading-[1.75] text-[#CBD7E4]">
                تغطي شبكة مَسار خطوط السفر الحيوية بين دمشق، حلب، حمص، حماة،
                اللاذقية، طرطوس، إدلب، دير الزور، الرقة، الحسكة، درعا، والسويداء.
              </p>
            </div>

            <div className="relative z-10 my-2 overflow-hidden rounded-2xl border border-white/15 bg-[#090D14]">
              <img
                src={syriaMapImg}
                alt="خريطة شبكة مسار بين المحافظات السورية"
                className="h-[185px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D14]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between text-[11px] font-bold text-white">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#090D14]/75 px-2.5 py-1 backdrop-blur-md">
                  <SairnaIcon name="route" size={13} className="text-accent" />
                  تتبّع تفاعلي لخطوط البولمان
                </span>
                <Link
                  to={ROUTES.TRACKING}
                  className="inline-flex items-center gap-1 rounded-lg bg-accent px-2.5 py-1 text-white transition-transform hover:-translate-x-0.5"
                >
                  خريطة التتبّع <SairnaIcon name="arrow-left" size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutStorySection;
