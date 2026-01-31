import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore
  reactCompiler: true,
  // @ts-ignore
  // cacheComponents: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
