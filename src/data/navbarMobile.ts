/**
 * Mobile nav structure — mirrors desktop Products / About / Resources mega-menus
 * (no duplicate “all pages” list).
 */
export const mobileProductSections = [
  {
    heading: "Products",
    links: [
      { label: "EHR", href: "/ehr" },
      { label: "Billing & payments", href: "/billing-payments" },
      { label: "Patient experience", href: "/patient-experience" },
      { label: "Practice marketing", href: "/marketing" },
    ],
  },
  {
    heading: "Practice type",
    links: [
      { label: "Independent practices", href: "/independent-practices" },
      { label: "Billing companies", href: "/for-billing-companies" },
    ],
  },
  {
    heading: "Specialty",
    links: [
      { label: "Family medicine", href: "/specialties/family-medicine" },
      { label: "Primary care", href: "/specialties/primary-care" },
      { label: "Pediatrics", href: "/specialties/pediatrics" },
      { label: "Mental health", href: "/specialties/psychology" },
      { label: "Nurse practitioners", href: "/specialties/nurse-practitioners" },
    ],
  },
  {
    heading: "Popular features",
    links: [
      { label: "Electronic labs", href: "/ehr-software/electronic-labs" },
      { label: "Patient portal", href: "/patient-portal" },
      { label: "Online scheduling", href: "/scheduling" },
      { label: "Telehealth", href: "/telehealth" },
      { label: "Practice websites", href: "/marketing/practice-websites" },
      { label: "AI Smart Staff", href: "/ai" },
      { label: "Electronic claims submission", href: "/billing-payments/electronic-claim-submission" },
      { label: "Robotic process automation (RPA)", href: "/billing-payments/robotic-process-automation" },
    ],
  },
] as const;

export const mobileAboutLinks = [
  { label: "Our Story", href: "/about/story" },
  { label: "Leadership", href: "/leadership" },
  { label: "Partners", href: "/partners" },
  { label: "Investors", href: "/investors" },
  { label: "DEI", href: "/diversity-equity-and-inclusion" },
  { label: "Careers", href: "/careers" },
] as const;

export const mobileResourceSections = [
  {
    heading: "Resources",
    links: [
      { label: "The Intake", href: "/theintake" },
      { label: "Resource Library", href: "/resources" },
      { label: "News Room", href: "/newsroom" },
      { label: "Testimonials", href: "/resources/testimonials" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Partner Marketplace", href: "/partners" },
    ],
  },
  {
    heading: "Interactive tools",
    links: [
      { label: "Product Tour", href: "/product-tour" },
      { label: "EHR Calculator", href: "/ehr-calculator/step-1" },
      { label: "Billing Calculator", href: "/billing-payments/billing-calculator" },
      { label: "Competitive Scanner", href: "/competitive-scanner" },
      { label: "Efficiency Grader", href: "/practice-efficiency-grader" },
    ],
  },
] as const;
