import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useBookingStore } from "../../../../store/use-booking-store";
import { FEATURED_DESTINATIONS } from "../../data/home-data";
import { Container } from "../../../../layouts/container/container";
import { SectionHeading } from "../../../../components/shared/section-heading/section-heading";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { DestinationCard } from "./components/destination-card/destination-card";
import { useScrollReveal } from "../../../../hooks/use-scroll-reveal";
import { cn } from "../../../../lib/cn";

export function DestinationsSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();
  const selectDestinationFromHome = useBookingStore(
    (state) => state.selectDestinationFromHome
  );

  const handleSelectDestination = (destinationId) => {
    selectDestinationFromHome(destinationId);
    navigate(ROUTES.RESULTS);
  };

  return (
    <section className="py-[86px] max-[650px]:py-[56px]">
      <Container>
        <SectionHeading
          eyebrowCode="MASAR // CORRIDORS"
          eyebrowText="مسارات القوافل والمدن السورية"
          title="وجهتك القادمة مع"
          highlightedTitle="مَسار"
          description="خطوط بولمان يومية منتظمة تربط كراجات دمشق وحلب وحمص والساحل والجزيرة ضمن شبكة تفاعلية موحدة."
          action={
            <Link
              to={ROUTES.RESULTS}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 whitespace-nowrap text-[13px] font-bold text-primary dark:text-accent transition-all duration-300 ease-[var(--ease-masar-out)] hover:border-accent hover:-translate-y-0.5"
            >
              استعرض كافة خطوط السير
              <SairnaIcon
                name="arrow-left"
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
          }
        />

        {/* Editorial Asymmetric Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-4 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1 auto-rows-[230px] max-[650px]:auto-rows-[210px] gap-4 max-[650px]:gap-3.5"
        >
          {FEATURED_DESTINATIONS.map((dest, index) => {
            const isHeroBento = index === 0;
            const isWideBento = index === 3;
            return (
              <div
                key={dest.id}
                style={{ animationDelay: `${index * 90}ms` }}
                className={cn(
                  isHeroBento && "col-span-2 row-span-2 max-[960px]:col-span-2 max-[560px]:col-span-1 max-[560px]:row-span-1",
                  isWideBento && "col-span-2 max-[960px]:col-span-2 max-[560px]:col-span-1",
                  isVisible ? "animate-slide-up" : "opacity-0"
                )}
              >
                <DestinationCard
                  destination={dest}
                  index={index}
                  featured={isHeroBento}
                  onSelect={handleSelectDestination}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default DestinationsSection;
