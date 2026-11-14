import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Container } from "../container/container";
import { BrandLogo } from "../../components/shared/brand-logo/brand-logo";
import { SairnaIcon } from "../../components/ui/sairna-icon";

const linkClasses =
  "text-[12px] max-[650px]:text-[11px] text-[#DCE6F0] transition-colors duration-200 hover:text-accent";

const headingClasses =
  "mt-1.5 mb-2.5 font-heading text-[14px] max-[650px]:text-[13px] font-bold text-white";

const FOOTER_LINK_GROUPS = [
  {
    title: "استكشف مَسار",
    links: [
      { to: ROUTES.HOME, label: "الرئيسية" },
      { to: ROUTES.RESULTS, label: "احجز مقعدك في البولمان" },
      { to: ROUTES.COMPANIES, label: "شركات البولمان المعتمدة" },
      { to: ROUTES.TRACKING, label: "تتبّع مسار البولمان" },
    ],
  },
  {
    title: "حساب المسافر",
    links: [
      { to: ROUTES.LOGIN, label: "تسجيل الدخول" },
      { to: ROUTES.REGISTER, label: "إنشاء حساب جديد" },
      { to: ROUTES.TRIPS, label: "تذاكري وحجوزاتي" },
      { to: ROUTES.ACCOUNT, label: "الملف الشخصي" },
    ],
  },
];

const SOCIAL_ICONS = ["globe", "mail", "phone"];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-[#DCE6F0]">
      <div className="ablaq-ribbon" aria-hidden="true" />
      <Container className="grid grid-cols-[2fr_1fr_1fr_1.25fr] max-[900px]:grid-cols-[1.5fr_1fr_1fr] max-[650px]:grid-cols-2 gap-10 max-[900px]:gap-[25px] max-[650px]:gap-x-4 max-[650px]:gap-y-[26px] pt-14 max-[650px]:pt-10 pb-[50px] max-[650px]:pb-[33px]">
        <div className="max-[650px]:col-span-full">
          <BrandLogo variant="footer" />
          <p className="my-[17px] max-[650px]:my-3 max-w-[310px] text-[13px] leading-[1.9] text-[#B8CADE]">
            البوابة الرقمية الأولى في سوريا لحجز تذاكر البولمانات بين المحافظات.
            على الرحب والسعة في كل رحلة، دربك سالك ومقعدك محفوظ.
          </p>
          <div className="flex gap-[9px]">
            {SOCIAL_ICONS.map((iconName) => (
              <span
                key={iconName}
                className="grid size-[35px] place-items-center rounded-[10px] border border-white/20 text-[#F7F4EE]"
              >
                <SairnaIcon name={iconName} size={17} />
              </span>
            ))}
          </div>
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <div
            key={group.title}
            className="flex flex-col items-start gap-[13px]"
          >
            <h4 className={headingClasses}>{group.title}</h4>
            {group.links.map((item) => (
              <Link key={item.label} to={item.to} className={linkClasses}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col items-start gap-[13px] max-[900px]:col-start-2 max-[900px]:col-end-4 max-[650px]:col-auto">
          <h4 className={headingClasses}>خدمة المسافرين</h4>
          <Link to={ROUTES.ABOUT} className={linkClasses}>
            عن منصة مَسار
          </Link>
          <Link to={ROUTES.SUPPORT} className={linkClasses}>
            مركز المساعدة والكراجات
          </Link>
          <div
            dir="ltr"
            className="flex items-center gap-2 font-tabular text-[12px] text-accent"
          >
            <SairnaIcon name="mail" size={16} /> info@masar.sy
          </div>
        </div>
      </Container>

      <Container className="flex max-[650px]:flex-col items-center max-[650px]:items-start justify-between gap-3 border-t border-white/15 py-5 text-[11px] max-[650px]:text-[10px] text-[#9EB4CC]">
        <span>
          © 2026 مَسار | MASAR (masar.sy) — نموذج واجهات رقمية لحجز البولمانات
          بين المحافظات السورية.
        </span>
        <span>
          أصالة الضيافة السورية بمعايير رقمية حديثة{" "}
          <span className="inline-flex items-center justify-center text-accent">
            <SairnaIcon name="heart" size={13} />
          </span>
        </span>
      </Container>
    </footer>
  );
}

export default SiteFooter;
