"use client";

import {
  type CodeComparisonContext,
  CodeComparisonProvider,
} from "./provider-code-comparison";
import { BeforeAndAfterSnippets } from "./ui-before-and-after-snippets";
import { VS } from "./ui-vs";

export default function CodeComparison(props: CodeComparisonContext) {
  return (
    <CodeComparisonProvider {...props}>
      <div className="mx-auto w-full">
        <div className="relative w-full overflow-hidden rounded-lg border border-border shadow">
          <BeforeAndAfterSnippets />
          <VS />
        </div>
      </div>
    </CodeComparisonProvider>
  );
}
