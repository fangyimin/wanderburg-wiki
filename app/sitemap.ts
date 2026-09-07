import type { MetadataRoute } from "next";
import { guides } from "@/lib/site";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fangyimin.github.io/wanderburg-wiki";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/modules", ...guides.map((g) => `/${g.slug}`)];

  return staticRoutes.map((path) => ({
    url: path === "" ? `${siteUrl}/` : `${siteUrl}${path}/`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/modules" ? 0.9 : 0.8,
  }));
}
