import type { ComponentProps } from "react";

import { highlightCode } from "@/shared/packages";
import type { Code, SegmentedControl } from "@/shared/ui";

import CodeProvider from "./code.provider";
import CodeWrapper from "./wrapper";

type TCode = ComponentProps<typeof Code>;
type TSegmentedControl = ComponentProps<typeof SegmentedControl>;

type TCodeBlock = {
  controls: TSegmentedControl["controls"];
  snippets: TCode[];
};

export default async function CodeBlock({ controls, snippets }: TCodeBlock) {
  const processedCodeSnippets = await Promise.all(snippets.map(async ({ code }) => await highlightCode(code)));

  return (
    <CodeProvider name={controls[0].name}>
      <CodeWrapper controls={controls} snippets={processedCodeSnippets} />
    </CodeProvider>
  );
}
