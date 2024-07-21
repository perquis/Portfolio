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
        <Regular className="font-semibold">{t("home.projects.featured_projects")}</Regular>
        <Link href="/portfolio" className="text-sm font-medium flex gap-2">
          {t("home.projects.view_all")} <icons.ArrowLineRight width={20} height={20} />
        </Link>
      </Section>

      <ProjectsList />
    </Section>
  );
};
