import { useState, useEffect, useRef } from "react";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { RouteSvg } from "../route-svg/route-svg";

export function TrackingMapPanel({ originCity, destinationCity, progress }) {
  const [leafletActive, setLeafletActive] = useState(false);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const mapPointsRef = useRef([]);

useEffect(() => {
    if (!window.L || !mapContainerRef.current) {
      setLeafletActive(false);
      return undefined;
    }

    let map = null;
    try {
      const L = window.L;
      map = L.map(mapContainerRef.current, {
        center: [(originCity.lat + destinationCity.lat) / 2, (originCity.lng + destinationCity.lng) / 2],
        zoom: 7,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      const start = [originCity.lat, originCity.lng];
      const end = [destinationCity.lat, destinationCity.lng];
      const points = [];

      for (let i = 0; i <= 100; i += 1) {
        const t = i / 100;
        points.push([
          originCity.lat +
            (destinationCity.lat - originCity.lat) * t +
            Math.sin(t * Math.PI) * 0.11,
          originCity.lng +
            (destinationCity.lng - originCity.lng) * t -
            Math.sin(t * Math.PI) * 0.14,
        ]);
      }

      mapPointsRef.current = points;

      L.polyline(points, { color: '#DCE6F0', weight: 13 }).addTo(map);
      L.polyline(points, {
        color: '#2E6F5E',
        weight: 5,
        dashArray: '9 6',
      }).addTo(map);

      L.circleMarker(start, {
        radius: 9,
        color: '#2E6F5E',
        fillColor: '#fff',
        fillOpacity: 1,
        weight: 5,
      })
        .addTo(map)
        .bindPopup(`الانطلاق: ${originCity.name} (${originCity.terminal})`);

      L.circleMarker(end, {
        radius: 9,
        color: '#163A5F',
        fillColor: '#fff',
        fillOpacity: 1,
        weight: 5,
      })
        .addTo(map)
        .bindPopup(`الوصول: ${destinationCity.name} (${destinationCity.terminal})`);

      const busSvgMarkup = `<div class="map-bus-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 19v2m8-2v2M8 15h.01M16 15h.01"/></svg></div>`;
      const busIcon = L.divIcon({
        className: 'bus-marker',
        html: busSvgMarkup,
        iconSize: [42, 42],
        iconAnchor: [21, 21],
      });

      markerRef.current = L.marker(points[48], { icon: busIcon }).addTo(map);
      L.control.zoom({ position: 'bottomleft' }).addTo(map);

      setLeafletActive(true);

      // ضبط الحجم وتثبيت التركيز على المسار وسوريا بعد اكتمال رندر الـ DOM
      setTimeout(() => {
        try {
          if (!map) return;
          map.invalidateSize();
          const routeBounds = L.latLngBounds(start, end);
          map.fitBounds(routeBounds.pad(0.35), {
            animate: false,
            maxZoom: 9,
          });
        } catch {
          // ignore
        }
      }, 200);
    } catch (err) {
      console.warn('تعذّر تهيئة الخريطة، سيتم استخدام المخطط المحلي', err);
      setLeafletActive(false);
    }

    return () => {
      if (map) {
        try {
          map.remove();
        } catch {
          // ignore
        }
      }
      mapInstanceRef.current = null;
      markerRef.current = null;
    };
  }, [
    originCity.id,
    destinationCity.id,
    originCity.lat,
    originCity.lng,
    destinationCity.lat,
    destinationCity.lng,
    originCity.name,
    destinationCity.name,
    originCity.terminal,
    destinationCity.terminal,
  ]);

  useEffect(() => {
    if (markerRef.current && mapPointsRef.current.length > 0) {
      const idx = Math.min(100, Math.round(progress * 100));
      markerRef.current.setLatLng(mapPointsRef.current[idx]);
    }
  }, [progress]);

  return (
    <div className="relative min-h-[650px] max-[900px]:h-[500px] max-[900px]:min-h-[500px] max-[650px]:h-[440px] max-[650px]:min-h-[440px] min-w-0 overflow-hidden rounded-[19px] border border-border bg-[#F7F4EE]">
      <div className="pointer-events-none absolute top-4 right-4 left-4 z-40 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 text-[11px] font-bold text-primary shadow-card">
          <span className="size-2.5 rounded-full bg-secondary" /> مسار البولمان:{" "}
          {originCity.name} ⟵ {destinationCity.name}
        </div>
        <div className="flex max-[650px]:hidden items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 text-[11px] font-bold text-primary shadow-card">
          <SairnaIcon name="globe" size={15} className="text-accent" /> خريطة
          مَسار التفاعلية
        </div>
      </div>

      <div
        ref={mapContainerRef}
        id="tracking-map"
        dir="ltr"
        className="absolute inset-0 z-10 size-full"
        style={{ display: leafletActive ? "block" : "none" }}
      />

      <div
        id="fallback-map"
        className="absolute inset-0 z-10 size-full"
        style={{ display: leafletActive ? "none" : "block" }}
      >
        <RouteSvg
          originCity={originCity}
          destinationCity={destinationCity}
          progress={progress}
        />
      </div>

      <div className="pointer-events-none absolute right-4 bottom-4 left-4 z-30 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-[11px] font-bold text-primary shadow-card">
          <SairnaIcon name="pin" size={15} className="text-accent" />{" "}
          {originCity.terminal} ← {destinationCity.terminal}
        </span>
        <span className="inline-flex max-[650px]:!hidden items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-[10px] font-semibold text-muted shadow-card">
          مَسار | MASAR <span className="text-accent">•</span> OpenStreetMap
        </span>
      </div>
    </div>
  );
}

export default TrackingMapPanel;
