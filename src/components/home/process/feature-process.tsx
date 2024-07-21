import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section, Workflows } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const Process = () => {
  const items = useItems();
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("home.process.title")}</Regular>
      <Paragraph>{t("home.process.description")}</Paragraph>
      <Workflows items={items} />
    </Section>
  );
};
