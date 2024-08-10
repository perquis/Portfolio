"use client";

import clsx from "clsx";
import { type FC, useState } from "react";

import { useRouter } from "@/next/navigation";
import { Chip, Paragraph, Regular, Section, Title } from "@/shared/ui";

interface Chip {
  label: string;
  description: string;
}

interface IItem {
  title: string;
  chips: Chip[];
}

type TList = {
  items: IItem[];
};

export const List: FC<TList> = ({ items }) => {
  const [selected, setSelected] = useState<Chip>(items?.[0]?.chips?.[0]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const { push } = useRouter();

  return (
    <>
      {items.map(({ title, chips }, index) => (
        <Section key={index} className="gap-2">
          <Regular className="!text-zinc-950 dark:!text-white">{title}</Regular>
          <Section className="!flex-row flex-wrap gap-3">
            {chips.map(({ label, ...rest }, index) => (
              <Chip
                key={index}
                onClick={() => {
                  if (isMobile) push("#description");
                  setSelected({ label, ...rest });
                }}
                className={clsx(
                  selected.label === label &&
                    "!bg-indigo-50 !text-indigo-600 dark:!bg-indigo-950 dark:!text-indigo-400",
                )}
                disabled={selected.label === label}
              >
                {label}
              </Chip>
            ))}
          </Section>
        </Section>
      ))}

      <Section
        className="mt-5 gap-1 rounded-[20px] border border-zinc-200 bg-white p-1 shadow dark:border-zinc-800 dark:bg-zinc-950"
        id="description"
      >
        <Section className="gap-1 rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
          <Title level="b" className="text-sm">
            {selected.label}
          </Title>
          <Paragraph className="text-sm">{selected.description}</Paragraph>
        </Section>
      </Section>
    </>
  );
};
