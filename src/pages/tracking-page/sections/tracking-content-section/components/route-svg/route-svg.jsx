import { useRef, useEffect, useState } from "react";
import { CITIES } from "../../../../../../constants/cities";

const mapCityPoint = (city) => ({
  x: 70 + ((city.lng - 35.5) / (41.4 - 35.5)) * 680,
  y: 60 + ((37.5 - city.lat) / (37.5 - 32.0)) * 500,
});

export function RouteSvg({ originCity, destinationCity, progress = 0.48 }) {
  const pathRef = useRef(null);
  const from = mapCityPoint(originCity);
  const to = mapCityPoint(destinationCity);
  const cx = (from.x + to.x) / 2 + 40;
  const cy = (from.y + to.y) / 2 - 60;
  const pathData = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;

  const [busCoords, setBusCoords] = useState({ x: from.x, y: from.y });

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;
    try {
      const totalLen = pathEl.getTotalLength();
      const pos = pathEl.getPointAtLength(totalLen * progress);
      setBusCoords({ x: pos.x, y: pos.y });
    } catch {
      const t = progress;
      const x =
        (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x;
      const y =
        (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y;
      setBusCoords({ x, y });
    }
  }, [progress, from.x, from.y, to.x, to.y, cx, cy]);

  const otherCities = CITIES.filter(
    (c) => c.id !== originCity.id && c.id !== destinationCity.id
  );

  return (
    <svg
      className="size-full object-cover"
      viewBox="0 0 850 640"
      role="img"
      aria-label={`خريطة توضيحية لمسار بولمان مَسار من ${originCity.name} إلى ${destinationCity.name}`}
    >
      <defs>
        <pattern
          id="mapdots"
          width="31"
          height="31"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.2" cy="1.2" r="1.2" fill="#C88A32" opacity="0.3" />
        </pattern>
        <filter id="markerShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity=".16" />
        </filter>
      </defs>
      <rect width="850" height="640" fill="#F7F4EE" />
      <rect width="850" height="640" fill="url(#mapdots)" />
      <path
        d="M130 80Q200 120 275 55T500 65T770 116M0 460Q200 350 350 485T850 450M50 190Q230 250 390 140T750 200"
        fill="none"
        stroke="#E6E1D6"
        strokeWidth="25"
        opacity=".85"
      />
      <path
        d="M130 80Q200 120 275 55T500 65T770 116M0 460Q200 350 350 485T850 450M50 190Q230 250 390 140T750 200"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeDasharray="9 7"
      />
      <path
        d="M82 126 455 45 668 93 734 248 767 420 610 530 485 568 357 554 287 476 134 433 91 300Z"
        fill="#FDFBF7"
        stroke="#D5CEBF"
        strokeWidth="3"
      />
      <path
        d="M90 296 273 281 423 316 667 248m-279-200 10 470M146 420 612 530"
        fill="none"
        stroke="#E8E3D8"
        strokeWidth="3"
      />

      <g
        fill="#5C6470"
        fontFamily="Readex Pro, IBM Plex Sans Arabic, sans-serif"
        fontSize="16"
      >
        {otherCities.map((city) => {
          const p = mapCityPoint(city);
          return (
            <g key={city.id}>
              <circle
                cx={p.x}
                cy={p.y}
                r="4.5"
                fill="#C88A32"
                opacity="0.65"
              />
              <text textAnchor="middle" x={p.x} y={p.y - 13}>
                {city.name}
              </text>
            </g>
          );
        })}
      </g>

      <path
        ref={pathRef}
        id="route-path"
        d={pathData}
        fill="none"
        stroke="#DCE6F0"
        strokeWidth="19"
        strokeLinecap="round"
      />
      <path
        d={pathData}
        fill="none"
        stroke="#2E6F5E"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="12 8"
        className="animate-route-flow"
      />

      <circle
        cx={from.x}
        cy={from.y}
        r="18"
        fill="#fff"
        stroke="#2E6F5E"
        strokeWidth="8"
        filter="url(#markerShadow)"
      />
      <circle
        cx={to.x}
        cy={to.y}
        r="18"
        fill="#fff"
        stroke="#163A5F"
        strokeWidth="8"
        filter="url(#markerShadow)"
      />

      <g
        fill="#163A5F"
        fontFamily="Readex Pro, IBM Plex Sans Arabic, sans-serif"
        fontWeight="700"
        fontSize="20"
      >
        <text textAnchor="middle" x={from.x} y={from.y - 29}>
          {originCity.name}
        </text>
        <text textAnchor="middle" x={to.x} y={to.y + 43}>
          {destinationCity.name}
        </text>
      </g>

      <g id="moving-bus" transform={`translate(${busCoords.x} ${busCoords.y})`}>
        <circle
          r="34"
          fill="none"
          stroke="#C88A32"
          strokeWidth="2.5"
          className="animate-ping opacity-30"
        />
        <circle
          r="27"
          fill="#fff"
          stroke="#C88A32"
          strokeWidth="4"
          filter="url(#markerShadow)"
        />
        <rect x="-13" y="-11" width="26" height="20" rx="5" fill="#163A5F" />
        <rect x="-9" y="-6" width="18" height="7" rx="2" fill="#F7F4EE" />
        <circle cx="-8" cy="11" r="4" fill="#C88A32" />
        <circle cx="8" cy="11" r="4" fill="#C88A32" />
      </g>
    </svg>
  );
}

export default RouteSvg;
