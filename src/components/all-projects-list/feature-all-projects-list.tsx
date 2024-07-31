import { useTranslations } from "next-intl";
import type { FC } from "react";

import type { IDocsItem } from "@/server/functions/docs/docs";
import { Paragraph, Regular, Section, Title } from "@/shared/ui";

import { List } from "./ui-list";

export const AllProjectsList: FC<Record<"items", IDocsItem[]>> = ({ items }) => {
  const fullYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Title level="h6">Portfolio</Title>
        <Regular className="text-base font-medium lg:text-lg xl:text-xl">2020 - {fullYear}</Regular>
      </Section>

      <Paragraph>{t("HOME_HERO_FEATURED_PROJECTS")}</Paragraph>

      <List items={items} />
    </Section>
  );
};
