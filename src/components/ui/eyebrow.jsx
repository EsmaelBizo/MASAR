import { SairnaIcon } from './sairna-icon';
import { cn } from '../../lib/cn';

export function Eyebrow({ children, className, starClassName }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-accent/25 bg-soft-gold px-3.5 py-[5px] text-[11px] font-bold tracking-[0.12px] text-primary',
        className
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center text-[13px] text-accent',
          starClassName
        )}
      >
        <SairnaIcon name="sparkle" size={13} />
      </span>{' '}
      {children}
    </span>
  );
}
