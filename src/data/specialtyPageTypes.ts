/**
 * Shared shape for specialty landing pages (Family Medicine, Primary Care, Pediatrics, etc.).
 * Each specialty page imports its copy from `*Page.ts` and passes a resolved config into
 * `SpecialtyLandingPage.astro`.
 */
import type { CaseStudy } from "./caseStudies";

export type SpecialtyBreadcrumbItem = {
  label: string;
  href: string;
};

export type SpecialtyCta = {
  label: string;
  href: string;
};

export type SpecialtyHeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: SpecialtyCta;
  secondaryCta: SpecialtyCta;
  imageSrc: string;
  imageAlt: string;
  showRatingStrip?: boolean;
  showComplianceStrip?: boolean;
};

export type SpecialtyAccordionItem = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type SpecialtyValueAccordionSection = {
  mode: "accordion";
  accordionName: string;
  sectionTitle: string;
  items: SpecialtyAccordionItem[];
};

export type SpecialtyValueGridSection = {
  mode: "grid";
  sectionTitle: string;
  items: { title: string; description: string }[];
};

export type SpecialtyValueSection = SpecialtyValueAccordionSection | SpecialtyValueGridSection;

export type SpecialtyWhyBlock = {
  title: string;
  description: string;
};

export type SpecialtyWhyTebraConfig = {
  eyebrow: string;
  title: string;
  /** Optional subtitle under the main title */
  description?: string;
  blocks: SpecialtyWhyBlock[];
  /** Primary Care uses a serif, larger title */
  titleStyle?: "default" | "serif";
  /** Primary Care uses slightly more vertical rhythm */
  gridVariant?: "default" | "spacious";
};

export type SpecialtyStat = {
  value: string;
  label: string;
};

export type SpecialtyMidCtaConfig = {
  kicker: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
};

export type SpecialtyChallengesConfig = {
  title: string;
  stats: SpecialtyStat[];
  midCta: SpecialtyMidCtaConfig;
  /**
   * `overlay` — cream card overlapping the next section (Primary Care / Pediatrics).
   * `inline` — translucent card on dark background (Family Medicine).
   */
  midCtaStyle?: "overlay" | "inline";
  sectionPaddingClass?: string;
};

export type SpecialtyPlatformCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type SpecialtyPlatformConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: SpecialtyPlatformCard[];
  eyebrowClass?: string;
};

export type SpecialtyTestimonial = {
  quote: string;
  author: string;
  org: string;
};

export type SpecialtyCaseStudiesConfig = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  /** Resolved case study objects from the page (after slug lookup) */
  studies: CaseStudy[];
};

export type SpecialtyBottomCtaConfig = {
  title: string;
  /** Shown under the title in the closing CTA band */
  description?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export type SpecialtyTestimonialsSection = {
  title: string;
  /** e.g. “Real stories, real results” above the main testimonial heading */
  eyebrow?: string;
  items: SpecialtyTestimonial[];
};

export type SpecialtyLandingConfig = {
  meta: { title: string; description: string };
  breadcrumb: SpecialtyBreadcrumbItem[];
  hero: SpecialtyHeroConfig;
  valueSection: SpecialtyValueSection;
  whyTebra: SpecialtyWhyTebraConfig;
  challenges: SpecialtyChallengesConfig;
  platform: SpecialtyPlatformConfig;
  testimonials: SpecialtyTestimonialsSection;
  caseStudies: SpecialtyCaseStudiesConfig;
  bottomCta: SpecialtyBottomCtaConfig;
};
