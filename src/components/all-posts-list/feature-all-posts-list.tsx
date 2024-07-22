import { useTranslations } from "next-intl";

import { CardsList } from "@/components/cards-list/feature-cards-list";
import { Regular, SearchBar, Section, Title } from "@/shared/ui";

export const AllPostsList = () => {
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

      <CardsList />
    </Section>
  );
};
