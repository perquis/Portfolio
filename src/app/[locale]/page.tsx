import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ContactForm } from "@/components/contact";
import { Articles, Experiences, Hero, Process, Projects, Services, Skills } from "@/components/home";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("HOME_META_TITLE"),
    description: t("HOME_META_DESCRIPTION"),
  };
}

const components = [
  Hero,
  Divider,
  Projects,
  Divider,
  Services,
  Divider,
  Process,
  Divider,
  Experiences,
  Divider,
  Skills,
  Divider,
  Articles,
  Divider,
  ContactForm,
];

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return <Layout components={components} />;
}
