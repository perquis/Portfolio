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
