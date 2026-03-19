/** Primary Care specialty — mirrors https://www.tebra.com/specialties/primary-care */

export const pcMeta = {
  title: "Primary Care - Tebra",
  description:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform for primary care practices.",
} as const;

export const pcBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Specialties", href: "/specialties/family-medicine" },
  { label: "Primary Care", href: "/specialties/primary-care" },
] as const;

export const pcHero = {
  eyebrow: "Tebra for primary care practices",
  title: "The platform for all your practice needs",
  subtitle:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform.",
  primaryCta: { label: "See a demo", href: "/demo" },
  secondaryCta: { label: "Explore for Free", href: "/sign-up" },
} as const;

export const pcAccordionIntro = {
  title: "Why primary care thrives with Tebra",
} as const;

export type PcAccordionCopy = {
  title: string;
  body: string;
};

export const pcAccordionItems: PcAccordionCopy[] = [
  {
    title: "Reach new patients",
    body:
      "69% of patients saw a primary care doctor in the past 12 months. Make it easy for them to find you — and choose you once they do — with Tebra. Get search engine optimization and marketing so patients can find you online, automated reputation management so they like what they see, and refined profiles so they can connect with your practice.",
  },
  {
    title: "Connect with patients",
    body:
      "Quality care is non-negotiable for primary care practices. Nearly 80% of patients would switch doctors for greater convenience. Tebra delivers it by making it a cinch to book and remember appointments, get your answers to their questions, review their records, and pay their bills. Back-end automation leads to front-end convenience with no extra effort from you.",
  },
  {
    title: "Focus on care",
    body:
      "Spend less time on tools. Our certified, cloud-based EHR integrates provider scheduling, clinical notes, flowsheets, eRx, eLabs, telehealth, and more — all in one place. Use our mobile app to deliver secure, on-the-go care.",
  },
  {
    title: "Get paid, faster",
    body:
      "Remove frustration from medical billing and payments. Patients can understand and pay bills easily with Tebra’s billing and payments solutions. Manage your practice intuitively, save time with automation, and improve your revenue cycle.",
  },
  {
    title: "Dive into your data",
    body:
      "Good data drives practice growth. Tebra gives you data and insights into every area of your primary care practice, including practice growth and revenue. Stay secure with HIPAA-compliant cloud storage and explore your data your way through APIs that integrate with third-party applications.",
  },
  {
    title: "Easy implementation",
    body:
      "Is your primary care practice burdened by a poor system but switching feels overwhelming? Tebra makes it easy to get started with no IT knowledge or heavy lifting. Our onboarding, training, and ongoing support will be with you every step of the way and mean your primary care practice won’t miss a beat.",
  },
];

export const pcWhyIntro = {
  eyebrow: "Why Tebra?",
  title: "Connect every aspect of your primary care practice",
  subtitle: "",
} as const;

export const pcWhyBlocks = [
  {
    title: "Everything in one elegant, unified platform",
    description:
      "Stop juggling multiple marketing, communications, care delivery, billing, and payment tools. With Tebra, deliver better care to more clients with all your practice operations and growth tools in one place.",
  },
  {
    title: "Automated end-to-end workflows, easily implemented",
    description:
      "Save time and streamline with intelligent automation across your workflows. Free your staff to focus on your practice success rather than on inefficient manual tasks.",
  },
  {
    title: "Business insights that stimulate growth",
    description:
      "Focus on the bigger picture with analytics as part of your daily workflow. Intuitively uncover growth and revenue insights that you can act on to improve your business.",
  },
] as const;

export const pcChallengesIntro = {
  title: "Tebra understands your toughest challenges",
} as const;

export const pcStats = [
  { value: "68%", label: "say low reimbursement rates threaten independent practices" },
  { value: "68%", label: "say reduced administrative burdens would support independence" },
  { value: "68%", label: "say “overhead” is a primary threat to growth" },
] as const;

export const pcMidCta = {
  kicker: "Primary care deserves better",
  title: "See how Tebra can help your practice grow and transform in our new era of healthcare.",
  ctaLabel: "Show me now",
  ctaHref: "/demo",
} as const;

export const pcPlatformIntro = {
  eyebrow: "The complete operating system for independent primary practices",
  title: "Powering the primary care practice of the future",
  subtitle:
    "From new patient acquisition and care delivery to patient experience and billing, stay on top of everything your practice and patients need.",
} as const;

export const pcPlatformCards = [
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
      "Transform your care delivery with our modern, certified EHR. Drive smarter decisions and improve patient outcomes.",
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

export const pcTestimonialsIntro = {
  title: "See why Tebra is trusted by practices like yours",
} as const;

export const pcTestimonials = [
  {
    quote:
      "Part of my success is because of Tebra. It's just the way that they give me the support, with everything, every step of the way.",
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

export const pcCaseStudiesIntro = {
  title: "Independent primary care practice case studies",
  ctaLabel: "See all case studies",
  ctaHref: "/case-studies",
} as const;

/** Featured cards — primary / family-style independent practices */
export const pcCaseStudySlugs = ["centralmed-urgent-care", "dr-mary-lee", "celebrations-speech-group"] as const;

export const pcBottomCta = {
  title: "See why Tebra is the choice for primary care",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
