import { unstable_setRequestLocale } from "next-intl/server";

import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import type { Locale } from "@/interfaces/i18n";
import { getItemsWithMetadata, getSourcesSinceMdxFiles } from "@/shared/utils";
import { getSlugsWithoutFiles } from "@/shared/utils/docs/utils";

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const items = await getItemsWithMetadata("projects");
  const item = items.find((item) => item.slug === params.slug)!;

  return {
    title: item.title,
    description: item.description,
  };
}

export async function generateStaticParams() {
  return await getSlugsWithoutFiles("projects");
}

export default async function ProjectPage({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: string } }>) {
  unstable_setRequestLocale(locale);

  const source = await getSourcesSinceMdxFiles("projects", slug, locale as Locale);

  return <NextMDXRemote {...source} />;
}
