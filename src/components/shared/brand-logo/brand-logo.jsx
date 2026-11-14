import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import logoSvg from '../../../assets/images/logo.svg';
import { cn } from '../../../lib/cn';

export function BrandLogo({ variant = 'default', className }) {
  const isFooter = variant === 'footer';
  const isHeader = variant === 'header';

  return (
    <Link
      to={ROUTES.HOME}
      className={cn('inline-flex shrink-0 items-center gap-3 min-w-[125px]', className)}
      aria-label="مَسار | MASAR - الرئيسية"
    >
      <span className="grid size-12 max-[650px]:size-[40px] place-items-center">
        <img src={logoSvg} alt="شعار مَسار" className="size-full" />
      </span>
      <span className="flex flex-col leading-[1.2]">
        <strong
          className={cn(
            'font-heading text-[26px] max-[650px]:text-[22px] font-bold tracking-[-0.5px] flex items-baseline gap-1.5',
            isFooter || isHeader ? 'text-white' : 'text-primary dark:text-text'
          )}
        >
          <span>مَسار</span>
          <span className="text-accent text-[13px] font-tabular font-bold tracking-wider opacity-90">
            MASAR
          </span>
        </strong>
        <small
          className={cn(
            'mt-1 whitespace-nowrap text-[10px] max-[650px]:text-[8px] font-medium',
            isFooter || isHeader ? 'text-[#DCE6F0]' : 'text-muted'
          )}
        >
          دربك سالك ومقعدك محفوظ
        </small>
      </span>
    </Link>
  );
}
