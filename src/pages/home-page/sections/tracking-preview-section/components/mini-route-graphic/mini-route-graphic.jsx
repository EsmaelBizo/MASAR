export function MiniRouteGraphic() {
  return (
    <svg
      className="h-[280px] max-[900px]:h-[220px] max-[650px]:h-[225px] w-full rounded-[18px] border border-border shadow-[0_12px_30px_rgba(22,58,95,0.08)] transition-shadow duration-300 hover:shadow-card-md"
      viewBox="0 0 560 310"
      role="img"
      aria-label="معاينة خط سير البولمان دمشق إلى حلب عبر أوتوستراد M5"
    >
      <defs>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#C88A32" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="560" height="310" rx="18" fill="#F7F4EE" />
      <rect width="560" height="310" fill="url(#dots)" />
      <path
        d="M30 251Q180 189 230 249T530 179M20 78Q183 127 270 52T530 82"
        fill="none"
        stroke="#E6E1D6"
        strokeWidth="36"
      />
      <path
        d="M100 47Q183 127 270 52T530 82M20 250Q180 189 230 249T530 179"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="9 7"
      />
      <path
        d="M130 84C230 114 200 212 339 205S435 175 461 246"
        fill="none"
        stroke="#2E6F5E"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M130 84C230 114 200 212 339 205S435 175 461 246"
        fill="none"
        stroke="#C88A32"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 8"
        className="animate-route-flow"
      />
      <circle cx="130" cy="84" r="13" fill="#fff" stroke="#2E6F5E" strokeWidth="6" />
      <circle cx="461" cy="246" r="13" fill="#fff" stroke="#163A5F" strokeWidth="6" />
      <g transform="translate(315 199)">
        <circle
          r="34"
          fill="none"
          stroke="#C88A32"
          strokeWidth="2.5"
          className="animate-ping opacity-30"
        />
        <circle r="28" fill="#fff" stroke="#C88A32" strokeWidth="3" />
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#163A5F" />
        <rect x="-12" y="-6" width="24" height="6" rx="2" fill="#F7F4EE" />
        <circle cx="-9" cy="11" r="4" fill="#C88A32" />
        <circle cx="9" cy="11" r="4" fill="#C88A32" />
      </g>
      <g
        fontFamily="Readex Pro, IBM Plex Sans Arabic, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#163A5F"
      >
        <text x="185" y="54">
          حلب (الراموسة)
        </text>
        <text x="520" y="284">
          دمشق (القابون)
        </text>
      </g>
    </svg>
  );
}

export default MiniRouteGraphic;
