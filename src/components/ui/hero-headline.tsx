"use client";

import type { Variants } from "motion/react";
import { m } from "@/components/motion";
import { cn } from "@/lib/utils";

type Line = { text: string; className?: string };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
};
const wordV: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

/**
 * Cinematic headline: each word rises and fades in sequence on mount (a film
 * title reveal). reducedMotion="user" (MotionProvider) drops the movement and
 * keeps a gentle staggered fade. The full text stays in the DOM for a11y/SEO.
 */
export function HeroHeadline({ lines, className }: { lines: Line[]; className?: string }) {
  return (
    <m.h1 className={className} variants={container} initial="hidden" animate="show">
      {lines.map((line, li) => {
        const words = line.text.split(" ");
        return (
          <span key={li} className={line.className}>
            {words.map((word, wi) => (
              <m.span
                key={`${li}-${wi}`}
                variants={wordV}
                className={cn("inline-block whitespace-pre", "[will-change:transform,opacity]")}
              >
                {word}
                {wi < words.length - 1 ? " " : ""}
              </m.span>
            ))}
            {li < lines.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </m.h1>
  );
}
