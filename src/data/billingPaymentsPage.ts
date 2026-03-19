/** Billing & Payments product page — mirrors tebra.com/billing-payments */

export const billingPaymentsMeta = {
  title: "Medical Billing Software & Revenue Management | Tebra",
  description:
    "Billing in-house, outsourcing, or running a medical billing company? Tebra helps you reduce denials, improve collections, and take the chaos out of getting paid.",
} as const;

export const billingPaymentsBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Billing & Payments", href: "/billing-payments" },
] as const;

export const billingPaymentsHero = {
  title: "Medical billing software that gets you paid faster",
  subtitle:
    "Billing in-house, outsourcing, or running a medical billing company? Tebra helps you reduce denials, improve collections, and take the chaos out of getting paid.",
  primaryCta: { label: "Request a demo", href: "#demo" },
  secondaryCta: { label: "Try our billing calculator", href: "/billing-payments/billing-calculator" },
} as const;

export const billingPaymentsMatchIntro = {
  title: "Get matched with the right tools, partner, or plan for your billing needs",
} as const;

export const billingPaymentsPills = [
  { label: "In-House Billers", href: "#in-house-billers" },
  { label: "Outsourced Billing", href: "#outsourced-billing" },
  { label: "Billing Companies", href: "#billing-companies" },
  { label: "FAQs", href: "#faq" },
] as const;

export const billingFeaturesIntro = {
  title: "Everything you need to bill faster, collect more, and eliminate busywork",
} as const;

export type BillingFeatureRow = {
  title: string;
  description: string;
  bullets: string[];
  tag: string;
  imageKey: "inhouse" | "software" | "payments" | "simplify" | "billingcos";
  imageAlt: string;
  caption: string;
  reverse?: boolean;
};

export const billingFeatureRows: BillingFeatureRow[] = [
  {
    title: "Automated insurance eligibility",
    description:
      "Prevent claim denials before they happen by confirming coverage details in seconds, not hours.",
    bullets: [
      "Instantly check coverage, copays, and deductibles",
      "Reduce denials tied to expired or inactive plans",
      "Help your team explain and collect patient payments up front",
      "Integrated with intake, scheduling, and billing workflows",
    ],
    tag: "Insurance Eligibility",
    imageKey: "inhouse",
    imageAlt:
      "Smiling billing specialist reviewing patient eligibility alert on-screen—illustrates Tebra tools for in-house billers to automate eligibility checks and claim workflows",
    caption:
      "Smiling billing specialist reviewing patient eligibility alert on-screen—illustrates Tebra tools for in-house billers to automate eligibility checks and claim workflows",
  },
  {
    title: "Electronic claim submission",
    description:
      "Catch errors before claims go out the door and get reimbursed faster with clean, compliant submissions.",
    bullets: [
      "Automatically detect and correct common errors before submission",
      "Apply payer-specific rules to reduce rejections",
      "Send batch claims with a few clicks",
      "Improve cash flow with faster processing",
    ],
    tag: "Electronic Claim Submission",
    imageKey: "software",
    imageAlt: "Electronic medical claim submission workflow in Tebra",
    caption: "Electronic claim submission and scrubbing in Tebra",
    reverse: true,
  },
  {
    title: "Patient payments",
    description: "Make it easier for patients to pay and easier for your team to collect.",
    bullets: [
      "Send direct payment links via email and text message",
      "Offer card-on-file, online, and in-person payment options",
      "Set up automated payment reminders",
    ],
    tag: "Patient Payments",
    imageKey: "payments",
    imageAlt: "Patient payment collection options in Tebra",
    caption: "Patient payments — online pay, card-on-file, and reminders",
  },
  {
    title: "Automated patient statements",
    description:
      "Professional, branded statements that are easy to understand and even easier to pay.",
    bullets: [
      "Easily batch and send paper or e-statements",
      "Clearly break down charges, insurance coverage, and balance",
      "Add QR codes and direct payment links to every statement",
    ],
    tag: "Patient Statements",
    imageKey: "simplify",
    imageAlt: "Branded patient statements with clear balances in Tebra",
    caption: "Automated patient statements with QR codes and pay links",
    reverse: true,
  },
  {
    title: "Robotic process automation (RPA)",
    description:
      "Remove the most tedious and error-prone parts from your billing workflow, without sacrificing accuracy.",
    bullets: [
      "Auto-post ERAs with high-volume speed and precision",
      "Bridge disconnected systems with HL7-integrated data flows",
      "Auto-post unapplied payments using business rules",
      "Speed up A/R with fewer errors and faster handoffs",
    ],
    tag: "Robotic Process Automation",
    imageKey: "billingcos",
    imageAlt: "Billing team using RPA and ERA posting in Tebra",
    caption: "RPA for ERA posting, HL7 flows, and A/R acceleration",
  },
];

export const billingAudienceInHouse = {
  id: "in-house-billers",
  title: "In-house billers",
  body: "Take control of your in-house billing with automation, real-time tools that speed up collections, and clear reporting to show what’s working. No EHR switch required.",
  bullets: [
    "Auto-scrub claims and submit them in batches",
    "Check insurance eligibility in real time",
    "Track denials and collections with easy-to-use dashboards",
    "Automate routine tasks like remit posting and eligibility checks",
  ],
  cta: { label: "Explore in-house billing", href: "#demo" },
} as const;

export const billingAudienceOutsourced = {
  id: "outsourced-billing",
  title: "Practices outsourcing billing",
  intro:
    "Tebra connects you with trusted billing partners, so you can collect more without handling claims yourself. You stay in your EHR. You keep full visibility over performance and payments. Your partner takes care of the rest.",
  subhead: "With Tebra, you can:",
  bullets: [
    "Work with vetted billing partners who understand your specialty",
    "Track denials, reimbursements, and collections in real time",
    "Avoid switching EHRs or disrupting your front office",
    "Keep intake, scheduling, and billing aligned across systems",
  ],
  cta: { label: "Find your billing partner →", href: "#demo" },
} as const;

export const billingAudienceCompanies = {
  id: "billing-companies",
  title: "Billing companies",
  intro:
    "Tebra gives you the tools to win more clients, keep them longer, and run high-volume billing without burning out your team.",
  subhead: "With Tebra, you can:",
  bullets: [
    "Manage all clients in one dashboard, regardless of EHR",
    "Customize billing rules by client, provider, or payer",
    "Deliver branded reports and communications",
    "Win more business with partner support and go-to-market tools",
  ],
  cta: { label: "Explore billing company solutions →", href: "/for-billing-companies" },
} as const;

export const billingCalculatorBand = {
  title: "What’s holding back your revenue?",
  description:
    "Estimate your monthly revenue leaks in 90 seconds with the free Revenue Recovery calculator.",
  cta: { label: "Try free billing calculator", href: "/billing-payments/billing-calculator" },
} as const;

export const billingStepsIntro = {
  title: "Get paid faster in 3 simple steps",
  description:
    "Simplifying your billing doesn’t have to mean starting over. Tebra guides you from goal setting to implementation, so you can get paid faster with less manual work.",
  cta: { label: "Request a demo", href: "#demo" },
} as const;

export const billingSteps = [
  {
    number: "1",
    title: "Define your billing goals",
    description:
      "Tell us where you see the most friction: Too many denials, too much manual work, slow collections? During onboarding, we’ll map your goals to the right billing workflows.",
  },
  {
    number: "2",
    title: "Implement the right solution",
    description:
      "Your implementation team will recommend automation and setup — from real-time eligibility checks to cleaner claim scrubbing — built around your existing workflow.",
  },
  {
    number: "3",
    title: "Start collecting faster",
    description:
      "With Tebra in place you’ll send cleaner claims, reduce denials, and collect payments faster, without disrupting your current systems or the way your team works.",
  },
] as const;

export const billingTestimonialsIntro = {
  eyebrow: "",
  line: "Better visibility. Easier collections. Less burnout.",
  linkLabel: "View all testimonials",
  linkHref: "/resources/testimonials",
} as const;

export const billingTestimonials = [
  {
    quote:
      "Only software that gets your claims paid! I’ve worked with a lot of software and claims reports, and this works best.",
    author: "Sharon H",
    org: "Stat Medical Consulting Inc.",
  },
  {
    quote:
      "The ability to process multiple transactions at once and adjust claims by CPT codes is a huge time saver. It streamlines our workflow and makes billing more efficient.",
    author: "Alexis Marshall",
    org: "Medical Billing Strategies",
  },
  {
    quote:
      "The digital payments feature is so easy. Patients always ask for a link to pay, and with Tebra we send it in a couple clicks. Payments update in real time, making billing smoother.",
    author: "Naomi Myrick, PMHNP-BC, MSN, APRN",
    org: "Cardinal Care Psychiatric Services",
  },
  {
    quote:
      "Based on our extensive experience, we confidently recommend Tebra to any medical practice or medical billing company seeking a unified, efficient practice management solution.",
    author: "Kevin M",
    org: "Advanced Medical Billing, LLC",
  },
  {
    quote:
      "My goal is to increase revenue for my business and my clients. Tebra supports this because they have all their products in one place, making it easier for my practices to be profitable.",
    author: "Diana El Masri",
    org: "Physician 1st Billing Management",
  },
] as const;

export const billingResourcesIntro = {
  title: "Resources for private practices and billing companies",
  linkLabel: "View all resources",
  linkHref: "/resources",
} as const;

export const billingResources = [
  {
    type: "Webinar",
    title: "Getting paid: How to capture every dollar in 2025",
    href: "/resources",
  },
  {
    type: "Workbook",
    title: "Beat medical billing challenges in 2026",
    href: "/resources",
  },
  {
    type: "Infographic",
    title: "Common causes of billing denials",
    href: "/resources",
  },
  {
    type: "Workbook",
    title: "The Denials Management Playbook",
    href: "/resources",
  },
  {
    type: "Checklist",
    title: "How to transition to automated billing processes",
    href: "/resources",
  },
  {
    type: "Infographic",
    title: "How to verify patient insurance",
    href: "/resources",
  },
  {
    type: "Checklist",
    title: "Get your patients to pay you faster",
    href: "/resources",
  },
] as const;

export const billingPaymentsFaqs = [
  {
    id: "bp-faq-1",
    question: "What is medical billing software?",
    answer:
      "Medical billing software is RCM technology that helps healthcare practices and billing companies manage claims, verify insurance in real-time, post ERA/EOBs, track payments, and flag denials. Linked to your EHR, it tracks each claim, from patient eligibility checks to final reimbursement, so you get paid faster with fewer errors.",
  },
  {
    id: "bp-faq-2",
    question: "What’s the difference between in-house billing and outsourced billing?",
    answer:
      "In-house billing is handled by your staff using billing software, letting you edit codes, post payments and call patients about balances. Outsourced billing relies on a third-party revenue-cycle partner that files, tracks, and appeals claims for a percentage fee. The best option depends on your team size, claim volume, and how much control you want over collections.",
  },
  {
    id: "bp-faq-3",
    question: "How does Tebra help reduce claim denials?",
    answer:
      "Tebra’s built-in rules engine runs real-time eligibility checks and smart automation to catch errors before EDI submission. It auto-scrubs claims, applies payer-specific rules, and queues denials for instant appeal or automatic resubmission, helping you recover revenue without manual rework.",
  },
  {
    id: "bp-faq-4",
    question: "Can I use Tebra billing without switching my EHR?",
    answer:
      "Yes. Tebra works with most major EHRs via HL7/FHIR or API bridges. You can streamline billing tasks, like claim scrubbing, real-time eligibility checks, ERA/EOB posting and payments, without disrupting your clinical workflow.",
  },
  {
    id: "bp-faq-5",
    question: "How does insurance eligibility verification work in Tebra?",
    answer:
      "Tebra sends an ANSI-X12 270 inquiry to 2,700+ payers and gets a 271 response in seconds — verifying active coverage, copay, deductible, and coinsurance. Real-time flags help your front desk block ineligible claims, collect more at the time of service, and reduce delays in claim processing before they reach the clearinghouse.",
  },
] as const;
