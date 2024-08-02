/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import type { Locale } from "../../../../../@types/i18n";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params: { slug, locale } }: { params: { locale: Locale; slug: string } }) {
  const data = await fetch(`${process.env.VERCEL_URL}/api/op?location=projects&slug=${slug}&locale=${locale}`);
  const open_graph_img = await data.json();

  return new ImageResponse(
    (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={`${process.env.VERCEL_URL}${open_graph_img}`} />
    ),
    {
      ...size,
    },
  );
}
