import { useTranslations } from "next-intl";

import { TechnologiesList } from "@/components/home/skills/ui-technologies-list";
import { Paragraph, Regular, Section } from "@/shared/ui";

export const Skills = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("home.skills.title")}</Regular>
      <Paragraph>{t("home.skills.description")}</Paragraph>
      <TechnologiesList />
    </Section>
  );
};
