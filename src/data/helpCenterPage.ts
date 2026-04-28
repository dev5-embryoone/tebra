/**
 * EmbryoOne Help Center content
 */
export const helpCenterAnnouncement = {
  text: "Welcome to the EmbryoOne Help Center. Find setup guides, product walkthroughs, and best practices for IVF lab and clinical teams.",
  cta: "View Product Tour",
  href: "/product-tour",
} as const;

export const helpCenterNav = [
  { label: "Help Center", href: "/help", current: true as boolean },
  { label: "Documentation", href: "/documentation", current: false },
  { label: "My Account", href: "/sign-in", current: false },
  { label: "Contact Us", href: "/contact", current: false },
] as const;

export const helpCenterCategories = [
  {
    key: "platform",
    title: "LAB WORKFLOW",
    description: "Cycle setup, dish management, gamete and embryo tracking, and lab activity timelines.",
    href: "/platform",
  },
  {
    key: "clinical",
    title: "CLINICAL WORKFLOW",
    description: "Clinical documentation, care coordination, and shared visibility between lab and care teams.",
    href: "/products/ehr",
  },
  {
    key: "billing",
    title: "REPORTING & ANALYTICS",
    description: "Dashboards, operational insights, and outcomes reporting for informed decision-making.",
    href: "/reporting",
  },
  {
    key: "engage",
    title: "BILLING & PAYMENTS",
    description: "Billing workflows, reimbursements, and patient payment management.",
    href: "/billing-payments",
  },
  {
    key: "telehealth",
    title: "INTEGRATIONS",
    description: "Connect EmbryoOne with your existing systems and third-party tools.",
    href: "/integrations",
  },
  {
    key: "growth",
    title: "GETTING STARTED",
    description: "Implementation resources, onboarding checklists, and training materials.",
    href: "/implementation",
  },
] as const;

export type HelpResourceLink = { label: string; href: string; external?: boolean };

export const helpCenterResourceColumns: Array<{
  title: string;
  headerClass: string;
  links?: HelpResourceLink[];
  bullets?: string[];
  footerLink?: HelpResourceLink;
}> = [
  {
    title: "Getting Started",
    headerClass: "bg-tebra-teal",
    links: [
      { label: "Product Tour", href: "/product-tour" },
      { label: "Documentation", href: "/documentation" },
      { label: "Implementation", href: "/implementation" },
      { label: "Demo Request", href: "/demo" },
      { label: "Create Account", href: "/sign-up" },
    ],
  },
  {
    title: "Product Resources",
    headerClass: "bg-gray-100",
    links: [
      { label: "Release Notes", href: "/newsroom" },
      { label: "User Guides", href: "/guides" },
      { label: "Webinars", href: "/webinars" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Customer Support",
    headerClass: "bg-tebra-hero-bg",
    links: [
      { label: "Help Center Home", href: "/help" },
      { label: "Support", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "System Status", href: "/support" },
    ],
  },
  {
    title: "Company & Legal",
    headerClass: "bg-gray-200",
    links: [
      { label: "About EmbryoOne", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
] as const;

export const helpCenterFooter = {
  tagline: "EMBRYOONE HELP CENTER",
  contactTitle: "Contact Us",
  addressLines: ["EmbryoOne", "Support Team", "Contact us for clinic onboarding and product support"],
  social: [
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" as const },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" as const },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" as const },
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "EmbryoOne Homepage", href: "/" },
    { label: "Resources", href: "/resources" },
  ],
  copyright: "Copyright © 2026 EmbryoOne",
  poweredBy: "Powered by EmbryoOne",
} as const;
