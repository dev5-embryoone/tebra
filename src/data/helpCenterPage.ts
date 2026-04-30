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
  { label: "Product Guide", href: "/home-resources/product-guide", current: false },
  { label: "My Account", href: "/sign-in", current: false },
] as const;

export const helpCenterCategories = [
  {
    key: "platform",
    title: "PLATFORM",
    description: "Operate IVF workflows in one connected system with real-time visibility and coordination.",
    href: "/platform",
  },
  {
    key: "clinical",
    title: "CLINICAL (EHR)",
    description: "Manage patient charts, orders, schedules, and decision queues built for IVF care teams.",
    href: "/products/ehr",
  },
  {
    key: "billing",
    title: "AI & EMBRYO INTELLIGENCE",
    description: "Use AI grading and Copilot insights to support faster, more consistent embryo decisions.",
    href: "/ai/overview",
  },
  {
    key: "engage",
    title: "LAB OPERATIONS",
    description: "Track witness, lab health, cryo, and inventory workflows with full traceability.",
    href: "/products/witness",
  },
  {
    key: "telehealth",
    title: "PRODUCT TOUR",
    description: "Explore key EmbryoOne workflows with a guided, page-by-page product walkthrough.",
    href: "/product-tour",
  },
  {
    key: "growth",
    title: "SOLUTIONS",
    description: "Browse role-based and workflow-based solution pages tailored for IVF teams.",
    href: "/solutions/embryologists",
  },
] as const;

export type HelpResourceLink = { label: string; href: string; external?: boolean };
export type HelpSearchDocument = {
  title: string;
  href: string;
  excerpt: string;
  keywords?: string[];
};

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
      { label: "Product Guide", href: "/home-resources/product-guide" },
      { label: "Demo Request", href: "/demo" },
      { label: "Sign In", href: "/sign-in" },
    ],
  },
  {
    title: "Product Modules",
    headerClass: "bg-[#5E2A84]",
    links: [
      { label: "Witness", href: "/products/witness" },
      { label: "Lab Health", href: "/products/lab-health" },
      { label: "Consumption", href: "/products/consumption" },
      { label: "Cryo Tracker", href: "/products/cryo-tracker" },
      { label: "People", href: "/products/people" },
    ],
  },
  {
    title: "AI & Solutions",
    headerClass: "bg-[#4B2A63]",
    links: [
      { label: "AI Grading Overview", href: "/ai/overview" },
      { label: "Clinical Use Cases", href: "/ai/clinical-use-cases" },
      { label: "Embryo Copilot", href: "/ai/embryo-copilot" },
      { label: "Solutions by Role", href: "/solutions/embryologists" },
      { label: "Solutions by Workflow", href: "/solutions/lab-traceability" },
    ],
  },
  {
    title: "Resources & Support",
    headerClass: "bg-[#6B4A93]",
    links: [
      { label: "Help Center Home", href: "/help" },
      { label: "Product Guide", href: "/home-resources/product-guide" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
] as const;

export const helpCenterFooter = {
  tagline: "EMBRYOONE HELP CENTER",
  contactTitle: "Support",
  addressLines: ["EmbryoOne", "Support Team", "Reach us for clinic onboarding and product support"],
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

const productSearchDocs: HelpSearchDocument[] = [
  {
    title: "Platform Overview",
    href: "/platform",
    excerpt: "Connected IVF operations, lab workflows, and real-time clinical coordination.",
    keywords: ["platform", "dashboard", "operations"],
  },
  {
    title: "Witness",
    href: "/products/witness",
    excerpt: "Track identity checks and reduce mismatch risk with full traceability.",
    keywords: ["witness", "mismatch", "verification", "traceability"],
  },
  {
    title: "Lab Health",
    href: "/products/lab-health",
    excerpt: "Monitor incubators and lab conditions with alerts and trend visibility.",
    keywords: ["lab health", "monitoring", "temperature", "alerts"],
  },
  {
    title: "Consumption",
    href: "/products/consumption",
    excerpt: "Track inventory usage, procurement, and approval workflows in one system.",
    keywords: ["inventory", "consumption", "procurement", "stock"],
  },
  {
    title: "Cryo Tracker",
    href: "/products/cryo-tracker",
    excerpt: "Manage cryostorage, movement logs, and embryo location visibility.",
    keywords: ["cryo", "storage", "tank", "ln2"],
  },
  {
    title: "AI Grading",
    href: "/products/ai-grading",
    excerpt: "Use AI-assisted embryo grading with confidence scores and clinical review.",
    keywords: ["ai grading", "grading", "confidence", "embryo"],
  },
  {
    title: "EHR",
    href: "/products/ehr",
    excerpt: "Coordinate IVF clinical workflows, orders, charts, and decision queues.",
    keywords: ["ehr", "clinical", "orders", "chart"],
  },
  {
    title: "People",
    href: "/products/people",
    excerpt: "Manage team structure, tasks, communication, and workflow ownership.",
    keywords: ["people", "team", "tasks", "roles"],
  },
];

const aiSearchDocs: HelpSearchDocument[] = [
  {
    title: "AI Grading Overview",
    href: "/ai/overview",
    excerpt: "Understand how AI Grading works from upload to final review.",
    keywords: ["ai", "overview", "grading"],
  },
  {
    title: "Accuracy & Validation",
    href: "/ai/accuracy-validation",
    excerpt: "Review reliability, validation approach, and confidence interpretation.",
    keywords: ["accuracy", "validation", "confidence"],
  },
  {
    title: "Clinical Use Cases",
    href: "/ai/clinical-use-cases",
    excerpt: "See practical AI workflows for embryologists, clinicians, and lab teams.",
    keywords: ["clinical use cases", "workflow", "decision support"],
  },
  {
    title: "Embryo Copilot",
    href: "/ai/embryo-copilot",
    excerpt: "Ask natural-language questions and get instant IVF workflow answers.",
    keywords: ["copilot", "chat", "assistant", "insights"],
  },
];

const solutionSearchDocs: HelpSearchDocument[] = [
  { title: "Embryologists", href: "/solutions/embryologists", excerpt: "Standardize lab procedures and reduce manual work.", keywords: ["role", "embryologist"] },
  { title: "Lab Directors", href: "/solutions/lab-directors", excerpt: "Improve lab oversight and operational performance visibility.", keywords: ["role", "director"] },
  { title: "Doctors", href: "/solutions/doctors", excerpt: "Access cycle and embryo insights to support faster decisions.", keywords: ["role", "doctor"] },
  { title: "Clinic Admin", href: "/solutions/clinic-admin", excerpt: "Streamline reporting, resources, and cross-team operations.", keywords: ["role", "admin"] },
  { title: "Lab Traceability", href: "/solutions/lab-traceability", excerpt: "Track every critical action with accountability and audit context.", keywords: ["workflow", "traceability"] },
  { title: "Embryo Selection", href: "/solutions/embryo-selection", excerpt: "Support consistent decision-making with imaging and AI.", keywords: ["workflow", "selection"] },
  { title: "Cryo Management", href: "/solutions/cryo-management", excerpt: "Monitor cryo status, storage movement, and safety workflows.", keywords: ["workflow", "cryo"] },
  { title: "Inventory Tracking", href: "/solutions/inventory-tracking", excerpt: "Maintain reliable inventory usage and availability across lab operations.", keywords: ["workflow", "inventory"] },
];

export const helpCenterSearchDocuments: HelpSearchDocument[] = [
  ...helpCenterCategories.map((cat) => ({
    title: cat.title,
    href: cat.href,
    excerpt: cat.description,
    keywords: [cat.key.toLowerCase()],
  })),
  ...helpCenterResourceColumns.flatMap((col) =>
    (col.links ?? []).map((link) => ({
      title: link.label,
      href: link.href,
      excerpt: `${col.title} resource`,
      keywords: [col.title.toLowerCase()],
    }))
  ),
  ...productSearchDocs,
  ...aiSearchDocs,
  ...solutionSearchDocs,
];
