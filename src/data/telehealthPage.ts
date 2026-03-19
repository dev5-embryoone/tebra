/** Telehealth — mirrors https://www.tebra.com/ehr-software/telehealth */

export const thMeta = {
  title: "Telehealth Software Solutions for Private Practices | Tebra",
  description:
    "Create high-quality video visits, group appointments, dedicated provider URLs, virtual waiting rooms, and custom patient communications with Tebra’s HIPAA- and HITRUST-certified telehealth.",
} as const;

export const thBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "EHR", href: "/ehr" },
  { label: "Telehealth", href: "/telehealth" },
] as const;

export const thHero = {
  eyebrow: "EHR software",
  title: "Telehealth",
  subtitle:
    "Create high-quality video visits, group appointments, dedicated provider URLs, virtual waiting rooms, and custom patient communications with Tebra’s HIPAA- and HITRUST-certified telehealth.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Watch video", href: "/webinars", variant: "play" as const },
} as const;

export const thHowItWorks = {
  eyebrow: "How it works",
  title: "See Tebra's Telehealth feature in action — take the tour",
  modalTitle: "Discover the Telehealth Experience",
  modalBody:
    "Learn how Tebra delivers a HIPAA-compliant video experience with virtual waiting rooms, flexible scheduling, and workflows that match how your practice already works.",
  modalCta: { label: "Next", href: "/product-tour" },
  subcopy:
    "Take an interactive walkthrough or speak with our team to see telehealth inside your existing Tebra workflow.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "See all guided tours", href: "/product-tour" },
} as const;

export const thTrust = {
  headline:
    "Over 150,000 providers run their practices on Tebra. We know what it takes for independent practices to not just survive, but thrive.",
  badges: [
    { title: "G2 EHR Leader Fall 2025", subtitle: "Recognized EHR leadership" },
    { title: "G2 Patient Experience Fall 2025", subtitle: "Patient experience software" },
    { title: "Software Advice Frontrunners 2026", subtitle: "Top rated among practices" },
    { title: "Capterra Shortlist 2026", subtitle: "Telehealth & practice tools" },
    { title: "G2 Highest User Adoption Fall 2025", subtitle: "Easy for teams to adopt" },
  ],
} as const;

export const thFeaturesIntro = {
  title: "Deliver modern care from anywhere",
} as const;

export const thFeatures = [
  {
    title: "Improve patient outcomes and satisfaction",
    body: "Offer your patients the convenience and accessibility of telehealth in addition to in-office visits.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Increase scheduling flexibility",
    body:
      "Video visits can happen from anywhere, and at any time. Offer extended or even weekend hours without incurring overhead costs.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Decrease no-shows",
    body:
      "Make it easier for patients to keep their appointments with the flexibility and convenience of telehealth visits that can be held anywhere with no need for travel or transportation.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Generate incremental revenue",
    body:
      "Virtual visits let you meet with more patients in the same amount of time compared with in-person visits. When it’s time to follow up, convert unpaid phone calls and emails to reimbursable telehealth visits.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Streamline practice workflows",
    body:
      "Maintain current office workflows for scheduling, charting, and billing. No additional staff work is required, so you and your practice can focus more on patient care.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Strengthen security",
    body: "Tebra’s telehealth is secure and HIPAA- and HITRUST-compliant.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Offer group appointments",
    body:
      "Meet in real time with up to 200 participants, allowing caregivers, medical experts, and family members to join the visit.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
  {
    title: "Improve the patient experience",
    body:
      "Give patients the support they need to comply with treatment plans, manage medications, and engage in lifestyle coaching for better outcomes. Our providers see high patient satisfaction on average for video visits.",
    ctaLabel: "Get a demo",
    ctaHref: "/demo",
  },
] as const;

export const thSavings = {
  title: "Stop overpaying for your EHR!",
  subtitle: "How much do you currently spend on software?",
  tickLabels: ["$100", "$300", "$600", "$900", "$1200+"] as const,
  ctaLabel: "See how much you can save",
  ctaHref: "/pricing",
} as const;

export const thResources = {
  headline: "This is why thousands of small — and medium-sized practices trust Tebra",
  items: [
    { kind: "Webinar" as const, title: "Choose the right EHR: Everything you need to know", href: "/webinars" },
    { kind: "Workbook" as const, title: "Implementing your EHR", href: "/guides" },
    { kind: "Webinar" as const, title: "Expert panel: How to run a profitable healthcare business", href: "/webinars" },
    { kind: "Workbook" as const, title: "The ultimate guide to practice automation", href: "/guides" },
    { kind: "Workbook" as const, title: "How to know when to switch EHRs", href: "/guides" },
    { kind: "Workbook" as const, title: "How to fuel practice growth with an all-in-one automation platform", href: "/guides" },
    { kind: "Checklist" as const, title: "How to up reimbursements and get paid faster", href: "/guides" },
  ],
} as const;

export const thFaq = [
  {
    q: "What kind of devices can participants use to join a visit?",
    a:
      "Participants can join a visit from any computer, tablet, or phone. The device needs a stable internet connection, camera, microphone, and browser.",
  },
  {
    q: "Can I chart and conduct a video visit at the same time?",
    a:
      "Yes. Tebra’s telehealth is browser-based and opens in a new tab. You can simply toggle between the two, or drag and drop the tab into its own window and resize for your convenience.",
  },
  {
    q: "When I screen share, do I have to share my entire screen?",
    a:
      "No. You can select whether you want to share your entire screen, a specific window of your browser, or a specific application you have running.",
  },
] as const;

export const thDiscoverCta = {
  title: "Discover a better way to run your practice",
  description: "Experience the full potential of Tebra with a personalized demo or self-guided product tour.",
  primaryCta: { label: "Get a demo", href: "/demo" },
  secondaryCta: { label: "Take a tour", href: "/product-tour" },
} as const;

export const thBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
