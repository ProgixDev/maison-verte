"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useSpring, useTransform } from "@/components/motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Total vertical travel in px across the scroll through the viewport. */
  distance?: number;
  "aria-hidden"?: boolean;
};

/**
 * Scroll-linked vertical parallax (docs/conventions/motion.md). The ref sits on a
 * non-transformed wrapper so measuring scroll progress never feeds back on itself;
 * the inner layer is what drifts.
 *
 * Parallax only engages after mount: the server can't read prefers-reduced-motion
 * (or scroll position), so we render no transform until the client takes over —
 * this keeps SSR and the first client paint identical (no hydration mismatch).
 */
export function Parallax({ children, className, distance = 40, ...rest }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  // Engage only after the first client frame — the server can't read scroll position
  // or reduced-motion, so deferring keeps SSR and first paint identical (no hydration
  // mismatch) and avoids a synchronous set-state in the effect body.
  useEffect(() => {
    const id = requestAnimationFrame(() => setActive(!reduce));
    return () => cancelAnimationFrame(id);
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], active ? [distance, -distance] : [0, 0]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={className} {...rest}>
      <m.div style={active ? { y } : undefined} className="h-full w-full">
        {children}
      </m.div>
    </div>
  );
}
