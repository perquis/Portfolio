import { unstable_setRequestLocale } from "next-intl/server";

import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import { docs } from "@/server/functions";

import type { Locale } from "../../../../../@types/i18n";

export async function generateStaticParams() {
  return await docs.getSlugsWithoutFiles("posts");
}

export default async function ArticlePage({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: string } }>) {
  unstable_setRequestLocale(locale);

  const source = await docs.getSourcesSinceMdxFiles("posts", slug, locale as Locale);

  return <NextMDXRemote {...source} />;
}
