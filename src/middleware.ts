import createMiddleware from "next-intl/middleware";

import { locales } from "@/config/i18n";

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ["/", `/(en|pl)/:path*`],
};
