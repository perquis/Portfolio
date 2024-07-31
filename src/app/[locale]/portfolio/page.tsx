import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AllProjectsList, ContactForm, HeroSection } from "@/components";
import { docs } from "@/server/functions";
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

export default async function Portfolio() {
  const items = await docs.fetchItemsList("projects");

  return (
    <>
      <HeroSection />
      <Divider />
      <AllProjectsList items={items} />
      <Divider />
      <ContactForm />
    </>
  );
}
