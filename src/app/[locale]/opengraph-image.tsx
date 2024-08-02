/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img src={`${process.env.SITE_URL}/static/pages/home.png`} />, {
    ...size,
  });
}
