import type { MetadataRoute } from "next";

import { locales } from "@/config/i18n";
import { docs } from "@/server/functions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await docs.getItemsWithMetadata("projects");

  return projects.map(({ slug, updatedAt: lastModified }) => ({
    url: `${process.env.SITE_URL}/portfolio/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified,
    alternates: {
      [locales[0]]: `${process.env.SITE_URL}/${locales[0]}/portfolio/${slug}`,
      [locales[1]]: `${process.env.SITE_URL}/${locales[1]}/portfolio/${slug}`,
    },
  }));
}
