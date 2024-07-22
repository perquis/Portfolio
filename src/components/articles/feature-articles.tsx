import { useTranslations } from "next-intl";

import { ArticlesList } from "@/components/articles/ui-articles-list";
import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Regular, Section } from "@/shared/ui";

// NOTE: Tutaj będą pojawiać się artykuły z bloga (generowane losowo).
export const Articles = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">Blog</Regular>
        <Link href="/portfolio" className="flex gap-2 text-sm font-medium">
          {t("HOME_BLOG_VIEW_ALL")} <icons.ArrowLineRight width={20} height={20} />
        </Link>
      </Section>

      <ArticlesList />
    </Section>
  );
};
