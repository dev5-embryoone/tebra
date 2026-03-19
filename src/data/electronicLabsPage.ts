/** Electronic Labs (eLabs) — mirrors https://www.tebra.com/ehr-software/electronic-labs */

export const elMeta = {
  title: "eLabs Software for Digital Lab Ordering | Tebra",
  description:
    "Streamline your practice workflow with instant eLabs. Securely manage lab, radiology, and imaging orders and analyze results.",
} as const;

export const elBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Electronic Health Records", href: "/ehr" },
  { label: "Electronic Labs", href: "/ehr-software/electronic-labs" },
] as const;

export const elHero = {
  eyebrow: "eLabs software",
  title: "Go paperless with your labs",
  subtitle:
    "Streamline your practice workflow with instant eLabs. Securely manage lab, radiology, and imaging orders and analyze results. Your route to increased practice efficiency.",
  primaryCta: { label: "Get a customized demo", href: "/demo" },
  secondaryCta: { label: "Compare your practice", href: "/product-tour" },
} as const;

export const elValueProps = [
  {
    title: "Built for your independent practice, not for hospitals",
    description:
      "Our team of doctors crafted Tebra with small practices in mind. You have specific challenges, we have specific solutions.",
  },
  {
    title: "The support you need, when you need it",
    description: "Onboarding, training, and expert support to get — and keep — you up and running.",
  },
  {
    title: "Begin your journey today",
    description: "Intuitive, easy to use, and cloud-based — no technical knowledge required.",
  },
] as const;

export const elHowItWorks = {
  eyebrow: "How it works",
  title: "See Electronic Labs in action — take the tour",
  subcopy:
    "Ready to add eLabs to your practice? Schedule a personalized demo with one of Tebra’s Care Delivery experts and learn how you can optimize practice efficiency and enhance patient satisfaction.",
  primaryCta: { label: "Get a personalized demo", href: "/demo" },
  secondaryCta: { label: "See all guided tours", href: "/product-tour" },
} as const;

export const elTrust = {
  headline:
    "Over 150,000 providers run their practices on Tebra. We know what it takes for independent practices to not just survive, but thrive.",
  badges: [
    { title: "G2: Leader", subtitle: "Medical billing, claims, RCM, MPM" },
    { title: "Capterra Shortlist", subtitle: "Medical billing, telemedicine, scheduling, EHR" },
    { title: "G2: Spring 2023", subtitle: "Medical practice management" },
    { title: "SA Front Runner", subtitle: "Medical billing, telemedicine, mental health" },
    { title: "G2: Most Implementable", subtitle: "Medical billing" },
  ],
} as const;

export const elFeaturesIntro = {
  eyebrow: "Electronic Labs",
  title: "Experience faster lab results for better patient care",
} as const;

export const elFeatures = [
  {
    title: "Save valuable time",
    body:
      "Tackle inefficient, paper-based processes with electronic lab orders. Fast results mean less chasing and more time to spend with patients. Instantly send requests to over 700 labs and receive real-time results that are automatically recorded in patients’ charts.",
  },
  {
    title: "Fast results for better patient care",
    body:
      "Experience the difference of rapid result turnaround times — giving you the information you need to make critical decisions about care. Real-time access to lab results allows you to make timely decisions about patient care.",
  },
  {
    title: "Drive efficiency",
    body:
      "Tebra’s eLab solution eliminates redundant data entry and ensures accurate patient information to maximize order submissions. Integrated, easy-to-use ordering workflows reduce distractions and speed up lab ordering.",
  },
  {
    title: "Streamlined lab results",
    body:
      "Automated result matching automatically matches lab results to the respective lab orders, reducing manual effort and ensuring a seamless flow of information.",
  },
  {
    title: "Improve clinical accuracy",
    body:
      "Enhance clean order rates by automating patient data and demographic information. Reducing errors enables your team to provide better, more compliant patient care. No more searching for missing faxes and resending results.",
  },
] as const;

export const elPatientExperienceCta = {
  title: "Deliver exceptional care with Tebra’s streamlined patient experience solutions.",
  ctaLabel: "Explore for Free",
  ctaHref: "/sign-up",
} as const;

export const elAllInOne = {
  title: "Excited about better electronic labs?",
  subtitle: "There’s even more to discover.",
  description:
    "Streamline your healthcare operations and unlock your potential with Tebra’s Complete Operating System.",
  ctaLabel: "Get demo",
  ctaHref: "/demo",
  cards: [
    {
      title: "Patient Experience",
      description: "Combine exceptional care with exceptional patient experience",
      href: "/patient-experience",
    },
    {
      title: "Care Delivery",
      description: "Increase time with patients, reduce documentation time, and maximize reimbursements",
      href: "/ehr",
    },
    {
      title: "Billing & Payments",
      description: "Collect faster and at higher rates",
      href: "/billing-payments",
    },
  ],
} as const;

export const elImplementation = {
  title: "Onboard and implement Tebra with ease",
  description:
    "Learn about Tebra’s smooth onboarding experience and how our team of experts work closely with you to understand your workflow and configure the platform accordingly, ensuring everything is in place for a seamless start.",
  ctaLabel: "Learn more",
  ctaHref: "/implementation",
} as const;

export const elTestimonial = {
  quote:
    "With Tebra, everything is at your fingertips to get the job done. I have been able to increase my productivity due to the effectiveness of Tebra.",
  author: "Erica Hall, Owner and Provider",
  org: "Hall Diabetes Management and Resource Center PC",
} as const;

export const elStatsCta = {
  kicker: "More than 42,000 practices in the United States are growing with Tebra. It’s your turn.",
  bullets: [
    "Get a free data-driven practice assessment",
    "Identify growth opportunities",
    "No strings attached",
  ] as const,
  ctaLabel: "Get demo",
  ctaHref: "/demo",
} as const;

export const elBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
