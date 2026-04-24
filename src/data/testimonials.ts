export type Testimonial = {
  quote: string;
  points?: string[];
  author: string;
  company: string;
  avatarInitials?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Reduce lab mismatches with real-time tracking.",
    points: [
      "Track every action across lab workflows",
      "Prevent mismatches with verification steps",
      "Maintain complete audit logs",
    ],
    author: "Lab Safety",
    company: "EmbryoOne Platform",
    avatarInitials: "LS",
  },
  {
    quote: "Improve visibility across the embryo lifecycle.",
    points: [
      "Track embryos from fertilization to transfer",
      "Access images, grading, and status instantly",
      "Monitor storage and movement in real time",
    ],
    author: "Embryo Visibility",
    company: "EmbryoOne Platform",
    avatarInitials: "EV",
  },
  {
    quote: "Standardize workflows across lab and clinical teams.",
    points: [
      "Define consistent steps across procedures",
      "Align lab and clinical processes",
      "Reduce variability across teams",
    ],
    author: "Workflow Standardization",
    company: "EmbryoOne Platform",
    avatarInitials: "WS",
  },
  {
    quote: "Support better embryo selection decisions.",
    points: [
      "Use structured embryo data for evaluation",
      "Support grading with AI insights",
      "Enable consistent decision workflows",
    ],
    author: "Clinical Decision Support",
    company: "EmbryoOne Platform",
    avatarInitials: "CD",
  },
  {
    quote: "Improve lab efficiency and reduce manual work.",
    points: [
      "Automate tracking and data entry",
      "Reduce manual logging and duplication",
      "Streamline day-to-day lab operations",
    ],
    author: "Lab Efficiency",
    company: "EmbryoOne Platform",
    avatarInitials: "LE",
  },
  {
    quote: "Maintain full traceability across every cycle.",
    points: [
      "Record every action across workflows",
      "Ensure accountability at each step",
      "Access complete cycle history anytime",
    ],
    author: "Traceability",
    company: "EmbryoOne Platform",
    avatarInitials: "TR",
  },
];

