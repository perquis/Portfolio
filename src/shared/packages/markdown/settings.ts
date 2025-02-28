import path from "path";

export const BASE_PATH = path.join(process.cwd(), "src", "app", "(resources)");
const DEFAULT_DATE = new Date("2100-01-01");

export const METADATA_RESPONSE = {
  metadata: {
    slug: "",
    title: "",
    description: "",
    light_img: "",
    dark_img: "",
    tags: [] as string[],
    year: 2100,
    open_graph_img: "",
    updatedAt: DEFAULT_DATE,
    publishedAt: DEFAULT_DATE,
  },
};
