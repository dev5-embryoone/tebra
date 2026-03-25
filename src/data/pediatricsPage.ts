/** Pediatrics specialty — mirrors https://www.tebra.com/specialties/pediatrics */

export const pediatricsMeta = {
  title: "Pediatrics - EmbryoOne",
  description:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform for pediatric practices.",
} as const;

export const pediatricsBreadcrumb = [
  { label: "EmbryoOne", href: "/" },
  { label: "Specialties", href: "/specialties/family-medicine" },
  { label: "Pediatrics", href: "/specialties/pediatrics" },
] as const;

export const pediatricsHero = {
  eyebrow: "EmbryoOne for pediatricians",
  title: "The platform for all your practice needs",
  subtitle:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform.",
  primaryCta: { label: "Get a demo", href: "/demo" },
  secondaryCta: { label: "Explore for Free", href: "/sign-up" },
} as const;

export const pediatricsAccordionIntro = {
  title: "Why pediatricians pick EmbryoOne",
} as const;

export const pediatricsAccordionItems = [
  {
    title: "Reach new patients",
    body:
      "Make it easy for patients’ parents and caregivers to find you — and choose your practice — with EmbryoOne. Get search engine optimization and marketing so prospective patients can find you online, automated reputation management so they like what they see, and refined profiles so they can connect with your practice.",
  },
  {
    title: "Stay connected with patients",
    body:
      "Caring for kids is everything. But almost 80% of patients would switch doctors for greater convenience. EmbryoOne delivers it by making it a cinch for parents to book and remember appointments, get answers to their questions, review their records, and pay their bills. Back-end automation leads to front-end convenience with no extra effort from you.",
  },
  {
    title: "Deliver custom care",
    body:
      "Spend less time on tools and more time with patients with EmbryoOne. Our certified, cloud-based EHR integrates provider scheduling, clinical notes, flowsheets, growth charts, eRx, eLabs, telehealth, and more — all in one place. Plus, use our mobile app to deliver secure, on-the-go care.",
  },
  {
    title: "Get paid",
    body:
      "Medical billing and payments can be frustrating for both providers and caregivers. Make it easy for the families you support to navigate their bills — and improve your profitability in the process — with EmbryoOne’s billing and payments. Manage your pediatric practice intuitively, save time with automation, and improve your revenue cycle.",
  },
  {
    title: "Dive into your data",
    body:
      "You need good data to make good decisions. EmbryoOne gives you data and insights into every area of your practice, including practice growth and revenue. Stay secure with HIPAA-compliant cloud storage and explore your data your way through APIs that integrate with third-party applications.",
  },
  {
    title: "Easy implementation",
    body:
      "Feeling overwhelmed by your current systems, but also by making a change? With EmbryoOne, you can get started in minutes, not weeks, with no IT knowledge or heavy lifting. Our onboarding, training, and ongoing support will be with you every step of the way and mean your practice won’t miss a beat.",
  },
] as const;

export const pediatricsWhyIntro = {
  eyebrow: "Why EmbryoOne?",
  title: "Pediatricians don’t have time for piecemeal solutions",
} as const;

export const pediatricsWhyBlocks = [
  {
    title: "Everything your practice needs in one place",
    description:
      "Stop juggling multiple marketing, communications, care delivery, billing, and payment tools. Focus on patients with all your practice operations and growth tools in one place.",
  },
  {
    title: "Automated workflows made for pediatricians",
    description:
      "Save time and streamline with intelligent automation across your workflows. Free your staff to focus on your practice success rather than on inefficient manual tasks.",
  },
  {
    title: "Grow your practice as your patients grow",
    description:
      "Focus on the bigger picture with analytics as part of your daily workflow. Intuitively uncover growth and revenue insights that you can act on to improve your business.",
  },
] as const;

export const pediatricsChallengesIntro = {
  title: "What’s on the mind of pediatricians",
} as const;

export const pediatricsStats = [
  { value: "68%", label: "say low reimbursement rates threaten independent practices" },
  { value: "68%", label: "say reduced administrative burdens would support independence" },
  { value: "65%", label: "say “overhead” is a primary threat to growth" },
] as const;

export const pediatricsMidCta = {
  kicker: "Set up your practice for long haul",
  title: "See how EmbryoOne can help your practice grow and transform in our new era of healthcare.",
  ctaLabel: "Schedule a consultation",
  ctaHref: "/demo",
} as const;

export const pediatricsPlatformIntro = {
  eyebrow: "The complete operating system for independent pediatric practices",
  title: "Powering the pediatric practice for today and tomorrow",
  subtitle:
    "From growth and patient experience to clinical operations and billing, combine all essential practice needs within a single platform.",
} as const;

export const pediatricsPlatformCards = [
  {
    title: "Practice Marketing",
    description:
      "Boost your digital presence, attract potential patients, and welcome them with a secure, online front door.",
    href: "/marketing",
    cta: "Learn more",
  },
  {
    title: "Patient Experience",
    description:
      "Engage patients and keep them actively involved in their healthcare. Minimize no-shows and protect your revenue at the same time.",
    href: "/patient-experience",
    cta: "Show me how",
  },
  {
    title: "Care Delivery",
    description:
      "Transform your care delivery with our modern, certified EHR. Drive smarter decisions and improve patient outcomes.",
    href: "/ehr",
    cta: "Get a demo",
  },
  {
    title: "Billing & Payments",
    description:
      "Enhance your financial health and efficiency. Easily navigate the claims process and optimize your revenue cycle for a better bottom line.",
    href: "/billing-payments",
    cta: "Show me more",
  },
] as const;

export const pediatricsTestimonialsIntro = {
  title: "Trusted by practices focused on better care",
} as const;

export const pediatricsTestimonials = [
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

export const pediatricsCaseStudiesIntro = {
  title: "Independent pediatrics practice case studies",
  ctaLabel: "See all case studies",
  ctaHref: "/case-studies",
} as const;

export const pediatricsCaseStudySlugs = ["dr-mary-lee", "celebrations-speech-group", "bellevue-pain-wellness"] as const;

export const pediatricsBottomCta = {
  title: "Just like you, we’re in it from start to finish",
  primaryCtaLabel: "Schedule a call",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
