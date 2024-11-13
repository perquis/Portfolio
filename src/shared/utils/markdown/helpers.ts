import fs from "fs";
import path from "path";

import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { BASE_PATH } from "@/shared/utils/markdown/settings";

export const createFileNameWithLocale = (slug: string, locale: Locale) => `${slug}.${locale}.mdx`;
export const getPathToResources = (rootDirectory: Location, slug = "") => path.join(BASE_PATH, rootDirectory, slug);

export async function getSlugsWithoutFiles(rootDirectory: Location) {
  "use server";

  const pathToRootDirectory = getPathToResources(rootDirectory),
    directories = fs.readdirSync(pathToRootDirectory),
    slugs = directories.map((slug) => ({ slug }));

  const slugsWithoutFiles = slugs.filter(({ slug }) => !slug.includes("."));
  return slugsWithoutFiles;
}
