import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";

// Custom domain (wanderburg.site) serves at site root — no /wanderburg-wiki basePath.
const nextConfig: NextConfig = {
  ...(isGhPages ? { output: "export" as const } : {}),
  images: { unoptimized: true },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wanderburg.site" }],
        destination: "https://wanderburg.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
