import type { Metadata } from "next";
import { SiteInfoPage } from "@/components/SiteInfoPage";

export const metadata: Metadata = {
  title: "About Wanderburg Wiki",
  description:
    "About this fan-made Wanderburg wiki: sources, independence from the developer, and how we publish guide content.",
};

export default function Page() {
  return (
    <SiteInfoPage
      h1="About Wanderburg Wiki"
      description="Independent fan documentation for Wanderburg — not an official Randwerk or Sidekick Publishing site."
      sections={[
        {
          h2: "What this site is",
          paragraphs: [
            "Wanderburg Wiki collects beginner guides, demo notes, module overviews, and FAQ-style pages so players can find answers faster than scrolling Steam discussions alone.",
            "We prioritize facts from Steam, wanderburg.com, official Discord, and named coverage. Where information is thin (tier lists, Steam Deck certification, multiplayer), pages say so instead of inventing details.",
          ],
        },
        {
          h2: "Codes and affiliation",
          paragraphs: [
            "There is no redeem-code system advertised for Wanderburg at launch, so our codes sidebar stays 暂无.",
            "This project is fan-made and unaffiliated with Randwerk Games or Sidekick Publishing.",
          ],
        },
      ]}
    />
  );
}
