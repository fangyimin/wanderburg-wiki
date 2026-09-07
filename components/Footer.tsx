import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-lg text-[hsl(36_78%_62%)]">Wanderburg Wiki</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            Independent fan guide for Wanderburg. We only publish facts from Steam, official channels, and named coverage — no invented codes.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">Official</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><a className="hover:text-[hsl(36_78%_70%)]" href={site.links.website} target="_blank" rel="noreferrer">wanderburg.com</a></li>
            <li><a className="hover:text-[hsl(36_78%_70%)]" href={site.links.discord} target="_blank" rel="noreferrer">Official Discord</a></li>
            <li><a className="hover:text-[hsl(36_78%_70%)]" href={site.links.youtube} target="_blank" rel="noreferrer">Randwerk YouTube</a></li>
            <li><a className="hover:text-[hsl(36_78%_70%)]" href={site.links.demo} target="_blank" rel="noreferrer">Steam Demo</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">Guides</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><Link className="hover:text-[hsl(36_78%_70%)]" href="/guide">Beginner Guide</Link></li>
            <li><Link className="hover:text-[hsl(36_78%_70%)]" href="/modules">Modules</Link></li>
            <li><Link className="hover:text-[hsl(36_78%_70%)]" href="/best-build">Best Build</Link></li>
            <li><Link className="hover:text-[hsl(36_78%_70%)]" href="/multiplayer">Multiplayer FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-stone-600">
        Fan-made · Not affiliated with Randwerk or Sidekick Publishing · Codes: 暂无
      </div>
    </footer>
  );
}
