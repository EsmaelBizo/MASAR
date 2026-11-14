import { useEffect, useRef, useState } from "react";

const COUNTABLE_PATTERN = /^([+-]?)(\d+)(.*)$/;

export function useCountUp(rawValue, duration = 900) {
  const strValue = String(rawValue ?? "");
  const match = strValue.match(COUNTABLE_PATTERN);
  const isPureNumeric =
    Boolean(match) && (match[3] === "" || match[3] === "%");

  const target = isPureNumeric ? Number(match[2]) : null;
  const prefix = isPureNumeric ? match[1] : "";
  const suffix = isPureNumeric ? match[3] : "";

  const [displayValue, setDisplayValue] = useState(
    isPureNumeric ? `${prefix}0${suffix}` : strValue
  );
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isPureNumeric || target === null) {
      setDisplayValue(strValue);
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayValue(strValue);
      return;
    }

    const element = ref.current;
    if (!element) {
      setDisplayValue(strValue);
      return;
    }

    let rafId = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        setDisplayValue(`${prefix}${current}${suffix}`);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplayValue(strValue);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [duration, isPureNumeric, prefix, strValue, suffix, target]);

  return { ref, displayValue };
}

export default useCountUp;
