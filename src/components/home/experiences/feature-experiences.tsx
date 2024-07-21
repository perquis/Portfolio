import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { items } from "./data-items";
import { ExperiencesList } from "./ui-experiences-list";

export const Experiences = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_EXPERIENCES_TITLE")}</Regular>
      <Paragraph>{t("HOME_EXPERIENCES_DESCRIPTION")}</Paragraph>
      <ExperiencesList items={items} />
    </Section>
  );
};
