import type { Locale } from "@/interfaces/i18n";
import type { TMetadata } from "@/interfaces/markdown";
import { headers, withErrorHandling } from "@/libs/api";
import { getItemsWithMetadata, pick } from "@/shared/utils";

export const GET = withErrorHandling(async (request: Request) => {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") as Locale,
    query = url.searchParams.get("q");

  if (!locale)
    return new Response(JSON.stringify({ success: false, message: "Invalid parameters" }), { headers, status: 400 });

  const [posts, projects] = await Promise.all([getItemsWithMetadata("posts"), getItemsWithMetadata("projects")]);
  const filteredPosts = posts.map((post) => pick(post, ["title", "slug", "tags", "thumbnail_img"])),
    filteredProjects = projects.map((project) => pick(project, ["title", "slug", "tags", "thumbnail_img"]));

  const searchItemsByQuery = (items: Pick<TMetadata, "title">[]) =>
    items.filter((item) => item.title.toLowerCase().startsWith(query!.toLowerCase()));

  if (query) {
    return new Response(
      JSON.stringify({
        success: true,
        posts: searchItemsByQuery(filteredPosts),
        projects: searchItemsByQuery(filteredProjects),
      }),
      {
        headers,
      },
    );
  }

  return new Response(JSON.stringify({ success: true, posts: filteredPosts, projects: filteredProjects }), {
    headers,
  });
});
