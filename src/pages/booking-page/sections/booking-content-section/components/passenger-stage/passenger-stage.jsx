import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { InfoNotice } from "../../../../../../components/shared/info-notice/info-notice";
import { PassengerFormCard } from "./components/passenger-form-card/passenger-form-card";

export function PassengerStage({
  people,
  selectedSeats,
  passengerForms,
  onPassengerChange,
}) {
  return (
    <>
      <div className="mb-5">
        <h2 className="mb-1 flex items-center gap-2.5 font-heading text-[20px] max-[650px]:text-[17px] font-bold [&>i]:text-accent">
          بيانات المسافرين لتثبيت التذكرة <SairnaIcon name="users" size={23} />
        </h2>
        <p className="m-0 text-[13px] text-muted">
          أدخل الاسم الثلاثي ورقم الهاتف الجوال لكل مسافر لإصدار تذكرة الصعود
          الرقمية.
        </p>
      </div>

      <div>
        {Array.from({ length: people }, (_, index) => {
          const currentPassenger = passengerForms[index] || {
            name: "",
            phone: "",
          };
          return (
            <PassengerFormCard
              key={index}
              index={index}
              seatCode={selectedSeats[index]}
              passenger={currentPassenger}
              onPassengerChange={onPassengerChange}
            />
          );
        })}
      </div>

      <InfoNotice iconName="info" iconSize={18} variant="teal" className="mt-3.5">
        يتم حفظ بيانات الحجز في حسابك على خادم مَسار بعد تأكيد الحجز.
      </InfoNotice>
    </>
  );
}

export default PassengerStage;
