import type { MetadataRoute } from "next";
import { guides } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wanderburg-wiki.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/modules", ...guides.map((g) => `/${g.slug}`)];

  return staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/modules" ? 0.9 : 0.8,
  }));
}
