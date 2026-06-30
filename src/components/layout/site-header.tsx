"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";
import { isActive, mainNav } from "@/lib/site-nav";
import { LogoMark } from "./logo-mark";

/**
 * Sticky site header: CAMT urgency banner, translucent nav bar with active-link
 * highlighting, a lift-on-scroll shadow, and a mobile drawer. The breakpoint
 * (880px) matches the prototype's desktop/mobile split.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2.5 px-[22px] py-2.5 text-center">
          <span
            aria-hidden
            className="mvq-pulse size-2 shrink-0 rounded-full bg-[#ffd2cb] shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
          />
          <span className="text-[13.5px] leading-snug font-semibold">
            <span className="hidden min-[880px]:inline">
              Programme fédéral CAMT — jusqu’à 10 000 $ — fin des inscriptions le 31 juillet 2026
            </span>
            <span className="min-[880px]:hidden">
              CAMT : jusqu’à 10 000 $ — fin le 31 juillet 2026
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-bold whitespace-nowrap">
            Vérifier <ArrowRight className="size-3.5" />
          </span>
        </div>
      </Link>

      <div className="border-pine/[0.08] bg-cream/80 border-b backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3.5 px-[22px] py-3">
          <Link
            href="/"
            aria-label="Maison Verte Québec — Accueil"
            className="flex shrink-0 items-center gap-2.5"
          >
            <LogoMark width={42} />
            <span className="flex flex-col leading-none">
              <span className="text-pine text-[14px] font-extrabold tracking-[0.11em]">
                MAISON VERTE
              </span>
              <span className="text-forest mt-[3px] text-[10.5px] font-semibold tracking-[0.27em]">
                QUÉBEC
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-[26px] min-[880px]:flex"
          >
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link, pathname) ? "page" : undefined}
                className={cn(
                  "hover:text-pine text-[15px] font-medium transition-colors",
                  isActive(link, pathname) ? "text-pine font-bold" : "text-fern",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <CtaLink href="/admissibilite" size="sm" className="hidden min-[880px]:inline-flex">
              Vérifier mon admissibilité
            </CtaLink>
            <CtaLink
              href="/admissibilite"
              size="sm"
              className="px-[15px] py-2.5 text-sm min-[880px]:hidden"
            >
              Vérifier
            </CtaLink>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="border-pine/15 bg-card text-pine grid size-11 place-items-center rounded-xl border min-[880px]:hidden"
            >
              {open ? <X className="size-[22px]" /> : <Menu className="size-[22px]" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            aria-label="Navigation mobile"
            className="border-pine/10 bg-cream flex flex-col gap-0.5 border-t px-[18px] pt-2.5 pb-5 min-[880px]:hidden"
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
