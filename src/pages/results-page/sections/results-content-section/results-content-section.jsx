import { getCityById } from "../../../../constants/cities";
import { useBookingStore } from "../../../../store/use-booking-store";
import { useTripsQuery } from "../../../../hooks/use-trips-query";
import { Container } from "../../../../layouts/container/container";
import { SearchForm } from "../../../../components/shared/search-form/search-form";
import { EmptyStateCard } from "../../../../components/shared/empty-state-card/empty-state-card";
import { buttonVariants } from "../../../../components/ui/button";
import { CompanyPickSection } from "../company-pick-section/company-pick-section";
import { ResultsToolbar } from "./components/results-toolbar/results-toolbar";
import { FiltersSidebar } from "./components/filters-sidebar/filters-sidebar";
import { TripCard } from "./components/trip-card/trip-card";
import { TripCardSkeleton } from "./components/trip-card/trip-card-skeleton";

export function ResultsContentSection() {
  const search = useBookingStore((state) => state.search);
  const companyFilter = useBookingStore((state) => state.companyFilter);
  const timeFilter = useBookingStore((state) => state.timeFilter);
  const sortBy = useBookingStore((state) => state.sortBy);
  const setSortBy = useBookingStore((state) => state.setSortBy);
  const clearFilters = useBookingStore((state) => state.clearFilters);

  const { data: allTrips = [], isLoading, isError } = useTripsQuery({
    origin: search.origin,
    destination: search.destination,
    date: search.date,
  });

  const filteredTrips = allTrips
    .filter((trip) => {
      const matchesCompany =
        companyFilter === "all" ||
        String(trip.company.id) === String(companyFilter);

      const hour = Number(trip.departure.slice(0, 2));
      const matchesTime =
        timeFilter === "all" ||
        (timeFilter === "morning"
          ? hour < 12
          : timeFilter === "evening"
            ? hour >= 17
            : hour >= 12 && hour < 17);

      return matchesCompany && matchesTime;
    })
    .sort((a, b) => {
      if (sortBy === "cheap") return a.price - b.price;
      if (sortBy === "quick") return a.duration - b.duration;
      return a.departure.localeCompare(b.departure);
    });

  const originCity = getCityById(search.origin);
  const destinationCity = getCityById(search.destination);

  return (
    <Container as="section" className="pb-[90px]">
      <div className="relative z-20 -mt-[26px] rounded-[18px] border border-border bg-surface p-5 max-[650px]:p-3.5 shadow-card">
        <SearchForm context="results" />
      </div>

      <CompanyPickSection />

      <ResultsToolbar
        count={filteredTrips.length}
        originCity={originCity}
        destinationCity={destinationCity}
        date={search.date}
        people={search.people}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-[254px_minmax(0,1fr)] max-[900px]:grid-cols-1 items-start gap-5">
        <FiltersSidebar allTrips={allTrips} />

        <div className="flex min-w-0 flex-col gap-4">
          {isLoading ? (
            <TripCardSkeleton count={3} />
          ) : isError ? (
            <EmptyStateCard
              iconName="info"
              title="تعذر تحميل الرحلات"
              description="تحقق من الاتصال بالخادم وحاول البحث مرة أخرى."
            />
          ) : filteredTrips.length > 0 ? (
            filteredTrips.map((trip, index) => (
              <div
                key={trip.id}
                style={{ animationDelay: `${Math.min(index * 65, 350)}ms` }}
                className="animate-slide-up"
              >
                <TripCard trip={trip} />
              </div>
            ))
          ) : (
            <EmptyStateCard
              iconName="search"
              title="لا توجد رحلات مطابقة للفلتر المحدد"
              description="جرّب تغيير شركة البولمان أو فترة الانطلاق لاستعراض كافة المواعيد."
              action={
                <button
                  type="button"
                  className={buttonVariants({ variant: "primary" })}
                  onClick={clearFilters}
                >
                  عرض جميع رحلات البولمان
                </button>
              }
            />
          )}
        </div>
      </div>
    </Container>
  );
}

export default ResultsContentSection;
