import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "@/components/layout/logo-mark";
import { SiteFooter } from "@/components/layout/site-footer";

/** Focused shell for the eligibility quiz: minimal header (just "back to site") + footer. */
export default function AdmissibiliteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/admissibilite" className="bg-brick block text-white">
        <div className="mx-auto flex max-w-[760px] items-center justify-center gap-2.5 px-[22px] py-[9px] text-center">
          <span aria-hidden className="size-2 shrink-0 rounded-full bg-[#ffd2cb]" />
          <span className="text-[13px] font-semibold">
            CAMT — jusqu’à 10 000 $ — fin des inscriptions le 31 juillet 2026
          </span>
        </div>
      </Link>

      <header className="border-pine/[0.07] bg-cream/[0.88] sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-3 px-[22px] py-3">
          <Link
            href="/"
            aria-label="Maison Verte Québec — Accueil"
            className="flex items-center gap-2.5"
          >
            <LogoMark width={38} />
            <span className="flex flex-col leading-none">
              <span className="text-pine text-[13px] font-extrabold tracking-[0.1em]">
                MAISON VERTE
              </span>
              <span className="text-forest mt-[3px] text-[10px] font-semibold tracking-[0.26em]">
                QUÉBEC
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-fern hover:text-pine inline-flex items-center gap-1.5 text-[14.5px] font-medium transition-colors"
          >
            <ArrowLeft className="size-4" />
            Retour au site
          </Link>
        </div>
      </header>

      {children}

      <SiteFooter />
    </>
  );
}
