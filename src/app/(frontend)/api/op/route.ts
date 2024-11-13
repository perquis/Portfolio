import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { getSourcesSinceMdxFiles } from "@/shared/utils";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const location = url.searchParams.get("location") as Location,
    slug = url.searchParams.get("slug")!,
    locale = url.searchParams.get("locale") as Locale;

  if (!location || !slug || !locale) {
    return new Response("Invalid parameters", {
      status: 400,
    });
  }

  const { frontmatter } = await getSourcesSinceMdxFiles(location, slug, locale);

  return new Response(JSON.stringify(frontmatter.open_graph_img), {
    headers: {
      "content-type": "application/json",
    },
  });
};
