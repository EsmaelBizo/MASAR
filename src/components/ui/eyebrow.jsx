import { SairnaIcon } from './sairna-icon';
import { cn } from '../../lib/cn';

export function Eyebrow({ children, code, className, starClassName }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-accent/30 bg-soft-gold px-3.5 py-[5px] text-[11px] font-bold tracking-[0.06em] text-primary dark:text-[#F7F4EE] backdrop-blur-md',
        className
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center text-accent',
          starClassName
        )}
      >
        <SairnaIcon name="sparkle" size={12} />
      </span>
      {code && (
        <span className="editorial-eyebrow text-accent border-l border-accent/30 pl-2">
          {code}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
