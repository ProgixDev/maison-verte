import type { MetadataRoute } from "next";
import { site } from "@/core/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f7e7",
    theme_color: "#123d2b",
    // TODO(app): add real maskable PWA icons (192/512 PNG) to /public.
    icons: [{ src: "/logo-mark.png", sizes: "417x520", type: "image/png" }],
  };
}
