/** Patient Experience product page — mirrors tebra.com/patient-experience structure */

export const pxMeta = {
  title: "Patient Experience Software for Medical Practices | Tebra",
  description:
    "Build the reputation that drives bookings. Tebra's AI-powered platform automates reviews, reminders, and scheduling.",
} as const;

export const pxBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Patient Experience", href: "/patient-experience" },
] as const;

export const pxHero = {
  title: "Patient experience software that puts you in control of your reputation",
  subtitle:
    "Build the reputation that drives bookings. Tebra's AI-powered platform automates reviews, reminders, and scheduling—cutting no-shows by 38% and building a 5-star reputation patients trust.",
  primaryCta: { label: "Get a demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export type PxBenefit = { icon: "trust" | "patients" | "ops" | "retention"; title: string };

export const pxBenefits: PxBenefit[] = [
  { icon: "trust", title: "Build trust" },
  { icon: "patients", title: "Win more patients" },
  { icon: "ops", title: "Simplify operations" },
  { icon: "retention", title: "Improve retention" },
];

export type PxPillar = {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const pxPillarsIntro = {
  title: "From first search to follow-up care, Tebra keeps the journey simple",
} as const;

export const pxPillars: PxPillar[] = [
  {
    title: "AI-powered reputation management",
    description:
      "Build credibility with automated review requests, HIPAA-compliant AI replies, and actionable insights that drive patient loyalty.",
    bullets: [
      "Send post-visit review requests automatically to keep ratings fresh and visible",
      "Reply in seconds with HIPAA-compliant AI Review Replies",
      "Spot patient praise and complaints with AI Review Insights",
      "Protect your reputation with sentiment monitoring and automated escalations of sensitive reviews",
    ],
    tags: ["Reputation management", "AI Review Replies", "AI Review Insights"],
  },
  {
    title: "Robust online visibility",
    description:
      "Make it easy for patients to find and choose your practice with search-optimized profiles and a website built to convert.",
    bullets: [
      "Keep your online profiles accurate across Google, Tebra Care Connect, and 80+ directories",
      "Automatically update your Google Business Profile with hours, services, photos, and booking links",
      "Launch a mobile-ready website where patients can book, read reviews, and explore services",
      "Improve local discoverability and reinforce your reputation with built-in SEO tools",
    ],
    tags: ["Practice websites", "Web profiles", "Care Connect"],
  },
  {
    title: "Online scheduling & automated reminders",
    description:
      "Reduce no-shows and keep calendars full with 24/7 scheduling and reminders patients actually use.",
    bullets: [
      "Give patients 24/7 access to book from your website, Google, or Tebra Care Connect",
      "Display real-time availability with calendars that sync directly to your EHR",
      "Cut no-shows with customizable reminders by text, email, or phone",
    ],
    tags: ["Online scheduling", "Appointment reminders"],
  },
  {
    title: "Customizable intake and secure communication",
    description:
      "Reduce admin work with customizable digital intake and two-way messaging that keeps patients engaged and saves your team hours each week.",
    bullets: [
      "Collect completed digital intake forms and e-signatures before the visit via text or email",
      "Sync completed forms directly to your Tebra EHR to cut paperwork and save staff time",
      "Answer patient questions with HIPAA-compliant, secure two-way messaging",
      "Gather feedback with post-visit surveys that strengthen the relationship",
    ],
    tags: ["Patient communications"],
  },
];

export const pxVideoSection = {
  title: "See Tebra's Patient Experience platform in action",
} as const;

export type PxJourneyBand = {
  eyebrow: string;
  title: string;
  bullets: string[];
  cta: { label: string; href: string };
  imageKey: "px1" | "px2" | "px3" | "px4";
  imageOnRight: boolean;
};

export const pxJourneyBands: PxJourneyBand[] = [
  {
    eyebrow: "Build trust",
    title:
      "Trust starts before the first appointment. What patients read in reviews and see on your profiles decides whether they choose to book.",
    bullets: [
      "Turn every visit into proof of your quality with automated review requests",
      "Show patients you're listening with authentic, AI-powered replies",
      "Spot patterns in feedback with AI Review Insights",
    ],
    cta: { label: "Get a demo", href: "/demo" },
    imageKey: "px1",
    imageOnRight: true,
  },
  {
    eyebrow: "Win more patients",
    title:
      "A strong reputation gets you noticed, but if booking feels complicated, patients will look elsewhere.",
    bullets: [
      "Give patients 24/7 access to self-scheduling, from any channel",
      "Show real-time availability across Google, Care Connect, and your website",
      "Cut no-shows by 38% with automated reminders via text, email, or phone",
    ],
    cta: { label: "Get a demo", href: "/demo" },
    imageKey: "px2",
    imageOnRight: false,
  },
  {
    eyebrow: "Simplify operations",
    title: "A great patient experience starts with a team that isn't buried in admin",
    bullets: [
      "Keep schedules on track with smart reminders that cut no-shows",
      "Collect digital intake before visits, and automatically sync to your Tebra EHR",
      "Save 8–12 admin hours each week with workflows that run in the background",
    ],
    cta: { label: "Get a demo", href: "/demo" },
    imageKey: "px3",
    imageOnRight: true,
  },
  {
    eyebrow: "Improve retention",
    title: "Patients return when staying connected feels easy",
    bullets: [
      "Bring patients back with timely recall reminders",
      "Hear concerns and act quickly with short post-visit surveys",
      "Stay connected between visits with secure two-way messaging",
    ],
    cta: { label: "Get a demo", href: "/demo" },
    imageKey: "px4",
    imageOnRight: false,
  },
];

export type PxTestimonial = { quote: string; author: string; org: string };

export const pxTestimonialsIntro = {
  eyebrow: "Testimonials",
  title: "Stronger reputation, simpler operations, better results",
  subtitle:
    "Tebra customers emphasize ease of use, stronger reputation, and reduced no-shows.",
} as const;

export const pxTestimonials: PxTestimonial[] = [
  {
    quote:
      "It's nice to know that, on average, we are about 100 reviews ahead of the competition by Tebra simplifying how patients can provide feedback.",
    author: "Dr. Ben Shamoiel",
    org: "TheLAChiropractor.com",
  },
  {
    quote:
      "Excellent tool for practice growth. Everyone was very helpful; the app is a great way to add new business and has a wonderful monthly overview for the practice. Worth the investment.",
    author: "Julie R",
    org: "Women's Healthcare of Norman",
  },
  {
    quote:
      "Tebra has definitely increased my visibility on the major search engines....Having a strong online presence, attracting new patients, and the volume of reviews I get can all be attributed to Tebra's practice growth solution.",
    author: "Dr. Samantha Mohan",
    org: "Menlo Park Family Dental",
  },
  {
    quote:
      "The website Tebra designed drew in over 1,500 new visitors and 500+ organic connections in just two months... My new patient acquisitions have doubled.",
    author: "Dr. Daniel Spriggs, MD",
    org: "Perdido Bay Medical Group",
  },
];

export const pxStepsIntro = {
  title: "Build a 5-star reputation in 3 easy steps",
  description:
    "Reputation management shouldn't add work to your plate. Tebra sets you up with everything you need to start seeing results from day one.",
  primaryCta: { label: "Get a demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export const pxSteps: { number: string; title: string; description: string }[] = [
  {
    number: "1",
    title: "See what AI and automation can do for you",
    description:
      "Start with a quick demo or self-guided tour to see where Tebra can save your team the most time, whether it's reviews, scheduling, or intake.",
  },
  {
    number: "2",
    title: "Get set up for success",
    description:
      "Your onboarding team tailors setup to your needs—optimizing your Google Business Profile, syncing EHR calendars, or enabling automated reminders and review requests.",
  },
  {
    number: "3",
    title: "Grow your reputation effortlessly",
    description:
      "As your practice runs, Tebra works in the background to collect reviews, improve visibility, and nurture loyalty.",
  },
];

export type PxResource = { type: string; title: string; href: string };

export const pxResourcesIntro = {
  title: "Patient experience resources built for private practices",
} as const;

export const pxResources: PxResource[] = [
  { type: "Report", title: "2025 report: the truth about no-shows", href: "#" },
  { type: "Report", title: "Patient perspective survey: Advance your practice", href: "#" },
  {
    type: "Webinar",
    title: "Reduce no-shows and recover lost revenue with data-backed strategies",
    href: "#",
  },
  { type: "Infographic", title: "Best practices for digital patient experience", href: "#" },
  { type: "Infographic", title: "What patients want from you", href: "#" },
  { type: "Workbook", title: "Strengthen patient cancellation policies", href: "#" },
  {
    type: "Infographic",
    title: "A Day in the Life: Improving Private Practice Efficiency with AI",
    href: "#",
  },
];

export type PxFaq = { id: string; question: string; answer: string };

export const pxFaqs: PxFaq[] = [
  {
    id: "px-faq-1",
    question: "What features should providers look for in patient experience software?",
    answer:
      "Prioritize secure messaging and automated notifications, real-time updates and online scheduling, HIPAA-compliant digital intake, seamless EHR and billing integration, and analytics for feedback and retention. Look for systems that improve every touchpoint.",
  },
  {
    id: "px-faq-2",
    question: "How does patient experience software increase operational efficiency?",
    answer:
      "Centralized scheduling and reminders reduce manual work. Automated workflows let teams focus on care. Analytics dashboards uncover bottlenecks. High-performing software ties daily tasks together so staff handle more volume with less friction.",
  },
  {
    id: "px-faq-3",
    question: "Which digital add-ons drive practice growth with patient experience software?",
    answer:
      "SEO-optimized websites improve local visibility. Practice blogs and reputation tools build trust. Social features boost recognition. Tebra's add-ons help you attract new patients and strengthen loyalty online.",
  },
  {
    id: "px-faq-4",
    question:
      "How can independent practices use patient experience software to solve top patient complaints?",
    answer:
      "Self-service scheduling removes booking friction. Automated reminders reduce no-shows. Surveys and messaging encourage feedback. Agile, patient-centric workflows increase retention and satisfaction.",
  },
];

export const pxClosingCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
