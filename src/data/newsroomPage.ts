/** Content aligned with tebra.com/newsroom */

export const newsroomMeta = {
  title: "Newsroom - Press Releases and Articles | Tebra",
  description:
    "What's new and notable in the world of Tebra — press releases, media coverage, and press resources.",
  heroTitle: "Newsroom",
  heroSubtitle: "What's new and notable in the world of Tebra.",
};

export const newsroomTabs = [
  { id: "press-releases", label: "Press Releases" },
  { id: "in-the-news", label: "In the News" },
  { id: "press-resources", label: "Press Resources" },
] as const;

export type PressRelease = {
  title: string;
  href: string;
};

export const pressReleases: PressRelease[] = [
  {
    title: "Private practice platform Tebra secures $250M to accelerate AI innovation",
    href: "/newsroom",
  },
  {
    title: "Tebra partners with DrFirst to improve medication adherence",
    href: "/newsroom",
  },
  {
    title:
      "Tebra Launches Industry-First AI Review Replies and AI Review Insights as Part of EHR+ Patient Experience Package",
    href: "/newsroom",
  },
  {
    title:
      "Tebra partners with WoundZoom to simplify wound care management for independent practices",
    href: "/newsroom",
  },
  {
    title:
      "Tebra Launches AI Note Assist, Reducing Clinical Documentation Time by 50% for Independent Practices",
    href: "/newsroom",
  },
  {
    title: "Kareo is now Tebra – website transition effective December 5",
    href: "/newsroom",
  },
  {
    title:
      "Tebra releases new product enhancements to give independent healthcare providers more time with patients",
    href: "/newsroom",
  },
  {
    title: "PatientPop completes final step in transformation to Tebra: A new era begins April 2",
    href: "/newsroom",
  },
  {
    title: "New report shows patient no-shows and cancellations are costing doctors big",
    href: "/newsroom",
  },
  {
    title:
      "Report identifies the top marketing developments and tools that healthcare providers need to know now",
    href: "/newsroom",
  },
];

export type InTheNewsItem = {
  title: string;
  source: string;
  href: string;
};

export const inTheNews: InTheNewsItem[] = [
  {
    title: "New Study Shows Broad Impact of Online Reviews on Physicians",
    source: "medscape.com",
    href: "https://www.medscape.com",
  },
  {
    title: "Healthcare AI Takes Off Despite Patient Concerns",
    source: "forbes.com",
    href: "https://www.forbes.com",
  },
  {
    title: "Patients Face Emotional, Financial, Administrative Issues When Switching Doctors",
    source: "medscape.com",
    href: "https://www.medscape.com",
  },
  {
    title: "US Healthcare Overhaul Sparks Patient Fears and Provider Strain, Survey Reveals",
    source: "psychreg.org",
    href: "https://www.psychreg.org",
  },
  {
    title: "AI in Healthcare Research Finds Trust and Transparency Key to Patient Confidence",
    source: "psychreg.org",
    href: "https://www.psychreg.org",
  },
  {
    title: "EDM fans ranked among the healthiest in new study",
    source: "EDM.com",
    href: "https://edm.com",
  },
  {
    title: "Survey finds metalheads don't take care of their health and lie to their doctors",
    source: "Metal Sucks",
    href: "https://www.metalsucks.net",
  },
  {
    title: "Americans struggle with $88 billion in unpaid medical debt: Survey",
    source: "Fox Business",
    href: "https://www.foxbusiness.com",
  },
  {
    title: "Tebra survey assesses the CFPB’s 2023 Initiative’s impact on medical debt",
    source: "Meditech Today",
    href: "/newsroom",
  },
  {
    title: "Kaiser Permanente strikes: Study reveals which states affected most by low staffing levels",
    source: "AS Diario",
    href: "/newsroom",
  },
];

export const pressResources = {
  title: "Tebra press resources",
  cards: [
    {
      title: "Press inquiries",
      description: "Reach out to pr@tebra.com for any and all inquiries",
      cta: "Get in touch",
      href: "mailto:pr@tebra.com",
    },
    {
      title: "Media kit",
      description: "Access Tebra logos and other brand assets",
      cta: "Download",
      href: "/documentation",
    },
  ],
};

/** Initial visible count before “Load more” */
export const pressPageSize = 6;
export const newsPageSize = 6;
