export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'hipaa',
    question: "Is Tebra's software HIPAA-compliant?",
    answer:
      "Yes. All of Tebra's products, including the EHR, billing software, and AI features, are built with HIPAA compliance at the core. Patient data is stored securely, handled according to strict privacy protocols, and protected through encrypted workflows.",
  },
  {
    id: 'grow',
    question: 'How does Tebra help private practices grow?',
    answer:
      "Tebra gives private practices the tools they need to operate efficiently and grow sustainably. With all-in-one practice management software for charting, billing, scheduling, patient engagement, and marketing, Tebra reduces administrative work and helps practices improve cash flow, attract new patients, and provide better care, all without switching between disconnected systems.",
  },
  {
    id: 'different',
    question: 'What makes Tebra different from other healthcare platforms?',
    answer:
      'Tebra offers an all-in-one solution built specifically for independent practices. Unlike other platforms that require multiple vendors or have "surprise" fees, Tebra combines clinical, financial, and growth tools in a single platform with transparent pricing. That means fewer logins, less manual work, and better coordination across your team.',
  },
  {
    id: 'switch',
    question: 'Is it easy to switch to Tebra from another system?',
    answer:
      "Yes. Tebra offers hands-on support to make switching as smooth as possible. A dedicated onboarding team helps you transfer data, customize your setup, and train your staff. Most practices can go live quickly with minimal disruption to daily workflows, no IT team required.",
  },
  {
    id: 'specialties',
    question: 'What types of specialties does Tebra support?',
    answer:
      'Tebra is used by a wide range of specialties including primary care, mental health, pediatrics, dermatology, chiropractic, podiatry, and more. The system includes specialty-specific templates, codes, and workflows to help providers document visits faster and bill accurately. It\'s designed to work for both generalists and niche specialties.',
  },
];
