/** Electronic claim submission — mirrors tebra.com/billing-payments/electronic-claim-submission */

export const ecsMeta = {
  title: "Electronic Medical Claims Submission Software | Tebra",
  description:
    "Optimize your revenue cycle workflow, increase insurance reimbursements, and reduce denials with digital tools for electronic claim submissions.",
} as const;

export const ecsBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Billing & Payments", href: "/billing-payments" },
  { label: "Electronic claim submissions", href: "/billing-payments/electronic-claim-submission" },
] as const;

export const ecsHero = {
  title: "Electronic claim submissions",
  subtitle:
    "Optimize your revenue cycle workflow, increase insurance reimbursements, and reduce denials with digital tools.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Tour our billing software", href: "/billing-payments" },
} as const;

export const ecsFeaturesIntro = {
  title: "Get paid faster and avoid costly cash-flow disruptions",
} as const;

export const ecsFeatures = [
  {
    title: "Directly submit primary and secondary claims",
    body: "After entering charges and checking claims against payer reimbursement rules, you can send primary and secondary electronic claims to the clearinghouse services directly.",
  },
  {
    title: "Quickly view your claims on one screen",
    body: "Get an immediate snapshot of all outstanding items, rebilling efforts, and accomplished tasks.",
  },
  {
    title: "Simplify electronic claim submissions",
    body: "Easily submit electronic claim forms through our clearinghouse partner. Workers’ compensation claims include up to ten pages of attachments at no additional cost. For all other claim types, attachments can be included for just $0.99 per page, ensuring flexibility and convenience for every submission.",
  },
  {
    title: "Get peace of mind with validations",
    body: "Track electronic claims from submission to adjudication. Internal validation from Tebra helps you ensure patient and policy information are correct. Clearinghouse partners provide daily reports. Payers may respond with reports on any denials prior to adjudication. You get transparency from start to finish for greater peace of mind.",
  },
  {
    title: "Easily track and respond to rejections and denials",
    body: "Automatically track rejections and denials from insurance companies. Tebra’s reports make it efficient to gather missing information, correct data entry errors, and resubmit electronic claims within payers’ filing deadlines.",
  },
] as const;

export const ecsAllInOne = {
  eyebrow: "ALL-IN-ONE",
  title: "Insurance claim submissions are just part of our all-in-one solution",
  linkLabel: "Learn about Tebra’s billing software",
  linkHref: "/billing-payments",
  checklist: [
    "Practice management",
    "Insurance eligibility management",
    "Electronic claim submissions",
    "Patient statements",
    "Patient payments",
    "Robotic process automation",
  ],
} as const;

export const ecsTestimonialsIntro = {
  title: "What Our Customers Are Saying",
  description:
    "Our clients don't just work with us—they grow with us. Here's what a few of our satisfied customers had to say about their experience with Tebra.",
  ctaLabel: "See all testimonials",
  ctaHref: "/resources/testimonials",
} as const;

export const ecsTestimonials = [
  {
    variant: "dark" as const,
    quote:
      "The platform is very user friendly and we haven't had any problems whatsoever. Their customer service has always been very helpful in helping us navigate the system when changes need to be made.",
    author: "Nikki Stafford, Practice Administrator",
    org: "Psycare, LLC",
  },
  {
    variant: "cream" as const,
    quote:
      "There were a lot of different players with the implementation. But I really liked the level of customization and the communication.",
    author: "Kevin Bein, D.C.",
    org: "The Rehab Docs Founder",
  },
] as const;

export const ecsCaseStudiesIntro = {
  eyebrow: "BEYOND THE NUMBERS",
  title: "Success stories that speak volumes",
  description:
    "Our impact isn’t just anecdotal—it’s measurable. Explore how we’ve partnered with businesses to achieve real, lasting results.",
  ctaLabel: "Explore Our Case Studies",
  ctaHref: "/case-studies",
} as const;

/** Slugs must exist in caseStudies.ts */
export const ecsCaseStudySlugs = ["physician-billing-solutions", "optimal-psychiatry", "advantum-health"] as const;

export const ecsPreFooterCta = {
  title: "Experience Tebra’s complete operating system",
  description:
    "See how electronic claim submissions and other solutions within Tebra’s all-in-one platform can help your business thrive.",
  primaryCta: { label: "Get demo", href: "/demo" },
  secondaryCta: { label: "Tour our billing software", href: "/billing-payments" },
} as const;

export const ecsIntakeIntro = {
  title: "Insights for independent healthcare practices",
  subtitle: "The Intake",
} as const;

export const ecsIntakeArticles = [
  {
    title: "Your patients are using ChatGPT in healthcare. What can, and should, you do?",
    href: "/theintake/chatgpt-patients-healthcare",
  },
  {
    title: "Vital Signs: A February 2026 RCM healthcare news wrap-up",
    href: "/theintake/vital-signs-rcm-february-2026",
  },
  {
    title: "How patients choose and drop doctors in a digital-first healthcare system",
    href: "/theintake/patients-choose-doctors-digital-first",
  },
] as const;

export const ecsBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
