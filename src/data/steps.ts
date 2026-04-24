export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export const getStartedSteps: StepItem[] = [
  {
    number: 1,
    title: "Discover your lab workflows",
    description:
      "Understand how EmbryoOne connects lab, embryo, and clinical systems.",
  },
  {
    number: 2,
    title: "Set up and integrate systems",
    description:
      "Configure lab tracking, cryo systems, and clinical workflows quickly.",
  },
  {
    number: 3,
    title: "Run and optimize workflows",
    description:
      "Track, analyze, and improve IVF operations across every cycle.",
  },
];
