"use client";

import { type ComponentProps } from "react";

import type { Code } from "@/shared/ui";
import { Section, SegmentedControl } from "@/shared/ui";
import { useCode } from "@/shared/ui/code-block/code.provider";

type TCode = ComponentProps<typeof Code>;
type TSegmentedControl = ComponentProps<typeof SegmentedControl>;

type TCodeBlock = {
  controls: TSegmentedControl["controls"];
  snippets: TCode[];
};

export default function CodeWrapper({ controls, snippets }: TCodeBlock) {
  const { selected } = useCode()!;

  if (!controls || !snippets) {
    throw new Error("Controls and snippets must be provided");
  }

  if (controls.length !== snippets.length) {
    throw new Error("Controls and snippets length must be equal");
  }

  return (
    <Section className="w-full gap-2">
      <SegmentedControl controls={controls} />
      {snippets.map(
        ({ code }, index) =>
          selected === controls[index].name && <Section key={index} dangerouslySetInnerHTML={{ __html: code }} />,
      )}
    </Section>
  );
}
