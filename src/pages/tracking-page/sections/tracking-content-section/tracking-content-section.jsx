import { useState, useEffect } from "react";
import { getCompanyById } from "../../../../constants/companies";
import { calculateApproxDistance } from "../../../../constants/cities";
import { Container } from "../../../../layouts/container/container";
import { TrackingSidebar } from "./components/tracking-sidebar/tracking-sidebar";
import { TrackingMapPanel } from "./components/tracking-map-panel/tracking-map-panel";

export function TrackingContentSection({
  activeBooking,
  originCity,
  destinationCity,
}) {
  const company = getCompanyById(activeBooking.companyId);
  const approxDist = calculateApproxDistance(originCity, destinationCity);

  const [progress, setProgress] = useState(0.48);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setProgress(0.48);
    setPlaying(true);
  }, [activeBooking.id]);

  useEffect(() => {
    if (!playing) return undefined;

    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : Math.min(1, prev + 0.006)));
    }, 150);

    return () => clearInterval(timer);
  }, [playing]);

  const progressPercent = Math.round(progress * 100);
  const etaText =
    progress >= 1
      ? "تم الوصول للكراج"
      : `${Math.max(1, Math.ceil((1 - progress) * 4.5))} ساعات تقريباً`;
  const statusText =
    progress >= 1
      ? `وصل البولمان إلى ${destinationCity.terminal}`
      : progress > 0.8
        ? `اقتربنا من ${destinationCity.terminal}`
        : "البولمان يسير على الأوتوستراد الدولي";

  return (
    <Container
      as="section"
      className="grid grid-cols-[355px_minmax(0,1fr)] max-[1150px]:grid-cols-[310px_minmax(0,1fr)] max-[900px]:grid-cols-1 items-stretch gap-[18px]"
    >
      <TrackingSidebar
        booking={activeBooking}
        originCity={originCity}
        destinationCity={destinationCity}
        company={company}
        approxDist={approxDist}
        progressPercent={progressPercent}
        etaText={etaText}
        statusText={statusText}
        playing={playing}
        onTogglePlay={() => setPlaying((prev) => !prev)}
        onReset={() => setProgress(0)}
      />

      <TrackingMapPanel
        originCity={originCity}
        destinationCity={destinationCity}
        progress={progress}
      />
    </Container>
  );
}

export default TrackingContentSection;
