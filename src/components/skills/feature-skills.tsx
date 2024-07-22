import { useTranslations } from "next-intl";

import { TechnologiesList } from "@/components/skills/ui-technologies-list";
import { Paragraph, Regular, Section } from "@/shared/ui";

export const Skills = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_SKILLS_TITLE")}</Regular>
      <Paragraph>{t("HOME_SKILLS_DESCRIPTION")}</Paragraph>

      <TechnologiesList />
    </Section>
  );
};
