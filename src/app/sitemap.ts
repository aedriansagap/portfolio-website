import type { MetadataRoute } from "next";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import { SITE_SEO, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const images = [
    `${SITE_URL}${SITE_SEO.ogImagePath}`,
    ...FEATURED_PROJECTS.map((project) => `${SITE_URL}${project.image}`),
  ];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
  ];
}
