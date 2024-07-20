import ESLintWebpackPlugin from "eslint-webpack-plugin";
import createNextIntlPlugin from "next-intl/plugin";

import cspHeader from "./src/auth/content-securiity-policy.js";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(new ESLintWebpackPlugin());
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
