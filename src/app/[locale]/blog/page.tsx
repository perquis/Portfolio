import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AboutMe, SocialLinksList } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("BLOG_META_TITLE"),
    description: t("BLOG_META_DESCRIPTION"),
  };
}

const components = [AboutMe, Divider, SocialLinksList];

export default function Blog() {
  return <Layout components={components} />;
}
