import createMiddleware from "next-intl/middleware";

import { locales } from "@/config/i18n";

export const withNextIntl = createMiddleware({
  locales,
  localeDetection: true,
  defaultLocale: locales[0],
  localePrefix: "always",
  pathnames: {
    "/contact": {
      en: "/contact",
      pl: "/kontakt",
    },
  },
});
