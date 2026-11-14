import { SairnaIcon } from '../../ui/sairna-icon';

const FEATURE_ICON_MAP = {
  'Wi-Fi': 'wifi',
  'مكيّف': 'snow',
};

export function ServiceBadges({ company }) {
  if (!company?.features?.length) return null;

  return (
    <>
      {company.features.map((feature) => {
        const iconName = FEATURE_ICON_MAP[feature] || 'plug';
        return (
          <span
            key={feature}
            className="inline-flex items-center gap-[5px] rounded-[6px] bg-surface-alt px-[9px] py-[5px] text-[10px] font-bold text-muted"
          >
            <SairnaIcon name={iconName} size={13} /> {feature}
          </span>
        );
      })}
    </>
  );
}
