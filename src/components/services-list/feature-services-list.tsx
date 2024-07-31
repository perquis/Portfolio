import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { List } from "./ui-list";
import { useItems } from "./utils-use-items";

export const ServicesList = () => {
  const t = useTranslations();
  const items = useItems();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_SERVICES_TITLE")}</Regular>
      <Paragraph>{t("HOME_SERVICES_DESCRIPTION")}</Paragraph>

      <List items={items} />
    </Section>
  );
};
