# SportE Landing Page

Build the marketing/hub site for SportE at the root route. The spec calls for Next.js, but this project runs on TanStack Start + Tailwind v4 (which is what Lovable supports). I'll deliver the same design, content, IA, SEO, and data-driven apps array using the existing stack — no framework swap.

## Scope

Single-page landing with anchor-scrolled sections (Home/Apps/About/Contact) plus a top-nav primary CTA to the Golf app. Fully responsive, mobile-first, modern SaaS look.

## Design tokens (added to `src/styles.css`)

- Primary `#0F172A`, Accent `#2563EB`, Success `#22C55E`, Background `#F8FAFC`
- White cards with subtle shadow, rounded buttons with hover animations
- Converted to oklch and mapped via `@theme inline` to match project conventions

## Sections (in `src/routes/index.tsx`)

1. **Sticky nav** — SportE logo (left), Home/Apps/About/Contact anchors (center), "Launch Golf App" primary CTA (right). Mobile: hamburger sheet.
2. **Hero** — Headline "Plan Better Sporting Events. Play More. Organize Less.", subheadline, primary CTA → `https://app.golf.gosporte.com/`, secondary CTA scrolls to `#apps`.
3. **Apps** — Rendered from a single `apps` array. Each card shows name, description, status badge (LIVE green / COMING SOON muted), and Open App / disabled Coming Soon button. Plus a "More Sports Coming" placeholder card listing pickleball, volleyball, tennis, soccer, softball, cornhole, disc golf, custom event platforms.
4. **Why SportE** — Three feature columns (Easy Event Planning, Tournament Management, Multi-Sport Platform) with lucide icons.
5. **Platform Vision** — "One Platform. Unlimited Sports." with body copy.
6. **About** — Short brand/mission blurb (anchor target for nav).
7. **Contact** — Simple contact block with mailto link (anchor target).
8. **Footer** — SportE brand, nav links, applications list (Golf, Basketball coming soon, Dodgeball coming soon), © 2026.

## Data structure

```ts
const apps = [
  { name: "SportE Golf", sport: "golf", status: "live",
    description: "Create golf events, organize players, manage tournaments, and simplify event planning.",
    url: "https://app.golf.gosporte.com/" },
  { name: "SportE Basketball", sport: "basketball", status: "coming-soon",
    description: "Manage basketball tournaments, leagues, teams, and event scheduling.",
    url: "https://app.basketball.gosporte.com/" },
  { name: "SportE Dodgeball", sport: "dodgeball", status: "coming-soon",
    description: "Organize dodgeball events, leagues, brackets, and team management.",
    url: "https://app.dodgeball.gosporte.com/" },
];
```

Adding a new sport = one object in the array.

## SEO

In `src/routes/index.tsx` `head()`:
- title: `SportE | Sporting Event Planning Platform`
- description, og:title, og:description per spec
- keywords meta
- JSON-LD `Organization` with name SportE, url, and `sameAs`/sub-app urls

`__root.tsx` gets updated default `og:site_name` to SportE. Single H1 in hero. Semantic `<section>` with ids for anchors. `scroll-behavior: smooth` on html.

## Technical notes

- Stack: TanStack Start + React + Tailwind v4 (not Next.js). Same visual/functional result.
- Anchor nav via `<a href="#apps">` for in-page scroll (acceptable here per route-architecture guidance because this is a single landing page with scrolling sections, matching the spec's IA).
- No backend, no auth, no DB needed for this scope.
- Uses existing shadcn `Button`, `Card`, `Badge`, `Sheet` components.

## Files touched

- `src/styles.css` — add SportE color tokens
- `src/routes/__root.tsx` — update default meta (site_name SportE)
- `src/routes/index.tsx` — replace placeholder with full landing
- `src/components/sporte/` — `Navbar.tsx`, `Hero.tsx`, `AppsSection.tsx`, `AppCard.tsx`, `Features.tsx`, `Vision.tsx`, `Footer.tsx`
- `src/lib/sporte-apps.ts` — the `apps` array
