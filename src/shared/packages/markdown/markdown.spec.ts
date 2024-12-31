import { describe, expect, it } from "@jest/globals";
import fs from "fs";

import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { getItemsWithMetadata, getItemsWithPublishedDate, getSourcesSinceMdxFiles } from "@/shared/packages";
import { METADATA_RESPONSE } from "@/shared/packages/markdown/settings";

// next dependencies
jest.mock("next-mdx-remote/serialize", () => ({ renderToString: jest.fn() }));

// color themes
jest.mock("shiki", () => null);
jest.mock("rehype-pretty-code", () => null);
jest.mock("rehype-stringify", () => null);
jest.mock("rehype-autolink-headings", () => null);
jest.mock("remark-parse", () => null);
jest.mock("remark-rehype", () => null);

// unified
jest.mock("unified", () => ({
  __esModule: true,
  unified: jest.fn(() => ({
    use: jest.fn().mockReturnThis(),
    process: jest.fn().mockResolvedValue({ contents: "<highlighted-code>" }),
  })),
}));

jest.mock("next-mdx-remote/serialize", () => ({ __esModule: true, serialize: jest.fn() }));

jest.mock("next/headers", () => ({
  cookies: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue({ value: "pl" }),
  })),
}));

jest.mock("./helpers", () => ({
  __esModule: true,
  createFileNameWithLocale: jest.fn().mockReturnValue("slug.pl.mdx"),
  getPathToResources: jest.fn().mockReturnValue("posts"),
  getSlugsWithoutFiles: jest.fn().mockResolvedValue([{ slug: "slug" }]),
}));

jest.mock("fs");

describe("markdown", () => {
  it("getSourcesSinceMdxFiles", async () => {
    const rootDirectory: Location = "posts",
      slug = "slug",
      currentLocale: Locale = "pl";

    jest.spyOn(fs, "readFileSync").mockReturnValueOnce(JSON.stringify({ updatedAt: "2021-10-10T10:10:10.000Z" }));
    jest.spyOn(fs, "statSync").mockReturnValueOnce({ mtime: new Date("2021-10-10T10:10:10.000Z") } as any);

    const result = await getSourcesSinceMdxFiles(rootDirectory, slug, currentLocale);

    expect(result).toHaveProperty("updatedAt");
    expect(result).toBeInstanceOf(Object);
  });

  describe("getItemsWithPublishedDate", () => {
    jest.mock("./markdown", () => ({
      __esModule: true,
      getSourcesSinceMdxFiles: jest.fn().mockReturnValue({
        updatedAt: new Date(),
        frontmatter: {
          ...METADATA_RESPONSE.metadata,
          publishedAt: new Date("2021-10-10T10:10:10.000Z"),
        },
      }),
      getItemsWithPublishedDate: jest.fn(),
    }));

    it("should return items that they weren't published", async () => {
      jest.spyOn(fs, "statSync").mockReturnValueOnce({ mtime: new Date("2021-10-10T10:10:10.000Z") } as any);
      const result = await getItemsWithPublishedDate("posts");

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });

  describe("getItemsWithMetadata", () => {
    jest.mock("./markdown", () => ({
      __esModule: true,
      getSourcesSinceMdxFiles: jest.fn().mockReturnValue({
        updatedAt: new Date(),
        frontmatter: {
          ...METADATA_RESPONSE.metadata,
          publishedAt: new Date("2021-10-10T10:10:10.000Z"),
        },
      }),
      getItemsWithPublishedDate: jest.fn().mockReturnValue([]),
    }));

    it("should return items with metadata", async () => {
      jest.spyOn(fs, "statSync").mockReturnValueOnce({ mtime: new Date("2021-10-10T10:10:10.000Z") } as any);
      const result = await getItemsWithMetadata("posts");

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it("should throw an error", async () => {
      jest.spyOn(fs, "statSync").mockImplementation(() => {
        throw new Error("error");
      });

      await expect(getItemsWithMetadata("posts")).rejects.toThrow(Error);
    });
  });
});
