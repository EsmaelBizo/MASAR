import { useState } from 'react';

const VERIFIED_COACH_IMAGE =
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85';

/**
 * MiniRouteGraphic — Awwwards Neo-Heritage Edition
 * بطاقة معاينة خط سير البولمان (دمشق ⟵ حلب) عبر أوتوستراد M5
 * تتضمن صورة فوتوغرافية عالية الدقة لحافلة بولمان مع طبقة تدرج متوافقة مع الهوية البصرية
 */
export function MiniRouteGraphic({
  imageSrc = VERIFIED_COACH_IMAGE,
  origin = 'دمشق',
  originTerminal = 'كراج القابون',
  destination = 'حلب',
  destinationTerminal = 'كراج الراموسة',
  distance = '355 كم',
  duration = '4س 30د',
  statusLabel = 'مباشر • أوتوستراد M5',
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      dir="rtl"
      role="img"
      aria-label={`معاينة خط سير البولمان ${origin} إلى ${destination} عبر أوتوستراد M5`}
      className="group relative h-[280px] max-[900px]:h-[230px] max-[650px]:h-[225px] w-full overflow-hidden rounded-[20px] border border-[#C88A32]/30 bg-[#0F2944] shadow-[0_18px_44px_rgba(22,58,95,0.22)] transition-all duration-500 hover:border-[#C88A32]/65 hover:shadow-[0_24px_60px_rgba(22,58,95,0.32)]"
    >
      {/* 1. الصورة الفوتوغرافية المضمّنة من الإنترنت مع معالجة لونية متناغمة مع الهوية */}
      {!imgFailed ? (
        <img
          src={imageSrc}
          alt={`بولمان السفر بين ${origin} و${destination}`}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover object-center brightness-95 contrast-[1.06] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      ) : (
        /* بديل احتياطي هندسي بألوان الهوية في حال عدم توفر الإنترنت */
        <div
          aria-hidden="true"
          className="h-full w-full bg-gradient-to-br from-[#163A5F] via-[#0F2944] to-[#2E6F5E]"
        />
      )}

      {/* 2. طبقة مزج لوني بالأزرق الدمشقي والذهبي التدمري لدمج الصورة مع الهوية وضمان تباين النصوص */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D14]/95 via-[#163A5F]/40 to-[#090D14]/55 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D14]/90 via-transparent to-[#090D14]/35"
      />

      {/* 3. شريط الأبلق العلوي الدقيق */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#163A5F_0px,#163A5F_42px,#C88A32_42px,#C88A32_84px,#2E6F5E_84px,#2E6F5E_126px)]"
      />

      {/* 4. الشارات العلوية (الحالة والمسافة) */}
      <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#090D14]/65 px-3 py-1 text-[11px] font-bold text-[#F7F4EE] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B8C77] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3B8C77]" />
          </span>
          {statusLabel}
        </span>

        <span className="rounded-full border border-[#C88A32]/40 bg-[#090D14]/65 px-3 py-1 font-['Plus_Jakarta_Sans','IBM_Plex_Sans_Arabic',sans-serif] text-[11px] font-bold tabular-nums text-[#D99B42] backdrop-blur-md">
          {distance} • {duration}
        </span>
      </div>


    </div>
  );
}

export default MiniRouteGraphic;