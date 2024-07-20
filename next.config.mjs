import ESLintWebpackPlugin from "eslint-webpack-plugin";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(new ESLintWebpackPlugin());
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
