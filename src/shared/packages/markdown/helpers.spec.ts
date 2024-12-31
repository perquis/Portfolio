import { describe, expect, it } from "@jest/globals";
import fs, { Dirent } from "fs";
import path from "path";

import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import {
  type SortedByDateTimeParameter,
  createFileNameWithLocale,
  getPathToResources,
  getSlugsWithoutFiles,
  sortedByDateTime,
} from "@/shared/packages/markdown/helpers";
import { BASE_PATH } from "@/shared/packages/markdown/settings";

describe("packages/markdown/helpers", () => {
  it("sortedByDateTime", () => {
    const a = { metadata: { publishedAt: new Date("2021-10-10T10:10:10.000Z") } } as SortedByDateTimeParameter,
      b = { metadata: { publishedAt: new Date("2024-10-10T10:10:10.000Z") } } as SortedByDateTimeParameter;

    const result = sortedByDateTime(a, b);

    expect(result).toBeGreaterThan(0);
  });

  it("should return filename based on slug and locale parameters", async () => {
    const slug = "slug";
    const locale: Locale = "en";
    const expected = "slug.en.mdx";

    const result = createFileNameWithLocale(slug, locale);

    expect(result).toEqual(expected);
  });

  it("should return path to resources based on rootDirectory and slug parameters", async () => {
    const rootDirectory: Location = "projects";
    const slug = "slug";
    const expected = path.join(BASE_PATH, `${rootDirectory}/slug`);

    const result = getPathToResources(rootDirectory, slug);

    expect(result).toEqual(expected);
  });

  it("should return slugs array without files", async () => {
    const rootDirectory: Location = "projects";
    const expected = [{ slug: "slug" }];

    jest.spyOn(fs, "readdirSync").mockReturnValue(["slug" as unknown as Dirent]);

    const result = await getSlugsWithoutFiles(rootDirectory);

    expect(result).toEqual(expected);
  });
});
