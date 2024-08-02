import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm, FAQSection, ServicesList, SocialLinksList } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
    openGraph: {
      title: t("CONTACT_META_TITLE"),
      description: t("CONTACT_META_DESCRIPTION"),
      type: "website",
      siteName: t("CONTACT_META_TITLE"),
      url: process.env.SITE_URL,
      locale,
      images: [
        {
          url: `${process.env.SITE_URL}/static/pages/og/contact.png`,
          width: 1200,
          height: 630,
          alt: t("CONTACT_META_TITLE"),
        },
      ],
    },
  };
}

const components = [FAQSection, Divider, ServicesList, Divider, ContactForm, Divider, SocialLinksList];

export default async function Contact({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return <Layout components={components} />;
}
