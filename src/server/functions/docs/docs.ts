/* eslint-disable import/no-anonymous-default-export */
import fs from "fs";
import { getLocale } from "next-intl/server";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { Locale } from "../../../../@types/i18n";

type Location = "projects" | "posts";
export type TMetadata = typeof METADATA_RESPONSE.metadata;

const DEFAULT_DATE = new Date("01.01.2100 12:00");
const BASE_PATH = path.join(process.cwd(), "src", "docs");

const METADATA_RESPONSE = {
  metadata: {
    slug: "",
    title: "",
    description: "",
    thumbnail_img: "",
    tags: [],
    publishedAt: DEFAULT_DATE,
  },
};

const createFileNameWithLocale = (slug: string, locale: Locale) => `${slug}.${locale}.mdx`;
const getPathToResources = (rootDirectory: Location, slug = "") => path.join(BASE_PATH, rootDirectory, slug);

async function getSlugsWithoutFiles(rootDirectory: Location) {
  "use server";

  const pathToRootDirectory = getPathToResources(rootDirectory),
    directories = fs.readdirSync(pathToRootDirectory),
    slugs = directories.map((slug) => ({ slug }));

  const slugsWithoutFiles = slugs.filter(({ slug }) => !slug.includes("."));
  return slugsWithoutFiles;
}

async function getSourcesSinceMdxFiles(rootDirectory: Location, slug: string, currentLocale: Locale) {
  "use server";

  const fileNameWithLocale = createFileNameWithLocale(slug, currentLocale),
    pathToDirectoryWithMdxFiles = getPathToResources(rootDirectory, slug),
    pathToSpecificFile = path.join(pathToDirectoryWithMdxFiles, fileNameWithLocale),
    specificFileWithLocale = fs.readFileSync(pathToSpecificFile, { encoding: "utf-8" });

  const source = await serialize(specificFileWithLocale, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
    },
  });

  return source;
}

async function getItemsWithPublishedDate(rootDirectory: Location) {
  "use server";

  const currentLocale = (await getLocale()) as Locale,
    slugsWithoutFiles = await getSlugsWithoutFiles(rootDirectory);

  const itemsWithMetadata = await Promise.all(
    slugsWithoutFiles.map(async ({ slug }) => {
      const { frontmatter } = await getSourcesSinceMdxFiles(rootDirectory, slug, currentLocale);
      const publishedAt = new Date(`${frontmatter.publishedAt}`) || METADATA_RESPONSE.metadata.publishedAt;

      const metadata = {
        ...METADATA_RESPONSE.metadata,
        ...frontmatter,

        publishedAt,
        isPublished: publishedAt < new Date(),
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

async function getItemsWithMetadata(rootDirectory: Location): Promise<TMetadata[]> {
  try {
    const itemsWithPublishedDate = await getItemsWithPublishedDate(rootDirectory);

    const dataWithMetadataFromMdxFiles = itemsWithPublishedDate.map(({ metadata }) => ({
      year: metadata.publishedAt.getFullYear(),
      ...metadata,
    }));

    return dataWithMetadataFromMdxFiles;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
}

export default {
  getSourcesSinceMdxFiles,
  getSlugsWithoutFiles,
  getItemsWithMetadata,
};
