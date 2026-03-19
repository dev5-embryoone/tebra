/** Practice Websites — mirrors https://www.tebra.com/marketing/practice-websites */

export const pwMeta = {
  title: "SEO-Optimized Practice Websites for Medical Providers | Tebra",
  description:
    "Medical website design that improves search performance, shows your specialty, and helps fill your schedule — with strategic SEO and modern design.",
} as const;

export const pwBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Practice Websites", href: "/marketing/practice-websites" },
] as const;

export const pwHero = {
  title: "Medical website design for growing practices",
  subtitle:
    "Tebra specializes in medical website design that improves search performance, shows your specialty, and helps fill your schedule.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Visit design marketplace", href: "/partners" },
} as const;

export const pwRatings = [
  { source: "Trustpilot" as const, score: "4.4", filledStars: 4 },
  { source: "G2" as const, score: "4.1", filledStars: 4 },
] as const;

export const pwValueProps = [
  {
    title: "Built for your independent practice, not for hospitals",
    description:
      "Our team of doctors crafted Tebra with small practices in mind. You have specific challenges, we have specific solutions.",
  },
  {
    title: "The support you need, when you need it",
    description: "Onboarding, training, and expert support to get — and keep — you up and running.",
  },
  {
    title: "Begin your journey today",
    description: "Intuitive, easy to use, and cloud-based — no technical knowledge required.",
  },
] as const;

export const pwFeaturesIntro = {
  title: "Rise up and outrank the competition with Tebra’s strategic SEO for medical practices",
} as const;

export const pwFeatures = [
  {
    title: "Optimize search rankings",
    body:
      "Rise to the top of search results with Tebra’s expert search engine optimization strategies. Ensure your practice ranks higher, captures more patient interest, and seamlessly expands your reach.",
  },
  {
    title: "Effortless content management",
    body:
      "Take control of your website content with Tebra’s intuitive platform. Keep your website authentic, dynamic, and relevant by ensuring every update aligns with your practice’s evolving needs.",
  },
  {
    title: "Engage through blogs",
    body:
      "Create consistent engagement with Tebra’s blogging tools. Craft your own posts or enlist our expert writers to drive traffic, enhance your search engine ranking, and position yourself as a thought leader.",
  },
  {
    title: "Modern website design",
    body:
      "Make a lasting impression online. Collaborate with Tebra’s medical website design experts to create a stunning, modern website. Gain a competitive edge and stand out in healthcare.",
  },
  {
    title: "Simplify appointment scheduling",
    body:
      "Make it easy to book appointments on your website, anytime. Tebra’s patient-centric solutions ensure your practice stands out in search results and converts visitors into loyal patients within minutes.",
  },
] as const;

export const pwComparePromo = {
  title: "How does your practice compare?",
  description:
    "Instantly benchmark your online presence, reputation, and marketing performance against others in your area and specialty.",
  ctaLabel: "Run a free scan",
  ctaHref: "/demo",
} as const;

export const pwTrust = {
  headline:
    "Over 150,000 providers run their practices on Tebra. We know what it takes for independent practices to not just survive, but thrive.",
  badges: [
    { title: "G2 EHR Leader Fall 2025", subtitle: "Recognized EHR leadership" },
    { title: "G2 Patient Experience Fall 2025", subtitle: "Patient experience software" },
    { title: "Software Advice Frontrunners 2026", subtitle: "Top rated among practices" },
    { title: "Capterra Shortlist 2026", subtitle: "Practice websites & marketing" },
    { title: "G2 Highest User Adoption Fall 2025", subtitle: "Easy for teams to adopt" },
  ],
} as const;

export const pwAllInOne = {
  eyebrow: "All-in-one solution",
  title: "Excited about a better practice website?",
  subtitle: "There’s even more to discover.",
  description:
    "Streamline your healthcare operations and unlock your potential with Tebra’s Complete Operating System.",
  ctaLabel: "Get demo",
  ctaHref: "/demo",
  cards: [
    {
      title: "Patient Experience",
      description: "Combine exceptional care with exceptional patient experience",
      href: "/patient-experience",
    },
    {
      title: "Care Delivery",
      description: "Increase time with patients, reduce documentation time, and maximize reimbursements",
      href: "/ehr",
    },
    {
      title: "Billing & Payments",
      description: "Collect faster and at higher rates",
      href: "/billing-payments",
    },
  ],
} as const;

export const pwImplementation = {
  title: "Onboard and implement Tebra with ease",
  description:
    "Learn about Tebra’s smooth onboarding experience and how our team of experts work closely with you to understand your workflow and configure the platform accordingly, ensuring everything is in place for a seamless start.",
  ctaLabel: "Learn more",
  ctaHref: "/implementation",
} as const;

export const pwCaseShowcase = {
  headline: "This is why thousands of small — and medium-sized practices trust Tebra",
  cases: [
    {
      name: "Beverly Hills Optometry",
      stat: "#1 Google ranking",
      specialty: "Optometry",
      location: "Beverly Hills, CA",
      providers: "1 provider",
    },
    {
      name: "Allegra Dental",
      stat: "855% return on investment",
      specialty: "Dentistry",
      location: "Fairfax, VA",
      providers: "1 provider",
    },
    {
      name: "Healthy Kids Pediatrics",
      stat: "258% more new patient appointments",
      specialty: "Pediatrics",
      location: "Long Island, NY",
      providers: "3 providers",
    },
  ],
} as const;

export const pwStatsCta = {
  kicker: "More than 42,000 practices in the United States are growing with Tebra. It’s your turn.",
  bullets: [
    "Get a free data-driven practice assessment",
    "Identify growth opportunities",
    "No strings attached",
  ] as const,
  ctaLabel: "Get your customized demo now",
  ctaHref: "/demo",
} as const;

export const pwBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;
