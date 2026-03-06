export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  avatarInitials?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Great customer support and a company that truly cares about our success. Tebra has been simple to set up and easy for our entire team to use day to day.",
    author: "Practice Owner",
    company: "Multi-specialty medical group",
    avatarInitials: "PO",
  },
  {
    quote:
      "The all‑in‑one platform saves us countless hours by automating administrative tasks while improving patient communication and visibility into performance.",
    author: "Practice Administrator",
    company: "Independent primary care clinic",
    avatarInitials: "PA",
  },
  {
    quote:
      "I’ve used over a dozen EHRs and wasn’t happy until I started using Tebra. Now I have all the functionality I need in one system that’s actually intuitive.",
    author: "Medical Director",
    company: "Outpatient specialty practice",
    avatarInitials: "MD",
  },
];

