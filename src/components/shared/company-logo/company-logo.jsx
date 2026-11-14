import { cn } from '../../../lib/cn';

const SIZE_CLASSES = {
  normal:
    'size-[49px] basis-[49px] rounded-[14px] text-[27px] max-[650px]:size-[42px] max-[650px]:basis-[42px] max-[650px]:text-[23px]',
  large: 'size-[68px] basis-[68px] rounded-[19px] text-[36px]',
  tiny: 'size-[27px] basis-[27px] rounded-[9px] text-[14px]',
  pick: 'size-8 basis-8 rounded-[9px] text-[18px]',
};

export function CompanyLogo({ company, size = 'normal', className }) {
  if (company?.logoUrl) {
    return (
      <span
        className={cn(
          'grid shrink-0 place-items-center overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]',
          SIZE_CLASSES[size] || SIZE_CLASSES.normal,
          className
        )}
      >
        <img
          src={company.logoUrl}
          alt=""
          className="size-full object-contain p-1.5"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center font-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] bg-[var(--logo-bg)] text-[var(--logo-color)]',
        SIZE_CLASSES[size] || SIZE_CLASSES.normal,
        className
      )}
      style={{
        '--logo-color': company.color,
        '--logo-bg': company.bg,
      }}
    >
      {company.short}
    </span>
  );
}
