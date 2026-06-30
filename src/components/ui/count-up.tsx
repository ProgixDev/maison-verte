"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type CountUpProps = {
  /** Target value to count to. */
  to: number;
  /** Rendered before/after the formatted number (e.g. " $"). */
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

/** Animated number that counts up once it scrolls into view (fr-CA grouping). */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1500,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          io.unobserve(entry.target);
          if (reduced) {
            setValue(to);
            return;
          }
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            setValue(easeOutCubic(t) * to);
            if (t < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value).toLocaleString("fr-CA")}
      {suffix}
    </span>
  );
}
