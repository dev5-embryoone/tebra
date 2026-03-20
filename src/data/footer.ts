/**
 * Footer column links — single source of truth for site footer.
 * Edit here to update all footer links across the clone.
 */
export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumnData = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumnData[] = [
  {
    title: "Who We're For",
    links: [
      { label: "Independent practices", href: "/independent-practices" },
      { label: "New practices", href: "#" },
      { label: "Billing payments", href: "/billing-payments" },
      { label: "Specialties", href: "#" },
      { label: "Patients", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Product Tour", href: "/product-tour" },
      { label: "Patient Experience", href: "/patient-experience" },
      { label: "EHR", href: "/ehr" },
      { label: "Billing payments", href: "/billing-payments" },
      { label: "Data & insights", href: "/analytics" },
      { label: "Find a doctor", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "AI Smart Staff", href: "/ai" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "The Intake", href: "#" },
      { label: "Practice Efficiency Grader", href: "/practice-efficiency-grader" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Blog", href: "#" },
      { label: "Partner Marketplace", href: "/partners" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Help Center", href: "/help" },
      { label: "Quality Programs & Regulatory Support", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about/story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Investors", href: "/about#investors" },
      { label: "Partners", href: "/partners" },
      { label: "Billing payments", href: "/billing-payments" },
      { label: "Culture & Careers", href: "/careers" },
      { label: "DEI", href: "/about#dei" },
    ],
  },
  {
    title: "Why Tebra",
    links: [
      { label: "Attract More Patients", href: "#" },
      { label: "Manage Your Reputation", href: "#" },
      { label: "Enhance Your Patient Experience", href: "#" },
      { label: "Automate Your Practice", href: "#" },
      { label: "Deliver Better Care", href: "#" },
      { label: "Get Paid Faster", href: "#" },
      { label: "Gain Deeper Insights", href: "#" },
    ],
  },
];

export const footerContact = {
  addressLines: ["1111 Bayside Drive", "Suite 270", "Corona Del Mar, CA 92625"] as const,
  phoneDisplay: "(866) 93-TEBRA (83272)",
  phoneHref: "tel:8669383272",
  copyright: "Copyright © 2026 Tebra Technologies, Inc",
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ] as const,
};
