export type LeaderSocial = { type: "facebook" | "twitter" | "linkedin"; href: string };

export type Leader = {
  id: string;
  name: string;
  title: string;
  imageKey: string;
  bio: string;
  socials?: LeaderSocial[];
};

export const leadershipMeta = {
  title: "Meet Our Leadership Team | Tebra",
  description:
    "Meet the team leading the charge to bring complete well-being to practices, providers, and patients.",
} as const;

export const leadershipHero = {
  eyebrow: "Tebra Leadership",
  title: "Meet the team leading the charge to bring complete well-being to practices, providers, and patients.",
} as const;

export const leadershipLeaders: Leader[] = [
  {
    id: "dan-rodrigues",
    name: "Dan Rodrigues",
    title: "Chief Executive Officer",
    imageKey: "arjun",
    bio:
      "Dan Rodrigues is Chief Executive Officer and Co-founder of Tebra, a leading cloud-based healthcare technology platform formed in 2021 with the merger of Kareo and PatientPop.",
  },
  {
    id: "mike-doktorczyk",
    name: "Mike Doktorczyk",
    title: "Chief Financial Officer",
    imageKey: "download",
    bio:
      "Mike Doktorczyk is Chief Financial Officer for Tebra, responsible for financial operations including corporate finance, accounting, tax, treasury, investor relations, and business systems.",
  },
  {
    id: "kyle-ryan",
    name: "Kyle Ryan",
    title: "Chief Technology Officer",
    imageKey: "kyle",
    bio:
      "As Chief Technology Officer at Tebra, Kyle Ryan is responsible for all areas of technology with a focus on the vision and strategy for Tebra’s suite of products and services.",
  },
  {
    id: "kevin-marasco",
    name: "Kevin Marasco",
    title: "Chief Growth Officer",
    imageKey: "kevin",
    bio:
      "Kevin Marasco is Chief Growth Officer for Tebra, leading all aspects of the organization’s marketing programs.",
  },
  {
    id: "amanda-piwonka",
    name: "Amanda Piwonka",
    title: "Chief People Officer",
    imageKey: "amanda",
    bio:
      "As Chief People Officer for Tebra, Amanda Piwonka empowers Tebra’s people and aligns personal achievement to company objectives to drive results, accountability, and growth.",
  },
  {
    id: "colin-morris",
    name: "Colin Morris",
    title: "General Counsel",
    imageKey: "colin",
    bio:
      "Colin Morris is General Counsel for Tebra and leads the legal and compliance functions, guiding the company through complex corporate and regulatory matters.",
  },
  {
    id: "andrea-weisz",
    name: "Andrea Weisz",
    title: "Chief Customer Officer",
    imageKey: "andrea",
    bio:
      "Andrea Weisz is Chief Customer Officer at Tebra and has held numerous roles over the years spanning customer success operations, onboarding, and account management.",
  },
];

export const leadershipStoryCta = {
  title: "Curious about how Tebra came together?",
  description:
    "It takes compassion and commitment to build the digital backbone for practice success. Learn more about the past, present, and future of Tebra.",
  ctaLabel: "Explore our story",
  ctaHref: "/about/story",
} as const;

