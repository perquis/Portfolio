import fs from "fs";
import path from "path";

import { BASE_PATH } from "@/server/functions/docs/constants";

import type { Locale } from "../../../../@types/i18n";
import type { Location } from "./types";

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
