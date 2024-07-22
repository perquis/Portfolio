"use server";

import { headers } from "next/headers";

/**
 * This function is used to get the slug from `the server side`
 * and is used to determine if the page is a slug page or not 🎉.
 */
export default async function getServerSideSlug() {
  const headersList = headers();
  const pathname = headersList.get("x-frame-pathname");

  const [_page, slug] =
    pathname
      ?.split("/")
      .filter((v) => v !== "pl" && v !== "en")
      .filter(Boolean) ?? [];

  return slug || null;
}
