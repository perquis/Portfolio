/* eslint-disable import/no-anonymous-default-export */
import fs from "fs";
import { getLocale } from "next-intl/server";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { Locale } from "../../../../@types/i18n";

// TODO: Cały ten plik jest do refaktoryzacji

const getPathname = (location: Location, slug = "") => path.join(process.cwd(), "src", "docs", location, slug);

type Location = "projects" | "posts";
async function getSlugs(location: Location) {
  "use server";

  const pathname = getPathname(location);
  const directories = fs.readdirSync(pathname);

  return directories.map((slug) => ({ slug })).filter(({ slug }) => slug !== ".gitkeep");
}

const createMdxFilenameFromSlug = (slug: string, locale: Locale) => `${slug}.${locale}.mdx`;

async function getSerializedSource(location: Location, slug: string, locale: Locale) {
  "use server";
  const filename = createMdxFilenameFromSlug(slug, locale),
    pathname = getPathname(location, slug),
    file = fs.readFileSync(path.join(pathname, filename), { encoding: "utf-8" });

  return await serialize(file, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
    },
  });
}

async function getItemsList(location: Location, locale: Locale) {
  "use server";

  const initialData = {
    metadata: {
      slug: "",
      title: "",
      description: "",
      thumbnail_img: "",
      tags: [],
      publishedAt: "01.01.2100 12:00",
    },
  };

  const slugs = await getSlugs(location);
  const data = await Promise.all(
    slugs.map(async ({ slug }) => {
      const { frontmatter: metadata } = await getSerializedSource(location, slug, locale);
      const publishedAt = (metadata.publishedAt as string) || initialData.metadata.publishedAt;

      return {
        metadata: {
          ...initialData.metadata,
          ...metadata,
          publishedAt: new Date(publishedAt),
          isPublished: new Date(publishedAt) < new Date(),
          slug,
        },
      };
    }),
  );

  return data.filter(({ metadata }) => metadata.isPublished);
}

export interface IDocsItem {
  slug: string;
  title: string;
  description: string;
  thumbnail_img: string;
  tags: string[];
  year: number;
  publishedAt: Date;
}

async function fetchItemsList(location: Location): Promise<IDocsItem[]> {
  try {
    const locale = (await getLocale()) as Locale;
    const data = await getItemsList(location, locale);

    return data.map(({ metadata }) => ({
      slug: metadata.slug,
      title: metadata.title,
      description: metadata.description,
      thumbnail_img: metadata.thumbnail_img,
      tags: metadata.tags,
      year: new Date(metadata.publishedAt).getFullYear(),
      publishedAt: new Date(metadata.publishedAt),
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
}

export default {
  getSerializedSource,
  getItemsList,
  getSlugs,
  fetchItemsList,
};
