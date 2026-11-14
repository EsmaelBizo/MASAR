import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(
  'relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl border border-transparent min-h-[49px] px-[22px] py-[11px] font-bold text-[13px] whitespace-nowrap transition-all duration-300 ease-[var(--ease-masar-out)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white shadow-[0_9px_20px_rgba(200,138,50,0.24)] hover:bg-accent-deep hover:shadow-[0_14px_28px_rgba(200,138,50,0.36)]',
        navy:
          'bg-primary text-white shadow-[0_9px_20px_rgba(22,58,95,0.2)] hover:bg-primary-deep hover:shadow-[0_14px_28px_rgba(22,58,95,0.3)]',
        dark: 'bg-dark text-white hover:bg-primary-deep',
        outline:
          'bg-surface text-text border-border hover:border-accent hover:text-accent hover:shadow-card',
        subtle: 'bg-surface-alt text-text hover:bg-soft-gold',
        white: 'bg-white text-navy hover:bg-soft-gold',
        quiet:
          'bg-transparent border-0 text-accent text-[12px] font-bold min-h-0 p-0 hover:translate-y-0',
        icon: 'inline-grid place-items-center flex-none border border-border rounded-xl size-10 min-h-0 p-0 text-text bg-surface transition-all duration-250 hover:bg-soft-gold hover:text-accent hover:border-accent hover:translate-y-0',
      },
      size: {
        default: '',
        sm: 'min-h-[40px] px-[15px] py-2 text-[12px] rounded-[10px]',
        square: 'w-[49px] p-0',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  }
);

export function Button({
  className,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  type = 'button',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
