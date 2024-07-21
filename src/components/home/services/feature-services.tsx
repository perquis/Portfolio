import { useTranslations } from "next-intl";

import { ServicesList } from "@/components/home/services/ui-services-list";
import { Paragraph, Regular, Section } from "@/shared/ui";

export const Services = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("home.services.title")}</Regular>
      <Paragraph>{t("home.services.description")}</Paragraph>

      <ServicesList />
    </Section>
  );
};
