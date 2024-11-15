import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote", "shiki", "geist"],
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
            value: `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' app.cal.com;
    img-src 'self' blob: data: media.istockphoto.com *.unsplash.com;
    frame-src 'self' www.youtube.com cal.com app.cal.com *.codesandbox.io;
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    connect-src 'self' cdn.jsdelivr.net unpkg.com lottie.host github-contributions-api.jogruber.de;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    block-all-mixed-content;
`.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
