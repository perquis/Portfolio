import { describe, expect, it } from "@jest/globals";
import fs from "fs";

import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { getSourcesSinceMdxFiles } from "@/shared/packages";

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

describe("markdown", () => {
  describe("getSourcesSinceMdxFiles", () => {
    it("should return the source and the updated time of the file", async () => {
      const rootDirectory: Location = "posts",
        slug = "slug",
        currentLocale: Locale = "pl";

      jest.spyOn(fs, "readFileSync").mockReturnValueOnce(JSON.stringify({ updatedAt: "2021-10-10T10:10:10.000Z" }));
      jest.spyOn(fs, "statSync").mockReturnValueOnce({ mtime: new Date("2021-10-10T10:10:10.000Z") } as any);

      const result = await getSourcesSinceMdxFiles(rootDirectory, slug, currentLocale);

      expect(result).toHaveProperty("updatedAt");
      expect(result).toBeInstanceOf(Object);
    });
  });
});
