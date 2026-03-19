/**
 * Content for The Intake hub (tebra.com/theintake).
 * Images use keys resolved in the page to local assets (see lib/intakeImages).
 * Article URLs: /theintake/[slug] — use intakeArticleHref(slug).
 */
export const intakePromo = {
  text: "Beat medical billing challenges in 2026",
  href: "/billing-payments",
};

export const intakeTagline =
  "Used by 30,000+ healthcare professionals to solve real practice challenges.";

export const intakeNav = {
  categories: [
    { label: "Practice Growth", href: "/theintake#practice-growth" },
    { label: "Practice Operations", href: "/theintake#practice-operations" },
    { label: "Patient Experience", href: "/patient-experience" },
    { label: "Medical Billing", href: "/theintake#medical-billing" },
    { label: "Deep Dives", href: "/guides" },
    { label: "Checklists and Guides", href: "/guides" },
    { label: "Staffing Solutions", href: "/careers" },
    { label: "Tebra News", href: "/theintake#tebra-news" },
  ],
  tools: [
    { label: "EHR Calculator", href: "/ehr-calculator" },
    { label: "ICD Code Glossary", href: "/documentation" },
    { label: "Practice Efficiency Grader", href: "/practice-efficiency-grader" },
    { label: "Competitor Scanner", href: "/competitive-scanner" },
    { label: "Revenue Recovery Calculator", href: "/billing-payments/billing-calculator" },
  ],
};

export type IntakeTagTone = "peach" | "blue" | "beige" | "gray" | "mint";

export type IntakeArticle = {
  slug: string;
  imageKey: string;
  tag: { label: string; tone: IntakeTagTone };
  readTime: string;
  title: string;
  excerpt?: string;
  author: string;
  kind?: "article" | "newsletter" | "report" | "watch";
};

/** Canonical URL for an Intake article detail page */
export function intakeArticleHref(slug: string): string {
  return `/theintake/${slug}`;
}

/** Short editorial body used on article detail pages (hub clone). */
export function intakeEditorialBody(title: string, author: string): string[] {
  return [
    `“${title}” is part of The Intake’s editorial library for healthcare practice operators. ${author} unpacks ideas you can apply when planning staffing, revenue, and patient experience.`,
    "Tebra’s platform helps practices align clinical documentation, billing, and engagement so leaders can measure performance without stitching together disconnected systems.",
    "Explore product tours for EHR+, billing, and patient experience—or request a demo for a walkthrough tailored to your specialty.",
  ];
}

export const intakeHeroFeatured = {
  slug: "adopt-ceo-mindset-private-practice",
  imageKey: "ceoHero",
  label: "Article",
  title: "Why it’s time to adopt a CEO mindset — and how to do it",
  quote:
    "“It is now becoming very evident that any medical provider needs some general knowledge on how to own and operate a business.”",
  author: "Lisa Eramo",
};

export const intakeTopLeft: IntakeArticle[] = [
  {
    slug: "therapy-burnout-cognitive-load",
    imageKey: "therapy",
    tag: { label: "Practice Operations", tone: "peach" },
    readTime: "1 min read",
    title: "The emotional and cognitive load driving burnout in mental health therapy",
    author: "Jean Lee",
  },
  {
    slug: "intake-newsletter-march-14-2026",
    imageKey: "newsletter",
    tag: { label: "Newsletter", tone: "gray" },
    readTime: "1 min read",
    title: "Week of March 14, 2026: Cut documentation time + Get the latest RCM news",
    author: "The Intake",
    kind: "newsletter",
  },
  {
    slug: "chatgpt-patients-healthcare",
    imageKey: "chatgpt",
    tag: { label: "Patient Experience", tone: "blue" },
    readTime: "5 min read",
    title: "Your patients are using ChatGPT in healthcare. What can, and should, you do?",
    author: "Lisa Eramo",
  },
];

export type IntakeTrendingItem = {
  slug: string;
  imageKey: string;
  tag: { label: string; tone: IntakeTagTone };
  title: string;
  author: string;
  readTime: string;
};

export const intakeTrending: IntakeTrendingItem[] = [
  {
    slug: "physician-burnout-by-specialty-2025",
    imageKey: "erBurnout",
    tag: { label: "Staffing Solutions", tone: "beige" },
    title:
      "Physician burnout by specialty 2025: Navigating stress in the healthcare industry",
    author: "The Intake",
    readTime: "6 min read",
  },
  {
    slug: "health-observances-calendar-2026",
    imageKey: "marchMarketing",
    tag: { label: "Practice Growth", tone: "blue" },
    title: "Complete 2026 calendar of health observances and holidays in the United States",
    author: "The Intake",
    readTime: "8 min read",
  },
  {
    slug: "automate-medical-practice-beginners-guide",
    imageKey: "aiHoldback",
    tag: { label: "Practice Operations", tone: "peach" },
    title: "A complete beginner’s guide: How to start automating your medical practice",
    author: "The Intake",
    readTime: "7 min read",
  },
  {
    slug: "patient-experience-ai-review-replies",
    imageKey: "chatgpt",
    tag: { label: "Patient Experience", tone: "mint" },
    title: "Improve the patient experience with AI-powered review replies and insights",
    author: "The Intake",
    readTime: "5 min read",
  },
  {
    slug: "em-code-updates-2026",
    imageKey: "medicareRule",
    tag: { label: "Medical Billing", tone: "gray" },
    title: "2026 E/M code updates: What you need to know",
    author: "Lisa Eramo",
    readTime: "4 min read",
  },
  {
    slug: "nurse-practitioner-authority-state-laws",
    imageKey: "therapy",
    tag: { label: "Checklists and Guides", tone: "beige" },
    title: "A state-by-state breakdown of nurse practitioner practice authority laws",
    author: "The Intake",
    readTime: "12 min read",
  },
];

export const intakeEhrBand = {
  title: "Discover your EHR cost savings in minutes",
  subtitle:
    "See how the right EHR can reduce costs, free up staff time, and maximize revenue.",
  cta: { label: "Free calculator", href: "/ehr-calculator" },
};

/** Topic shortcuts — each points to a real route or in-page anchor */
export const intakeFilterPills: Array<{ label: string; href: string }> = [
  { label: "EHR", href: "/ehr-calculator" },
  { label: "Patient Experience", href: "/patient-experience" },
  { label: "Reports", href: "/theintake#reports" },
  { label: "News", href: "/theintake#tebra-news" },
  { label: "Primary Care", href: "/specialties/primary-care" },
  { label: "Mental Health", href: "/specialties/psychology" },
  { label: "Vital Signs", href: "/theintake#medical-billing" },
];

export const intakeTebraNewsFeatured: IntakeArticle = {
  slug: "tebra-ai-tools-private-practice-guide",
  imageKey: "aiNews",
  tag: { label: "Tebra News", tone: "blue" },
  readTime: "8 min read",
  title: "Your guide to Tebra’s AI tools for private practice",
  excerpt:
    "Discover how AI Smart Staff tackles documentation, reputation management, and monitoring patient feedback — allowing you to focus on patient care.",
  author: "Jean Lee",
};

export const intakeTebraNewsRow: IntakeArticle[] = [
  {
    slug: "tebra-fullscript-supplements-ehr",
    imageKey: "fullscript",
    tag: { label: "Tebra News", tone: "blue" },
    readTime: "3 min read",
    title: "How to prescribe supplements in your EHR with the Tebra Fullscript integration",
    author: "Rebecca Slawter",
  },
  {
    slug: "what-is-tebra-ehr-plus",
    imageKey: "ehrPlus",
    tag: { label: "Tebra News", tone: "blue" },
    readTime: "6 min read",
    title: "What is Tebra’s EHR+ and how does it work?",
    author: "Tebra",
  },
  {
    slug: "medical-billing-clients-tebra-scale",
    imageKey: "billingClients",
    tag: { label: "Tebra News", tone: "blue" },
    readTime: "10 min read",
    title: "How to get medical billing clients (and scale faster) with Tebra",
    author: "Tebra",
  },
  {
    slug: "ai-medical-scribes-comparison-tebra",
    imageKey: "aiScribes",
    tag: { label: "Tebra News", tone: "blue" },
    readTime: "5 min read",
    title:
      "The best AI medical scribes compared: What sets Tebra’s AI-generated notes apart?",
    author: "Tebra",
  },
];

export const intakePracticeGrowth: IntakeArticle[] = [
  {
    slug: "march-2026-healthcare-observances-marketing",
    imageKey: "marchMarketing",
    tag: { label: "Article", tone: "peach" },
    readTime: "8 min read",
    title: "March 2026 healthcare observances and marketing ideas",
    author: "Sharon Brandwein",
  },
  {
    slug: "adopt-ceo-mindset-private-practice",
    imageKey: "ceoHero",
    tag: { label: "Article", tone: "peach" },
    readTime: "5 min read",
    title: "Why it’s time to adopt a CEO mindset — and how to do it",
    author: "Lisa Eramo",
  },
  {
    slug: "personalization-strategies-practice-growth",
    imageKey: "personalization",
    tag: { label: "Article", tone: "peach" },
    readTime: "7 min read",
    title: "5 proven personalization strategies for practice growth",
    author: "Rebecca Slawter",
  },
  {
    slug: "start-medical-billing-company",
    imageKey: "billingCompany",
    tag: { label: "Article", tone: "peach" },
    readTime: "11 min read",
    title: "How to start a medical billing company: Key steps and strategies",
    author: "Tolu Ajiboye",
  },
];

export const intakeMedicalBilling: IntakeArticle[] = [
  {
    slug: "vital-signs-rcm-february-2026",
    imageKey: "vitalSigns",
    tag: { label: "Article", tone: "peach" },
    readTime: "8 min read",
    title: "Vital Signs: A February 2026 RCM healthcare news wrap-up",
    author: "Lisa Eramo",
  },
  {
    slug: "revenue-cycle-backlogs-payer-contracts",
    imageKey: "rcmBacklog",
    tag: { label: "Article", tone: "peach" },
    readTime: "5 min read",
    title:
      "Even with favorable payer contracts, you can still lose money: Addressing revenue cycle backlogs",
    author: "Lisa Eramo",
  },
  {
    slug: "digital-payment-solutions-practices",
    imageKey: "digitalPay",
    tag: { label: "Article", tone: "peach" },
    readTime: "4 min read",
    title: "Digital Payment Solutions for Medical Practices | The Intake",
    author: "Amantha May",
  },
  {
    slug: "medicare-pfs-2026-changes-practices",
    imageKey: "medicareRule",
    tag: { label: "Article", tone: "peach" },
    readTime: "1 min read",
    title:
      "7 changes in the 2026 Medicare Physician Fee Schedule Final Rule that benefit practices",
    author: "Lisa Eramo",
  },
];

export const intakePracticeOperations: IntakeArticle[] = [
  {
    slug: "medical-practices-trust-ai-prerequisites",
    imageKey: "aiTrust",
    tag: { label: "Article", tone: "peach" },
    readTime: "7 min read",
    title: "What medical practices need before trusting AI",
    author: "Michelle Meier",
  },
  {
    slug: "women-physicians-burnout-survey",
    imageKey: "burnoutWomen",
    tag: { label: "Article", tone: "peach" },
    readTime: "6 min read",
    title:
      "Survey data shows women physicians carry greater burnout burden: Understanding the divide",
    author: "Jean Lee",
  },
  {
    slug: "ai-redefines-medical-documentation",
    imageKey: "aiDocs",
    tag: { label: "Article", tone: "peach" },
    readTime: "9 min read",
    title: "Simplifying care: How AI redefines medical documentation",
    author: "Elsier Otachi",
  },
  {
    slug: "ai-adoption-barriers-medical-practices",
    imageKey: "aiHoldback",
    tag: { label: "Article", tone: "peach" },
    readTime: "7 min read",
    title: "What’s holding medical practices back from using AI?",
    author: "Elsier Otachi",
  },
];

export const intakeLatestArticles: IntakeArticle[] = [
  {
    slug: "patients-choose-doctors-digital-first",
    imageKey: "chooseDoctor",
    tag: { label: "Report", tone: "gray" },
    readTime: "4 min read",
    title: "How patients choose and drop doctors in a digital-first healthcare system",
    author: "Jean Lee",
    kind: "report",
  },
  {
    slug: "patients-providers-chatgpt-in-care",
    imageKey: "chatgptCare",
    tag: { label: "Report", tone: "gray" },
    readTime: "5 min read",
    title: "How patients and providers use ChatGPT in care",
    author: "Jean Lee",
    kind: "report",
  },
  {
    slug: "burnout-emergency-medicine",
    imageKey: "erBurnout",
    tag: { label: "Article", tone: "peach" },
    readTime: "1 min read",
    title: "Always on alert: Why burnout is so common in emergency medicine",
    author: "Jean Lee",
  },
  {
    slug: "cardiology-burnout-administrative-burden",
    imageKey: "cardioBurnout",
    tag: { label: "Article", tone: "peach" },
    readTime: "8 min read",
    title:
      "Buried in bureaucracy: How administrative work is driving burnout in cardiology",
    author: "Jean Lee",
  },
];

export const intakeExperts: Array<{ author: string; title: string; href: string }> = [
  {
    author: "Lisa Eramo",
    title: "How compliance can be a medical billing company’s competitive advantage",
    href: "/billing-payments",
  },
  {
    author: "Dr. John Scala",
    title: "Medical billing options for private practices: In-house vs. outsourced",
    href: "/billing-payments",
  },
  {
    author: "Kristin Trick",
    title: "Top challenges mental health practitioners face — and how to overcome them",
    href: "/specialties/psychology",
  },
  {
    author: "Lisa Eramo",
    title: "The Big Beautiful Bill in practice",
    href: "/newsroom",
  },
  {
    author: "Lisa Eramo",
    title: "7 ways physicians can prepare for potential Medicaid cuts",
    href: "/resources",
  },
];

/** Sidebar card under “Hear From Our Experts” */
export const intakeExpertSpotlight: IntakeArticle = {
  slug: "cigna-em-downcoding-october-2025",
  imageKey: "cigna",
  tag: { label: "Medical Billing", tone: "blue" },
  readTime: "5 min read",
  title:
    "Cigna may start downcoding your E/M codes starting October 1, 2025: What to know (+ free sample appeal letter)",
  author: "Lisa Eramo",
};

/** Small cards in the Latest Articles sidebar (previously inline in the page) */
export const intakeSidebarArticles: IntakeArticle[] = [
  {
    slug: "insurance-medical-practices-assets",
    imageKey: "ehrPlus",
    tag: { label: "Practice Operations", tone: "peach" },
    readTime: "6 min read",
    title: "Insurance for medical practices: Protecting your business and assets",
    author: "Dr. John Scala",
  },
  {
    slug: "mental-health-networking-practice-growth",
    imageKey: "therapy",
    tag: { label: "Practice Growth", tone: "blue" },
    readTime: "10 min read",
    title: "Leveraging professional connections to grow your mental health practice",
    author: "Kristin Trick",
  },
  {
    slug: "practice-staff-digital-convenience-quiz",
    imageKey: "aiTrust",
    tag: { label: "Practice Operations", tone: "peach" },
    readTime: "2 min read",
    title: "Quiz: Is your medical practice staff ready for digital convenience?",
    author: "Jean Lee",
  },
];

export const intakeNewsletter = {
  title:
    "Get the latest industry updates, financial tips, and expert strategies — delivered straight to your inbox.",
  bullets: [
    "Practice Growth & Management – Tips and strategies to streamline operations, enhance the patient experience, and grow your private practice",
    "Billing & RCM Insights – Proven best practices for medical billing, maximizing reimbursements, and staying ahead of industry regulations",
  ],
  privacyNote:
    "By submitting my email address above, I acknowledge that Tebra may use my information as described in its Privacy Policy.",
};

export const intakeResources = [
  {
    type: "Case Study",
    title: "How independent practices build stability without adding hours",
    blurb: "Staying independent is harder than it was even a year ago.",
    cta: "Download now",
    href: "/case-studies",
    imageKey: "resource1",
  },
  {
    type: "Report",
    title: "The state of the independent practice in 2026",
    blurb:
      "Independent practices are under increasing strain as financial and administrative demands continue to rise.",
    cta: "Download now",
    href: "/resources",
    imageKey: "resource2",
  },
  {
    type: "Infographic",
    title: "2026 independent practice survey benchmarks",
    blurb:
      "This infographic summarizes the most telling benchmarks from Tebra’s 2026 State of the Independent Practice national survey.",
    cta: "Download now",
    href: "/resources",
    imageKey: "resource3",
  },
];

export const intakeBottomCta = {
  title: "See Tebra in action — your all-in-one solution for practice growth",
  subtitle:
    "Take a self-guided tour or book a personalized demo to discover how Tebra streamlines your workflow, enhances patient experience, and maximizes revenue.",
  primary: { label: "Request a demo", href: "/demo" },
  secondary: { label: "Take a self-guided tour", href: "/product-tour" },
};

export const intakeFooter = {
  blurb:
    "The Intake is powered by Tebra. Tebra connects private practices to the resources they need to thrive.",
  about: [
    { label: "About The Intake", href: "/theintake" },
    { label: "Our Story", href: "/about/story" },
    { label: "Contact Us", href: "/contact" },
    { label: "Editorial Standards", href: "/theintake/editorial-standards" },
  ],
  topics: [
    { label: "Practice Operations", href: "/theintake#practice-operations" },
    { label: "Practice Growth", href: "/theintake#practice-growth" },
    { label: "Staffing Solutions", href: "/careers" },
    { label: "Patient Experience", href: "/patient-experience" },
    { label: "Getting Paid", href: "/billing-payments" },
    { label: "Deep Dives", href: "/guides" },
    { label: "Checklists and Guides", href: "/guides" },
  ],
  guides: [
    { label: "How to Start a Medical Practice", href: "/independent-practices" },
    { label: "Healthcare Marketing in 2025", href: "/marketing" },
    { label: "Medical Billing Benchmark Report", href: "/resources" },
    { label: "Patient Perspectives Report", href: "/patient-experience" },
    { label: "Ultimate Guide for Practice Growth", href: "/marketing" },
    { label: "How to Get Patient Reviews", href: "/marketing/practice-websites" },
  ],
  aboutTebra: [
    { label: "Our Story", href: "/about" },
    { label: "Tour Tebra Products", href: "/product-tour" },
    { label: "Who We're For", href: "/independent-practices" },
    { label: "Independent Practices", href: "/independent-practices" },
    { label: "Billing Companies", href: "/for-billing-companies" },
    { label: "Specialty Practices", href: "/specialties/primary-care" },
  ],
  whatWeDo: [
    { label: "Practice Growth", href: "/marketing" },
    { label: "Practice Automation", href: "/ai" },
    { label: "Find a Doctor", href: "/" },
  ],
};

const intakeArticleLists: IntakeArticle[][] = [
  intakeTopLeft,
  [intakeTebraNewsFeatured],
  intakeTebraNewsRow,
  intakePracticeGrowth,
  intakeMedicalBilling,
  intakePracticeOperations,
  intakeLatestArticles,
  [intakeExpertSpotlight],
  intakeSidebarArticles,
];

export type ResolvedIntakeArticle = IntakeArticle & {
  pullQuote?: string;
  heroEyebrow?: string;
};

/**
 * Resolve editorial content for /theintake/[slug].
 * Hero story adds pull quote + eyebrow label.
 */
export function getIntakeArticleBySlug(slug: string): ResolvedIntakeArticle | undefined {
  if (slug === intakeHeroFeatured.slug) {
    return {
      slug: intakeHeroFeatured.slug,
      imageKey: intakeHeroFeatured.imageKey,
      tag: { label: "Article", tone: "peach" },
      readTime: "5 min read",
      title: intakeHeroFeatured.title,
      author: intakeHeroFeatured.author,
      pullQuote: intakeHeroFeatured.quote,
      heroEyebrow: intakeHeroFeatured.label,
    };
  }

  const fromTrending = intakeTrending.find((t) => t.slug === slug);
  if (fromTrending) {
    return {
      slug: fromTrending.slug,
      imageKey: fromTrending.imageKey,
      tag: fromTrending.tag,
      readTime: fromTrending.readTime,
      title: fromTrending.title,
      author: fromTrending.author,
    };
  }

  for (const list of intakeArticleLists) {
    const found = list.find((a) => a.slug === slug);
    if (found) return { ...found };
  }

  return undefined;
}

export function getAllIntakeArticleSlugs(): string[] {
  const set = new Set<string>();
  set.add(intakeHeroFeatured.slug);
  for (const t of intakeTrending) set.add(t.slug);
  for (const list of intakeArticleLists) {
    for (const a of list) set.add(a.slug);
  }
  return [...set];
}
