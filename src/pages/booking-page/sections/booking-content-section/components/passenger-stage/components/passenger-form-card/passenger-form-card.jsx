import { FormInputField } from "../../../../../../../../components/shared/form-input-field/form-input-field";

export function PassengerFormCard({
  index,
  seatCode,
  passenger,
  onPassengerChange,
}) {
  return (
    <div className="mb-4 rounded-2xl border border-border bg-surface p-5 max-[650px]:p-4">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="font-tabular grid size-8 place-items-center rounded-full bg-navy font-bold text-white">
          {index + 1}
        </span>
        <b className="font-heading text-[14px]">المسافر {index + 1}</b>
        <small
          dir="ltr"
          className="font-tabular mr-auto rounded-lg border border-accent/40 bg-soft-gold px-3 py-1 font-bold text-accent-deep"
        >
          المقعد: {seatCode ?? "-"}
        </small>
      </div>

      <div className="grid grid-cols-2 max-[650px]:grid-cols-1 gap-3.5">
        <FormInputField
          label="الاسم الكامل للمسافر"
          required
          iconName="user"
          name="name"
          placeholder="مثال: أحمد خالد الدمشقي"
          value={passenger.name}
          onChange={(e) => onPassengerChange(index, "name", e.target.value)}
          minLength={3}
          autoComplete="off"
        />

        <FormInputField
          label="رقم الهاتف الجوال"
          required
          iconName="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          dir="ltr"
          placeholder="09xxxxxxxx"
          value={passenger.phone}
          onChange={(e) => onPassengerChange(index, "phone", e.target.value)}
          minLength={9}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default PassengerFormCard;
