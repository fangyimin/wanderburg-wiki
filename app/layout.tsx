import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fangyimin.github.io/wanderburg-wiki";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wanderburg Wiki — Builds, Demo & How to Play",
    template: "%s | Wanderburg Wiki",
  },
  description:
    "Fan-made Wanderburg wiki covering Early Access date, Steam demo, beginner guide, builds, modules and unlock tips for the castle-on-wheels roguelike.",
  keywords: [
    "Wanderburg",
    "Wanderburg wiki",
    "demo",
    "builds",
    "modules",
    "guide",
    "Steam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
