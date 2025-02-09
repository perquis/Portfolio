import "@next/env";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn", "log"],
    },
  },
  transpilePackages: ["next-mdx-remote", "shiki", "geist"],
  async redirects() {
    return [
      {
        source: "/in",
        destination: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/gh",
        destination: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/x",
        destination: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/onboarding",
        destination: process.env.GOOGLE_FORM_URL,
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
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' app.cal.com;
              img-src *;
              frame-src 'self' www.youtube.com cal.com app.cal.com *.codesandbox.io;
              style-src 'self' 'unsafe-inline';
              font-src 'self';
              connect-src 'self' cdn.jsdelivr.net unpkg.com lottie.host github-contributions-api.jogruber.de;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
              block-all-mixed-content;`.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
