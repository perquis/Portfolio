import { useTranslations } from "next-intl";

import { slides } from "@/data";
import { Header, Section, Slider } from "@/shared/ui";

export const FeaturedProjectsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Header
        heading="HOME_PROJECTS_FEATURED_PROJECTS"
        description="HOME_HERO_FEATURED_PROJECTS"
        link={{ name: t("HOME_PROJECTS_VIEW_ALL"), url: "/portfolio" }}
      />

      <Slider slides={slides} />
    </Section>
  );
};
