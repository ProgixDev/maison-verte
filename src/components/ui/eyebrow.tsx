import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/** The small uppercase pill that labels each section ("Le problème", "Témoignages"…). */
const eyebrowVariants = cva(
  "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase",
  {
    variants: {
      variant: {
        green: "bg-forest/10 text-forest",
        brick: "bg-brick/10 text-brick",
        leaf: "bg-leaf text-forest",
        onDark: "text-cream-soft bg-white/[0.08]",
      },
    },
    defaultVariants: { variant: "green" },
  },
);

type EyebrowProps = React.ComponentProps<"span"> &
  VariantProps<typeof eyebrowVariants> & {
    icon?: React.ReactNode;
  };

export function Eyebrow({ className, variant, icon, children, ...props }: EyebrowProps) {
  return (
    <span className={cn(eyebrowVariants({ variant }), className)} {...props}>
      {icon}
      {children}
    </span>
  );
}
