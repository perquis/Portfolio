import { useTranslations } from "next-intl";

import { ProjectsList } from "@/components/home/projects/ui-projects-list";
import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Regular, Section } from "@/shared/ui";

export const Projects = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">{t("HOME_PROJECTS_FEATURED_PROJECTS")}</Regular>
        <Link href="/portfolio" className="flex gap-2 text-sm font-medium">
          {t("HOME_PROJECTS_VIEW_ALL")} <icons.ArrowLineRight width={20} height={20} />
        </Link>
      </Section>

      <ProjectsList />
    </Section>
  );
};
