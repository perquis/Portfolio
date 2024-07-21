import { useTranslations } from "next-intl";

import { SocialsList } from "@/components/home/hero/ui-socials-list";
import { placeholders } from "@/data";
import { Avatar, Button, Paragraph, Section, StatusDot, Title } from "@/shared/ui";

export const Hero = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Avatar src={placeholders.images} alt="Damian Werens" rounded="full" size="large" />
      <Section>
        <Title level="h6">Damian Werens</Title>
        <Paragraph className="!text-zinc-500">Full-Stack Developer & Digital Designer</Paragraph>
      </Section>
      <Paragraph>{t("HOME_META_DESCRIPTION")}</Paragraph>

      <SocialsList />

      <Section className="!flex-row gap-5 flex-wrap">
        <Button mode="simple" size="small" variants="black">
          {t("HOME_HERO_EMAIL_ME")}
        </Button>
        <Section className="!flex-row gap-3 items-center">
          <StatusDot status="online" />
          <Paragraph className="!text-sm">{t("HOME_HERO_OPEN_TO_NEW_PROJECTS")}</Paragraph>
        </Section>
      </Section>
    </Section>
  );
};
