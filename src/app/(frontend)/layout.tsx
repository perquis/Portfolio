import type { PropsWithChildren } from "react";

import { locales } from "@/config/i18n";

export const metadata = {
  alternates: {
    canonical: "/",
    languages: {
      [locales[0]]: `/${locales[0]}`,
      [locales[1]]: `/${locales[1]}`,
    },
  },
  openGraph: {
    images: "/static/pages/og-image.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
