import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section, Workflows } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const WorkflowsList = () => {
  const items = useItems();
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_PROCESS_TITLE")}</Regular>
      <Paragraph>{t("HOME_PROCESS_DESCRIPTION")}</Paragraph>
      <Workflows items={items} />
    </Section>
  );
};
