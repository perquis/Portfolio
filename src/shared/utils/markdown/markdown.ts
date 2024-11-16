"use server";

import fs from "fs";
import { getLocale } from "next-intl/server";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { Locale } from "@/interfaces/i18n";
import type { Location, TMetadata } from "@/interfaces/markdown";
import { createFileNameWithLocale, getPathToResources, getSlugsWithoutFiles } from "@/shared/utils/markdown/helpers";
import { METADATA_RESPONSE } from "@/shared/utils/markdown/settings";

export async function getSourcesSinceMdxFiles(rootDirectory: Location, slug: string, currentLocale: Locale) {
  const fileNameWithLocale = createFileNameWithLocale(slug, currentLocale),
    pathToDirectoryWithMdxFiles = getPathToResources(rootDirectory, slug),
    pathToSpecificFile = path.join(pathToDirectoryWithMdxFiles, fileNameWithLocale),
    specificFileWithLocale = fs.readFileSync(pathToSpecificFile, { encoding: "utf-8" });
  const { mtime } = fs.statSync(pathToSpecificFile);

  const source = await serialize(specificFileWithLocale, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
    },
  });

  return { ...source, updatedAt: mtime };
}

export async function getItemsWithPublishedDate(rootDirectory: Location) {
  const currentLocale = (await getLocale()) as Locale,
    slugsWithoutFiles = await getSlugsWithoutFiles(rootDirectory);

  const itemsWithMetadata = await Promise.all(
    slugsWithoutFiles.map(async ({ slug }) => {
      const { frontmatter, updatedAt } = await getSourcesSinceMdxFiles(rootDirectory, slug, currentLocale);
      const publishedAt = new Date(`${frontmatter.publishedAt}`) || METADATA_RESPONSE.metadata.publishedAt;

      const metadata = {
        ...METADATA_RESPONSE.metadata,
        ...frontmatter,

        updatedAt,
        publishedAt,
        isPublished: publishedAt.getTime() < new Date().getTime(),
        slug,
      };

      return {
        metadata,
      };
    }),
  );

  const sortedItemsByPublishedDate = itemsWithMetadata.sort(
    (a, b) => b.metadata.publishedAt.getTime() - a.metadata.publishedAt.getTime(),
  );
  const itemsWithPublishedDate = sortedItemsByPublishedDate.filter(({ metadata }) => metadata.isPublished);

  return itemsWithPublishedDate;
}

export async function getItemsWithMetadata(rootDirectory: Location): Promise<TMetadata[]> {
  try {
    const itemsWithPublishedDate = await getItemsWithPublishedDate(rootDirectory);

    const dataWithMetadataFromMdxFiles = itemsWithPublishedDate.map(({ metadata }) => ({
      ...metadata,
      year: metadata.publishedAt.getFullYear(),
    }));

    return dataWithMetadataFromMdxFiles;
  } catch (error) {
    console.error(error);
    return [];
  }
}