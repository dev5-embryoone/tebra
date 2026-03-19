/** Robotic Process Automation (RPA) — mirrors tebra.com/billing-payments/robotic-process-automation */

export const rpaMeta = {
  title: "RPA in Medical Billing: Automate Revenue Tasks | Tebra",
  description:
    "Dramatically increase productivity and profitability with intelligent automation for ERA processing, unapplied payments, HL7 connectors, and more.",
} as const;

export const rpaBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Billing & Payments", href: "/billing-payments" },
  { label: "Robotic Process Automation", href: "/billing-payments/robotic-process-automation" },
] as const;

export const rpaHero = {
  title: "Robotic Process Automation",
  subtitle: "Dramatically increase productivity and profitability with intelligent automation.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Tour our billing software", href: "/billing-payments" },
} as const;

export const rpaFeaturesIntro = {
  title: "Dedicate practice resources to critical projects by eliminating mundane, repetitive tasks",
} as const;

export const rpaFeatures = [
  {
    title: "Simplify data flow with automated ERA processing",
    body: "Set your business rules and logic and let the automation bots maintain a consistent data flow into Tebra’s billing system — helping you increase first-pass claim rates and decrease reimbursement timelines.",
  },
  {
    title: "Reduce complexity with automated unapplied payments processing",
    body: "Use rules-based processing to identify when insurance payments have been made and when patient deposits such as copays can be applied. Keep your A/R up to date and increase patient satisfaction by automatically matching unapplied payments to outstanding patient responsibility to ensure accurate patient statements.",
  },
  {
    title: "Bridge the gap between external systems with Smart Connector for HL7 and patient data",
    body: "Connect external EHRs with Tebra’s billing by bringing patient demographic and financial information directly into the Tebra platform — reducing time spent on manual data entry. Not only do we provide the basic tools to exchange and accept information from external systems, we also layer them with established business rules and logic to generate a clean upload of encounters and patient information.",
  },
  {
    title: "Automate clinical note creation",
    body: "Don’t let data migration hinder you from switching EHRs. Automated clinical note creation allows you to migrate existing clinical notes into Tebra’s EHR. Our bot emulates human keystrokes to create a clinical note for each patient encounter, giving you a full picture of a patient’s medical history.",
  },
  {
    title: "Payment Plans",
    body: "Support more patients and easily collect balances over time with RPA payment plans. Connect charges to your EHR and billing for faster reconciliation and notifications about any issues. Save your staff time, get paid faster, and offer a better patient experience.",
  },
  {
    title: "835 Uploads",
    body: "Analyze 835 files and translate the data into the correct fields in the billing platform — instantly. Just upload the 835 file to the RPA dashboard and let Tebra take care of the rest. Save time, save money, and get paid faster.",
  },
  {
    title: "Membership & Subscription Plans",
    body: "Collect recurring fees for subscriptions and memberships, and associate those charges with the service, CPT codes, and patient account across your EHR and billing system. Build a consistent revenue stream with faster reconciliation and less manual work.",
  },
] as const;

export const rpaAllInOne = {
  eyebrow: "ALL-IN-ONE",
  title: "Robotic process automation is just part of our all-in-one solution",
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

export const rpaTestimonialsIntro = {
  title: "What Our Customers Are Saying",
  description:
    "Our clients don't just work with us—they grow with us. Here's what a few of our satisfied customers had to say about their experience with Tebra.",
  ctaLabel: "See all testimonials",
  ctaHref: "/resources/testimonials",
} as const;

export const rpaTestimonials = [
  {
    variant: "dark" as const,
    quote:
      "In getting onto Tebra’s platform, we saw a 15% increase in efficiency with regards to claim processing and saw a 75% reduction in timing for patient payment posting.",
    author: "Tiffany Manning, COO",
    org: "OptimisCorp",
  },
  {
    variant: "cream" as const,
    quote:
      "With Tebra’s RPA bots, we’re able to help medical practices feel better. We’ve been able to grow over 20% a year without adding staff, thanks to the enhanced productivity and seamless integration of our systems.",
    author: "Connie Wax, Owner",
    org: "Medical Claims Solutions",
  },
  {
    variant: "light" as const,
    quote:
      "RPA has been an amazing add-on. It has streamlined our charge processing and demographic entry workflows with lightning speed! Our staff now has time to focus on other daily tasks and not be consumed by data entry.",
    author: "Lori Eline, National Accounts Billing Manager",
    org: "Doctors Choice Medical Services",
  },
] as const;

export const rpaCaseStudiesIntro = {
  eyebrow: "BEYOND THE NUMBERS",
  title: "Success stories that speak volumes",
  description:
    "Our impact isn’t just anecdotal—it’s measurable. Explore how we’ve partnered with businesses to achieve real, lasting results.",
  ctaLabel: "Explore Our Case Studies",
  ctaHref: "/case-studies",
} as const;

export const rpaCaseStudySlugs = [
  "celebrations-speech-group",
  "bellevue-pain-wellness",
  "tabs-billing",
  "optimal-psychiatry",
  "advantum-health",
  "centralmed-urgent-care",
] as const;

export const rpaPreFooterCta = {
  title: "Experience Tebra’s complete operating system",
  description:
    "See how robotic process automation and other solutions within Tebra’s all-in-one platform can help your business thrive.",
  primaryCta: { label: "Get demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export const rpaBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
