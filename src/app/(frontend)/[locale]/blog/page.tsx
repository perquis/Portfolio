import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AllPostsList, HeroSection, JobsList, SocialLinksList } from "@/components";
import { Divider } from "@/shared/ui";
import { getItemsWithMetadata } from "@/shared/utils";

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
    <>
      <HeroSection withoutCodeBlock />
      <Divider />
      <AllPostsList items={items} />
      <Divider />
      <JobsList />
      <Divider />
      <SocialLinksList />
    </>
  );
}
