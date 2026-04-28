/**
 * Resource library hub — mirrors tebra.com/resource-library structure.
 * Asset paths for icons are resolved in the page (webinar + workbook SVGs).
 */
export const resourceLibraryMeta = {
  title: "Resource Library | EmbryoOne",
  description:
    "Browse IVF-focused webinars, guides, checklists, and tools to improve lab consistency, clinical coordination, and operational performance.",
};

export const resourceLibraryHero = {
  title: "Explore the EmbryoOne resource library",
  subtitle:
    "Access practical resources for embryologists, doctors, and clinic leaders to streamline IVF workflows, strengthen traceability, and improve outcomes.",
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
  { label: "Lab Workflows", href: "#patient-experience" },
  { label: "Clinical Coordination", href: "#ehr" },
  { label: "Operational Reporting", href: "#billing-payments" },
  { label: "Clinic Leadership", href: "#medical-billing-companies" },
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
  title: "Build a high-performing IVF workflow in 2026",
  href: "/platform",
  cta: "Download",
} as const;

/** Two report tiles + EHR calculator tile row below featured */
export const practiceFavoritesSecondary: ResourceItem[] = [
  {
    type: "Report",
    title: "IVF patient journey insights: reducing delays across treatment cycles",
    href: "/products/patient-experience",
    cta: "Download",
    imageKey: "report1",
  },
  {
    type: "Report",
    title: "State of IVF Operations 2026",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
  },
];

export const patientExperienceResources: ResourceItem[] = [
  {
    type: "Guide",
    title: "How IVF clinics improve communication before and after key milestones",
    href: "/products/patient-experience",
    cta: "Download",
    imageKey: "marketing",
  },
  {
    type: "Report",
    title: "Where IVF clinics lose workflow efficiency and how to fix it",
    href: "/platform",
    cta: "Download",
    imageKey: "report1",
  },
  {
    type: "Guide",
    title: "3 ways to improve cycle visibility for patients and care teams",
    href: "/products/patient-experience",
    cta: "Download",
    imageKey: "webinarThumb",
  },
  {
    type: "Report",
    title: "2025 IVF operations report: reducing avoidable coordination gaps",
    href: "/platform",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Infographic",
    title: "How communication timing impacts IVF patient adherence",
    href: "/products/patient-experience",
    cta: "Download",
    imageKey: "marketing",
  },
];

export const ehrResources: ResourceItem[] = [
  {
    type: "Guide",
    title: "How IVF teams improve decision speed without increasing workload",
    href: "/case-studies",
    cta: "Download",
    imageKey: "about",
  },
  {
    type: "Guide",
    title: "3 data-backed plays for faster cycle decisions and cleaner handoffs",
    href: "/products/ehr",
    cta: "Download",
    imageKey: "ehr",
  },
  {
    type: "Workbook",
    title: "2026 IVF readiness assessment: built for scale",
    href: "/platform",
    cta: "Download",
    icon: "workbook",
  },
  {
    type: "Infographic",
    title: "2026 IVF clinic benchmark snapshot",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Guide",
    title: "Practical guide to AI-assisted embryo evaluation",
    href: "/ai",
    cta: "Download",
    imageKey: "ehr",
  },
];

export const billingPaymentsResources: ResourceItem[] = [
  {
    type: "Checklist",
    title: "7 ways clinics improve IVF operations with less manual overhead",
    href: "/solutions/clinic-admin",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "arjun",
  },
  {
    type: "Guide",
    title: "System integration playbook for connected IVF operations",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "colin",
  },
  {
    type: "Guide",
    title: "30-60-90 day IVF automation roadmap",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "andrea",
  },
  {
    type: "Checklist",
    title: "Standardize high-risk lab checkpoints in 7 steps",
    href: "/solutions/lab-traceability",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "kevin",
  },
  {
    type: "Guide",
    title: "Scale IVF cycle volume without operational burnout",
    href: "/solutions/clinic-admin",
    cta: "Download",
    imageKey: "report1",
    darkPortrait: "kyle",
  },
  {
    type: "Checklist",
    title: "Train teams for SOP-aligned IVF automation success",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "amanda",
  },
  {
    type: "Guide",
    title: "Guide to seamless lab-clinic system connectivity",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
    darkPortrait: "fabius",
  },
  {
    type: "Infographic",
    title: "Demystifying workflow automation in IVF clinics",
    href: "/platform",
    cta: "Download",
    imageKey: "ehr",
    darkPortrait: "testimonial1",
  },
  {
    type: "Report",
    title: "Three growth levers for modern IVF clinics",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
    darkPortrait: "inhouseBiller",
  },
];

export const medicalBillingCompaniesResources: ResourceItem[] = [
  {
    type: "Webinar",
    title: "Driving IVF growth with connected operations and data visibility",
    href: "/webinars",
    cta: "Watch now",
    icon: "webinar",
  },
  {
    type: "Guide",
    title: "5 ways to reduce operational errors across lab workflows",
    href: "/solutions/lab-traceability",
    cta: "Download",
    imageKey: "billing",
  },
  {
    type: "Report",
    title: "Three growth levers for modern IVF clinics",
    href: "/resources",
    cta: "Download",
    imageKey: "report2",
  },
  {
    type: "Guide",
    title: "Guide to connected data across clinical and lab teams",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
  },
  {
    type: "Video",
    title: "How leading IVF clinics structure teams for operational consistency",
    href: "/webinars",
    cta: "Watch now",
    icon: "webinar",
  },
  {
    type: "Infographic",
    title: "Common causes of IVF workflow delays",
    href: "/platform",
    cta: "Download",
    imageKey: "billing",
  },
];

/** Coral banner above the 3-up link cards */
export const resourceLibraryBillingCalculatorBanner = {
  eyebrow: "Operations snapshot",
  title: "What is slowing your IVF workflows?",
  description:
    "Estimate where coordination, documentation, and reporting friction may be limiting your clinic's throughput.",
  cta: "View checklist",
  href: "/platform",
} as const;

/** Blog / Glossary / Tool tiles (Tebra “More ways” row) */
export const resourceLibraryLinkTiles = [
  {
    variant: "light" as const,
    label: "Blog",
    title: "EmbryoOne Insights",
    description: "Perspectives from IVF operations, embryology, and care teams.",
    cta: "Visit blog",
    href: "/resources",
    icon: "blog" as const,
  },
  {
    variant: "dark" as const,
    label: "Glossary",
    title: "IVF Workflow Glossary",
    description: "Key terms and operational definitions used across lab and clinic teams.",
    cta: "Learn more",
    href: "/documentation",
    icon: "book" as const,
  },
  {
    variant: "sage" as const,
    label: "Tool",
    title: "Clinic readiness checklist",
    description: "Evaluate your current workflows for traceability, speed, and coordination.",
    cta: "Start now",
    href: "/platform",
    icon: "network" as const,
  },
] as const;

export const resourceLibraryMidCta = {
  title: "Deliver exceptional IVF care with EmbryoOne’s connected workflow platform.",
  ctaLabel: "Take a tour",
  href: "/product-tour",
};

export const resourceLibraryBottomCta = {
  title: "Modern IVF teams are scaling with EmbryoOne. Your clinic can too.",
  subtitle: "Schedule a customized demo",
  bullets: [
    { icon: "growth" as const, text: "Identify workflow and growth opportunities" },
    { icon: "presence" as const, text: "Find coordination and visibility gaps" },
    { icon: "commitment" as const, text: "No pressure, no commitment" },
  ],
  primary: { label: "Get a demo", href: "/demo" },
  secondary: { label: "Explore for free", href: "/sign-up" },
} as const;
