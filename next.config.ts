import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/shopify-blog",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
