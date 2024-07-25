"use client";

import { useTranslations } from "next-intl";

import { slides } from "@/data";
import { ArrowLink, Paragraph, Regular, Section, Slider } from "@/shared/ui";

export const FeaturedProjectsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">{t("HOME_PROJECTS_FEATURED_PROJECTS")}</Regular>
        <ArrowLink href="/portfolio">{t("HOME_PROJECTS_VIEW_ALL")}</ArrowLink>
      </Section>

      <Paragraph>{t("HOME_HERO_FEATURED_PROJECTS")}</Paragraph>

      <Slider slides={slides} />
    </Section>
  );
};
