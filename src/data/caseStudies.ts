/**
 * Case study shape — CMS-ready. Later you can replace this with CMS content.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  author: string;
  role: string;
  quote: string;
  /** Short metric e.g. "195K Saved in provider time" */
  metric: string;
  /** Optional longer label for cards */
  metricLabel?: string;
  /** Product/category: EHR, Billing & Payments, Patient Experience, RPA, Practice Growth */
  product: string;
  /** For filtering */
  challenges: string[];
  roles: string[];
  hasVideo?: boolean;
  /** Optional image URL — CMS can provide */
  imageUrl?: string;
  /** Featured on hero carousel */
  featured?: boolean;
  /** Highlight in "Real Stories" section */
  realStory?: boolean;
};

export const caseStudyChallenges = [
  "Administrative burnout",
  "Billing complexity",
  "Claims denials",
  "Inefficient workflows",
  "Launch new practice",
] as const;

export const caseStudyRoles = [
  "Doctors and Providers",
  "Medical Billers",
  "Practice Owners",
  "Medical Billing Company",
  "Practice Managers",
] as const;

export const caseStudyProducts = [
  "EHR",
  "Billing & Payments",
  "Patient Experience",
  "RPA",
  "Practice Growth",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "optimal-psychiatry",
    title: "Optimal Psychiatry changes more lives with support from Tebra",
    company: "Optimal Psychiatry and Wellness",
    author: "Dr. Fabius Santos",
    role: "Founder and CEO",
    quote:
      "Tebra helps my private practice grow by being easily scalable with an EHR platform that is easy to navigate.",
    metric: "195K Saved in provider time for intakes",
    product: "Patient Experience",
    challenges: ["Inefficient workflows", "Administrative burnout"],
    roles: ["Practice Owners", "Doctors and Providers"],
    hasVideo: true,
    featured: true,
    realStory: true,
  },
  {
    slug: "physician-billing-solutions",
    title: "Physician Billing Solutions delivers 24/7 trusted data access with Tebra",
    company: "Physician Billing Solutions",
    author: "Jennifer Bittner",
    role: "President",
    quote:
      "With Tebra, we provide a streamlined instruction sheet and training process for new clients.",
    metric: "5K savings with electronic claim attachment",
    product: "Billing & Payments",
    challenges: ["Billing complexity", "Claims denials"],
    roles: ["Medical Billing Company", "Medical Billers"],
    featured: true,
    realStory: true,
  },
  {
    slug: "advantum-health",
    title: "Advantum Health scales with Tebra RPA",
    company: "Advantum",
    author: "Tammy Taylor",
    role: "CEO",
    quote: "Tebra makes it incredibly effortless to make our clients happy.",
    metric: "95% RPA accuracy rate",
    product: "RPA",
    challenges: ["Inefficient workflows"],
    roles: ["Medical Billing Company", "Practice Managers"],
    featured: true,
    realStory: true,
  },
  {
    slug: "celebrations-speech-group",
    title: "How Celebrations Speech Group changes children's lives with Tebra's help",
    company: "Celebrations Speech Group Inc.",
    author: "Chimezie Chidi, M.A., CCC-SLP",
    role: "Owner",
    quote:
      "With Tebra, our team feels that they have a tool to succeed in their roles.",
    metric: "saves $2.75M/year with Tebra",
    metricLabel: "$2.75M saved with Tebra",
    product: "EHR",
    challenges: ["Inefficient workflows", "Administrative burnout"],
    roles: ["Practice Owners"],
    hasVideo: true,
    realStory: true,
  },
  {
    slug: "centralmed-urgent-care",
    title: "CentralMed Urgent and Primary Care",
    company: "CentralMed Urgent and Primary Care",
    author: "CentralMed Team",
    role: "Practice",
    quote: "Our system works exactly the way it's supposed to, it's reliable.",
    metric: "50% of appointments now made online",
    product: "Patient Experience",
    challenges: ["Inefficient workflows"],
    roles: ["Practice Owners", "Practice Managers"],
    realStory: true,
  },
  {
    slug: "denova-behavioral-health",
    title: "DeNova Behavioral Health",
    company: "DeNova Behavioral Health",
    author: "DeNova Team",
    role: "Practice",
    quote: "Tebra helped us build a stronger reputation and patient experience.",
    metric: "4.9 average star rating on Google",
    product: "Practice Growth",
    challenges: [],
    roles: ["Practice Owners"],
    realStory: true,
  },
  {
    slug: "arjun-reyes-md",
    title: "Psychiatrist reduces burnout and grows practice with Tebra EHR and AI Note Assist",
    company: "Arjun Reyes MD and Associates",
    author: "Dr. Arjun Reyes",
    role: "Psychiatrist and Owner",
    quote:
      "If you have an EHR that's efficient, easy to use, and intuitive, like Tebra, you can just figure it out as you go.",
    metric: "750K Annual savings from AI Note Assist",
    product: "EHR",
    challenges: ["Administrative burnout", "Inefficient workflows"],
    roles: ["Doctors and Providers", "Practice Owners"],
  },
  {
    slug: "balance-point-wellness",
    title: "Balance Point Wellness scales mindfully with Tebra EHR and Billing",
    company: "Balance Point Wellness",
    author: "Brandi Tanasescu",
    role: "CFO",
    quote:
      "We wanted something comprehensive that could grow with us, because we're never done growing. Tebra gave us that.",
    metric: "810K via electronic note taking",
    product: "EHR",
    challenges: ["Inefficient workflows", "Launch new practice"],
    roles: ["Practice Owners", "Practice Managers"],
  },
  {
    slug: "tabs-billing",
    title: "TABS billing service creates exponential growth with Tebra",
    company: "The Alternative Billing Service",
    author: "Mark Spielman",
    role: "Director of Marketing",
    quote:
      "Tebra's Partner Connect changed the trajectory of our business. Because we already knew Tebra inside and out, we could onboard clients faster.",
    metric: "18K client onboarding saved via single EHR",
    product: "Billing & Payments",
    challenges: ["Billing complexity"],
    roles: ["Medical Billing Company"],
  },
  {
    slug: "dr-mary-lee",
    title: "In-house billing with Tebra supports thriving pediatric practice",
    company: "Dr. Mary Lee, MD Internal and Pediatric Medicine",
    author: "Cynthia Dane",
    role: "Medical Biller",
    quote:
      "Tebra is a good, reliable billing system for producing claim forms, accurate patient statements, and posting payments.",
    metric: "98% AR collections rate",
    product: "Billing & Payments",
    challenges: ["Claims denials", "Billing complexity"],
    roles: ["Medical Billers", "Practice Managers"],
  },
  {
    slug: "mind-body-spirit",
    title: "How Tebra transformed one mental health practice for success",
    company: "Mind Body and Spirit Counseling Services",
    author: "Practice Owner",
    role: "Practice Owner",
    quote:
      "I don't know of any competitor with all the features that Tebra's platform does and is presented with this level of clarity.",
    metric: "95% boost in online appointment requests",
    product: "Patient Experience",
    challenges: ["Inefficient workflows", "Launch new practice"],
    roles: ["Practice Owners", "Doctors and Providers"],
  },
  {
    slug: "bellevue-pain-wellness",
    title: "7K website visits a month with Tebra",
    company: "Bellevue Pain and Wellness PLLC",
    author: "Robert Bowers, MD",
    role: "Owner",
    quote: "Our system works exactly the way it's supposed to, it's reliable.",
    metric: "7K website visits a month with Tebra",
    product: "Practice Growth",
    challenges: [],
    roles: ["Doctors and Providers", "Practice Owners"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
export const realStoryCaseStudies = caseStudies.filter((c) => c.realStory);
