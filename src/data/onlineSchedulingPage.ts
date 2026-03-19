/** Online Scheduling — mirrors https://www.tebra.com/patient-experience/online-scheduling */

export const osMeta = {
  title: "Online Scheduling Software for Medical Practices | Tebra",
  description:
    "Let patients book appointments anytime, anywhere with Tebra’s medical scheduling software — 24/7 online booking from your website and profiles.",
} as const;

export const osBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Patient Experience", href: "/patient-experience" },
  { label: "Online Scheduling", href: "/scheduling" },
] as const;

export const osHero = {
  eyebrow: "Online scheduling",
  title: "Simplify appointments with Tebra’s medical scheduling software",
  subtitle:
    "In an era where 3 in 4 people look online for new care providers, Tebra’s medical scheduling software allows patients to book appointments anytime, anywhere. Facilitate easy, 24/7 appointment booking directly from your website and various online profiles, ensuring you never miss an opportunity to connect with potential patients.",
  primaryCta: { label: "Get your customized demo now", href: "/demo" },
  exploreLink: { label: "Explore the Product", href: "/patient-experience" },
} as const;

export const osValueProps = [
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

export const osHowItWorks = {
  eyebrow: "How it works",
  title: "See Online Scheduling in action — take the tour",
  modalTitle: "Unlock Online Scheduling",
  modalBody:
    "Learn how Tebra’s online scheduling creates the ultimate patient booking experience while automating your practice workflows.",
  modalCta: { label: "Start", href: "/product-tour" },
  subcopy:
    "Ready to see it in your workflow? Schedule a personalized demo and learn how online scheduling fits your practice.",
  primaryCta: { label: "Get a personalized demo", href: "/demo" },
  secondaryCta: { label: "See all guided tours", href: "/product-tour" },
} as const;

export const osTrust = {
  headline:
    "Over 150,000 providers run their practices on Tebra. We know what it takes for independent practices to not just survive, but thrive.",
  badges: [
    { title: "G2 EHR Leader Fall 2025", subtitle: "Recognized EHR leadership" },
    { title: "G2 Patient Experience Fall 2025", subtitle: "Patient experience software" },
    { title: "Software Advice Frontrunners 2026", subtitle: "Top rated among practices" },
    { title: "Capterra Shortlist 2026", subtitle: "Scheduling & practice tools" },
    { title: "G2 Highest User Adoption Fall 2025", subtitle: "Easy for teams to adopt" },
  ],
} as const;

export const osFeaturesIntro = {
  eyebrow: "Medical scheduling software",
  title: "Fill every gap: Optimize your schedule with Tebra’s medical scheduling software",
} as const;

export const osFeatures = [
  {
    title: "Expand your scheduling options",
    body:
      "Our healthcare scheduling software enables patients to book appointments at their convenience, whether at home or on the go. Being accessible through Google and other profiles enhances convenience, accessibility, and patient satisfaction all in one go.",
  },
  {
    title: "Simplify patient booking",
    body:
      "Tebra’s patient scheduling software lets you create a unique URL to add to your website, emails, and SMS communications to enhance accessibility — making online appointment booking pain-free.",
  },
  {
    title: "Customize availability",
    body:
      "Our patient scheduling software lets you customize availability and appointment durations based on visit reasons. Set your office hours to streamline appointment management for your practice.",
  },
  {
    title: "Ensure security",
    body:
      "Build trust without compromising privacy. Tebra’s medical office scheduling software is HIPAA-compliant to ensure security and protect patient data. Enhance patient satisfaction by prioritizing confidentiality.",
  },
  {
    title: "Incorporate intake into scheduling",
    body:
      "Automatically create a patient chart and allow staff to send intake forms electronically before the visit. Reduce paperwork and wait times to elevate the patient experience.",
  },
] as const;

export const osPatientExperienceCta = {
  title: "Deliver exceptional care with Tebra’s streamlined patient experience solutions.",
  ctaLabel: "Explore for Free",
  ctaHref: "/sign-up",
} as const;

export const osAllInOne = {
  eyebrow: "All-in-one solution",
  title: "Excited about better online scheduling?",
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

export const osImplementation = {
  title: "Onboard and implement Tebra with ease",
  description:
    "Learn about Tebra’s smooth onboarding experience and how our team of experts work closely with you to understand your workflow and configure the platform accordingly, ensuring everything is in place for a seamless start.",
  ctaLabel: "Learn more",
  ctaHref: "/implementation",
} as const;

export const osTestimonial = {
  quote:
    "We love the online scheduling feature and being able to text our patients in real time. Tebra has modernized our practice and made communication with our patients more efficient!",
  author: "Dana Leary-Jokerst, Physician and Owner",
  org: "Pediatric Associates of Kentwood, P.C.",
} as const;

export const osFaq = [
  {
    q: "Why do I need online scheduling?",
    a:
      "Patients expect a modern, digital experience from their healthcare providers. Online scheduling is part of creating that experience, and helps you to attract and retain patients while reducing the administrative burden of appointment booking.",
  },
  {
    q: "Can patients schedule telehealth appointments online?",
    a:
      "If applicable, you can easily enable telehealth visits on the dashboard and give patients the option to select an in-center or telehealth appointment.",
  },
  {
    q: "Can I turn off online scheduling?",
    a: "Yes, you have the ability to disable online scheduling at the practice and provider level.",
  },
  {
    q: "Can I approve or deny online appointments before they’re confirmed?",
    a: "Yes. You must confirm or deny all patient appointment requests scheduled online.",
  },
] as const;

export const osRankCta = {
  title: "How does your practice rank?",
  description:
    "Compare your online performance with other practices in your area, analyze your potential, and unlock a better patient experience.",
  ctaLabel: "Scan now",
  ctaHref: "/demo",
} as const;

export const osStatsCta = {
  kicker: "More than 42,000 practices in the United States are growing with Tebra. It’s your turn.",
  bullets: [
    "Get a free data-driven practice assessment",
    "Identify growth opportunities",
    "No strings attached",
  ] as const,
  ctaLabel: "Get demo",
  ctaHref: "/demo",
} as const;

export const osBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
