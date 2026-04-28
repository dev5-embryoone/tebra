/**
 * Content + props for `/demo` — EmbryoOne demo page
 */

export const demoPageMeta = {
  title: "Book an EmbryoOne Demo | IVF Lab and Clinical Platform",
  description:
    "Book a personalized EmbryoOne demo to see how your IVF clinic can unify lab workflow, embryo tracking, and clinical operations.",
} as const;

export const demoHero = {
  trustLines: [
    "Built for modern IVF clinics",
    "Trusted by embryologists, clinicians, and coordinators",
  ] as const,
  title: "Get a personalized demo of EmbryoOne",
  subtitle:
    "See how EmbryoOne connects IVF lab activity, embryo data, and clinical workflows in one platform.",
  bullets: [
    "Review workflows tailored to your clinic's processes",
    "See real-time embryo and cycle visibility across teams",
    "Explore reporting, compliance support, and integrations",
  ] as const,
  primaryCta: { label: "Get a sneak peek", href: "/product-tour" } as const,
  leadForm: {
    heading: "Request your demo",
    subheading: "Tell us about your clinic, and we will tailor your EmbryoOne walkthrough.",
    fields: [
      { name: "firstName", label: "First name", type: "text", autocomplete: "given-name" },
      { name: "lastName", label: "Last name", type: "text", autocomplete: "family-name" },
      { name: "email", label: "Email", type: "email", autocomplete: "email" },
      { name: "phone", label: "Phone", type: "tel", autocomplete: "tel" },
      { name: "practice", label: "Clinic name", type: "text", autocomplete: "organization" },
    ] as const,
    submitLabel: "Schedule my demo",
    footnote:
      "By submitting, you agree to be contacted about EmbryoOne. You can unsubscribe at any time.",
  } as const,
} as const;

export const demoHowItWorks = {
  eyebrow: "HOW IT WORKS",
  title: "See EmbryoOne in action",
  description:
    "Explore key workflows and see how EmbryoOne supports your team from cycle setup to outcome reporting.",
} as const;

export const demoTourCards = [
  {
    title: "IVF lab workflow",
    description: "Track lab events, chain of custody, and embryo development in one timeline.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
  {
    title: "Clinical coordination",
    description: "Align providers and coordinators with accurate, shared cycle and patient context.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
  {
    title: "Reporting and insights",
    description: "Monitor operational performance, outcomes, and workload across teams.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
] as const;

export const demoPillars = {
  title: "Three pillars of the EmbryoOne platform",
  items: [
    {
      badge: "LAB",
      title: "Run a connected IVF lab",
      description:
        "Track every critical lab step with structured workflows and complete visibility so teams can work with confidence and consistency.",
    },
    {
      badge: "CLINICAL",
      title: "Coordinate care with clarity",
      description:
        "Keep clinical and lab teams aligned with shared data, reducing handoffs, duplicate entry, and communication gaps.",
    },
    {
      badge: "INSIGHTS",
      title: "Turn data into better decisions",
      description:
        "Use reporting and analytics to monitor outcomes, optimize operations, and support continuous improvement across your clinic.",
    },
  ] as const,
} as const;

export const demoTrustSection = {
  title: "Why IVF teams choose EmbryoOne",
  cards: [
    {
      brand: "faster lab handoffs",
      statBig: "40%",
      statSub: "reduction in manual coordination tasks",
      specialty: "IVF Operations",
      location: "Multi-team workflows",
      providers: "Lab + clinical staff",
    },
    {
      brand: "clear embryo visibility",
      statBig: "100%",
      statSub: "centralized embryo and cycle records",
      specialty: "Embryology",
      location: "Unified data layer",
      providers: "All active cycles",
    },
    {
      brand: "better reporting readiness",
      statBig: "24/7",
      statSub: "access to operational dashboards",
      specialty: "Clinic Leadership",
      location: "Any device",
      providers: "Leadership and admin teams",
    },
  ] as const,
} as const;

export const demoBottomCta = {
  title: "See how EmbryoOne can fit your clinic's workflow.",
  subtitle: "Schedule a customized demo",
  bullets: [
    { icon: "growth" as const, text: "Map your current process to EmbryoOne workflows" },
    { icon: "presence" as const, text: "Identify opportunities to reduce manual effort" },
    { icon: "commitment" as const, text: "No-pressure walkthrough with your team" },
  ],
  primary: { label: "Get a demo", href: "/demo#demo-form" },
  secondary: { label: "Take a product tour", href: "/product-tour" },
} as const;

export const demoClosingCta = {
  title: "Unify IVF lab and clinical workflows with EmbryoOne",
  description: "Built for teams that need precision, visibility, and efficiency at every step.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo#demo-form",
  secondaryCtaLabel: "Take Product Tour",
  secondaryCtaHref: "/product-tour",
} as const;
