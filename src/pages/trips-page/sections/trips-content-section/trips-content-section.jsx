import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Container } from "../../../../layouts/container/container";
import { SairnaIcon } from "../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../components/ui/button";
import { InfoNotice } from "../../../../components/shared/info-notice/info-notice";
import { MyTripCard } from "./components/my-trip-card/my-trip-card";
import { useMyBookingsQuery } from "../../../../hooks/use-bookings-query";
import { useAuthStore } from "../../../../store/use-auth-store";
import { LoadingState } from "../../../../components/shared/loading-state/loading-state";

export function TripsContentSection() {
  const token = useAuthStore((state) => state.token);
  const { data: serverBookings = [], isLoading, isError } = useMyBookingsQuery();
  const displayBookings = token ? serverBookings : [];

  return (
    <Container as="section" className="py-[82px] max-[650px]:py-[56px]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="m-0 font-heading text-[20px] max-[650px]:text-[17px] font-bold">
            رحلات البولمان القادمة
          </h2>
          <p className="m-0 text-[12px] text-muted">
            {token
              ? "تذاكرك المحفوظة في حسابك على منصة مَسار"
              : "سجّل دخولك لاستعراض تذاكرك المحفوظة"}
          </p>
        </div>
        <Link
          to={ROUTES.RESULTS}
          className={buttonVariants({ variant: "primary", size: "sm" })}
        >
          <SairnaIcon name="plus" size={17} /> حجز تذكرة جديدة
        </Link>
      </div>

      {isLoading ? (
        <LoadingState label="جارٍ تحميل حجوزاتك..." />
      ) : isError ? (
        <LoadingState
          label="تعذر تحميل الحجوزات. حاول مرة أخرى."
          className="text-danger"
        />
      ) : (
        <div className="flex flex-col gap-4">
          {displayBookings.map((booking, index) => (
            <div
              key={booking.id}
              style={{ animationDelay: `${Math.min(index * 70, 320)}ms` }}
              className="animate-slide-up"
            >
              <MyTripCard booking={booking} />
            </div>
          ))}
        </div>
      )}

      {!isLoading && !isError && displayBookings.length === 0 && (
        <InfoNotice iconName="info" iconSize={19} variant="teal" className="mt-5 animate-fade">
          لا توجد حجوزات مرتبطة بهذا الحساب حتى الآن.
        </InfoNotice>
      )}
    </Container>
  );
}

export default TripsContentSection;
