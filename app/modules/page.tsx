import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { moduleNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wanderburg Modules — Cannons, Towers & Vehicles",
  description:
    "Wanderburg modules navigation: cannons, wizard towers, explosives, vehicles, captains and artifacts from Steam's modular siege system.",
};

export default function ModulesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-[hsl(36_78%_55%)]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2 text-stone-600">/</span>
          <span className="text-stone-400">wanderburg modules</span>
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-stone-50 md:text-5xl">
          Wanderburg Modules
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-stone-300">
          Navigation hub for modular siege parts. Categories below come from Steam store copy — cannons, arcane towers,
          explosives, vehicles, artifacts and captains. Individual item stats stay 待确认 until official lists stabilize
          in Early Access.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {moduleNav.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h2 className="text-xl font-semibold text-[hsl(36_78%_62%)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-400">{item.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link href="/unlocks" className="rounded-full bg-[hsl(28_72%_48%)] px-4 py-2 font-semibold text-stone-950">
            Between-run unlocks
          </Link>
          <Link href="/best-build" className="rounded-full border border-white/15 px-4 py-2 text-stone-200">
            Best early builds
          </Link>
          <Link href="/guide" className="rounded-full border border-white/15 px-4 py-2 text-stone-200">
            Beginner guide
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
