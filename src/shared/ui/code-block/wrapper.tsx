"use client";

import { type ComponentProps } from "react";

import type { Code } from "@/shared/ui";
import { Section, SegmentedControl } from "@/shared/ui";
import { useCode } from "@/shared/ui/code-block/code.provider";

type ICode = ComponentProps<typeof Code>;
type ISegmentedControl = ComponentProps<typeof SegmentedControl>;

type ICodeBlock = {
  controls: ISegmentedControl["controls"];
  snippets: ICode[];
};

export default function CodeWrapper({ controls, snippets }: ICodeBlock) {
  const { selected } = useCode()!;

  if (!controls || !snippets) {
    throw new Error("Controls and snippets must be provided");
  }

  if (controls.length !== snippets.length) {
    throw new Error("Controls and snippets length must be equal");
  }

  return (
    <Section className="gap-2">
      <SegmentedControl controls={controls} />
      {snippets.map(
        ({ code }, index) =>
          selected === controls[index].name && <Section key={index} dangerouslySetInnerHTML={{ __html: code }} />,
      )}
    </Section>
  );
}
