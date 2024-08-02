import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AllProjectsList, ContactForm, HeroSection, WorkflowsList } from "@/components";
import { docs } from "@/server/functions";
import { Divider } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("PORTFOLIO_META_TITLE"),
    description: t("PORTFOLIO_META_DESCRIPTION"),
    openGraph: {
      title: t("PORTFOLIO_META_TITLE"),
      description: t("PORTFOLIO_META_DESCRIPTION"),
      type: "website",
      siteName: t("PORTFOLIO_META_TITLE"),
      url: process.env.SITE_URL,
      locale,
      images: [
        {
          url: `${process.env.SITE_URL}/static/pages/og/portfolio.png`,
          width: 1200,
          height: 630,
          alt: t("PORTFOLIO_META_TITLE"),
        },
      ],
    },
  };
}

export default async function Portfolio({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const items = await docs.getItemsWithMetadata("projects");

  return (
    <>
      <HeroSection withoutCodeBlock />
      <Divider />
      <AllProjectsList items={items} />
      <Divider />
      <WorkflowsList />
      <Divider />
      <ContactForm />
    </>
  );
}
