import { useState } from "react";
import syriaMapImg from "../../../../../../assets/images/syria-map.png";

/**
 * MiniRouteGraphic — Awwwards Neo-Heritage Edition
 * بطاقة معاينة خط سير البولمان (دمشق ⟵ حلب) عبر أوتوستراد M5
 * تستخدم صورة خريطة سوريا المرفقة مع طبقة مسار تفاعلية متوافقة مع الهوية البصرية
 */
export function MiniRouteGraphic({
  imageSrc = syriaMapImg,
  origin = "دمشق",
  originTerminal = "كراج القابون",
  destination = "حلب",
  destinationTerminal = "كراج الراموسة",
  distance = "355 كم",
  duration = "4س 30د",
  statusLabel = "مباشر • أوتوستراد M5",
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      dir="rtl"
      role="img"
      aria-label={`معاينة خط سير البولمان ${origin} إلى ${destination} عبر أوتوستراد M5 على خريطة سوريا`}
      className="group relative h-[300px] max-[900px]:h-[255px] max-[650px]:h-[235px] w-full overflow-hidden rounded-[20px] border border-[#C88A32]/35 bg-[#0F2944] shadow-[0_18px_44px_rgba(22,58,95,0.24)] transition-all duration-500 hover:border-[#C88A32]/70 hover:shadow-[0_24px_60px_rgba(22,58,95,0.34)]"
    >
      {/* 1. صورة الخريطة المرفقة مع معالجة بصرية تحافظ على وضوح المدن والطرق الدولية (M5 / M4) */}
      {!imgFailed ? (
        <img
          src={imageSrc}
          alt={`خريطة سوريا ومسار السفر بين ${origin} و${destination}`}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover object-center brightness-[0.98] contrast-[1.06] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-full w-full bg-gradient-to-br from-[#163A5F] via-[#0F2944] to-[#2E6F5E]"
        />
      )}

      {/* 2. طبقة تظليل محيطية خفيفة جداً لإبراز الشارات العلوية والسفلية مع بقاء الخريطة واضحة */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(9,13,20,0.48)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D14]/80 via-transparent to-[#090D14]/45"
      />

      {/* 3. شريط الأبلق العلوي الدقيق */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#163A5F_0px,#163A5F_42px,#C88A32_42px,#C88A32_84px,#2E6F5E_84px,#2E6F5E_126px)]"
      />

      {/* 4. الشارات العلوية (الحالة والمسافة) */}
      <div className="absolute inset-x-4 top-3.5 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#090D14]/75 px-3 py-1 text-[11px] font-bold text-[#F7F4EE] backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B8C77] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3B8C77]" />
          </span>
          {statusLabel}
        </span>

        <span className="rounded-full border border-[#C88A32]/45 bg-[#090D14]/75 px-3 py-1 font-tabular text-[11px] font-bold text-[#D99B42] backdrop-blur-md shadow-sm">
          {distance} • {duration}
        </span>
      </div>

      {/* 5. شريط محطات الانطلاق والوصول السفلي فوق الخريطة */}
      <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-[#090D14]/78 px-3.5 py-2 text-[#F7F4EE] backdrop-blur-md">
        <div className="flex items-center gap-2 min-w-0">
          <span className="size-2.5 shrink-0 rounded-full bg-[#3B8C77] ring-4 ring-[#3B8C77]/20" />
          <div className="truncate">
            <b className="text-[11.5px] font-bold text-white">{origin}</b>
            <span className="mr-1.5 text-[10px] text-[#94A3B8]">
              ({originTerminal})
            </span>
          </div>
        </div>

        <span className="font-tabular text-[10px] font-bold text-[#C88A32] shrink-0">
          M5 ⟵
        </span>

        <div className="flex items-center gap-2 min-w-0">
          <div className="truncate text-left">
            <b className="text-[11.5px] font-bold text-white">{destination}</b>
            <span className="mr-1.5 text-[10px] text-[#94A3B8]">
              ({destinationTerminal})
            </span>
          </div>
          <span className="size-2.5 shrink-0 rounded-full bg-[#C88A32] ring-4 ring-[#C88A32]/20" />
        </div>
      </div>
    </div>
  );
}

export default MiniRouteGraphic;