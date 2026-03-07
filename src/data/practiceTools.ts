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
    ctaHref: '#ehr-calculator',
    variant: 'white',
  },
  {
    id: 'billing-calculator',
    title: 'Billing calculator',
    description: 'Find out how much revenue your practice might be missing — and how better billing could improve your collections.',
    ctaLabel: 'Run the numbers',
    ctaHref: '#billing-calculator',
    variant: 'coral',
  },
  {
    id: 'competitive-scanner',
    title: 'Competitive scanner',
    description: 'See how your practice stacks up online. Check your listings across major directories and spot missing or incorrect information.',
    ctaLabel: 'Run my scan',
    ctaHref: '#competitive-scanner',
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
    href: '#',
  },
  {
    title: 'Vital Signs: A February 2026 RCM healthcare news wrap-up',
    href: '#',
  },
  {
    title: 'How patients choose and drop doctors in a digital-first healthcare system',
    href: '#',
  },
  {
    title: 'Always on alert: Why burnout is so common in emergency medicine',
    href: '#',
  },
];
