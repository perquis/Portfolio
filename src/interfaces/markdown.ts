import type { METADATA_RESPONSE } from "@/shared/utils/markdown/settings";

export type Location = "projects" | "posts";
export type TMetadata = typeof METADATA_RESPONSE.metadata;

export interface IDocs {
  data: Data[];
}

export interface Data {
  metadata: Frontmatter;
}

export interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  thumbnail_img: string;
  tags: string[];
  publishedAt: string;
  isPublished: boolean;
}