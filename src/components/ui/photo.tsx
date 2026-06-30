import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  /** Wrapper sizing/aspect (e.g. "aspect-[4/5]") + any margin/placement. */
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/** A photo framed in the brand treatment — rounded, hairline border, soft shadow. */
export function Photo({ src, alt, className, imgClassName, sizes, priority }: PhotoProps) {
  return (
    <div
      className={cn(
        "group border-pine/10 relative overflow-hidden rounded-[24px] border shadow-[0_20px_44px_rgba(18,61,43,0.12)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className={cn(
          "object-cover [filter:saturate(0.92)_contrast(1.04)_brightness(1.02)] transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          imgClassName,
        )}
        priority={priority}
      />
      {/* Unified cinematic grade: a soft pine vignette so every image reads as one set. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_52%,rgba(12,44,30,0.20))] mix-blend-multiply"
      />
    </div>
  );
}
