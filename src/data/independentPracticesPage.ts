/** Independent Practices page — mirrors tebra.com/independent-practices structure */

export const ipMeta = {
  title: "For Independent Practices - Growth Platform & Management Software Solutions | Tebra",
  description:
    "Experience digital tools and support built to help independent practices attract new patients, deliver modern care, get paid quickly, and operate efficiently.",
} as const;

export const ipBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Independent Practices", href: "/independent-practices" },
] as const;

export const ipHero = {
  eyebrow: "Tebra for independent practices",
  title: "The platform for all your practice needs",
  subtitle:
    "Experience digital tools and support built to help independent practices attract new patients, deliver modern care, get paid quickly, and operate efficiently.",
  primaryCta: { label: "Get a demo", href: "/demo" },
  secondaryCta: { label: "Explore the product", href: "/product-tour" },
} as const;

export type IpFeature = {
  title: string;
  description: string;
};

export const ipFeaturesIntro = {
  title: "Enabling independent practices to thrive",
} as const;

export const ipFeatures: IpFeature[] = [
  {
    title: "Reach new patients",
    description:
      "Make a strong first impression and nurture patients with a responsive, SEO-optimized website, reputation management, refined web profiles, and social media management.",
  },
  {
    title: "Connected patient experience",
    description:
      "Empower your staff with online scheduling, appointment reminders, digital intake, text messaging, and a secure patient portal.",
  },
  {
    title: "Modern care delivery",
    description:
      "Drive clinical efficiency with a certified, cloud-based EHR connected across scheduling, notes, prescriptions, labs, telehealth, and patient insights.",
  },
  {
    title: "Speed to revenue",
    description:
      "Unlock revenue cycle efficiency with billing and payments that streamline claims, automation, reconciliation, and modern payment methods.",
  },
  {
    title: "Better data management",
    description:
      "Reduce operating costs and make smarter decisions with practice growth analytics, HIPAA-compliant data storage, and APIs for integrations.",
  },
  {
    title: "Implementation made easy",
    description:
      "Switch confidently with a dedicated onboarding manager, best-in-class training, and enrollment support so your practice doesn’t miss a beat.",
  },
];

export const ipWhyIntro = {
  eyebrow: "Why Tebra?",
  title: "A connected practice that makes sense",
  subtitle: "Everything your practice needs in an elegant, unified platform.",
} as const;

export const ipWhyBlocks: IpFeature[] = [
  {
    title: "Everything your practice needs in an elegant, unified platform",
    description:
      "Acquire new patients with marketing automation, deliver better care with a certified cloud EHR, provide exceptional patient experience tools, and get paid faster with billing and payments.",
  },
  {
    title: "Automated end-to-end workflows, easily implemented",
    description:
      "Intelligent automation streamlines everything from patient reach to post-appointment workflows, freeing staff for higher-impact work.",
  },
  {
    title: "Deeper business insights that promote growth",
    description:
      "Daily analytics help uncover the biggest opportunities across revenue, SEO, reputation management, and website performance.",
  },
];

export const ipStats = [
  { value: "90%", label: "of patients evaluate doctors online before booking" },
  { value: "80%", label: "of patients would switch doctors for more convenience" },
  { value: "50%", label: "of providers can’t collect a patient balance within 30 days" },
] as const;

export const ipPlatformIntro = {
  title: "Powering the connected practice of the future",
  subtitle:
    "From new patient acquisition and care delivery to patient experience and billing, stay on top of everything your practice and patients need.",
} as const;

export type IpPlatformCard = {
  title: string;
  description: string;
  href: string;
};

export const ipPlatformCards: IpPlatformCard[] = [
  {
    title: "Practice Growth",
    description:
      "Grow your practice through secure, customizable websites, search marketing tools, automated reputation management, refined web profiles, and social media management.",
    href: "/marketing",
  },
  {
    title: "Patient Experience",
    description:
      "Empower patients with convenient online scheduling, appointment reminders, secure messaging, digital intake forms, telehealth, and more.",
    href: "/patient-experience",
  },
  {
    title: "Care Delivery",
    description:
      "A modern, certified EHR solution with robust charting, documentation, histories, eRx, eLabs, and telehealth—giving you control of how you deliver care.",
    href: "/ehr",
  },
  {
    title: "Billing & Payments",
    description:
      "Enroll, submit, track, and reconcile claims with complete visibility into financial health—plus modern payment options that help you collect more, faster.",
    href: "/billing-payments",
  },
];

export type IpTestimonial = { quote: string; author: string; org: string };

export const ipTestimonialsIntro = {
  title: "Providers and patients have spoken",
} as const;

export const ipTestimonials: IpTestimonial[] = [
  {
    quote:
      "I needed a company to handle my SEO, website, online patient booking…just putting it all in one place. It was the best money I’ve spent on the business.",
    author: "Dr. Nicole Mermet",
    org: "Metropolitan Dental Care",
  },
  {
    quote:
      "Part of my success is because of Tebra. It’s the way they give me support, with everything, every step of the way.",
    author: "Paul Ordonez",
    org: "Elite Medical Revenue Service",
  },
  {
    quote:
      "This is the best billing/EHR program in the world…everything is so easy to use and they offer so much training that you will never be left out of the billing world.",
    author: "Rusha Gardner",
    org: "RLG Billing",
  },
];

export const ipCaseStudiesIntro = {
  title: "Independent practice case studies",
  ctaLabel: "View all case studies",
  ctaHref: "/case-studies",
} as const;

export const ipClosingCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;

