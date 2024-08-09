import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AllPostsList, GithubActivity, HeroSection, JobsList, SocialLinksList } from "@/components";
import { docs } from "@/server/functions";
import { Divider } from "@/shared/ui";

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

  const items = await docs.getItemsWithMetadata("posts");

  return (
    <>
      <HeroSection withoutCodeBlock />
      <Divider />
      <AllPostsList items={items} />
      <Divider />
      <JobsList />
      <Divider />
      <GithubActivity />
      <Divider />
      <SocialLinksList />
    </>
  );
}
