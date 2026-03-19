/** Patient Portal — mirrors https://www.tebra.com/ehr-software/patient-portal */

export const ppMeta = {
  title: "Patient Portal Software for Private Practices | Tebra",
  description:
    "Give patients the experience they deserve with streamlined access to records, messaging, results, and more — HIPAA-compliant and EHR-integrated.",
} as const;

export const ppBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Electronic Health Records", href: "/ehr" },
  { label: "Patient portal", href: "/patient-portal" },
] as const;

export const ppHero = {
  eyebrow: "Patient Portal Software",
  title: "Patient portal",
  subtitle:
    "Give patients the experience they deserve with streamlined access to records, messaging, results, and more.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Explore for Free", href: "/sign-up" },
} as const;

export const ppPlatformIntro = {
  overline: "All-in-one patient experience platform",
  label: "Patient experience platform",
  headline:
    "Tebra’s EHR-integrated patient portal improves patient-provider communication in a digital solution",
  checklist: [
    "Online scheduling to book & manage appointments",
    "Automated appointment reminders reduce no-shows",
    "Digital patient intake forms simplify onboarding",
    "Secure text messaging for patient communication",
    "Patient portal",
  ],
} as const;

export const ppCommunicateBand = {
  title: "Communicate, share, and review with the Tebra patient portal",
  body:
    "Tebra’s HIPAA-compliant patient portal software empowers your practice to efficiently manage patient communication, billing, and records. Patients can access and review their medical history, medications, and lab results, as well as sign treatment plans and review shared health records. They can also authorize guest access for caregivers or family members, ensuring seamless coordination of care.",
} as const;

export const ppEmpower = {
  eyebrow: "Patient portal",
  title: "Empower patients to engage with their healthcare and your practice",
} as const;

export const ppFeatures = [
  {
    title: "Securely send and receive health records and documents",
    subtitle: "Securely exchange health records & documents",
    bullets: [
      "Share, review, and obtain signatures for eLab results, treatment plans, patient education materials, and assessments.",
      "Facilitate real-time provider-patient direct messaging for better communication.",
    ],
  },
  {
    title: "Streamline billing with digital payments",
    subtitle: "Streamline billing with digital payments",
    bullets: [
      "Patients can view bills, make payments online, and access their transaction history within the patient portal.",
      "Offer a frictionless experience that improves revenue cycle efficiency.",
    ],
  },
  {
    title: "Exchange direct messages",
    subtitle: "Enhance patient communication with direct messaging",
    bullets: [
      "Provide a secure, two-way messaging system that allows patients and providers to communicate safely.",
      "Improve patient satisfaction with faster responses and streamlined message management.",
    ],
  },
] as const;

export const ppCompleteOs = {
  title: "Experience Tebra’s complete operating system",
  description:
    "See how Tebra’s patient portal and other solutions within our all-in-one platform can help your practice thrive.",
  ctaLabel: "Get demo",
  ctaHref: "/demo",
} as const;

export const ppTestimonials = [
  {
    quote:
      "The Tebra experience has been exceptional. They offer a concierge type service and provide appropriate solutions for my unique business model.",
    author: "Marcie Zajac, APRN",
    org: "Marcie Zajac APRN",
  },
  {
    quote: "Tebra has modernized our practice and made communication with our patients more efficient!",
    author: "Dana Leary-Jokerst, Physician and Owner",
    org: "Pediatric Associates of Kentwood, P.C.",
  },
] as const;

export const ppExplore = {
  title: "Keep exploring",
  links: [
    { label: "Online scheduling", href: "/scheduling", description: "Let patients book anytime" },
    { label: "Patient Experience products", href: "/patient-experience", description: "Full digital front door" },
    { label: "Text messaging", href: "/patient-experience", description: "Secure patient communication" },
  ],
} as const;

export const ppJoinBand = {
  title: "Join the 100,000 providers who already trust Tebra",
  primaryCta: { label: "Get demo", href: "/demo" },
  secondaryCta: { label: "Explore for Free", href: "/sign-up" },
} as const;

export const ppBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
