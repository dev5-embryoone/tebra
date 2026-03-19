/** Psychology / Mental Health specialty — mirrors https://www.tebra.com/specialties/psychology */

export const psychologyMeta = {
  title: "Mental Health & Psychology Practices - EHR - Tebra",
  description:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform built for independent mental health and psychology practices.",
} as const;

export const psychologyBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Specialties", href: "/specialties/family-medicine" },
  { label: "Mental Health", href: "/specialties/psychology" },
] as const;

export const psychologyHero = {
  eyebrow: "Tebra for mental health & psychology",
  title: "The all-in-one platform for practice well-being",
  subtitle:
    "Attract new patients, deliver the best care, and get paid quickly with one comprehensive platform.",
  primaryCta: { label: "See Tebra in action", href: "/product-tour" },
  secondaryCta: { label: "Request a demo", href: "/demo" },
} as const;

export const psychologyAccordionIntro = {
  title: "Grow your independent psychology practice with Tebra",
} as const;

export const psychologyAccordionItems = [
  {
    title: "Reach new patients",
    body:
      "16% of patients saw a mental health provider in the past 12 months. Make it easy for them to find your independent mental health practice with search engine optimization and marketing, automated reputation management, and responsive websites designed to attract patients and drive appointments. Explore practice growth with Medical Practice Marketing.",
  },
  {
    title: "Connect with patients",
    body:
      "Quality care is a given, and today’s clients want more. Nearly 80% would switch doctors for more convenience. With Tebra, back-end automation leads to front-end convenience with no extra effort from you. Patients can book and remember appointments, get answers to questions, review records, and pay bills — all in one connected experience supported by your EHR.",
  },
  {
    title: "Get paid",
    body:
      "Medical billing and payments can be frustrating for both providers and patients. Make it easy for patients to understand and pay their bills — and improve your profitability in the process — with Tebra’s billing and payments: intuitive practice management, time-saving automation, and stronger revenue cycle management. Learn more on Billing & Payments.",
  },
  {
    title: "Complete data control",
    body:
      "You need good data to make good decisions. Tebra gives you data and insights into every area of your practice, including growth and revenue. Stay secure with HIPAA-compliant cloud storage, explore your data your way, and integrate with third-party applications through APIs.",
  },
  {
    title: "Easy implementation",
    body:
      "Feeling overwhelmed by your current systems, but also by making a change? With Tebra, you can get started in minutes, not weeks, with no IT knowledge or heavy lifting. Our onboarding, training, and ongoing support will be with you every step of the way so your practice won’t miss a beat.",
  },
] as const;

export const psychologyWhyIntro = {
  eyebrow: "Why Tebra?",
  title: "Connect your psychology practice from end to end",
} as const;

export const psychologyWhyBlocks = [
  {
    title: "Everything you need in an elegant, unified platform",
    description:
      "Stop juggling multiple marketing, communications, care delivery, billing, and payment tools. With Tebra, deliver better care to more clients with practice operations, patient care, and growth tools in one place.",
  },
  {
    title: "Automated end-to-end workflows, easily implemented",
    description:
      "Save time and streamline with intelligent automation across your workflows. Free your staff to focus on your practice success rather than inefficient manual tasks.",
  },
  {
    title: "Deeper business insights that promote growth",
    description:
      "With analytics as part of your daily workflow you can intuitively uncover growth and revenue insights to improve your business.",
  },
] as const;

export const psychologyChallengesIntro = {
  title: "What independent mental health practices are facing",
} as const;

export const psychologyStats = [
  { value: "16%", label: "of patients saw a mental health provider in the past 12 months" },
  { value: "68%", label: "say low reimbursement rates threaten independent practices" },
  { value: "80%", label: "of patients would switch doctors for greater convenience" },
] as const;

export const psychologyMidCta = {
  kicker: "Ready to grow with confidence?",
  title: "See how Tebra can help your practice attract patients, streamline care, and get paid — in one platform.",
  ctaLabel: "Request a demo",
  ctaHref: "/demo",
} as const;

export const psychologyPlatformIntro = {
  eyebrow: "The complete operating system for independent psychology practices",
  title: "Everything your practice needs on one platform",
  subtitle:
    "EHR, patient experience, marketing, and billing — designed for how mental health providers work every day.",
} as const;

export const psychologyPlatformCards = [
  {
    title: "EHR",
    description:
      "A cloud-based EHR that streamlines clinical documentation so you chart faster and more accurately. AI Note Assist helps notes practically write themselves, so you can focus on patient care.",
    href: "/ehr",
    cta: "Learn more",
  },
  {
    title: "Patient experience",
    description:
      "Modern tools that make it easier for patients to book, communicate, and share feedback — fully integrated with your EHR and communication workflows.",
    href: "/patient-experience",
    cta: "Learn more",
  },
  {
    title: "Medical practice marketing",
    description:
      "Attract new patients and grow your practice with tools that help you manage your online presence, reputation, and website from one place.",
    href: "/marketing",
    cta: "Learn more",
  },
  {
    title: "Billing and payments",
    description:
      "Simplified medical billing, insurance claims, and patient payments built into your workflow to help reduce denials and get paid with less effort.",
    href: "/billing-payments",
    cta: "Learn more",
  },
] as const;

export const psychologyTestimonials = {
  eyebrow: "Real stories, real results",
  title: "What success looks like with Tebra",
  items: [
    {
      quote:
        "Tebra helps my private practice grow by being easily scalable with an EHR platform that is easy to navigate.",
      author: "Dr. Fabius Santos",
      org: "Optimal Psychiatry and Wellness",
    },
    {
      quote:
        "Tebra’s practice growth solution helped us simplify how patients provide feedback and build a stronger reputation online.",
      author: "DeNova Team",
      org: "DeNova Behavioral Health",
    },
    {
      quote:
        "I don’t know of any competitor with all the features that Tebra’s platform does and is presented with this level of clarity.",
      author: "Practice Owner",
      org: "Mind Body and Spirit Counseling Services",
    },
  ],
} as const;

export const psychologyCaseStudiesIntro = {
  title: "Independent mental health practice case studies",
  ctaLabel: "See all case studies",
  ctaHref: "/case-studies",
} as const;

export const psychologyCaseStudySlugs = ["optimal-psychiatry", "denova-behavioral-health", "mind-body-spirit"] as const;

export const psychologyBottomCta = {
  title: "Discover how Tebra can transform your practice.",
  description: "Experience the full potential of Tebra with a personalized demo.",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Take a self-guided tour",
  secondaryCtaHref: "/product-tour",
} as const;
