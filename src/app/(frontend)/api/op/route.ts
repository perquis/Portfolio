import type { Locale } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { headers } from "@/libs/api";
import { getSourcesSinceMdxFiles } from "@/shared/utils";

export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);
    const location = url.searchParams.get("location") as Location,
      slug = url.searchParams.get("slug")!,
      locale = url.searchParams.get("locale") as Locale;

    if (!location || !slug || !locale)
      return new Response(JSON.stringify({ success: false, message: "Invalid parameters" }), { headers, status: 400 });

    const { frontmatter } = await getSourcesSinceMdxFiles(location, slug, locale);
    return new Response(JSON.stringify(frontmatter.open_graph_img), { headers });
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ success: false, message: error.message }), { headers, status: 400 });

    return new Response(JSON.stringify({ success: false, message: "Something went wrong..." }), {
      headers,
      status: 500,
    });
  }
};
