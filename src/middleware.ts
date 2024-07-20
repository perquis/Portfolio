import { chain } from "@nimpl/middleware-chain";
import createMiddleware from "next-intl/middleware";

import { locales } from "@/config/i18n";

const withNextIntl = createMiddleware({
  locales,
  localeDetection: true,
  defaultLocale: locales[0],
});

export default chain([withNextIntl]);

export const config = {
  matcher: ["/", "/(en|pl)/:path*"],
};
