import type { MetadataRoute } from "next";

import { locales } from "@/config/i18n";
import { docs } from "@/server/functions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await docs.getItemsWithMetadata("posts");

  return posts.map(({ slug, updatedAt: lastModified }) => ({
    url: `${process.env.SITE_URL}/posts/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified,
    alternates: {
      [locales[0]]: `${process.env.SITE_URL}/${locales[0]}/posts/${slug}`,
      [locales[1]]: `${process.env.SITE_URL}/${locales[1]}/posts/${slug}`,
    },
  }));
}
