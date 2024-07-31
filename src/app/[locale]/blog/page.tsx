import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AllPostsList, HeroSection, SocialLinksList } from "@/components";
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

export default async function Blog() {
  const items = await docs.fetchItemsList("posts");

  return (
    <>
      <HeroSection />
      <Divider />
      <AllPostsList items={items} />
      <Divider />
      <SocialLinksList />
    </>
  );
}
