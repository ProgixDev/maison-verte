import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The brand call-to-action — a pill link with a trailing arrow and a lift on hover.
 * Variants own color/shadow; the call site owns margin/width (docs/conventions/styling.md).
 */
const ctaVariants = cva(
  // max-w-full + wrapping (not nowrap) so long labels shrink into the pill on
  // narrow screens instead of blowing out the page width on mobile.
  "group focus-visible:ring-forest focus-visible:ring-offset-cream inline-flex max-w-full items-center justify-center gap-2.5 rounded-full text-center leading-snug font-bold transition-[transform,box-shadow,background-color] duration-200 outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        lime: "bg-lime text-pine hover:bg-lime-hover shadow-[0_10px_26px_rgba(18,61,43,0.16)] hover:shadow-[0_16px_34px_rgba(18,61,43,0.24)]",
        dark: "bg-pine text-cream hover:bg-pine-deep shadow-[0_10px_24px_rgba(18,61,43,0.18)]",
        brick: "bg-brick text-white shadow-[0_10px_24px_rgba(190,58,43,0.22)] hover:brightness-95",
        outline: "border-pine/20 text-pine hover:bg-pine/[0.06] border-[1.5px] bg-transparent",
      },
      size: {
        sm: "px-5 py-3 text-[15px]",
        md: "px-7 py-3.5 text-base",
        lg: "px-8 py-4 text-[17px]",
      },
    },
    defaultVariants: { variant: "lime", size: "md" },
  },
);

type CtaLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof ctaVariants> & {
    /** Show the trailing arrow (default true). */
    arrow?: boolean;
  };

export function CtaLink({
  className,
  variant,
  size,
  arrow = true,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <Link className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
      {arrow ? (
        <ArrowRight className="size-[1.05em] transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export { ctaVariants };
