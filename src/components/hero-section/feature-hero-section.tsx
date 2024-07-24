import { useTranslations } from "next-intl";

import { AboutMe } from "@/components";
import { Button, Paragraph, Section, StatusDot } from "@/shared/ui";

import { SocialsList } from "./ui-socials-list";

export const HeroSection = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <AboutMe />
      <SocialsList />

      <Section className="!flex-row flex-wrap gap-5">
        <Button mode="simple" size="small" variants="black">
          {t("HOME_HERO_BUTTON_MEETING")}
        </Button>
        <Section className="!flex-row items-center gap-3">
          <StatusDot status="online" />
          <Paragraph className="!text-sm">{t("HOME_HERO_OPEN_TO_NEW_PROJECTS")}</Paragraph>
        </Section>
      </Section>
    </Section>
  );
};
