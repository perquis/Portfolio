import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AllProjectsList, ContactForm, HeroSection, WorkflowsList } from "@/components";
import { getItemsWithMetadata } from "@/shared/packages";
import { Divider } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("PORTFOLIO_META_TITLE"),
    description: t("PORTFOLIO_META_DESCRIPTION"),
  };
}

export default async function Portfolio({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const items = await getItemsWithMetadata("projects");

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
