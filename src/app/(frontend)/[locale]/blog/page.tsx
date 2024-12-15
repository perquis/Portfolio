import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AllPostsList, HeroSection, JobsList, SocialLinksList } from "@/components";
import { getItemsWithMetadata } from "@/shared/packages";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("BLOG_META_TITLE"),
    description: t("BLOG_META_DESCRIPTION"),
  };
}

export default async function Blog({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const items = await getItemsWithMetadata("posts");

  return (
    <Layout>
      <HeroSection withoutCodeBlock />
      <AllPostsList items={items} />
      <JobsList />
      <SocialLinksList />
    </Layout>
  );
}
