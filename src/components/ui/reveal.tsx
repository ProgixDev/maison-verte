"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  /** Stagger in milliseconds, mirroring the design's data-reveal-delay. */
  delay?: number;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Scroll-reveal: fade + rise as the element enters the viewport (recreates the
 * prototype's motion.js [data-reveal]). Honors prefers-reduced-motion — reduced
 * users get the content immediately with no transform.
 */
export function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  children,
  className,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  // Reduced-motion users never get the hidden state (the opacity/transform classes
  // below are motion-safe-gated), so we only ever flip `shown` from the observer.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(.2,.7,.2,1)] motion-safe:will-change-[opacity,transform]",
        shown ? "opacity-100" : "motion-safe:translate-y-7 motion-safe:opacity-0",
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
