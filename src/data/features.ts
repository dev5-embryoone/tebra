export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    title: "Clinical workflows that save time",
    icon: "⚕️",
    description:
      "Streamlined charting, templates, and AI-assisted notes help you document faster so you can focus on patients.",
  },
  {
    title: "Built-in billing and claims",
    icon: "💳",
    description:
      "Integrated billing tools reduce denials, speed up reimbursements, and keep your cash flow predictable.",
  },
  {
    title: "Smart scheduling that stays full",
    icon: "📅",
    description:
      "Online booking, waitlists, and automated reminders keep your schedule optimized and reduce no‑shows.",
  },
  {
    title: "Reputation tools that grow reach",
    icon: "⭐",
    description:
      "Automated review requests and listings management help you attract new patients and keep them coming back.",
  },
  {
    title: "Connected patient experience",
    icon: "💬",
    description:
      "Messaging, digital intake, and telehealth are tightly integrated with clinical and billing workflows.",
  },
  {
    title: "One login, one platform",
    icon: "🔐",
    description:
      "Run your entire practice with a single EHR+ platform instead of juggling disconnected point solutions.",
  },
];

