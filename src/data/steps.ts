export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export const getStartedSteps: StepItem[] = [
  {
    number: 1,
    title: "Discover your practice's potential",
    description:
      "See how EmbryoOne connects EHR, billing, scheduling, and reputation in one platform with a personalized demo.",
  },
  {
    number: 2,
    title: "Launch with confidence",
    description:
      "Your onboarding manager helps with setup, data migration, and training so your team is ready to go in days, not months.",
  },
  {
    number: 3,
    title: "Grow with EmbryoOne",
    description:
      "Use AI-powered tools and connected workflows to save time, get paid faster, and attract new patients.",
  },
];
