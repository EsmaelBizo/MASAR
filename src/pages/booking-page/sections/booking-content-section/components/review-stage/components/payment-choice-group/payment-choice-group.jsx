import { SairnaIcon } from "../../../../../../../../components/ui/sairna-icon";

const paymentChoiceClasses =
  "mb-2.5 flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3.5 transition-colors has-[:checked]:border-accent has-[:checked]:bg-soft-gold";

const PAYMENT_METHODS = [
  {
    value: "office",
    icon: "wallet",
    iconColor: "text-primary",
    title: "الدفع في مكتب الشركة بالكراج",
    description:
      "يُحفظ مقعدك إلكترونياً وتُسدد قيمة التذكرة في الكراج قبل 20 دقيقة من الانطلاق.",
  },
];

export function PaymentChoiceGroup({ paymentMethod, onSelectMethod }) {
  return (
    <div className="mb-4 rounded-2xl border border-border p-5">
      <h3 className="mb-3.5 font-heading text-[15px] font-bold">
        آلية تثبيت التذكرة والدفع
      </h3>
      {PAYMENT_METHODS.map((method) => (
        <label key={method.value} className={paymentChoiceClasses}>
          <input
            type="radio"
            name="payment"
            value={method.value}
            checked={paymentMethod === method.value}
            onChange={(e) => onSelectMethod(e.target.value)}
            className="cursor-pointer accent-accent"
          />
          <span
            className={`grid size-11 place-items-center rounded-xl bg-surface-alt ${method.iconColor}`}
          >
            <SairnaIcon name={method.icon} size={22} />
          </span>
          <span className="flex flex-1 flex-col">
            <b className="text-[13px]">{method.title}</b>
            <small className="text-[11px] text-muted">
              {method.description}
            </small>
          </span>
        </label>
      ))}
    </div>
  );
}

export default PaymentChoiceGroup;
