# Site data & global styling

## Change look everywhere

1. **`src/styles/global.css`** — `:root` variables (brand colors, section backgrounds, radii).  
2. **`tailwind.config.mjs`** — maps those vars to classes like `bg-tebra-section-warm`.  
3. Use **semantic classes** in components (`text-tebra-teal-dark`, `bg-tebra-cta-cream`) instead of raw hex.

## Change copy / links in one place

| File | Purpose |
|------|---------|
| `homePage.ts` | Homepage hero + bottom CTA titles, buttons, URLs |
| `footer.ts` | All footer columns + contact + legal links |
| `features.ts` | “Everything connected” feature cards |
| `faq.ts` | FAQ questions/answers |
| `steps.ts` | Get started steps |
| `testimonialsCarousel.ts` | Testimonials page case-study slider slides + header |
| `patientExperiencePage.ts` | `/patient-experience` — hero, pillars, journey bands, testimonials, steps, resources, FAQ, closing CTA |
| `marketingPage.ts` | `/marketing` — hero, pillars, comparison table, 5-step process, testimonials, resources, FAQ, closing CTA |
| `independentPracticesPage.ts` | `/independent-practices` — hero, feature grid, why blocks, stats, platform cards, testimonials, case studies, closing CTA |

## Reusable layout

- **`PageSection.astro`** — `variant="default" \| "alt" \| "warm" \| "muted" \| "dark"` + slots.
- **`FooterColumn.astro`** — driven by `footer.ts`.
