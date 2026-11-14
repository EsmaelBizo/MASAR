import { Fragment } from "react";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { cn } from "../../../../../../lib/cn";

export function BookingStepper({ steps = [], currentStepIndex = 0 }) {
  return (
    <div className="mt-8 mb-6 max-[650px]:mt-6 max-[650px]:mb-4 flex items-center justify-center">
      {steps.map(([key, label], index) => {
        const isActiveOrDone = index <= currentStepIndex;
        const isCurrent = index === currentStepIndex;
        const isDone = index < currentStepIndex;

        return (
          <Fragment key={key}>
            <div
              className={cn(
                "flex items-center gap-2.5 transition-colors duration-300",
                isActiveOrDone ? "text-primary" : "text-muted"
              )}
            >
              <span
                className={cn(
                  "font-tabular grid size-[32px] max-[650px]:size-[26px] place-items-center rounded-full border text-[12px] font-bold transition-all duration-300",
                  isCurrent
                    ? "border-accent bg-accent text-white animate-pulse-ring"
                    : isDone
                      ? "border-secondary bg-secondary text-white"
                      : "border-border bg-surface-alt"
                )}
              >
                {isDone ? <SairnaIcon name="check" size={16} /> : index + 1}
              </span>
              <b className="whitespace-nowrap text-[12px] max-[650px]:text-[10px]">
                {label}
              </b>
            </div>
            {index < steps.length - 1 && (
              <div className="relative mx-4 max-[650px]:mx-2 h-0.5 w-[85px] max-[650px]:w-5 overflow-hidden rounded-full bg-border">
                <span
                  className={cn(
                    "block h-full bg-secondary transition-[width] duration-500 ease-[var(--ease-masar-out)]",
                    isDone ? "w-full" : "w-0"
                  )}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default BookingStepper;
