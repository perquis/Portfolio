"use client";

import { useTranslations } from "next-intl";

import { CardsList } from "@/components";
import { ArrowLink, Regular, Section } from "@/shared/ui";

export const FeaturedProjectsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">{t("HOME_PROJECTS_FEATURED_PROJECTS")}</Regular>
        <ArrowLink href="/portfolio">{t("HOME_PROJECTS_VIEW_ALL")}</ArrowLink>
      </Section>

      <CardsList />
    </Section>
  );
};
