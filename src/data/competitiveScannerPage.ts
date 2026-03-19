/** Competitive / Practice Scanner — aligned with compare.tebra.com */

export const competitiveScannerMeta = {
  title: "Free competitive scanner | Tebra",
  description:
    "Compare your practice against local peers online. See how your web presence, reputation, and visibility stack up — for free.",
} as const;

export const competitiveScannerHeader = {
  phone: "1-866-586-7207",
  phoneHref: "tel:+18665867207",
  demoLabel: "Get demo",
  demoHref: "/demo",
  homeHref: "/",
} as const;

export const competitiveScannerHero = {
  eyebrow: "Practice scanner",
  title: "Find out how your online performance stacks up — for free",
  subtitle:
    "Instantly compare your practice with others in your locality and specialty",
} as const;

export const competitiveScannerForm = {
  practiceNameLabel: "Practice name",
  practiceNamePlaceholder: "Enter your practice name",
  specialtyLabel: "Specialty",
  specialtyPlaceholder: "e.g. Family medicine",
  providerCountLabel: "Providers",
  submitLabel: "Compare",
  /** Form method for static demo flow */
  action: "/demo",
  method: "get" as const,
} as const;

export const competitiveScannerCubes = {
  yourPractice: "Your practice",
  competitor2: "Competitor 2",
  competitor3: "Competitor 3",
} as const;

export const competitiveScannerBarSection = {
  competitors: [
    { id: "c1", label: "Competitor 1", heightPct: 35, capColor: "#e85d5d" },
    { id: "c2", label: "Competitor 2", heightPct: 55, capColor: "#8b6bb8" },
    {
      id: "you",
      label: "Your practice",
      heightPct: 68,
      capColor: "#e8c547",
      highlightBubble: true,
    },
    { id: "c3", label: "Competitor 3", heightPct: 88, capColor: "#5cb87a" },
  ] as const,
  title: "77% of patients search online for doctors.*",
  body:
    "A strong web presence is key to attracting and retaining patients. Get your free report to understand how patients evaluate your practice, and whether they're more likely to select you or your competition.",
  footnote: "*Tebra's 4th annual Patient Perspectives report",
} as const;

export type CompetitiveFeatureItem = {
  title: string;
  description: string;
  /** Matches import key in page */
  illustration: "googleRank" | "reputation" | "webPresence" | "website";
};

export const competitiveScannerFeatures: CompetitiveFeatureItem[] = [
  {
    title: "Google visibility",
    description:
      "See how you rank in local search and maps compared with nearby practices patients actually consider.",
    illustration: "googleRank",
  },
  {
    title: "Reputation & reviews",
    description:
      "Understand how your online reputation shapes first impressions before a patient ever calls.",
    illustration: "reputation",
  },
  {
    title: "Web presence",
    description:
      "Benchmark your digital footprint so you know where you're winning — and where competitors pull ahead.",
    illustration: "webPresence",
  },
  {
    title: "Website experience",
    description:
      "Compare how your site stacks up on clarity, trust, and the actions patients take next.",
    illustration: "website",
  },
];
