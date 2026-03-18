/** Practice Marketing product page — mirrors tebra.com/marketing structure */

export const marketingMeta = {
  title: "Medical Practice Marketing Software Powered by AI | Tebra",
  description:
    "Make it easy for patients to discover, trust, and book with you — no agency or marketing team required.",
} as const;

export const marketingBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Practice Marketing", href: "/marketing" },
] as const;

export const marketingHero = {
  title: "Medical practice marketing that gets you found online",
  subtitle:
    "Make it easy for patients to discover, trust, and book with you — no agency or marketing team required.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Check your online visibility", href: "#scan" },
} as const;

export type MarketingPillar = {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const marketingPillarsIntro = {
  title: "Everything patients need to find you, trust you, and book with you",
} as const;

export const marketingPillars: MarketingPillar[] = [
  {
    title: "Custom websites",
    description:
      "Make a great first impression and turn clicks into appointments with a modern website tailored to your specialty.",
    bullets: [
      "Let patients book, check reviews, and explore your services in one place",
      "Built by experts in medical web design to reflect your brand and specialty",
      "SEO-optimized to increase visibility and bring in more traffic",
      "Mobile-optimized and easy to update — no tech skills required",
    ],
    tags: ["Practice Websites"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Climb search rankings, drive traffic, and reach more patients with expert-led SEO and SEM services built for healthcare.",
    bullets: [
      "Optimize your website for local search visibility",
      "Attract more patients with custom blog content from healthcare writers",
      "Build long-term trust and discoverability with proven SEO strategies",
    ],
    tags: ["Search Engine Optimization", "Search Engine Marketing"],
  },
  {
    title: "Reputation management",
    description:
      "Build patient trust with HIPAA-compliant AI that replies to every review and highlights what patients value most.",
    bullets: [
      "Match tone, sentiment, and context, without stiff templates",
      "Generate, post, edit, and personalize replies in seconds",
      "Spot recurring praise and complaints across reviews",
      "Pinpoint recurring complaints before they impact patient retention",
      "Turn raw feedback into clear next steps for your team",
    ],
    tags: ["Reputation Management", "AI Smart Staff"],
  },
  {
    title: "Social media",
    description:
      "Build stronger patient relationships and expand your reach with expert-managed social media, tailored for independent practices.",
    bullets: [
      "Drive visibility with strategic, healthcare-specific campaigns",
      "Stay active on key platforms without daily effort",
      "Increase engagement and loyalty with consistent, branded content",
      "Highlight your services and build trust in your local community",
    ],
    tags: ["Social Media Marketing"],
  },
  {
    title: "Web profiles & directories",
    description:
      "Make a strong first impression wherever patients search and keep your online information consistent, automatically.",
    bullets: [
      "Maintain up-to-date profiles across Google, Tebra Care Connect, and 80+ directories",
      "Highlight reviews, services, hours, and contact details in one place",
      "One edit updates everything, no chasing listings or fixes",
    ],
    tags: ["Web Profiles"],
  },
];

export const marketingComparisonIntro = {
  title: "One connected platform. Everything else falls short.",
  subtitle:
    "See how Tebra outperforms legacy software and disconnected tools, delivering more visibility, bookings, and less work.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Check your online visibility", href: "#scan" },
} as const;

export type MarketingComparisonRow = {
  title: string;
  description: string;
  tebra: "full" | "limited" | "none";
  competitors: "full" | "limited" | "none";
  agencies: "full" | "limited" | "none";
};

export const marketingComparisonRows: MarketingComparisonRow[] = [
  {
    title: "Reviews & reputation management",
    description:
      "Automatically reply to every patient review with personalized, HIPAA-compliant replies.",
    tebra: "full",
    competitors: "limited",
    agencies: "full",
  },
  {
    title: "Online presence & web profiles management",
    description:
      "Keep all your listings accurate and up to date across Google, Tebra Care Connect, and more.",
    tebra: "full",
    competitors: "limited",
    agencies: "limited",
  },
  {
    title: "Online scheduling & patient communications",
    description:
      "Let patients book anytime, from any device, with connected, HIPAA-compliant scheduling.",
    tebra: "full",
    competitors: "limited",
    agencies: "none",
  },
  {
    title: "How does your practice compare?",
    description:
      "Instantly benchmark your online presence, reputation, and marketing performance against others in your area and specialty.",
    tebra: "full",
    competitors: "none",
    agencies: "none",
  },
];

export const marketingProcessIntro = {
  title: "Tebra’s 5-step medical practice marketing process",
  description:
    "Here’s how Tebra helps independent practices stand out online, attract more patients, and stay booked with less effort.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export const marketingProcessSteps: { number: string; title: string; description: string }[] = [
  {
    number: "1",
    title: "Launch a custom website",
    description:
      "Get a website built for healthcare, optimized for mobile, and designed to turn visitors into booked appointments.",
  },
  {
    number: "2",
    title: "Manage your online web profiles",
    description:
      "Ensure your practice details are accurate everywhere patients search. Sync updates across key directories automatically.",
  },
  {
    number: "3",
    title: "Build a 5-star reputation",
    description:
      "Respond quickly and thoughtfully to every patient review with AI Review Replies, and learn what to improve with insights.",
  },
  {
    number: "4",
    title: "Market your practice for growth",
    description:
      "Drive new patient traffic through SEO, paid search, and social campaigns tailored to healthcare.",
  },
  {
    number: "5",
    title: "Convert interest into appointments",
    description:
      "Let patients schedule anytime with online booking from your website and profiles. Reduce no-shows and fill your calendar.",
  },
];

export type MarketingTestimonial = {
  quote: string;
  author: string;
  org: string;
  linkLabel?: string;
  linkHref?: string;
};

export const marketingTestimonialsIntro = {
  eyebrow: "Testimonials",
  title: "Better visibility. Better reviews. Better patient outcomes.",
} as const;

export const marketingTestimonials: MarketingTestimonial[] = [
  {
    quote:
      "Tebra helped us increase web traffic and appointment volume. In one year, they helped generate over 5,000 new patient bookings.",
    author: "Jinous Rouhani, CEO",
    org: "Austin Area Obstetrics, Gynecology, and Fertility",
  },
  {
    quote:
      "The most important factor for a patient finding you is Google. You need to show up online, and you need to show up well.",
    author: "Dr. Robert Bowers",
    org: "Bellevue Pain and Wellness PLLC",
    linkLabel: "Read case study",
    linkHref: "/case-studies/bellevue-pain-wellness",
  },
  {
    quote:
      "The website Tebra designed drew in over 1,500 new visitors and 500+ organic connections in just two months... My new patient acquisitions have doubled.",
    author: "Dr. Daniel Spriggs, MD",
    org: "Perdido Bay Medical Group",
    linkLabel: "Read case study",
    linkHref: "/case-studies/physician-billing-solutions",
  },
  {
    quote:
      "It's nice to know that, on average, we are about 100 reviews ahead of the competition by Tebra simplifying how patients can provide feedback.",
    author: "Dr. Ben Shamoiel",
    org: "TheLAChiropractor.com",
    linkLabel: "Read case study",
    linkHref: "/case-studies/celebrations-speech-group",
  },
  {
    quote:
      "Tebra was how I was able to open two more practices in the last year. I’ve gone from seeing patients at my house after school to supporting a total staff of around 30 people.",
    author: "Chimezie Chidi, M.A., CCC-SLP",
    org: "Celebrations Speech Group",
    linkLabel: "Read case study",
    linkHref: "/case-studies/celebrations-speech-group",
  },
];

export const marketingResourcesIntro = {
  title: "Marketing resources built for independent healthcare practices",
  linkLabel: "More Tebra resources",
  linkHref: "/resources",
} as const;

export type MarketingResource = { type: string; title: string; href: string };

export const marketingResources: MarketingResource[] = [
  { type: "Webinar", title: "Webinar: 7 ways to market your practice — without breaking the bank", href: "#" },
  { type: "Infographic", title: "Keep your schedule full with return visits", href: "#" },
  { type: "Webinar", title: "Exclusive patient insights to propel your practice forward", href: "#" },
  { type: "Workbook", title: "Your cheat sheet to financial growth", href: "#" },
  { type: "Report", title: "Building sustainable Independent Practices", href: "#" },
  { type: "Infographic", title: "5 ways a good relationship drives return visits", href: "#" },
  { type: "Checklist", title: "Help growing practices grow even more", href: "#" },
];

export type MarketingFaq = { id: string; question: string; answer: string };

export const marketingFaqIntro = {
  title: "Frequently asked questions",
} as const;

export const marketingFaqs: MarketingFaq[] = [
  {
    id: "mkt-faq-1",
    question: "What is medical practice marketing software?",
    answer:
      "Medical practice marketing software helps providers manage websites, listings, reputation, reviews, SEO, and patient engagement so practices become more visible and attractive to new patients.",
  },
  {
    id: "mkt-faq-2",
    question: "What marketing tools does Tebra’s software offer?",
    answer:
      "Tools typically include custom websites, web profiles/directory management, reputation management with AI replies, SEO/SEM support, and optional social media services to improve visibility and bookings.",
  },
  {
    id: "mkt-faq-3",
    question: "How does Tebra support online visibility and SEO?",
    answer:
      "Tebra supports visibility through healthcare-specific SEO, consistent listings across major platforms, and customized websites optimized for search—plus optional premium SEO services for deeper optimization.",
  },
  {
    id: "mkt-faq-4",
    question: "Can Tebra help with social media and patient engagement?",
    answer:
      "Yes. Social media services and guidance help practices stay active and consistent, while connected reputation tools and insights improve engagement and trust over time.",
  },
  {
    id: "mkt-faq-5",
    question: "What AI-powered features does Tebra offer?",
    answer:
      "AI Review Replies helps respond to reviews quickly and compliantly; AI Review Insights surfaces trends in patient feedback. Other AI tools may help reduce manual work and improve documentation.",
  },
];

export const marketingClosingCta = {
  title: "What’s standing between you and a full schedule?",
  description:
    "Tebra helps your practice show up in local search, build patient trust with better reviews, and make online booking fast and easy.",
  primaryCtaLabel: "Request a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Take a self-guided tour",
  secondaryCtaHref: "/product-tour",
} as const;

