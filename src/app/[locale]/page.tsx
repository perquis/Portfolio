import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm, FeaturedProjectsList, HeroSection, JobsList, ServicesList, WorkflowsList } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("HOME_META_TITLE"),
    description: t("HOME_META_DESCRIPTION"),
    openGraph: {
      title: t("HOME_META_TITLE"),
      description: t("HOME_META_DESCRIPTION"),
      type: "website",
      siteName: t("HOME_META_TITLE"),
      url: process.env.SITE_URL,
      locale,
      images: [
        {
          url: `${process.env.SITE_URL}/static/pages/og/home.png`,
          width: 1200,
          height: 630,
          alt: t("HOME_META_TITLE"),
        },
      ],
    },
  };
}

const components = [
  HeroSection,
  Divider,
  FeaturedProjectsList,
  Divider,
  ServicesList,
  Divider,
  JobsList,
  Divider,
  WorkflowsList,
  Divider,
  ContactForm,
];

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return <Layout components={components} />;
}
