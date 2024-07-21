import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { items } from "./data-items";
import { ExperiencesList } from "./ui-experiences-list";

export const Experiences = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("home.experiences.title")}</Regular>
      <Paragraph>{t("home.experiences.description")}</Paragraph>
      <ExperiencesList items={items} />
    </Section>
  );
};
