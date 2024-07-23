import { NextMDXRemote } from "@/components/next-mdx-remote/feature-next-mdx-remote";
import { docs } from "@/server/functions";

export async function generateStaticParams() {
  return await docs.getSlugs("projects");
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const source = await docs.getSerializedSource("projects", params.slug, "en");

  return <NextMDXRemote {...source} />;
}
