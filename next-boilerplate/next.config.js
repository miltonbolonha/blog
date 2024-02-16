/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const imgsPath = isProd ? process.env.WEBSITE_URL : "";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? process.env.WEBSITE_URL : "",
  images: {
    deviceSizes: [350, 480, 640, 768, 960, 1250, 2048],
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
