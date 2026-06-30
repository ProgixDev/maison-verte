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
        "border-pine/10 relative overflow-hidden rounded-[24px] border shadow-[0_20px_44px_rgba(18,61,43,0.12)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className={cn("object-cover", imgClassName)}
        priority={priority}
      />
    </div>
  );
}
