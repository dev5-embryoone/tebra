/**
 * Testimonials page case-study carousel — edit slides here only.
 * imageKey must match keys resolved in TestimonialsCarouselSection.astro
 */
export type CarouselSlideImageKey = "celebrations" | "arjun" | "ashley";

export type TestimonialsCarouselSlide = {
  /** Matches static imports in the section */
  imageKey?: CarouselSlideImageKey;
  imageAlt: string;
  title: string;
  body?: string;
  author: string;
  org: string;
  ctaHref?: string;
  ctaLabel?: string;
  textOnly?: boolean;
};

export const testimonialsCarouselHeader = {
  eyebrow: "Real stories, real results",
  title: "What success looks like with Tebra",
} as const;

export const testimonialsCarouselSlides: TestimonialsCarouselSlide[] = [
  {
    imageKey: "celebrations",
    imageAlt: "Case study hero",
    title: "“Selecting Tebra has been the best decision I’ve ever made.”",
    body: "That decision was the key turning point in how I was able to scale my practice.",
    author: "Chimezie Chidi, M.A., CCC-SLP",
    org: "Celebrations Speech Group Inc.",
    ctaHref: "/case-studies",
  },
  {
    imageKey: "arjun",
    imageAlt: "Dr. Arjun Reyes",
    title:
      "“It’s like switching smartphones. Moving from AdvancedMD to Tebra felt like going from Android to iPhone. Everything got easier, right away. It is so much easier for us to run our practice.”",
    author: "Dr. Arjun Reyes, Psychiatrist and Owner",
    org: "Arjun Reyes MD and Associates",
    ctaHref: "/case-studies/arjun-reyes-md",
  },
  {
    imageKey: "ashley",
    imageAlt: "Practice owner outside clinic",
    title:
      "“Tebra’s recent enhancements have made a noticeable difference in streamlining workflows.”",
    body: "Especially in terms of user interface and overall service functionality.",
    author: "Ashley M",
    org: "Express PT Billing, LLC",
    ctaHref: "/case-studies",
  },
  {
    textOnly: true,
    imageAlt: "",
    title:
      "“Excellent tool for practice growth. Everyone was very helpful; the app is a great way to add new business and has a wonderful monthly overview for the practice.”",
    author: "Sarah Y",
    org: "Integrated Dermatology",
  },
  {
    textOnly: true,
    imageAlt: "",
    title:
      "“Working with the Tebra team has been a great experience! They have been prompt in answering questions and helping us update items on our website.”",
    author: "Operations Manager",
    org: "Multi-specialty group",
  },
];
