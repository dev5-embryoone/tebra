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
    id: 'lab-efficiency-calculator',
    title: 'Lab Efficiency Calculator',
    description: 'Estimate time saved with automated lab tracking.',
    ctaLabel: 'Try the tool',
    ctaHref: '/product-tour',
    variant: 'white',
  },
  {
    id: 'cryo-utilization-insights',
    title: 'Cryo Utilization Insights',
    description: 'Understand storage usage and optimization opportunities.',
    ctaLabel: 'View insights',
    ctaHref: '/product-tour',
    variant: 'coral',
  },
  {
    id: 'embryo-data-insights',
    title: 'Embryo Data Insights',
    description: 'Analyze grading patterns and lab performance.',
    ctaLabel: 'Analyze data',
    ctaHref: '/product-tour',
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
