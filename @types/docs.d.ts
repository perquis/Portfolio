interface IDocs {
  data: Data[];
}

interface Data {
  metadata: Frontmatter;
}

interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  thumbnail_img: string;
  tags: string[];
  publishedAt: string;
  isPublished: boolean;
}
