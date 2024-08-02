import type { METADATA_RESPONSE } from "@/server/functions/docs/constants";

export type Location = "projects" | "posts";
export type TMetadata = typeof METADATA_RESPONSE.metadata;
