import { docs } from "@/server/functions";

import type { Locale } from "../../../../@types/i18n";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url),
      locale = url.searchParams.get("locale") as Locale,
      location = url.searchParams.get("location") as "projects" | "posts";

    const data = await docs.getItemsList(location, locale || "en");

    return Response.json({ data });
  } catch (error) {
    return new Response("Bad request", { status: 400 });
  }
}
