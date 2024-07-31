import { getLocale } from "next-intl/server";

import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import { docs } from "@/server/functions";

import type { Locale } from "../../../../../@types/i18n";

export async function generateStaticParams() {
  return await docs.getSlugs("projects");
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const locale = await getLocale();
  const source = await docs.getSerializedSource("projects", params.slug, locale as Locale);

  return <NextMDXRemote {...source} />;
}
