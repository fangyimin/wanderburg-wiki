# Inner page generation prompt (Wanderburg wiki)

Use this prompt to batch-produce content JSON files under `content/en/{slug}.json`.

## Output format (strict JSON)

```json
{
  "slug": "kebab-case-url",
  "title": "SEO title 40-60 chars with keyword",
  "description": "140-160 chars meta description",
  "keyword": "primary search phrase",
  "h1": "Single H1",
  "sections": [
    { "h2": "Section heading", "paragraphs": ["...", "..."] }
  ],
  "note": "optional caveat",
  "sources": ["Steam / official / named article"]
}
```

## Hard rules

1. Only use facts from Steam, wanderburg.com, official Discord/YouTube, or named coverage.
2. Never invent codes, DPS tables, captain names, multiplayer modes, or Deck Verified badges.
3. If unknown, write 待确认 / say sources are thin — do not fabricate.
4. Each page must answer a distinct search intent (no copy-paste with a renamed keyword).
5. Keep English for the `en` locale folder.

## Structure

- H1 once; 2–4 H2 sections; short paragraphs.
- Mention related internal links in prose when useful (Guide, Demo, Builds).
