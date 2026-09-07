export const site = {
  name: "Wanderburg Wiki",
  url: "https://wanderburg.site",
  links: {
    website: "https://wanderburg.com",
    steam: "https://store.steampowered.com/app/3624140/Wanderburg/",
    demo: "https://store.steampowered.com/app/4268810/Wanderburg_Demo/",
    discord: "https://discord.gg/DU5Ty8HzTt",
    youtube: "https://www.youtube.com/@randwerk2760",
    trailer: "https://www.youtube.com/watch?v=pUsprNYfxw0",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/guide", label: "Guide" },
    { href: "/modules", label: "Modules" },
    { href: "/best-build", label: "Builds" },
    { href: "/demo", label: "Demo" },
    { href: "/unlocks", label: "Unlocks" },
  ],
};

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  h1: string;
  sections: { h2: string; paragraphs: string[] }[];
  note?: string;
};

export const guides: GuidePage[] = [
  {
    slug: "guide",
    title: "Wanderburg Guide — How to Play for Beginners",
    description:
      "Wanderburg beginner guide: core loop, castle controls, early priorities, and how to grow your fortress in the first runs.",
    keyword: "wanderburg guide",
    h1: "Wanderburg Beginner Guide",
    sections: [
      {
        h2: "What you do each run",
        paragraphs: [
          "Wanderburg is a survivors-like roguelike where you drive a castle on wheels. You roll through the map, devour villages and smaller fortresses, then expand your stronghold with modular siege gear.",
          "Official Steam copy frames the fantasy simply: castles hunt, villages flee, and only the biggest stronghold survives. Your castle does not just upgrade — it expands.",
        ],
      },
      {
        h2: "Controls and movement",
        paragraphs: [
          "Steam lists full support for mouse, keyboard, or controller. Community write-ups (GameStar, Bullet Haven) highlight inertia, drifting, and short nitro boosts — movement matters as much as firepower.",
          "Tip from published guides: use drifts and circular paths so your frontal maw keeps eating while turrets keep shooting. Straight-line charging is easier to surround.",
        ],
      },
      {
        h2: "First-hour priorities",
        paragraphs: [
          "Independent tips pages recommend prioritizing Carpenter-style modules early for passive healing so you survive swarm pressure longer.",
          "Focus boss fortresses when you can — published guides note that toppling rival castles is the main moment your fortress physically grows, not endless small grinds.",
        ],
      },
      {
        h2: "Between runs",
        paragraphs: [
          "Steam describes a modular progression layer: unlock new modules, vehicles, artifacts, and captains between runs to open fresh strategies.",
          "Treat Early Access balance as fluid. Prefer evergreen advice (survive longer, grow via bosses, unlock variety) over patch-specific numbers until the meta stabilizes.",
        ],
      },
    ],
  },
  {
    slug: "tips",
    title: "Wanderburg Tips — Survive Longer and Grow Faster",
    description:
      "Practical Wanderburg tips from demo coverage: healing modules, drifting, explosion procs, and boss-focused growth.",
    keyword: "wanderburg tips",
    h1: "Wanderburg Tips",
    sections: [
      {
        h2: "Survive the swarm",
        paragraphs: [
          "German and English tip write-ups agree: early Carpenter / Zimmermann healing modules buy time when the screen fills with enemies.",
          "Do not wait for random map heals. Passive sustain into the opening upgrade choices when the game offers it.",
        ],
      },
      {
        h2: "Move like a vehicle, not a survivor clone",
        paragraphs: [
          "Unlike static auto-shooters, Wanderburg rewards drifting around enemy fortresses and using space. Circle, re-angle your maw, and avoid getting pinned.",
          "GameStar’s demo coverage calls mastering castle movement one of the best parts of the fantasy — treat handling as a skill check.",
        ],
      },
      {
        h2: "Upgrade preferences (demo-era)",
        paragraphs: [
          "Community guides often prefer on-hit explosion procs for clearing packed small enemies efficiently.",
          "Balance heavy cannons with mobility. Oversized firepower that leaves you unable to reposition is a common failure mode called out in tip articles.",
        ],
      },
    ],
    note: "Tips reflect demo / pre-EA coverage and may change after Early Access patches.",
  },
  {
    slug: "best-build",
    title: "Wanderburg Best Build — Early Modules and Upgrades",
    description:
      "Wanderburg best build ideas for early runs: sustain modules, cannon packages, and upgrade picks reported in demo guides.",
    keyword: "wanderburg best build",
    h1: "Wanderburg Best Build (Early Game)",
    sections: [
      {
        h2: "Starter direction",
        paragraphs: [
          "There is no single frozen meta yet. Demo-era guides converge on sustain first (Carpenter / healing), then area clear, then boss damage.",
          "Steam’s own pitch emphasizes experimenting with wildly different builds each run — use these as starting templates, not commandments.",
        ],
      },
      {
        h2: "Example package: sustain into cannons",
        paragraphs: [
          "Open with healing / carpenter modules so you can stay in fights long enough to snowball.",
          "Layer cannons and explosion-proc upgrades for crowd clear, then look for captain or chassis unlocks between runs that reinforce artillery play.",
        ],
      },
      {
        h2: "What we are not claiming",
        paragraphs: [
          "We do not publish fake DPS tables or invented item IDs. Cheat-engine / save-edit pages exist online; this wiki will not recommend them.",
          "After Sep 8, 2026 Early Access launches, revisit this page with patch notes and fresh community tests.",
        ],
      },
    ],
  },
  {
    slug: "tier-list",
    title: "Wanderburg Tier List — Module Types (Early Snapshot)",
    description:
      "A cautious Wanderburg tier list framing for module types. Formal rankings are thin before Early Access — treat this as an observation page.",
    keyword: "wanderburg tier list",
    h1: "Wanderburg Tier List (Observation)",
    sections: [
      {
        h2: "Why this page is limited",
        paragraphs: [
          "As of research day, there is no widely agreed module tier list with two independent, detailed sources. We keep this page honest instead of inventing ranks.",
          "Use it as a type checklist while Builds and Modules pages carry actionable advice.",
        ],
      },
      {
        h2: "Working tiers by role (not power scores)",
        paragraphs: [
          "S-priority early: sustain / healing modules (guide consensus).",
          "A-priority mid: explosion / AoE clear and flexible cannons.",
          "Situational: heavy siege pieces that demand good driving; wizard / arcane towers for alternate damage profiles (Steam feature list).",
        ],
      },
    ],
    note: "Information sources are thin — page marked 暂缓深度 in 关卡3. Update after EA.",
  },
  {
    slug: "unlocks",
    title: "Wanderburg Unlocks — Modules, Vehicles, Captains",
    description:
      "Wanderburg unlocks explained: what Steam says you unlock between runs, including modules, vehicles, artifacts, and captains.",
    keyword: "wanderburg unlocks",
    h1: "Wanderburg Unlocks",
    sections: [
      {
        h2: "Between-run progression",
        paragraphs: [
          "According to the Steam store page, a modular progression system expands your fortress with new siege modules and structures between runs.",
          "Unlockable vehicles, artifacts, and captains steadily widen strategic options and build variety.",
        ],
      },
      {
        h2: "Why unlocks matter for SEO pages",
        paragraphs: [
          "Players searching wanderburg unlocks usually want a checklist of meta-progression, not only in-run upgrades.",
          "Until a complete official list is published in-game or on patch notes, stick to the Steam categories above and mark specifics as 待确认.",
        ],
      },
    ],
  },
  {
    slug: "demo",
    title: "Wanderburg Demo — How to Play the Free Steam Demo",
    description:
      "Wanderburg demo guide: Steam download, review score context, what the demo includes, and how it relates to Early Access.",
    keyword: "wanderburg demo",
    h1: "Wanderburg Demo",
    sections: [
      {
        h2: "Where to play",
        paragraphs: [
          "The free Wanderburg Demo is on Steam (app 4268810). Developer posts during Next Fest said the demo would remain available for the foreseeable future.",
          "As captured in 关卡3 research, the demo sat at Very Positive with roughly 91% positive from about 1,377 reviews — re-check Steam for live numbers.",
        ],
      },
      {
        h2: "What you can expect",
        paragraphs: [
          "Steam demo text matches the full game pitch: consume, expand, mount cannons / wizard towers / explosives, and experiment with builds.",
          "GameStar’s hands-on piece describes a “one more run” loop driven by castle driving physics and module combinations.",
        ],
      },
      {
        h2: "Demo vs Early Access",
        paragraphs: [
          "Full Early Access was scheduled for Sep 8, 2026 on Steam. Developers estimated about 6–12 months in EA, with more content and balance based on community feedback.",
          "Use the demo to learn handling and early builds; expect systems and unlock pools to grow after EA.",
        ],
      },
    ],
  },
  {
    slug: "steam-deck",
    title: "Wanderburg Steam Deck & Controller Support",
    description:
      "Wanderburg controller and Steam Deck notes: official input support from Steam, plus honest limits where Deck verification is unconfirmed.",
    keyword: "wanderburg steam deck",
    h1: "Wanderburg on Steam Deck & Controllers",
    sections: [
      {
        h2: "Official input support",
        paragraphs: [
          "Steam states Wanderburg is fully playable with mouse, keyboard, or controller and is optimized for modest hardware (“ready for potato”).",
          "That makes controller play a first-class path on PC and a reasonable starting point for handheld experiments.",
        ],
      },
      {
        h2: "Steam Deck status",
        paragraphs: [
          "We did not find an official Steam Deck Verified listing during research. Treat Deck performance as community-tested until Valve/dev pages say otherwise.",
          "If you play on Deck, start from default controller layout, keep settings conservative, and verify after EA patches.",
        ],
      },
    ],
    note: "弱页：有官方手柄声明，无官方 Deck 认证专页。",
  },
  {
    slug: "multiplayer",
    title: "Wanderburg Multiplayer — Is There Co-op?",
    description:
      "Wanderburg multiplayer FAQ: based on Steam and official materials, the game is presented as a single-player survivors-like with no advertised co-op.",
    keyword: "wanderburg multiplayer",
    h1: "Does Wanderburg Have Multiplayer?",
    sections: [
      {
        h2: "Short answer",
        paragraphs: [
          "Based on Steam store and official marketing copy reviewed for this wiki, Wanderburg is not advertised as online co-op or multiplayer.",
          "Search demand for wanderburg multiplayer / coop exists, so this page exists to stop false claims — not to invent a mode.",
        ],
      },
      {
        h2: "What to watch",
        paragraphs: [
          "Randwerk mentions community feedback via Discord and Steam forums during Early Access. If multiplayer is ever planned, official channels should confirm it.",
          "Until then, treat the game as a single-player fortress roguelike and use Guides / Builds pages for real play advice.",
        ],
      },
    ],
  },
];

export const moduleNav = [
  {
    title: "Cannons",
    blurb: "Steam lists cannons as core siege mounts for broadside-style pressure.",
  },
  {
    title: "Wizard / Arcane Towers",
    blurb: "Arcane artillery and wizard towers provide alternate magical firepower.",
  },
  {
    title: "Explosives & Mines",
    blurb: "Deployables for area denial while you reposition the castle.",
  },
  {
    title: "Vehicles & Chassis",
    blurb: "Between-run unlocks that change how the fortress handles and grows.",
  },
  {
    title: "Captains & Artifacts",
    blurb: "Meta unlocks that widen build identity across runs (Steam description).",
  },
];
