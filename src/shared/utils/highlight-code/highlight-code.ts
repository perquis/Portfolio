import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { Theme } from "@/interfaces/theme";

import expoDark from "./expo-dark.json";
import expoLight from "./expo-light.json";

const parseToTheme = (theme: unknown) => JSON.parse(JSON.stringify(theme));

export interface IHighlightedCode {
  __html: string;
  theme: Theme;
}

export async function highlightCode(code: string) {
  const codeSnippetArray: Theme[] = ["light", "dark"];

  const highlightedCodeOutput = await Promise.all(
    codeSnippetArray.map(async (theme) => ({
      __html: (
        await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
            theme: theme === "light" ? parseToTheme(expoLight) : parseToTheme(expoDark),
            keepBackground: true,
            tokensMap: {
              fn: "entity.name.function",
            },
          })
          .use(rehypeStringify)
          .process(code)
      ).toString(),
      theme,
    })),
  );

  return highlightedCodeOutput;
}
