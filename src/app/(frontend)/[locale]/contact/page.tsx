import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm, FAQSection, ServicesList, SocialLinksList } from "@/components";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
  };
}

export default async function Contact({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <Layout>
      <FAQSection />
      <ServicesList />
      <ContactForm />
      <SocialLinksList />
    </Layout>
  );
}
