/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? process.env.WEBSITE_URL : "",
  images: {
    deviceSizes: [350, 480, 640, 768, 960, 1250, 2048],
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
    formats: ["image/webp"],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

(module.exports = nextConfig),
  {
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
  };
