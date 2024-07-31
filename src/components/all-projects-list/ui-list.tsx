"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { type Dispatch, type FC, type SetStateAction, useState } from "react";

import { ArrowLeft } from "@/shared/icons/design";
import { ArrowLink, Paragraph, Ratio, Regular, Section, Title, Transition } from "@/shared/ui";

interface IItem {
  name: string;
  year: number;
  image: string;
  tags: string[];
  description: string;
}

export const List: FC<{ items: IItem[] }> = ({ items }) => {
  const [selected, setSelected] = useState(items[0]?.name);

  return (
    <Section>
      {items.map((item, index) => (
        <Item key={index} {...item} selected={selected} setSelected={setSelected} />
      ))}
    </Section>
  );
};

const Item: FC<IItem & { selected: string; setSelected: Dispatch<SetStateAction<string>> }> = ({
  name,
  year,
  image,
  tags,
  description,
  selected,
  setSelected,
}) => {
  const t = useTranslations();
  const onClick = () => setSelected(name);
  const isActive = name === selected;

  return (
    <Section className={clsx(isActive && "pb-5", "gap-5 border-b border-zinc-200/50 dark:border-zinc-800/50")}>
      <button className="flex justify-between rounded-lg py-2.5 text-sm" onClick={onClick} disabled={isActive}>
        <Title level="b">{name}</Title>

        <Section className="relative !flex-row items-center text-zinc-800 dark:text-zinc-200">
          <Regular className="mr-8 !text-base">{year}</Regular>
          <Transition className="absolute right-0" animate={isActive ? { rotate: -90 } : { rotate: 0 }}>
            <ArrowLeft width={24} height={24} />
          </Transition>
        </Section>
      </button>

      <Transition
        animate={isActive ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx("overflow-hidden", isActive ? "h-auto" : "h-0")}
      >
        <Section className="gap-5">
          <Ratio
            src={image}
            alt={name}
            className="overflow-hidden rounded-lg border dark:border-zinc-800/50"
            resolution="16:9"
          />
          <Section className="!flex-row gap-5">
            <Regular className="w-full">{tags.join(", ")}</Regular>
            <Section className="w-full gap-10">
              <Paragraph className="!text-sm">{description}</Paragraph>
              <ArrowLink href="/portfolio">{t("DETAILS")}</ArrowLink>
            </Section>
          </Section>
        </Section>
      </Transition>
    </Section>
  );
};
