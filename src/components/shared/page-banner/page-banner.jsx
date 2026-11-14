import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../layouts/container/container";
import { Eyebrow } from "../../ui/eyebrow";
import { SairnaIcon } from "../../ui/sairna-icon";
import { cn } from "../../../lib/cn";

export function PageBanner({
  breadcrumbs = [],
  eyebrowCode,
  eyebrowText,
  title,
  highlightedTitle,
  description,
  iconName,
  action,
  variant = "navy",
  className,
}) {
  const isNavy = variant === "navy";

  return (
    <section
      className={cn(
        "group relative overflow-hidden border-b border-accent/20 pt-[30px] pb-[48px] max-[650px]:pt-[22px] max-[650px]:pb-10",
        isNavy
          ? "bg-navy dark:bg-[#090D14] text-white"
          : "bg-[linear-gradient(140deg,var(--surface-alt),var(--bg))] text-text",
        className
      )}
    >
      {isNavy && (
        <div
          className="pointer-events-none absolute inset-0 bg-arch-grid opacity-55"
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="مسار التنقل"
            className={cn(
              "animate-fade mb-5 flex flex-wrap items-center gap-2 text-[11px] font-bold",
              isNavy ? "text-[#B8CADE]" : "text-muted"
            )}
          >
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <Fragment key={`${item.label}-${idx}`}>
                  {item.to && !isLast ? (
                    <Link
                      to={item.to}
                      className={cn(
                        "transition-colors",
                        isNavy ? "hover:text-accent" : "hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={cn(isNavy ? "text-accent" : "text-primary dark:text-accent")}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && <SairnaIcon name="chevron-left" size={14} />}
                </Fragment>
              );
            })}
          </nav>
        )}

        <div className="flex max-[650px]:flex-col items-center max-[650px]:items-start justify-between gap-6">
          <div className="animate-slide-up">
            {eyebrowText && (
              <Eyebrow
                code={eyebrowCode}
                className={
                  isNavy
                    ? "border-accent/40 bg-white/8 text-[#F7F4EE]"
                    : undefined
                }
                starClassName={isNavy ? "text-accent" : undefined}
              >
                {eyebrowText}
              </Eyebrow>
            )}

            <h1
              className={cn(
                "mt-3.5 mb-2 font-heading text-[34px] max-[650px]:text-[26px] font-bold leading-[1.25]",
                isNavy ? "text-white" : "text-text"
              )}
            >
              {title}{" "}
              {highlightedTitle && (
                <span className="text-accent">{highlightedTitle}</span>
              )}
            </h1>

            {description && (
              <p
                className={cn(
                  "m-0 max-w-[600px] text-[14.5px] leading-[1.65]",
                  isNavy ? "text-[#CBD7E4]" : "text-muted"
                )}
              >
                {description}
              </p>
            )}
          </div>

          {iconName && (
            <div className="max-[650px]:hidden -rotate-[7deg] rounded-2xl border border-accent/25 bg-accent/10 p-5 text-accent backdrop-blur-md transition-transform duration-500 ease-[var(--ease-masar-spring)] group-hover:rotate-0 group-hover:scale-105">
              <SairnaIcon name={iconName} size={52} />
            </div>
          )}

          {action && (
            <div className="shrink-0 animate-slide-up [animation-delay:80ms]">
              {action}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageBanner;
