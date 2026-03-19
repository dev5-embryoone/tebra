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
| `familyMedicinePage.ts` | `/specialties/family-medicine` (via shared layout) |
| `primaryCarePage.ts` | `/specialties/primary-care` |
| `pediatricsPage.ts` | `/specialties/pediatrics` |
| `psychologyPage.ts` | `/specialties/psychology` (mental health & psychology) |
| `nursePractitionersPage.ts` | `/specialties/nurse-practitioners` |
| `electronicLabsPage.ts` | `/ehr-software/electronic-labs` |
| `patientPortalPage.ts` | `/patient-portal` (matches [Tebra patient portal](https://www.tebra.com/ehr-software/patient-portal)) |
| `onlineSchedulingPage.ts` | `/scheduling` (matches [Tebra online scheduling](https://www.tebra.com/patient-experience/online-scheduling)) |
| `telehealthPage.ts` | `/telehealth` and `/ehr-software/telehealth` ([Tebra telehealth](https://www.tebra.com/ehr-software/telehealth)) |
| `practiceWebsitesPage.ts` | `/marketing/practice-websites` ([Tebra practice websites](https://www.tebra.com/marketing/practice-websites)) |

**Product / EHR subpages:** Reuse `FeatureSplitHero`, `PageSection`, `ProductPageBreadcrumb`, `ProductTrustBand`, `ProductAlternatingFeature`, and `CTASection` (see `ehr-software/electronic-labs`). Telehealth also uses `ProductEhrSavingsTeaser`, `ProductResourceCardGrid`, `ProductDiscoverCtaBand`, and `TelehealthMarketingPage` (shared by `/telehealth` and `/ehr-software/telehealth`). Practice Websites uses `PracticeWebsitesRatingStrip`, `ProductComparePromoCard`, `PracticeStatShowcaseGrid`, and `PracticeWebsitesMarketingPage` (`/marketing/practice-websites`).

### Specialty landing pages (shared layout)

- **`SpecialtyLandingPage.astro`** — one template for Tebra-style specialty routes: hero, value prop (**accordion** or **feature grid**), “Why Tebra?” 3-up, stats + mid-CTA, 4 platform cards, testimonials, case studies, footer CTA.
- **`specialtyPageTypes.ts`** — `SpecialtyLandingConfig` type; each page builds `config` from `*Page.ts` + imported images + resolved case studies.
- **`specialtyWhyIcons.ts`** — SVG icons for the three “Why Tebra?” columns.

## Reusable layout

- **`PageSection.astro`** — `variant="default" \| "alt" \| "warm" \| "muted" \| "dark"` + slots.
- **`FooterColumn.astro`** — driven by `footer.ts`.
