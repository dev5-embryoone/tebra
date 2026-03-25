/** Family Medicine specialty page — mirrors tebra.com/specialties/family-medicine */

export const fmMeta = {
  title: "Family Medicine - EmbryoOne",
  description:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform for family medicine practices.",
} as const;

export const fmBreadcrumb = [
  { label: "EmbryoOne", href: "/" },
  { label: "Specialties", href: "/specialties/family-medicine" },
  { label: "Family Medicine", href: "/specialties/family-medicine" },
] as const;

export const fmHero = {
  eyebrow: "EmbryoOne for family medicine practices",
  title: "One family of products for your practice needs",
  subtitle:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform.",
  primaryCta: { label: "See a demo", href: "/demo" },
  secondaryCta: { label: "Explore for Free", href: "/sign-up" },
} as const;

export type FmFeature = {
  title: string;
  description: string;
};

export const fmFeaturesIntro = {
  title: "Why family medicine succeeds with EmbryoOne",
} as const;

export const fmFeatures: FmFeature[] = [
  {
    title: "Reach new patients",
    description:
      "Make it easy for patients to find your family practitioners with search engine optimization and targeted digital marketing. Make a positive first impression with automated reputation management and refined online profiles so they can connect with your practice.",
  },
  {
    title: "Make patients feel welcome",
    description:
      "Deliver modern convenience by making it fast to book and easy to remember appointments, get answers to questions, review records, and pay bills. Back-end automation leads to front-end convenience with no extra effort from you.",
  },
  {
    title: "Stay focused on the care",
    description:
      "Spend less time on tools. Our certified, cloud-based EHR integrates scheduling, clinical notes, flowsheets, eRx, eLabs, telehealth, and more — all in one place. Use our mobile app to deliver secure, on-the-go care.",
  },
  {
    title: "Get paid, the easy way",
    description:
      "Remove frustration from medical billing and payments. Patients can understand and pay bills easily with EmbryoOne’s billing and payments solutions. Save time with automation and improve your revenue cycle.",
  },
  {
    title: "Dive into your data",
    description:
      "Get instant access to insights on every area of your practice, including practice growth and revenue. Stay secure with HIPAA-compliant cloud storage and explore your data your way through APIs that integrate with third-party applications.",
  },
  {
    title: "Easy implementation",
    description:
      "Make the switch without slowing your practice down. EmbryoOne makes it easy to get started with no IT knowledge or heavy lifting. Our onboarding, training, and ongoing support will be with you every step of the way.",
  },
] as const;

export const fmWhyIntro = {
  eyebrow: "Why EmbryoOne?",
  title: "All parts of your family medicine practice in one platform",
  subtitle: "One solution for everything",
} as const;

export const fmWhyBlocks: FmFeature[] = [
  {
    title: "One solution for everything",
    description:
      "Stop juggling multiple marketing, communications, care delivery, billing, and payment tools. With EmbryoOne, deliver better care to more clients with all your practice operations and growth tools in one place.",
  },
  {
    title: "Workflows automated and quickly implemented",
    description:
      "Save time and streamline with intelligent automation across your workflows. Free your staff to focus on practice success and patient care, rather than inefficient manual tasks.",
  },
  {
    title: "Grow as you go",
    description:
      "Focus on the bigger picture with analytics as part of your daily workflow. Intuitively uncover growth and revenue insights you can act on to improve your practice.",
  },
] as const;

export const fmChallengesIntro = {
  title: "EmbryoOne understands your toughest challenges",
} as const;

export const fmStats = [
  { value: "0%", label: "say low reimbursement rates threaten independent practices" },
  { value: "0%", label: "say reduced administrative burdens would support independence" },
  { value: "0%", label: "say “overhead” is a primary threat to growth" },
] as const;

export const fmMidCta = {
  kicker: "Family medicine needs it all",
  title: "See how EmbryoOne can help your practice grow and transform in our new era of healthcare.",
  ctaLabel: "Show me now",
  ctaHref: "/demo",
} as const;

export const fmPlatformIntro = {
  eyebrow: "The complete OS for family medicine",
  title: "Powering the family medicine practice of the future",
  subtitle:
    "From new patient acquisition and care delivery to patient experience and billing, stay on top of everything your practice and patients need.",
} as const;

export const fmPlatformCards = [
  {
    title: "Practice Marketing",
    description:
      "Boost your digital presence, attract potential patients, and welcome them with a secure, online front door.",
    href: "/marketing",
    cta: "Get a demo",
  },
  {
    title: "Patient Experience",
    description:
      "Engage patients and keep them actively involved in their healthcare. Minimize no-shows and protect your revenue at the same time.",
    href: "/patient-experience",
    cta: "Learn how",
  },
  {
    title: "Care Delivery",
    description:
      "Transform your care delivery with our modern, certified EHR. Drive smarter decisions and improve patient outcomes for your family practice.",
    href: "/ehr",
    cta: "Schedule a demo",
  },
  {
    title: "Billing & Payments",
    description:
      "Enhance your financial health and efficiency. Easily navigate the claims process and optimize your revenue cycle for a better bottom line.",
    href: "/billing-payments",
    cta: "See for yourself",
  },
] as const;

export const fmTestimonialsIntro = {
  title: "Providers and patients have spoken",
} as const;

export const fmTestimonials = [
  {
    quote:
      "Part of my success is because of EmbryoOne. It's just the way that they give me the support, with everything, every step of the way.",
    author: "Paul Ordonez, CEO",
    org: "Elite Medical Revenue Service",
  },
  {
    quote:
      "This is the best billing / EHR program in the world…everything is so easy to use and they offer so much training that you will never be left out of the billing world.",
    author: "Rusha Gardner, Billing Manager",
    org: "RLG Billing",
  },
  {
    quote:
      "I needed a company to handle my SEO, website, online patient booking…just putting it all in one place. It was the best money I’ve spent on the business.",
    author: "Dr. Nicole Mermet, Dentist and Owner",
    org: "Metropolitan Dental Care",
  },
] as const;

export const fmCaseStudiesIntro = {
  title: "Independent Family Practice case studies",
  ctaLabel: "See all case studies",
  ctaHref: "/case-studies",
} as const;

export const fmCaseStudySlugs = ["optimal-psychiatry", "celebrations-speech-group", "advantum-health"] as const;

export const fmBottomCta = {
  title: "See why EmbryoOne is the choice for family medicine",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;

