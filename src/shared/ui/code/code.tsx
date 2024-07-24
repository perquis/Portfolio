import { transformerNotationDiff } from "@shikijs/transformers";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import expoDark from "./expo-dark.json";
import expoLight from "./expo-light.json";

/**
 * You can visit examples here https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/rsc/page.tsx.
 */
export default async function Code({ code }: { code: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

const parseToTheme = (theme: unknown) => JSON.parse(JSON.stringify(theme));

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
      transformers: [transformerNotationDiff()],
      theme: {
        light: parseToTheme(expoLight),
        dark: parseToTheme(expoDark),
      },
      keepBackground: true,
      tokensMap: {
        fn: "entity.name.function",
      },
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
