/**
 * Mobile nav structure for final 6-tab IA:
 * Platform / Products / Solutions / AI / Resources / Company
 */
export const mobilePlatformLinks = [
] as const;

export const mobileProductSections = [
  {
    heading: "Lab System",
    links: [
      { label: "Witness", href: "/products/witness" },
      { label: "Lab Health", href: "/products/lab-health" },
      { label: "Consumption", href: "/products/consumption" },
      { label: "Cryo Tracker", href: "/products/cryo-tracker" },
    ],
  },
  {
    heading: "Embryo Intelligence",
    links: [
      { label: "Embryo Capture", href: "/products/embryo-capture" },
      { label: "AI Grading", href: "/products/ai-grading" },
    ],
  },
  {
    heading: "Clinical & Patient",
    links: [
      { label: "EHR", href: "/products/ehr" },
      { label: "Patient Experience", href: "/products/patient-experience" },
      { label: "People", href: "/products/people" },
    ],
  },
] as const;

export const mobileSolutionSections = [
  {
    heading: "By Role",
    links: [
      { label: "Embryologists", href: "/solutions/embryologists" },
      { label: "Lab Directors", href: "/solutions/lab-directors" },
      { label: "Doctors", href: "/solutions/doctors" },
      { label: "Clinic Admin", href: "/solutions/clinic-admin" },
    ],
  },
  {
    heading: "By Workflow",
    links: [
      { label: "Lab Traceability", href: "/solutions/lab-traceability" },
      { label: "Embryo Selection", href: "/solutions/embryo-selection" },
      { label: "Cryo Management", href: "/solutions/cryo-management" },
      { label: "Inventory Tracking", href: "/solutions/inventory-tracking" },
    ],
  },
] as const;

export const mobileAiLinks = [
  { label: "AI Grading Overview", href: "/ai/overview" },
  { label: "Accuracy & Validation", href: "/ai/accuracy-validation" },
  { label: "Clinical Use Cases", href: "/ai/clinical-use-cases" },
  { label: "Roadmap", href: "/ai/roadmap" },
  { label: "Embryo Copilot", href: "/ai/embryo-copilot" },
] as const;

export const mobileResourceLinks = [
  { label: "Case Studies", href: "/home-resources/case-studies" },
  { label: "Product Guide", href: "/home-resources/product-guide" },
  { label: "Help Center", href: "/home-resources/help-center" },
] as const;

export const mobileCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
] as const;
