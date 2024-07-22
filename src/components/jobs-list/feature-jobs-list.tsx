import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { items } from "./data-items";
import { List } from "./ui-list";

export const JobsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_EXPERIENCES_TITLE")}</Regular>
      <Paragraph>{t("HOME_EXPERIENCES_DESCRIPTION")}</Paragraph>

      <List items={items} />
    </Section>
  );
};
