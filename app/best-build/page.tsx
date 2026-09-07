import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { guides } from "@/lib/site";

const page = guides.find((g) => g.slug === "best-build")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function Page() {
  return <GuideArticle page={page} />;
}
