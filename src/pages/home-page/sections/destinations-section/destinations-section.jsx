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
    <section className="py-[82px] max-[650px]:py-[56px]">
      <Container>
        <SectionHeading
          eyebrowText="مسارات القوافل والمدن السورية"
          title="وجهتك القادمة مع"
          highlightedTitle="مَسار"
          description="خطوط بولمان يومية منتظمة تربط كراجات دمشق وحلب وحمص والساحل والجزيرة."
          action={
            <Link
              to={ROUTES.RESULTS}
              className="group flex items-center gap-2 whitespace-nowrap text-[13px] font-bold text-primary transition-colors hover:text-accent"
            >
              استعرض كافة خطوط السير{" "}
              <SairnaIcon
                name="arrow-left"
                size={18}
                className="transition-transform duration-250 group-hover:-translate-x-[5px]"
              />
            </Link>
          }
        />

        <div
          ref={ref}
          className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[18px] max-[650px]:gap-3"
        >
          {FEATURED_DESTINATIONS.map((dest, index) => (
            <div
              key={dest.id}
              style={{ animationDelay: `${index * 85}ms` }}
              className={cn(isVisible ? "animate-slide-up" : "opacity-0")}
            >
              <DestinationCard
                destination={dest}
                onSelect={handleSelectDestination}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default DestinationsSection;
