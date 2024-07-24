import { useTranslations } from "next-intl";

import { ArrowLink, Regular, Section } from "@/shared/ui";

import { List } from "./ui-list";

// NOTE: Tutaj będą pojawiać się artykuły z bloga (generowane losowo).
export const PostsList = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">Blog</Regular>
        <ArrowLink href="/blog">{t("HOME_BLOG_VIEW_ALL")}</ArrowLink>
      </Section>

      <List />
    </Section>
  );
};
