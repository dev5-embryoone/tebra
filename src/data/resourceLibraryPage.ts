/**
 * Resource library hub — mirrors tebra.com/resource-library structure.
 * Asset paths for icons are resolved in the page (webinar + workbook SVGs).
 */
export const resourceLibraryMeta = {
  title: "Resource library | Tebra",
  description:
    "Browse webinars, ebooks, checklists, and other tools to learn from real-world practice experience and apply proven strategies.",
};

export const resourceLibraryHero = {
  title: "Explore the Tebra resource library",
  subtitle:
    "Browse webinars, ebooks, checklists, and other tools to learn from real-world practice experience and apply proven strategies to improve care and operations.",
};

/** Hero carousel tiles (Tebra resource library) — webinar + workbook SVGs + inline illustrations */
export const resourceCategoryCarousel = [
  { id: "webinars", label: "Webinars", href: "#medical-billing-companies", illustration: "webinar" as const },
  { id: "ebooks", label: "eBooks and Workbooks", href: "#practice-favorites", illustration: "workbook" as const },
  { id: "tools", label: "Interactive Tools", href: "#interactive-tools", illustration: "tools" as const },
  { id: "reports", label: "Reports", href: "#practice-favorites", illustration: "reports" as const },
  { id: "checklists", label: "Checklists", href: "#billing-payments", illustration: "checklists" as const },
] as const;

/** Legacy anchor chips (optional secondary nav) */
export const resourceFormatFilters = [
  { label: "Webinars", href: "#medical-billing-companies" },
  { label: "eBooks and Workbooks", href: "#practice-favorites" },
  { label: "Interactive Tools", href: "#interactive-tools" },
  { label: "Reports", href: "#practice-favorites" },
  { label: "Checklists", href: "#billing-payments" },
  { label: "Infographics", href: "#patient-experience" },
] as const;

export const resourceTopicPills = [
  { label: "Patient Experience", href: "#patient-experience" },
  { label: "EHR", href: "#ehr" },
  { label: "Billing & Payments", href: "#billing-payments" },
  { label: "Medical Billing Companies", href: "#medical-billing-companies" },
] as const;

/** Portrait photo for Billing & Payments “dark card” row */
export type ResourceDarkPortrait =
  | "arjun"
  | "colin"
  | "andrea"
  | "kevin"
  | "kyle"
  | "amanda"
  | "fabius"
  | "testimonial1"
  | "inhouseBiller";

export type ResourceItem = {
  type: string;
  title: string;
  href: string;
  cta: string;
  /** Optional raster/photo thumb */
  imageKey?: "webinarThumb" | "report1" | "report2" | "about" | "marketing" | "billing" | "ehr";
  /** Use built-in icon slot: workbook | webinar */
  icon?: "workbook" | "webinar";
  /** Full-bleed portrait card (resource library billing section) */
  darkPortrait?: ResourceDarkPortrait;
};

/** Full-width split hero in Practice favorites */
export const practiceFavoriteFeatured = {
  type: "Workbook",
  title: "Beat medical billing challenges in 2026",
  href: "/billing-payments",
  cta: "Download",
} as const;

/** Two report tiles + EHR calculator tile row below featured */
export const practiceFavoritesSecondary: ResourceItem[] = [
  {
    type: "Report",
    title: "Patient perspective survey: Meet the new rules of patient loyalty",
    href: "/patient-experience",
    cta: "Download",
    imageKey: "report1",
  },
  {
    type: "Report",
    title: "The State of the Independent Practice 2026",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
  },
];

export const patientExperienceResources: ResourceItem[] = [
  {
    type: "Guide",
    title: "How to make reviews your greatest asset",
    href: "/marketing/practice-websites",
    cta: "Download",
    imageKey: "marketing",
  },
  {
    type: "Report",
    title: "Ways practices are losing patients without knowing it",
    href: "/patient-experience",
    cta: "Download",
    imageKey: "report1",
  },
  {
    type: "Guide",
    title: "3 ways to make patients feel seen",
    href: "/patient-experience",
    cta: "Download",
    imageKey: "webinarThumb",
  },
  {
    type: "Report",
    title: "2025 report: the truth about no-shows",
    href: "/scheduling",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Infographic",
    title: "Why patients don’t show: a demographic view",
    href: "/patient-experience",
    cta: "Download",
    imageKey: "marketing",
  },
];

export const ehrResources: ResourceItem[] = [
  {
    type: "Guide",
    title: "How independent practices build stability without adding hours",
    href: "/case-studies",
    cta: "Download",
    imageKey: "about",
  },
  {
    type: "Guide",
    title: "3 data-backed plays for faster days and cleaner claims",
    href: "/ehr",
    cta: "Download",
    imageKey: "ehr",
  },
  {
    type: "Workbook",
    title: "2026 independence assessment: Built to thrive",
    href: "/ehr-calculator",
    cta: "Download",
    icon: "workbook",
  },
  {
    type: "Infographic",
    title: "2026 independent practice survey benchmarks",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Guide",
    title: "The honest guide to AI for private practices",
    href: "/ai",
    cta: "Download",
    imageKey: "ehr",
  },
];

export const billingPaymentsResources: ResourceItem[] = [
  {
    type: "Checklist",
    title: "7 low-lift ways billing companies are protecting margins",
    href: "/for-billing-companies",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "arjun",
  },
  {
    type: "Guide",
    title: "HL7 integration: regain billing control without forcing migrations",
    href: "/billing-payments",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "colin",
  },
  {
    type: "Guide",
    title: "30-60-90 Day automation roadmap",
    href: "/billing-payments/robotic-process-automation",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "andrea",
  },
  {
    type: "Checklist",
    title: "Denial-proof your claims: 7 ways to achieve 95% FPAR",
    href: "/billing-payments/electronic-claim-submission",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "kevin",
  },
  {
    type: "Guide",
    title: "How to grow revenue without increasing overhead",
    href: "/billing-payments",
    cta: "Download",
    imageKey: "report1",
    darkPortrait: "kyle",
  },
  {
    type: "Checklist",
    title: "Training your team for automation success",
    href: "/billing-payments/robotic-process-automation",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "amanda",
  },
  {
    type: "Guide",
    title: "Medical biller’s guide to seamless system integration",
    href: "/billing-payments",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "fabius",
  },
  {
    type: "Infographic",
    title: "Demystifying Robotic Process Automation",
    href: "/billing-payments/robotic-process-automation",
    cta: "Download",
    imageKey: "ehr",
    darkPortrait: "testimonial1",
  },
  {
    type: "Report",
    title: "Medical billers triple threat",
    href: "/for-billing-companies",
    cta: "Download",
    imageKey: "report2",
    darkPortrait: "inhouseBiller",
  },
];

export const medicalBillingCompaniesResources: ResourceItem[] = [
  {
    type: "Webinar",
    title: "Getting paid: Stop hidden revenue leaks in your medical billing",
    href: "/webinars",
    cta: "Watch now",
    icon: "webinar",
  },
  {
    type: "Guide",
    title: "5 ways to stop denials in their tracks",
    href: "/billing-payments/electronic-claim-submission",
    cta: "Download",
    imageKey: "billing",
  },
  {
    type: "Report",
    title: "Medical billers triple threat",
    href: "/for-billing-companies",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Guide",
    title: "Medical biller’s guide to seamless system integration",
    href: "/billing-payments",
    cta: "Download",
    imageKey: "billing",
  },
  {
    type: "Video",
    title: "What is outsourcing, offshoring, nearshoring, and home-shoring for medical billers",
    href: "/webinars",
    cta: "Watch now",
    icon: "webinar",
  },
  {
    type: "Infographic",
    title: "Common causes of billing denials",
    href: "/billing-payments",
    cta: "Download",
    imageKey: "billing",
  },
];

/** Coral banner above the 3-up link cards */
export const resourceLibraryBillingCalculatorBanner = {
  eyebrow: "Billing calculator",
  title: "What’s holding back your revenue?",
  description:
    "Find out how much revenue your practice might be missing — and how better billing could improve your collections.",
  cta: "Run the numbers",
  href: "/billing-payments/billing-calculator",
} as const;

/** Blog / Glossary / Tool tiles (Tebra “More ways” row) */
export const resourceLibraryLinkTiles = [
  {
    variant: "light" as const,
    label: "Blog",
    title: "The Intake",
    description: "Used by 30,000+ healthcare professionals to solve real practice problems.",
    cta: "Visit blog",
    href: "/theintake",
    icon: "blog" as const,
  },
  {
    variant: "dark" as const,
    label: "Glossary",
    title: "Top ICD-10-CM codes",
    description: "A library dedicated to ICD-10-CM codes for independent healthcare providers.",
    cta: "Learn more",
    href: "/documentation",
    icon: "book" as const,
  },
  {
    variant: "sage" as const,
    label: "Tool",
    title: "Compare your practice for free",
    description: "Instantly compare your practice with others in your locality and specialty.",
    cta: "Compare",
    href: "/competitive-scanner",
    icon: "network" as const,
  },
] as const;

export const resourceLibraryMidCta = {
  title: "Deliver exceptional care with Tebra’s streamlined patient experience solutions.",
  ctaLabel: "Take a tour",
  href: "/product-tour",
};

export const resourceLibraryBottomCta = {
  title: "More than 42,000 practices in the United States are growing with Tebra. Now it's your turn.",
  subtitle: "Schedule a customized demo",
  bullets: [
    { icon: "growth" as const, text: "Pinpoint growth opportunities" },
    { icon: "presence" as const, text: "Spot gaps in your online presence" },
    { icon: "commitment" as const, text: "No pressure, no commitment" },
  ],
  primary: { label: "Get a demo", href: "/demo" },
  secondary: { label: "Explore for free", href: "/sign-up" },
} as const;
