import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(
  'relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl border border-transparent min-h-[48px] px-[22px] py-[11px] font-bold text-[13px] whitespace-nowrap transition-all duration-350 ease-[var(--ease-masar-out)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white shadow-[0_10px_24px_rgba(200,138,50,0.28)] hover:bg-accent-deep hover:shadow-[0_16px_34px_rgba(200,138,50,0.42)]',
        navy:
          'bg-navy text-white border border-accent/25 shadow-[0_10px_24px_rgba(22,58,95,0.22)] hover:bg-primary-deep hover:border-accent/50 hover:shadow-[0_16px_34px_rgba(22,58,95,0.35)]',
        dark: 'bg-obsidian text-[#F7F4EE] border border-accent/30 hover:bg-obsidian-surface hover:border-accent/60',
        outline:
          'bg-surface/80 backdrop-blur-md text-text border-border hover:border-accent hover:text-accent hover:shadow-card',
        subtle: 'bg-surface-alt text-text border border-border/60 hover:bg-soft-gold hover:border-accent/35',
        white: 'bg-[#F7F4EE] text-navy hover:bg-soft-gold',
        quiet:
          'bg-transparent border-0 text-accent text-[12px] font-bold min-h-0 p-0 hover:translate-y-0',
        icon: 'inline-grid place-items-center flex-none border border-border rounded-xl size-10 min-h-0 p-0 text-text bg-surface/80 backdrop-blur-md transition-all duration-300 ease-[var(--ease-masar-out)] hover:bg-soft-gold hover:text-accent hover:border-accent hover:translate-y-0',
      },
      size: {
        default: '',
        sm: 'min-h-[40px] px-[15px] py-2 text-[12px] rounded-[10px]',
        square: 'w-[48px] p-0',
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
