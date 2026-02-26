import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "https://github.com/qimalan/shopify-blog",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
