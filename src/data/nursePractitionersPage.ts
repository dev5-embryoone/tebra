/** Nurse Practitioners specialty — mirrors https://www.tebra.com/specialties/nurse-practitioners */

export const npMeta = {
  title: "EHR software for nurse practitioner | Run and grow your NP practice | Tebra",
  description:
    "Tebra combines intuitive documentation, automated billing, and built-in telehealth in one flexible EHR platform for nurse practitioners who do it all.",
} as const;

export const npBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Specialties", href: "/specialties/family-medicine" },
  { label: "Nurse Practitioner", href: "/specialties/nurse-practitioners" },
] as const;

export const npHero = {
  eyebrow: "Tebra for nurse practitioners",
  title: "Run and grow your nurse practitioner practice with a smart EHR platform",
  subtitle:
    "Tebra combines intuitive documentation, automated billing, and built-in telehealth in one flexible EHR platform. Designed for nurse practitioners who do it all, without the IT team or admin staff.",
  primaryCta: { label: "Request a demo", href: "/demo" },
  secondaryCta: { label: "Take a self-guided tour", href: "/product-tour" },
} as const;

export const npAccordionIntro = {
  title: "Why nurse practitioners thrive with Tebra",
} as const;

export const npAccordionItems = [
  {
    title: "Start your NP practice with an all-in-one EHR",
    body:
      "Starting from scratch? Tebra helps you open your doors faster with scheduling, charting, intake, and billing all in one platform. No IT team or complex setup required.",
  },
  {
    title: "Automate admin, focus on care",
    body:
      "Administrative work shouldn’t ruin your day. Tebra automates the busywork, from note-taking to charting, reminders, and intake, so you can reclaim your time and reduce burnout.",
  },
  {
    title: "Flexible billing options",
    body:
      "Whether you bill insurance, offer memberships, or direct pay models, Tebra adapts to how you run your business. Submit clean claims, track payments, and manage revenue, all from one platform.",
  },
  {
    title: "Chart faster with Tebra’s AI Note Assist",
    body:
      "Say goodbye to late-night charting. With customizable templates, SOAP notes, and AI-powered tools like Note Assist built into your EHR, Tebra helps you finish documentation faster, without cutting corners.",
  },
  {
    title: "Increase patient visibility",
    body:
      "Your practice can’t grow if patients can’t find you. Tebra helps you stand out with online booking, automated review replies, and accurate web profiles that build trust and increase practice visibility without extra work.",
  },
  {
    title: "Scale your NP practice, not your stress",
    body:
      "As your practice grows, your tools should keep up, not get in the way. Tebra makes it easy to add staff, locations, and services without changing systems or increasing overhead.",
  },
  {
    title: "Collaborate and stay compliant",
    body:
      "Working with other providers? Tebra helps you stay compliant in collaborative care settings with built-in co-signature tools, with no extra fees or complicated permissions.",
  },
] as const;

export const npWhyIntro = {
  eyebrow: "Why Tebra?",
  title: "EHR software built to support your whole NP practice, not just your charting",
} as const;

export const npWhyBlocks = [
  {
    title: "Stay focused on care",
    description:
      "Tebra lightens your workload with smart tools that automate charting, scheduling, billing, and intake, so you can spend more time with patients and less time on admin.",
  },
  {
    title: "Grow without the guesswork",
    description:
      "From flexible billing to real-time revenue insights, Tebra helps you make smart business decisions, even if you don’t have a billing team or office manager.",
  },
  {
    title: "Protect your reputation, effortlessly",
    description:
      "AI-generated, HIPAA-compliant replies help you build trust with patients and strengthen your online presence, even when you're off the clock or too busy to write the perfect response.",
  },
] as const;

export const npChallengesIntro = {
  title: "The reality of running your own practice",
} as const;

export const npStats = [
  { value: "93%", label: "of nurse practitioners believe that increasing time with patients would improve outcomes" },
  { value: "94%", label: "of nurse practitioners felt exhausted, fatigued, or burned out during a patient appointment" },
  { value: "84%", label: "of providers say documentation and charting are their most time-consuming admin tasks" },
] as const;

export const npMidCta = {
  kicker: "Private practice doesn’t have to mean doing it solo",
  title:
    "You’re doing the work of a provider, a biller, and a business owner. Tebra is here to make it easier, so your practice can grow without burning you out.",
  ctaLabel: "Take a self-guided tour",
  ctaHref: "/product-tour",
} as const;

export const npPlatformIntro = {
  eyebrow: "The all-in-one EHR built for nurse practitioners",
  title: "The EHR platform powering the future of independent NP practices",
  subtitle:
    "From patient acquisition and virtual care to smarter documentation, engagement, billing, and payments, Tebra’s EHR+ platform gives you everything you need to run and grow your practice in one place.",
} as const;

export const npPlatformCards = [
  {
    title: "Medical Practice Marketing",
    description:
      "Make it easy for patients to find and book with you. Tebra’s AI-powered tools for reviews, online scheduling, and custom websites help you build trust and visibility without adding to your workload.",
    href: "/marketing",
    cta: "Explore marketing tools",
  },
  {
    title: "Patient Experience",
    description:
      "Make it easier for patients to show up, stay engaged, and return for follow-up care. Tebra supports you with digital intake, appointment reminders, and a patient portal that works for everyone.",
    href: "/patient-experience",
    cta: "Learn how",
  },
  {
    title: "EHR",
    description:
      "Spend less time on your EHR and more time with patients. With AI Note Assist, customizable SOAP templates, and built-in telehealth, Tebra helps you chart faster and stay focused on care.",
    href: "/ehr",
    cta: "Explore the EHR",
  },
  {
    title: "Billing Software",
    description:
      "Stay in control of your revenue without adding overhead. Tebra makes it easy to submit claims, manage billing, and track payments, without extra staff or vendors required.",
    href: "/billing-payments",
    cta: "Explore billing tools",
  },
] as const;

export const npTestimonials = {
  title: "What NPs are saying about Tebra",
  items: [
    {
      quote:
        "If you have an EHR that's efficient, easy to use, and intuitive, like Tebra, you can just figure it out as you go.",
      author: "Dr. Arjun Reyes",
      org: "Arjun Reyes MD and Associates",
    },
    {
      quote:
        "We wanted something comprehensive that could grow with us, because we're never done growing. Tebra gave us that.",
      author: "Brandi Tanasescu",
      org: "Balance Point Wellness",
    },
    {
      quote: "Our system works exactly the way it's supposed to, it's reliable.",
      author: "CentralMed Team",
      org: "CentralMed Urgent and Primary Care",
    },
  ],
} as const;

export const npCaseStudiesIntro = {
  title: "Independent NP practice case studies",
  ctaLabel: "See all case studies",
  ctaHref: "/case-studies",
} as const;

export const npCaseStudySlugs = ["arjun-reyes-md", "balance-point-wellness", "centralmed-urgent-care"] as const;

export const npBottomCta = {
  title: "Ready to run your NP practice with less admin and more freedom?",
  description:
    "With AI-powered tools and a platform built for independent NPs, Tebra helps you get more done, stay organized, and finally log off on time.",
  primaryCtaLabel: "Request a demo",
  primaryCtaHref: "/demo",
  secondaryCtaLabel: "Take a self-guided tour",
  secondaryCtaHref: "/product-tour",
} as const;
