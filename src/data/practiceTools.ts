export interface PracticeTool {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  variant: 'white' | 'coral' | 'teal';
}

export const practiceTools: PracticeTool[] = [
  {
    id: 'ehr-calculator',
    title: 'EHR calculator',
    description: 'Estimate the time and money your practice could save with a more efficient, AI-powered EHR.',
    ctaLabel: 'Try the calculator',
    ctaHref: 'https://www.tebra.com/ehr-calculator',
    variant: 'white',
  },
  {
    id: 'billing-calculator',
    title: 'Billing calculator',
    description: 'Find out how much revenue your practice might be missing — and how better billing could improve your collections.',
    ctaLabel: 'Run the numbers',
    ctaHref: 'https://www.tebra.com/billing-payments/billing-calculator',
    variant: 'coral',
  },
  {
    id: 'competitive-scanner',
    title: 'Competitive scanner',
    description: 'See how your practice stacks up online. Check your listings across major directories and spot missing or incorrect information.',
    ctaLabel: 'Run my scan',
    ctaHref: 'https://compare.tebra.com/',
    variant: 'teal',
  },
];

export interface IntakeArticle {
  title: string;
  href: string;
}

export const intakeArticles: IntakeArticle[] = [
  {
    title: 'Your patients are using ChatGPT in healthcare. What can, and should, you do?',
    href: 'https://www.tebra.com/theintake/patient-experience/your-patients-are-using-chatgpt-in-healthcare',
  },
  {
    title: 'Vital Signs: A February 2026 RCM healthcare news wrap-up',
    href: 'https://www.tebra.com/theintake/getting-paid/vital-signs-february-2026',
  },
  {
    title: 'How patients choose and drop doctors in a digital-first healthcare system',
    href: 'https://www.tebra.com/theintake/healthcare-reports/how-patients-choose-and-drop-doctors-digital-care',
  },
  {
    title: 'Always on alert: Why burnout is so common in emergency medicine',
    href: 'https://www.tebra.com/theintake/practice-operations/emergency-medicine-burnout',
  },
];
