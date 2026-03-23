/**
 * Content + props for `/demo` — aligned with https://www.tebra.com/demo
 */

export const demoPageMeta = {
  title: "Experience the All-in-One EHR Platform for Private Practices | Tebra",
  description:
    "Get a personalized demo of Tebra. Streamline practice operations, enhance patient care, and boost your bottom line.",
} as const;

export const demoHero = {
  trustLines: [
    "Leader in Medical Practice Management and Billing",
    "Trusted by 150,000 providers",
  ] as const,
  title: "Get a personalized demo of Tebra",
  subtitle:
    "Streamline practice operations, enhance patient care, and boost your bottom line.",
  bullets: [
    "Get tailored pricing information",
    "Explore our intuitive EHR and practice management software",
    "Discover how 42K+ practices have simplified their workflows",
  ] as const,
  primaryCta: { label: "Get a sneak peek", href: "/product-tour" } as const,
  leadForm: {
    heading: "Request your demo",
    subheading: "Tell us a bit about your practice — we’ll tailor your walkthrough.",
    fields: [
      { name: "firstName", label: "First name", type: "text", autocomplete: "given-name" },
      { name: "lastName", label: "Last name", type: "text", autocomplete: "family-name" },
      { name: "email", label: "Email", type: "email", autocomplete: "email" },
      { name: "phone", label: "Phone", type: "tel", autocomplete: "tel" },
      { name: "practice", label: "Practice name", type: "text", autocomplete: "organization" },
    ] as const,
    submitLabel: "Schedule my demo",
    footnote:
      "By submitting, you agree to be contacted about Tebra products. You can unsubscribe anytime.",
  } as const,
} as const;

export const demoHowItWorks = {
  eyebrow: "HOW IT WORKS",
  title: "See key features in action",
  description:
    "See how some of Tebra’s key features work in these self-guided tours.",
} as const;

export const demoTourCards = [
  {
    title: "EHR & clinical workflows",
    description: "Charting, e-prescribing, labs, and AI-powered documentation.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
  {
    title: "Billing & payments",
    description: "Claims, eligibility, patient collections, and reporting.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
  {
    title: "Patient experience",
    description: "Scheduling, intake, reminders, and messaging in one place.",
    ctaLabel: "Start tour",
    href: "/product-tour",
  },
] as const;

export const demoPillars = {
  title: "The 3 essential pillars of healthcare software",
  items: [
    {
      badge: "EHR",
      title: "Deliver quality care",
      description:
        "Tebra's EHR gives you a clear view of complete patient histories and prescriptions. You'll spend less time searching and more time caring, enhancing both practice efficiency and patient satisfaction.",
    },
    {
      badge: "EHR",
      title: "Collect payments faster, effortlessly.",
      description:
        "Simplified billing and payments. Managing insurance claims and patient payments becomes seamless, reducing admin time and boosting cash flow for your practice's financial health.",
    },
    {
      badge: "EHR",
      title: "Top off your quality care with a stellar experience",
      description:
        "Create an online experience as welcoming as your clinic. Effortless scheduling and clear communication reflect your care in every detail, encouraging happy patients to return and share their positive experiences.",
    },
  ] as const,
} as const;

export const demoTrustSection = {
  title: "This is why thousands of small — and medium-sized practices trust Tebra",
  cards: [
    {
      brand: "beverly hills optometry",
      statBig: "#1",
      statSub: "Google ranking",
      specialty: "Optometry",
      location: "Beverly Hills, CA",
      providers: "1 provider",
    },
    {
      brand: "allegra dental",
      statBig: "855%",
      statSub: "return on investment",
      specialty: "Dentistry",
      location: "Fairfax, VA",
      providers: "1 provider",
    },
    {
      brand: "healthy kids pediatrics",
      statBig: "258%",
      statSub: "more new patient appointments",
      specialty: "Pediatrics",
      location: "Long Island, NY",
      providers: "3 providers",
    },
  ] as const,
} as const;

export const demoBottomCta = {
  title: "More than 42,000 practices in the United States are growing with Tebra. Now it's your turn.",
  subtitle: "Schedule a customized demo",
  bullets: [
    { icon: "growth" as const, text: "Pinpoint growth opportunities" },
    { icon: "presence" as const, text: "Spot gaps in your online presence" },
    { icon: "commitment" as const, text: "No pressure, no commitment" },
  ],
  primary: { label: "Get a demo", href: "/demo#demo-form" },
  secondary: { label: "Explore for free", href: "/sign-up" },
} as const;

export const demoClosingCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo#demo-form",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
