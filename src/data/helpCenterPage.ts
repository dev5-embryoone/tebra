/**
 * Tebra Help Center — content aligned with https://helpme.tebra.com/
 */
export const helpCenterAnnouncement = {
  text: "Kareo and PatientPop are now Tebra. Becoming Tebra will take time and we appreciate your patience as we transition to the new brand experience.",
  cta: "Learn More",
  href: "/about",
} as const;

export const helpCenterNav = [
  { label: "Help Center", href: "/help", current: true as boolean },
  { label: "Tebra University", href: "/documentation", current: false },
  { label: "My Account", href: "/sign-in", current: false },
  { label: "Contact Us", href: "/contact", current: false },
] as const;

export const helpCenterCategories = [
  {
    key: "platform",
    title: "PLATFORM",
    description: "Managing Patients, Scheduling, Provider Profiles, and more.",
    href: "/scheduling",
  },
  {
    key: "clinical",
    title: "CLINICAL (EHR)",
    description: "Notes, Charting, ePrescribing, Custom Templates, and more.",
    href: "/ehr",
  },
  {
    key: "billing",
    title: "BILLING (PM)",
    description: "Insurance & Patient Billing, Insurance Eligibility, Electronic Claims, and more.",
    href: "/billing-payments",
  },
  {
    key: "engage",
    title: "ENGAGE",
    description: "Patient Communications, Online Visibility, Front Office Automation, and more.",
    href: "/patient-experience",
  },
  {
    key: "telehealth",
    title: "TELEHEALTH",
    description: "Video visits and more.",
    href: "/telehealth",
  },
  {
    key: "growth",
    title: "PRACTICE GROWTH",
    description: "Previously PatientPop",
    href: "/marketing",
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
    title: "Training",
    headerClass: "bg-[#5E8B8E]",
    links: [
      { label: "Tebra University", href: "/documentation" },
      { label: "Professional Services", href: "/implementation" },
      { label: "Release Notes", href: "/newsroom" },
      { label: "User Guides", href: "/guides" },
      { label: "Tebra Videos", href: "/webinars" },
    ],
  },
  {
    title: "Quick Links",
    headerClass: "bg-[#FAD2C1]",
    links: [
      { label: "Getting Started", href: "/independent-practices" },
      { label: "Download PM", href: "/billing-payments" },
      { label: "Claim Rejections", href: "/billing-payments/electronic-claim-submission" },
      { label: "System Status", href: "/help" },
      { label: "API / Integration", href: "/integrations" },
    ],
  },
  {
    title: "Billing Companies",
    headerClass: "bg-[#E2D6C5]",
    bullets: ["Information", "Training", "Support"],
    footerLink: { label: "Learn More", href: "/for-billing-companies" },
  },
  {
    title: "CMS Incentive Programs",
    headerClass: "bg-[#D1D9D9]",
    links: [
      { label: "MACRA", href: "/compliance" },
      { label: "Quality Measures", href: "/reporting" },
      { label: "Training Videos", href: "/webinars" },
      { label: "Additional Resources", href: "/resources" },
    ],
  },
] as const;

export const helpCenterFooter = {
  tagline: "TEBRA, BUILT ON THE STRENGTH OF",
  contactTitle: "Contact Us",
  addressLines: ["1111 Bayside Drive", "Suite 270", "Corona Del Mar, CA 92625"],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/tebrahealth", icon: "facebook" as const },
    { label: "Instagram", href: "https://www.instagram.com/tebrahealth", icon: "instagram" as const },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/tebra", icon: "linkedin" as const },
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Tebra Homepage", href: "/" },
    { label: "Blog", href: "/theintake" },
  ],
  copyright: "Copyright © 2026 Tebra Technologies, Inc",
  poweredBy: "Powered by CXone Expert®",
} as const;
