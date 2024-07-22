import { useTranslations } from "next-intl";

import { ServicesList } from "@/components/services/ui-services-list";
import { Paragraph, Regular, Section } from "@/shared/ui";

export const Services = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_SERVICES_TITLE")}</Regular>
      <Paragraph>{t("HOME_SERVICES_DESCRIPTION")}</Paragraph>

      <ServicesList />
    </Section>
  );
};
