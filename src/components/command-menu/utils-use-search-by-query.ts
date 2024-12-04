import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import type { TMetadata } from "@/interfaces/markdown";
import { getArticles } from "@/server/actions/get-articles";
import { useDebounce } from "@/shared/hooks";

type Article = Pick<TMetadata, "title" | "slug">;

export const useSearchByQuery = () => {
  const locale = useLocale();
  const [posts, setPosts] = useState<Article[]>([]);
  const [projects, setProjects] = useState<Article[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const onValueChange = (search: string) => setSearchQuery(search);

  useEffect(() => {
    if (searchQuery.length > 0) return;

    setPosts([]);
    setProjects([]);
  }, [searchQuery]);

  useDebounce(async () => {
    if (searchQuery.length === 0) return;

    const data = await getArticles(locale, searchQuery);

    setPosts(data.posts);
    setProjects(data.projects);
  }, 500);

  return { onValueChange, posts, projects };
};
