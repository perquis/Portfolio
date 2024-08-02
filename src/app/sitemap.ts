import type { MetadataRoute } from "next";

import { locales } from "@/config/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: process.env.SITE_URL!,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        [locales[0]]: `${process.env.SITE_URL}/${locales[0]}`,
        [locales[1]]: `${process.env.SITE_URL}/${locales[1]}`,
      },
    },
    {
      url: `${process.env.SITE_URL}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        [locales[0]]: `${process.env.SITE_URL}/${locales[0]}/portfolio`,
        [locales[1]]: `${process.env.SITE_URL}/${locales[1]}/portfolio`,
      },
    },
    {
      url: `${process.env.SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        [locales[0]]: `${process.env.SITE_URL}/${locales[0]}/blog`,
        [locales[1]]: `${process.env.SITE_URL}/${locales[1]}/blog`,
      },
    },
    {
      url: `${process.env.SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        [locales[0]]: `${process.env.SITE_URL}/${locales[0]}/contact`,
        [locales[1]]: `${process.env.SITE_URL}/${locales[1]}/contact`,
      },
    },
  ];
}
