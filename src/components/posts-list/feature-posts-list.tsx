import { useTranslations } from "next-intl";

import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Regular, Section } from "@/shared/ui";

import { List } from "./ui-list";

// NOTE: Tutaj będą pojawiać się artykuły z bloga (generowane losowo).
export const PostsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">Blog</Regular>
        <Link href="/portfolio" className="flex gap-2 text-sm font-medium">
          {t("HOME_BLOG_VIEW_ALL")} <icons.ArrowLineRight width={20} height={20} />
        </Link>
      </Section>

      <List />
    </Section>
  );
};
