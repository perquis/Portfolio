import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { List } from "./ui-list";

export const TechnologiesList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_SKILLS_TITLE")}</Regular>
      <Paragraph>{t("HOME_SKILLS_DESCRIPTION")}</Paragraph>

      <List />
    </Section>
  );
};
