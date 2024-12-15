import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm, FeaturedProjectsList, HeroSection, JobsList, ServicesList, WorkflowsList } from "@/components";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("HOME_META_TITLE"),
    description: t("HOME_META_DESCRIPTION"),
  };
}

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <Layout>
      <HeroSection />
      <FeaturedProjectsList />
      <ServicesList />
      <JobsList />
      <WorkflowsList />
      <ContactForm />
    </Layout>
  );
}
