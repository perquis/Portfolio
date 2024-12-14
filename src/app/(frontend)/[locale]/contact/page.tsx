import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm, FAQSection, ServicesList, SocialLinksList } from "@/components";
import { Layout } from "@/shared/ui";
import { withDividers } from "@/shared/utils";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
  };
}

const components = [FAQSection, ServicesList, ContactForm, SocialLinksList];

export default async function Contact({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return <Layout components={withDividers(components)} />;
}
