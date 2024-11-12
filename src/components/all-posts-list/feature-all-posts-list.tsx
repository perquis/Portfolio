import { useTranslations } from "next-intl";
import type { FC } from "react";

import { Regular, SearchBar, Section, Title } from "@/shared/ui";
import type { TMetadata } from "@/shared/utils/docs/types";

import { List } from "./ui-list";

export const AllPostsList: FC<Record<"items", TMetadata[]>> = ({ items }) => {
  const t = useTranslations();
  const fullYear = new Date().getFullYear();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Title level="h6">Blog</Title>
        <Regular className="text-base font-medium lg:text-lg xl:text-xl">
          {fullYear} - {t("BLOG_REGULAR_PRESENT")}
        </Regular>
      </Section>

      <SearchBar placeholder={t("BLOG_SEARCHBAR_PLACEHOLDER")} />

      <List items={items} />
    </Section>
  );
};
