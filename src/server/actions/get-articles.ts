import type { Location, TMetadata } from "@/interfaces/markdown";
import { getQueryParams } from "@/shared/utils";

type GetArticlesResponse = {
  [key in Location]: Pick<TMetadata, "title" | "tags" | "slug" | "thumbnail_img">[];
};

export const getArticles = async (locale: string, query: string): Promise<GetArticlesResponse> => {
  const q = query.length > 0 ? query : null;

  const data = await fetch(`/api/articles?${getQueryParams({ locale, q })}`);
  return data.json();
};
