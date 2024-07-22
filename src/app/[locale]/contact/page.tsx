import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactForm, FAQ, Socials } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
  };
}

const components = [ContactForm, Divider, FAQ, Divider, Socials];

export default function Contact() {
  return <Layout components={components} />;
}
