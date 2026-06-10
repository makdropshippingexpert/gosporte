# Add Sport Graphics to App Cards

Generate clean, on-brand illustrations for each sport in the apps grid and wire them into the existing `AppCard` component.

## Visual direction

One consistent style across all sports so the grid feels cohesive:
- Flat / minimal vector-style illustration
- Soft gradient background using SportE palette (deep navy `#0F172A` → accent blue `#2563EB`)
- Single hero object per card (golf ball + flag, basketball, dodgeball)
- Subtle highlights, no photo realism, no text in image
- Square 1024×1024, exported as JPG (no transparency needed — the image fills a banner)

For the "Coming Soon" placeholder card I'll keep the current `Sparkles` icon treatment (no generated image) so it visually reads as different from the real apps.

## Images to generate (via `imagegen--generate_image`, `standard` quality)

1. `src/assets/sport-golf.jpg` — minimalist golf ball resting next to a small pin/flag on a stylised green, navy→blue gradient background.
2. `src/assets/sport-basketball.jpg` — minimalist basketball with clean seam lines, navy→blue gradient background.
3. `src/assets/sport-dodgeball.jpg` — minimalist red dodgeball with subtle highlight, navy→blue gradient background.

All three prompts will share the same style modifiers ("flat vector illustration, soft gradient background from #0F172A to #2563EB, centered single object, clean, modern, no text") so the cards match.

## Code changes

- Extend `SporteApp` in `src/lib/sporte-apps.ts` with an optional `image?: string` field; import the three JPGs and attach them to each entry.
- Update `src/components/sporte/AppCard.tsx` to render a top banner `<img>` (aspect ~16/9, `object-cover`, rounded top corners) above the existing card header when `app.image` is set. Keep the small letter-tile + badge row, but move the badge to overlay the image (top-right) so it reads as a status flag on the artwork. Live cards get a hover scale on the image for a subtle animation.
- No changes to the apps grid layout, the "More Sports Coming" card, or any other section.

## Files touched

- `src/assets/sport-golf.jpg` (new)
- `src/assets/sport-basketball.jpg` (new)
- `src/assets/sport-dodgeball.jpg` (new)
- `src/lib/sporte-apps.ts`
- `src/components/sporte/AppCard.tsx`
