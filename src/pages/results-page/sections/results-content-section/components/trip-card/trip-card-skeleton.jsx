const SHIMMER_BAR =
  "bg-[linear-gradient(90deg,#EFECE4_25%,#F7F4EE_50%,#EFECE4_75%)] dark:bg-[linear-gradient(90deg,#1C2D42_25%,#263B54_50%,#1C2D42_75%)] bg-[length:200%_100%] animate-shimmer";

export function TripCardSkeleton({ count = 3 }) {
  return (
    <div className="flex flex-col gap-4" aria-busy="true" aria-label="جارٍ تحميل الرحلات المتاحة">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-border border-r-[6px] border-r-border bg-surface p-5 max-[650px]:p-3.5"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
            <div className="flex items-center gap-3">
              <div className={`size-11 rounded-xl ${SHIMMER_BAR}`} />
              <div className="flex flex-col gap-2">
                <div className={`h-4 w-36 rounded-md ${SHIMMER_BAR}`} />
                <div className={`h-3 w-24 rounded-md ${SHIMMER_BAR}`} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-7 w-32 rounded-lg ${SHIMMER_BAR}`} />
              <div className={`h-7 w-28 rounded-lg ${SHIMMER_BAR}`} />
            </div>
          </div>

          <div className="my-2 rounded-xl border border-border/60 bg-surface-alt/50 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className={`h-6 w-16 rounded-md ${SHIMMER_BAR}`} />
                <div className={`h-3.5 w-24 rounded-md ${SHIMMER_BAR}`} />
              </div>
              <div className={`h-2 flex-1 rounded-full ${SHIMMER_BAR}`} />
              <div className="flex flex-col items-end gap-2">
                <div className={`h-6 w-16 rounded-md ${SHIMMER_BAR}`} />
                <div className={`h-3.5 w-24 rounded-md ${SHIMMER_BAR}`} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-3">
            <div className={`h-5 w-44 rounded-md ${SHIMMER_BAR}`} />
            <div className="flex items-center gap-4">
              <div className={`h-7 w-24 rounded-md ${SHIMMER_BAR}`} />
              <div className={`h-11 w-32 rounded-xl ${SHIMMER_BAR}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TripCardSkeleton;
