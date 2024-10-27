import { docs } from "@/server/functions";
import type { Location } from "@/server/functions/docs/types";

import type { Locale } from "../../../interfaces/i18n";

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

  const { frontmatter } = await docs.getSourcesSinceMdxFiles(location, slug, locale);

  return new Response(JSON.stringify(frontmatter.open_graph_img), {
    headers: {
      "content-type": "application/json",
    },
  });
};
