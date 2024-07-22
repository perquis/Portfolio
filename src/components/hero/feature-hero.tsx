import { useTranslations } from "next-intl";

import { SocialsList } from "@/components/hero/ui-socials-list";
import { Owner } from "@/components/owner/feature-owner";
import { Button, Paragraph, Section, StatusDot } from "@/shared/ui";

export const Hero = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Owner />
      <SocialsList />

      <Section className="!flex-row flex-wrap gap-5">
        <Button mode="simple" size="small" variants="black">
          {t("HOME_HERO_EMAIL_ME")}
        </Button>
        <Section className="!flex-row items-center gap-3">
          <StatusDot status="online" />
          <Paragraph className="!text-sm">{t("HOME_HERO_OPEN_TO_NEW_PROJECTS")}</Paragraph>
        </Section>
      </Section>
    </Section>
  );
};
