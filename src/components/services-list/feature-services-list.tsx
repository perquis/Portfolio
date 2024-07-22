import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { List } from "./ui-list";

export const ServicesList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_SERVICES_TITLE")}</Regular>
      <Paragraph>{t("HOME_SERVICES_DESCRIPTION")}</Paragraph>

      <List />
    </Section>
  );
};
