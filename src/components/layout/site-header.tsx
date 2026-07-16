"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { m, useScroll, useSpring } from "@/components/motion";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";
import { isActive, mainNav } from "@/lib/site-nav";
import { LogoMark } from "./logo-mark";

/**
 * Sticky site header: CAMT urgency banner, translucent nav bar with active-link
 * highlighting, a lift-on-scroll shadow, and a mobile drawer. The desktop nav
 * appears at 1000px so it never crowds beside the enlarged logo lockup.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Reading-progress fill along the header's bottom edge.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-[0_8px_28px_rgba(18,61,43,0.10)]",
      )}
    >
      <Link href="/admissibilite" className="bg-brick block text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2.5 px-4 py-2.5 text-center min-[480px]:px-[22px]">
          <span
            aria-hidden
            className="mvq-pulse size-2 shrink-0 rounded-full bg-[#ffd2cb] shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
          />
          <span className="min-w-0 text-[13.5px] leading-snug font-semibold">
            <span className="hidden min-[1000px]:inline">
              Programme fédéral CAMT — jusqu’à 10 000 $ — fin des inscriptions le 31 juillet 2026
            </span>
            <span className="min-[1000px]:hidden">
              CAMT : jusqu’à 10 000 $ — fin le 31 juillet 2026
            </span>
          </span>
          <span className="hidden shrink-0 items-center gap-1.5 text-[13.5px] font-bold whitespace-nowrap min-[400px]:inline-flex">
            Vérifier <ArrowRight className="size-3.5" />
          </span>
        </div>
      </Link>

      <div className="border-pine/[0.08] bg-cream/80 border-b backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2.5 px-4 py-3 min-[480px]:gap-3.5 min-[480px]:px-[22px]">
          <Link
            href="/"
            aria-label="Maison Verte Québec — Accueil"
            className="flex shrink-0 items-center gap-2.5 min-[480px]:gap-3"
          >
            <LogoMark width={54} className="h-auto w-[44px] min-[480px]:w-[54px]" />
            <span className="flex flex-col leading-[1.04]">
              <span className="text-pine text-[15px] leading-none font-extrabold tracking-[0.085em] min-[480px]:text-[17px]">
                MAISON VERTE
              </span>
              <span className="text-forest mt-[3px] text-[9.5px] leading-none font-semibold tracking-[0.34em] min-[480px]:text-[10.5px]">
                QUÉBEC
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 min-[1000px]:flex"
          >
            {mainNav.map((link) => {
              const active = isActive(link, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative inline-flex items-center px-3 py-1.5 text-[15px] font-medium transition-colors",
                    active ? "text-pine" : "text-fern hover:text-pine",
                  )}
                >
                  {/* Hand-drawn circle that "draws" itself around the link on hover. */}
                  <svg
                    aria-hidden
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                    fill="none"
                    className="pointer-events-none absolute inset-0 size-full"
                  >
                    <path
                      d="M48 5C26 5 6 11 7 21 8 32 28 36 50 36 73 36 95 29 94 20 93 10 72 5 48 5Z"
                      pathLength={1}
                      className={cn(
                        "stroke-forest [stroke-width:2.1] transition-[stroke-dashoffset] duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] [stroke-dasharray:1_2] [stroke-linecap:round] [stroke-linejoin:round] [vector-effect:non-scaling-stroke] motion-reduce:transition-none",
                        active
                          ? "[stroke-dashoffset:0]"
                          : "[stroke-dashoffset:1.05] group-hover:[stroke-dashoffset:0]",
                      )}
                    />
                  </svg>
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 min-[480px]:gap-2.5">
            <CtaLink href="/admissibilite" size="sm" className="hidden min-[1000px]:inline-flex">
              Vérifier mon admissibilité
            </CtaLink>
            <CtaLink
              href="/admissibilite"
              size="sm"
              className="px-3.5 py-2.5 text-sm min-[480px]:px-[15px] min-[1000px]:hidden"
            >
              Vérifier
            </CtaLink>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="border-pine/15 bg-card text-pine grid size-11 place-items-center rounded-xl border min-[1000px]:hidden"
            >
              {open ? <X className="size-[22px]" /> : <Menu className="size-[22px]" />}
            </button>
          </div>
        </div>

        <m.div
          aria-hidden
          style={{ scaleX: progress }}
          className="bg-lime absolute inset-x-0 bottom-0 z-[1] h-[2px] origin-left"
        />

        {open ? (
          <nav
            aria-label="Navigation mobile"
            className="border-pine/10 bg-cream flex flex-col gap-0.5 border-t px-[18px] pt-2.5 pb-5 min-[1000px]:hidden"
          >
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-pine/[0.07] text-ink border-b px-2 py-3 text-[17px] font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <CtaLink href="/admissibilite" onClick={() => setOpen(false)} className="mt-3.5 w-full">
              Vérifier mon admissibilité
            </CtaLink>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
