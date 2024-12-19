import { getLanguageNames } from "@/shared/utils/get-language-names";
import { expect, describe, it } from "@jest/globals";

describe("getLanguageNames", () => {
  it("should return language names", () => {
    const languageCodes = ["en", "ja", "zh"];
    const languageNames = getLanguageNames(languageCodes);

    expect(languageNames).toEqual([
      { code: "en", fullName: "English" },
      { code: "ja", fullName: "Japanese" },
      { code: "zh", fullName: "Chinese" },
    ]);
  });
});