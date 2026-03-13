export type PageCard = {
  title: string;
  description: string;
};

export const pageCards: Record<string, PageCard[]> = {
  about: [
    { title: "Our mission", description: "We help independent practices thrive with technology that connects care, billing, and patient experience in one platform." },
    { title: "Our story", description: "Tebra grew from a vision to simplify practice management so providers can focus on what matters most—their patients." },
    { title: "Our values", description: "Integrity, innovation, and putting practices first guide everything we build and how we work with our customers." },
    { title: "Leadership", description: "Experienced leaders from healthcare and technology drive our strategy and culture." },
  ],
  careers: [
    { title: "Benefits", description: "Competitive pay, health coverage, flexible work, and growth opportunities so you can do your best work." },
    { title: "Open roles", description: "Explore engineering, product, sales, and customer success positions across our teams." },
    { title: "Culture", description: "We value collaboration, ownership, and a focus on outcomes that help practices succeed." },
    { title: "Remote-friendly", description: "Many roles support remote or hybrid work so you can work from where you’re most productive." },
  ],
  contact: [
    { title: "Sales", description: "Talk to our team about plans, pricing, and how Tebra can fit your practice." },
    { title: "Support", description: "Get help with your account, billing, or technical questions from our support team." },
    { title: "Partnerships", description: "Explore integration and partnership opportunities with Tebra." },
    { title: "Press", description: "Media inquiries and press resources for journalists and analysts." },
  ],
  pricing: [
    { title: "Transparent pricing", description: "Clear plans so you know what you pay and what’s included from day one." },
    { title: "No hidden fees", description: "Setup, training, and standard support are part of your plan—no surprise charges." },
    { title: "Scale with you", description: "Plans that grow with your practice size and needs." },
    { title: "Demo first", description: "See the platform in action and get a custom quote before you commit." },
  ],
  integrations: [
    { title: "Labs & imaging", description: "Connect with major labs and imaging networks for results and orders." },
    { title: "Pharmacy", description: "E-prescribe and manage pharmacy relationships through integrated workflows." },
    { title: "Payers", description: "Eligibility, claims, and remittance with leading payers and clearinghouses." },
    { title: "Patient apps", description: "Link with patient-facing apps for scheduling, messaging, and telehealth." },
  ],
  security: [
    { title: "Encryption", description: "Data encrypted in transit and at rest so patient and practice information stays protected." },
    { title: "Access controls", description: "Role-based access and audit logs so only the right people see the right data." },
    { title: "Compliance", description: "Built to support HIPAA and other healthcare security and privacy requirements." },
    { title: "Uptime", description: "Reliable infrastructure and monitoring so your practice can run without interruption." },
  ],
  compliance: [
    { title: "HIPAA", description: "Safeguards and controls designed to support HIPAA compliance for covered entities." },
    { title: "Documentation", description: "Policies and documentation to help you meet audit and compliance needs." },
    { title: "Training", description: "Resources and training to keep your team aligned with compliance best practices." },
    { title: "Updates", description: "We track regulatory changes and update our platform to support evolving requirements." },
  ],
  support: [
    { title: "Help center", description: "Articles, guides, and FAQs to help you get the most out of Tebra." },
    { title: "Live support", description: "Reach our team by phone or chat when you need hands-on help." },
    { title: "Onboarding", description: "Dedicated onboarding and training so you’re confident from day one." },
    { title: "Community", description: "Connect with other practices and share tips in the Tebra community." },
  ],
  documentation: [
    { title: "Getting started", description: "Setup guides and checklists to configure your practice in Tebra." },
    { title: "API reference", description: "Technical documentation for integrating with Tebra’s APIs." },
    { title: "Best practices", description: "Recommendations for workflows, billing, and clinical documentation." },
    { title: "Release notes", description: "What’s new, updated, and changed in the latest releases." },
  ],
  partners: [
    { title: "Technology partners", description: "Integrations and partnerships with leading healthcare and practice tools." },
    { title: "Reseller program", description: "Opportunities for consultants and resellers to offer Tebra to practices." },
    { title: "Referral program", description: "Refer practices to Tebra and receive rewards for successful referrals." },
    { title: "Become a partner", description: "Apply to join our partner network and grow with Tebra." },
  ],
};
