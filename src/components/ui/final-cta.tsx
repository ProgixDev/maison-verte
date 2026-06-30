import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** The recurring closing CTA — a dark rounded panel with a single lime action. */
export function FinalCta({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/admissibilite",
  note,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel: string;
  ctaHref?: string;
  note?: React.ReactNode;
}) {
  return (
    <section className="px-[22px] pb-[clamp(64px,9vw,100px)]">
      <Reveal className="bg-pine-deeper relative mx-auto max-w-[1100px] overflow-hidden rounded-[32px] px-[clamp(26px,5vw,72px)] py-[clamp(44px,7vw,80px)] text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[120px] -right-20 size-[380px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.2),transparent_66%)]"
        />
        <div className="relative">
          <h2 className="text-card m-0 font-serif text-[clamp(28px,4.4vw,48px)] leading-[1.1] tracking-[-0.012em]">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-on-pine-soft mx-auto mt-4 mb-[30px] max-w-[52ch] text-[clamp(16px,1.6vw,18px)]">
              {subtitle}
            </p>
          ) : null}
          <CtaLink
            href={ctaHref}
            size="lg"
            className={cn(
              "shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.4)]",
              !subtitle && "mt-7",
            )}
          >
            {ctaLabel}
          </CtaLink>
          {note ? <p className="text-pine-mute mt-5 text-[13.5px]">{note}</p> : null}
        </div>
      </Reveal>
    </section>
  );
}
