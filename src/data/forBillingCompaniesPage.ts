/** For Billing Companies page — mirrors tebra.com/billing-payments/for-billing-companies */

export const fbcMeta = {
  title: "Medical Billing Software for Billing Companies | Tebra",
  description:
    "Scalable growth for your business and the practices you serve. Systematize workflows, create efficiencies, and maximize revenue with intelligent automation and data insights.",
} as const;

export const fbcBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Billing Companies", href: "/for-billing-companies" },
] as const;

export const fbcHero = {
  title: "Scalable growth for your business and the practices you serve",
  subtitle:
    "We give billing companies the tools to systematize workflows and create efficiencies that bring speed to payment, scalable growth, and maximized revenue — for you and your clients. Intelligent automation and data insights enable you to develop tailored services unique to the needs of every independent practice.",
  primaryCta: { label: "Request a demo", href: "#demo" },
  secondaryCta: { label: "Explore billing partner program", href: "#billing-partner-program" },
} as const;

export type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const fbcPillarsIntro = {
  title: "Better profits drive better practice health",
} as const;

export const fbcPillars: Pillar[] = [
  {
    title: "Everything your practices need, in one place",
    description:
      "Practices can acquire new patients with marketing automation, deliver better care with a certified EHR, provide an exceptional patient experience with automated communication, and get paid faster with billing and payments solutions.",
    bullets: ["One connected platform across growth, care, and revenue"],
    tags: ["Complete operating system"],
  },
  {
    title: "Automated end-to-end workflows",
    description:
      "Intelligent automation streamlines billing workflows and frees up staff to focus on work that improves the success of your business.",
    bullets: ["Less busywork and fewer manual handoffs"],
    tags: ["Automation"],
  },
  {
    title: "Deeper business insights that promote growth",
    description:
      "Access robust revenue reporting tools and equip practices with critical insights into key indicators — or dive deeper into the granular details that impact the bottom line.",
    bullets: ["Reporting and analytics built for billing companies"],
    tags: ["Data & insights"],
  },
];

export const fbcOutcomesIntro = {
  title: "Deliver financial well-being for you and your clients",
} as const;

export const fbcOutcomes = [
  {
    title: "Optimize billing operations",
    description:
      "Frictionless billing operations allow you to optimize workflows, automate repetitive tasks, and go paperless in the process.",
  },
  {
    title: "Streamline revenue collection",
    description:
      "Improve and simplify payment collection to reduce pain points for office staff and patients alike.",
  },
  {
    title: "Simplify insurance operations",
    description:
      "Efficiently manage insurance eligibility for patients and claims. Eliminate uncollectible revenue due to invalid or insufficient benefits.",
  },
  {
    title: "Drive growth with data and insights",
    description:
      "Reduce operating costs and make better decisions with growth and revenue analytics, HIPAA-compliant cloud storage, and APIs that integrate with third-party apps.",
  },
] as const;

export const fbcStats = [
  { value: "1,600+", label: "medical billing companies trust Tebra" },
  { value: "$20B+", label: "in claims processed each year" },
  { value: "50K+", label: "providers work with a billing company using Tebra" },
] as const;

export const fbcReadiness = {
  title: "Is your business ready?",
  description: "See how Tebra can help your practices grow and transform in our new era of healthcare.",
  cta: { label: "Request a demo", href: "#demo" },
} as const;

export const fbcWorkflowsIntro = {
  eyebrow: "Streamlined workflows for every billing need",
  title: "Financial strength leads to practice strength",
  description:
    "With Tebra’s medical billing solutions, you can enroll, submit, track, and reconcile claims, all from one platform. Reporting and analytics give you complete visibility into financial health, while communication tools and payment methods help you collect more, faster.",
} as const;

export const fbcWorkflows = [
  {
    title: "Insurance eligibility",
    description:
      "Reduce claim denials and manage patient responsibility with electronic checks to verify eligibility before appointments.",
  },
  {
    title: "Claims management",
    description:
      "Send electronic claims to government and commercial payers, print paper claims when needed, and get processing status updates and reports.",
  },
  {
    title: "Patient statements",
    description:
      "Automate statement workflows and use rules-based automation to eliminate repetitive tasks that take up valuable time.",
  },
  {
    title: "Patient payments",
    description:
      "Reach patients the right way, at the right time, with automated billing via text, email, and mailed statements to ease collections.",
  },
  {
    title: "Robotic process automation",
    description:
      "Use rules-based automation to eliminate repetitive RCM tasks and improve speed and accuracy at scale.",
  },
  {
    title: "Cloud analytics",
    description:
      "Access a secure, HIPAA-compliant data cloud. Export and organize raw data into custom datasets to explore trends and deliver insights.",
  },
] as const;

export const fbcPartnerProgram = {
  id: "billing-partner-program",
  title: "Billing partner program",
  description:
    "When you join Tebra, you’re automatically added to the billing partner program. Get customized pricing options, marketing and sales enablement resources, plus an enhanced support team to help grow your business. We don’t compete with partners — we exited medical billing services so we could focus on best-in-class software.",
  cta: { label: "Explore billing partner program", href: "#billing-partner-program" },
} as const;

export const fbcTestimonialsIntro = {
  eyebrow: "What Our Customers Are Saying",
  title: "Our clients don’t just work with us—they grow with us.",
} as const;

export const fbcTestimonials = [
  {
    quote:
      "Part of my success is because of Tebra. It’s just the way that they give me the support, with everything, every step of the way.",
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
      "Tebra has been the biggest driving factor in my growth. In fact, we’ve grown about 125%, revenue-wise, in the past 18 months.",
    author: "Katie Fergus, CEO",
    org: "PractiSynergy",
  },
] as const;

export const fbcCaseStudiesIntro = {
  eyebrow: "BEYOND THE NUMBERS",
  title: "Success stories that speak volumes",
  description:
    "Our impact isn’t just anecdotal — it’s measurable. Explore how we’ve partnered with businesses to achieve real, lasting results.",
  linkLabel: "See all case studies",
  linkHref: "/case-studies",
} as const;

export const fbcCaseStudySlugs = [
  "bellevue-pain-wellness",
  "optimal-psychiatry",
  "advantum-health",
] as const;

