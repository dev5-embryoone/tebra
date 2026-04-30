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
    title: "Platform",
    links: [{ label: "Platform overview", href: "/platform" }],
  },
  {
    title: "Products",
    links: [
      { label: "Witness", href: "/products/witness" },
      { label: "Lab Health", href: "/products/lab-health" },
      { label: "Consumption", href: "/products/consumption" },
      { label: "Cryo Tracker", href: "/products/cryo-tracker" },
      { label: "Embryo Capture", href: "/products/embryo-capture" },
      { label: "AI Grading", href: "/products/ai-grading" },
      { label: "EHR", href: "/products/ehr" },
      { label: "Patient Experience", href: "/products/patient-experience" },
      { label: "People", href: "/products/people" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Embryologists", href: "/solutions/embryologists" },
      { label: "Lab Directors", href: "/solutions/lab-directors" },
      { label: "Doctors", href: "/solutions/doctors" },
      { label: "Clinic Admin", href: "/solutions/clinic-admin" },
      { label: "Lab Traceability", href: "/solutions/lab-traceability" },
      { label: "Embryo Selection", href: "/solutions/embryo-selection" },
      { label: "Cryo Management", href: "/solutions/cryo-management" },
      { label: "Inventory Tracking", href: "/solutions/inventory-tracking" },
    ],
  },
  {
    title: "AI",
    links: [
      { label: "AI Grading Overview", href: "/ai/overview" },
      { label: "Accuracy & Validation", href: "/ai/accuracy-validation" },
      { label: "Clinical Use Cases", href: "/ai/clinical-use-cases" },
      { label: "Roadmap", href: "/ai/roadmap" },
      { label: "Embryo Copilot", href: "/ai/embryo-copilot" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/home-resources/case-studies" },
      { label: "Product Guide", href: "/home-resources/product-guide" },
      { label: "Help Center", href: "/home-resources/help-center" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const footerContact = {
  addressLines: ["1111 Bayside Drive", "Suite 270", "Corona Del Mar, CA 92625"] as const,
  phoneDisplay: "(866) 938-3272",
  phoneHref: "tel:8669383272",
  copyright: "Copyright © 2026 EmbryoOne Technologies, Inc",
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ] as const,
};
