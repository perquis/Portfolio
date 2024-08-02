import path from "path";

export const BASE_PATH = path.join(process.cwd(), "src", "docs");
const DEFAULT_DATE = new Date("01.01.2100 12:00");

export const METADATA_RESPONSE = {
  metadata: {
    slug: "",
    title: "",
    description: "",
    thumbnail_img: "",
    opengraph_img: "",
    tags: [],
    year: 2100,
    updatedAt: DEFAULT_DATE,
    publishedAt: DEFAULT_DATE,
  },
};
