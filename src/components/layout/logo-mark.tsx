import Image from "next/image";

const RATIO = 520 / 417; // intrinsic logo-mark.png aspect

/** The Maison Verte Québec leaf mark. Pass the rendered width; height follows the ratio. */
export function LogoMark({ width = 42, className }: { width?: number; className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={width}
      height={Math.round(width * RATIO)}
      className={className}
      priority
    />
  );
}
