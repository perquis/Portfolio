import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AllProjectsList, ContactForm } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("PORTFOLIO_META_TITLE"),
    description: t("PORTFOLIO_META_DESCRIPTION"),
  };
}

const components = [AllProjectsList, Divider, ContactForm];

export default function Portfolio() {
  return <Layout components={components} />;
}
