import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";
import { InfoNotice } from "../../../../../../../../components/shared/info-notice/info-notice";

export function SeatSelectionAside({ selectedSeats = [], people = 1 }) {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="rounded-2xl border border-border bg-surface p-5">
        <span className="mb-3 grid size-12 place-items-center rounded-2xl bg-soft-gold text-accent">
          <SairnaIcon name="seat" size={24} />
        </span>
        <h3 className="mb-1.5 font-heading text-[16px] font-bold">
          مقعدك محفوظ بالرقم
        </h3>
        <p className="text-[12px] leading-[1.85] text-muted">
          تضمن لك منصة «مَسار» الحصول على نفس رقم المقعد المحدد هنا عند صعودك
          إلى البولمان في الكراج.
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-[12px]">
          <span className="font-semibold text-muted">المقاعد المحددة</span>
          <strong className="font-tabular text-[17px] text-accent-deep">
            {selectedSeats.length} / {people}
          </strong>
        </div>

        <div className="mt-3.5 flex flex-wrap gap-2">
          {selectedSeats.length > 0 ? (
            selectedSeats.map((code) => (
              <span
                key={code}
                dir="ltr"
                className="font-tabular rounded-lg border border-accent bg-soft-gold px-3 py-1 text-[12px] font-bold text-accent-deep"
              >
                Seat {code}
              </span>
            ))
          ) : (
            <span className="text-[12px] text-muted">
              لم يتم تحديد مقعد بعد — انقر على مقعد متاح
            </span>
          )}
        </div>
      </div>

      <InfoNotice iconName="info" iconSize={18} variant="teal">
        المقاعد ذات الحرف (A) في فئة VIP هي مقاعد فردية مستقلة بجانب النافذة
        لخصوصية وراحة مضاعفة.
      </InfoNotice>
    </div>
  );
}

export default SeatSelectionAside;
