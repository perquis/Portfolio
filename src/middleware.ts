import { chain } from "@nimpl/middleware-chain";

import { withNextIntl } from "@/middlewares";

export default chain([withNextIntl]);

export const config = {
  matcher: ["/", "/(en|pl)/:path*"],
};
