import type { Metadata } from "next";
import { SiteInfoPage } from "@/components/SiteInfoPage";

export const metadata: Metadata = {
  title: "Terms of Service — Wanderburg Wiki",
  description:
    "Terms of service for wanderburg.site: fan wiki usage, disclaimers, and limitations of liability.",
};

export default function Page() {
  return (
    <SiteInfoPage
      h1="Terms of Service"
      description="Rules for using wanderburg.site. Last updated: 2026-09-19."
      sections={[
        {
          h2: "Acceptance",
          paragraphs: [
            "By visiting wanderburg.site you agree to these terms. If you do not agree, please stop using the site.",
            "This is a free, fan-made wiki. We may update guides, layout, or these terms without prior notice.",
          ],
        },
        {
          h2: "Fan site disclaimer",
          paragraphs: [
            "Wanderburg Wiki is not affiliated with, endorsed by, or sponsored by Randwerk Games or Sidekick Publishing.",
            "Game names, logos, and assets belong to their respective owners. We publish guide content for educational purposes only.",
            "For official support, purchases, or bug reports, use Steam, wanderburg.com, or official community channels.",
          ],
        },
        {
          h2: "Content accuracy",
          paragraphs: [
            "We cite Steam, official pages, and named coverage where possible. Early Access games change frequently — guides may become outdated.",
            "We do not guarantee completeness, accuracy, or fitness for a particular purpose. Use guides at your own risk.",
          ],
        },
        {
          h2: "Prohibited use",
          paragraphs: [
            "Do not scrape the site in ways that harm availability, attempt unauthorized access, or use automated tools to spam feedback endpoints.",
            "Do not misrepresent this site as an official developer or publisher property.",
          ],
        },
        {
          h2: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, the maintainers of wanderburg.site are not liable for any indirect, incidental, or consequential damages arising from use of the site or reliance on its content.",
          ],
        },
        {
          h2: "Contact",
          paragraphs: [
            "Questions about these terms: use the Contact page or open an issue at https://github.com/fangyimin/wanderburg-wiki",
          ],
        },
      ]}
    />
  );
}
