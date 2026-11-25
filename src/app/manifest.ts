import type { MetadataRoute } from "next";
import { SITE_SEO } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_SEO.title,
    short_name: SITE_SEO.shortTitle,
    description: SITE_SEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111210",
    theme_color: "#111210",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
