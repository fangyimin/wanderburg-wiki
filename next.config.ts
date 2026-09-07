import type { NextConfig } from "next";

const repo = "wanderburg-wiki";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGhPages
    ? {
        output: "export" as const,
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
