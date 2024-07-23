import ESLintWebpackPlugin from "eslint-webpack-plugin";
import createNextIntlPlugin from "next-intl/plugin";

import cspHeader from "./src/auth/content-securiity-policy.js";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote", "shiki"],
  async redirects() {
    return [
      {
        source: "/in",
        destination: "https://www.linkedin.com/in/damian-werens",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/perquis",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/_perquis",
        permanent: true,
      },
    ];
  },
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
  webpack(config, { dev }) {
    if (dev) {
      config.plugins.push(new ESLintWebpackPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }));
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
