import type { ComponentProps } from "react";

import { highlightCode } from "@/server/functions/code/highlights";
import type { Code, SegmentedControl } from "@/shared/ui";

import CodeWrapper from "./wrapper";

type ICode = ComponentProps<typeof Code>;
type ISegmentedControl = ComponentProps<typeof SegmentedControl>;

type ICodeBlock = {
  controls: ISegmentedControl["controls"];
  snippets: ICode[];
};

export default async function CodeBlock({ controls, snippets }: ICodeBlock) {
  const codes = await Promise.all(snippets.map(async ({ code }) => ({ code: await highlightCode(code) })));

  return <CodeWrapper controls={controls} snippets={codes} />;
}
