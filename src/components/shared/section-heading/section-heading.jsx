import { Eyebrow } from '../../ui/eyebrow';
import { cn } from '../../../lib/cn';

export function SectionHeading({
  eyebrowCode,
  eyebrowText,
  title,
  highlightedTitle,
  description,
  action,
  align = 'between',
  className,
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-9 flex items-end justify-between gap-5 max-[650px]:mb-6 max-[650px]:flex-col max-[650px]:items-start',
        isCentered && 'flex-col items-center text-center',
        className
      )}
    >
      <div className={cn(isCentered && 'flex flex-col items-center')}>
        {eyebrowText && <Eyebrow code={eyebrowCode}>{eyebrowText}</Eyebrow>}
        <h2 className="mt-3.5 mb-2 font-heading text-[32px] max-[900px]:text-[28px] max-[650px]:text-[24px] font-bold leading-[1.25] tracking-[-0.015em] text-text">
          {title}{' '}
          {highlightedTitle && (
            <span className="text-accent relative inline-block">
              {highlightedTitle}
            </span>
          )}
        </h2>
        {description && (
          <p className="mb-0 max-w-[560px] text-[15px] leading-[1.65] text-muted">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
