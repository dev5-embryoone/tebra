/** AI / AI Smart Staff landing — mirrors tebra.com/ai */

export const aiMeta = {
  title: "AI for Medical Practices: Smarter Charting & Automation | Tebra",
  description:
    "With Tebra AI Smart Staff handling your charting and review management, you can reduce admin, improve patient trust, and get your time back.",
} as const;

export const aiPromoBanner = {
  text: "Discover Tebra’s AI and automation tools",
  linkLabel: "Take a tour",
  linkHref: "/product-tour",
} as const;

export const aiHero = {
  title: "Tebra AI: Chart faster, reply quicker, care better",
  subtitle:
    "With Tebra AI Smart Staff handling your charting and review management, you can reduce admin, improve patient trust, and get your time back.",
  primaryCta: { label: "Explore Tebra's AI tools", href: "#ai-features" },
  secondaryCta: { label: "Get a demo", href: "/demo" },
} as const;

export const aiTopFeatures = [
  {
    title: "Finish notes in minutes",
    description:
      "Turn patient conversations into structured EHR notes in real time and reclaim your evenings.",
  },
  {
    title: "Reply to every review",
    description:
      "Generate HIPAA-compliant responses in seconds to strengthen patient trust and increase bookings.",
  },
  {
    title: "Spot trends at a glance",
    description:
      "Discover what patients really think about your practice with insights that surface recurring themes and sentiment.",
  },
] as const;

export const aiPoweredEhrIntro = {
  title: "Less admin, more patient time with Tebra’s AI-powered EHR",
} as const;

export type AiFeatureBlock = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  /** true = image/visual on the right on desktop */
  imageRight: boolean;
};

export const aiFeatureBlocks: AiFeatureBlock[] = [
  {
    id: "ai-note-assist",
    eyebrow: "AI Note Assist",
    title: "End after-hours charting",
    description:
      "Finish notes faster with real-time transcription that turns patient conversations into structured, HIPAA-compliant clinical documentation.",
    bullets: [
      "Complete SOAP, Therapist, and behavioral health notes faster",
      "Cut after-hours charting and reclaim your evenings",
      "Fully integrated with Tebra’s EHR — no extra logins, no switching systems",
    ],
    cta: { label: "Explore AI Note Assist", href: "/ehr" },
    imageRight: true,
  },
  {
    id: "ai-review-replies",
    eyebrow: "AI Review Replies",
    title: "Respond to every patient review in seconds",
    description:
      "Strengthen your reputation with personalized, HIPAA-compliant replies generated in seconds.",
    bullets: [
      "Instantly generate personalized, HIPAA-compliant responses for every review",
      "Improve trust and bookings: practices that reply to reviews see 16.4% more appointments",
      "Save hours weekly and strengthen patient trust and reputation",
    ],
    cta: { label: "Explore AI Review Replies", href: "/marketing" },
    imageRight: false,
  },
  {
    id: "ai-review-insights",
    eyebrow: "AI Review Insights",
    title: "See patterns in patient feedback",
    description:
      "Address small issues before they become big problems with organized themes and sentiment over time.",
    bullets: [
      "Organizes patient feedback by theme: scheduling, wait times, communication, care, and staff experience",
      "Track patient sentiment over time to catch recurring issues early and improve satisfaction",
      "Merge public and private feedback into one easy-to-read dashboard",
    ],
    cta: { label: "Explore AI Review Insights", href: "/marketing" },
    imageRight: true,
  },
] as const;

export const aiSecurityLine =
  "We safeguard your practice with full security and HIPAA compliance.";

export const aiVideoBand = {
  eyebrow: "SEE TEBRA’S AI IN ACTION",
  title: "See how Tebra AI Smart Staff lightens your workload and improves patient experience",
  subtitle: "Better visibility. Better reviews. Better patient outcomes.",
} as const;

export const aiTestimonials = [
  {
    variant: "dark" as const,
    quote:
      "My notes used to take 30 to 60 minutes because they would be so detailed. With the Tebra AI Note Assist, each of my notes today took not even five minutes.",
    author: "Angela Davis-Taylor, FNP-C, INHC",
    org: "Daisy Family Health Care",
  },
  {
    variant: "cream" as const,
    quote:
      "What I like about the AI Note Assist is I can do small talk with my patient and the AI can pick up the parts of the conversation that matter the most, and filter out what’s irrelevant.",
    author: "Erica Cheshire, ANP-BC",
    org: "Beaumont WELLness for Women",
  },
  {
    variant: "light" as const,
    quote:
      "We have a provider who has wanted to retire for years […] and the AI Note Assist turned it around for her. She feels that with this, she can continue working. It was huge for her.",
    author: "John Ferren, IT Systems Administrator",
    org: "Grace Women's Clinic",
  },
] as const;

export const aiProvidersBand = {
  title:
    "Over 150,000 providers run their practices on Tebra. We know what it takes for independent practices to not just survive, but thrive.",
} as const;

export const aiBadges = [
  "G2 EHR Leader Fall 2025",
  "G2 Patient Experience Fall 2025",
  "Software Advice Frontrunners 2026",
  "Capterra Shortlist 2026",
  "G2 Highest User Adoption Fall 2025",
] as const;

export const aiReputationIntro = {
  title: "Strengthen your reputation. Grow with confidence.",
  subtitle:
    "Tebra makes it easier for patients to trust you online, choose your practice, and keep coming back.",
} as const;

export const aiReputationPillars = [
  {
    title: "Patients feel heard",
    description:
      "Quick, thoughtful replies show patients you value their feedback and care about their experience.",
  },
  {
    title: "Better first impressions",
    description:
      "Consistent engagement helps patients see you as responsive, trustworthy, and easy to choose.",
  },
  {
    title: "Care beyond the visit",
    description:
      "Acting on feedback shows patients you listen, extending the relationship long after the appointment ends.",
  },
] as const;

export const aiResourcesIntro = {
  title: "EHR resources built for independent healthcare practices",
  linkLabel: "More Tebra resources",
  linkHref: "/resources",
} as const;

export const aiResources = [
  { type: "Ebook", title: "7 low-lift ways billing companies are protecting margins", href: "/resources" },
  { type: "Ebook", title: "HL7 integration: regain billing control without forcing migrations", href: "/resources" },
  { type: "Infographic", title: "2026 independent practice survey benchmarks", href: "/resources" },
  { type: "Webinar", title: "Getting paid: How to capture every dollar in 2026", href: "/resources" },
  { type: "Video", title: "What is outsourcing, offshoring, nearshoring, and home-shoring for medical billers", href: "/resources" },
  { type: "Video", title: "Tips to grow past 1-3 clients", href: "/resources" },
  { type: "Webinar", title: "Where your revenue is leaking — and how to fix it", href: "/resources" },
] as const;

export const aiClosingBand = {
  title: "Ready to get your time back?",
  description:
    "Stop spending your evenings on paperwork and admin. Let Tebra’s AI help you finish faster and finally log off on time.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export const aiBottomCta = {
  title: "Automate, optimize, and thrive with Tebra",
  description: "The leading practice automation solution for independent practices.",
  primaryCtaLabel: "Get Demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Explore for Free",
  secondaryCtaHref: "/sign-up",
} as const;

export const aiFaqs = [
  {
    id: "ai-faq-1",
    question: "Is Tebra’s AI HIPAA-compliant?",
    answer:
      "Yes. All of Tebra’s AI features are designed with HIPAA compliance at their core. They avoid using sensitive patient information and follow secure workflows to ensure your data stays protected and your practice stays compliant.",
  },
  {
    id: "ai-faq-2",
    question: "How does AI help in a healthcare setting?",
    answer:
      "Tebra’s AI tools are built to reduce the administrative burden on providers and staff. From generating SOAP notes during visits to automating review replies and surfacing patient feedback trends, Tebra’s AI helps independent practices save time, improve care, and run more efficiently, without adding extra tech or complexity.",
  },
  {
    id: "ai-faq-3",
    question: "How much time can I really save with AI charting?",
    answer:
      "Providers using AI Note Assist report saving up to 10 hours per week by finishing documentation faster and avoiding after-hours charting. The AI creates structured, ready-to-review notes from real-time patient conversations, so your workday ends when it should.",
  },
  {
    id: "ai-faq-4",
    question: "Do I need to switch my EHR to use Tebra’s AI tools?",
    answer:
      "If you're only looking to streamline review management, AI Review Replies is also available as part of Tebra’s Patient Experience package, no EHR change needed. Most of Tebra's other tools are fully integrated into Tebra’s EHR+ platform, which means switching EHRs is required to access the full experience. But the switch is simple, with no complex setup or disruption to your workflow.",
  },
  {
    id: "ai-faq-5",
    question: "What’s the implementation process like?",
    answer:
      "Getting started with Tebra AI is quick and low lift. There’s no IT team required, and most features are ready to use out of the box. Whether you're adding AI Note Assist or starting to automate your review replies, setup is fast and support is built in.",
  },
] as const;
