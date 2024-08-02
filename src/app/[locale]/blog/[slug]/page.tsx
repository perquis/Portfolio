import { unstable_setRequestLocale } from "next-intl/server";

import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import { docs } from "@/server/functions";

import type { Locale } from "../../../../../@types/i18n";

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const items = await docs.getItemsWithMetadata("projects");
  const item = items.find((item) => item.slug === params.slug)!;

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: "article",
      siteName: "Damian Werens - Portfolio",
      url: `${process.env.SITE_URL}/portfolio/${item.slug}`,
      locale: params.locale,
      images: [
        {
          url: item.opengraph_img,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  };
}

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
