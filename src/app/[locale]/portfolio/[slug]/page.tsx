import { unstable_setRequestLocale } from "next-intl/server";

import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import { docs } from "@/server/functions";

import type { Locale } from "../../../../../@types/i18n";

export async function generateStaticParams() {
  return await docs.getSlugsWithoutFiles("projects");
}

export default async function ProjectPage({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: string } }>) {
  unstable_setRequestLocale(locale);

  const source = await docs.getSourcesSinceMdxFiles("projects", slug, locale as Locale);

  return <NextMDXRemote {...source} />;
}
