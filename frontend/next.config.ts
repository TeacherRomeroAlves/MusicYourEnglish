import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/share/songs/*": ["./public/images/songs/**/*", "./public/brand/music-your-english-logo.png", "./assets/fonts/*"],
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
