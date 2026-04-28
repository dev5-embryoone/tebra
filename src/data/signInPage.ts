/**
 * Copy + links for /sign-in (EmbryoOne) and /sign-in/login (app-style).
 */
export const tebraSignInLanding = {
  welcomeTitle: "Welcome back!",
  welcomeSubtitle: "Sign in to your EmbryoOne workspace",
  cards: [
    {
      title: "Clinic Operations",
      legacyLabel: "LAB + CLINICAL WORKFLOW",
      cta: "Sign in to continue",
      href: "/sign-in/login",
    },
    {
      title: "Insights & Reporting",
      legacyLabel: "ANALYTICS + PERFORMANCE",
      cta: "Sign in to continue",
      href: "/sign-in/login",
    },
  ] as const,
  noAccountCta: "Don't have an account?",
  requestDemoLabel: "Request a demo",
  requestDemoHref: "/demo",
  brandPanel: {
    headline: "EmbryoOne for modern IVF teams",
    body: "Unify IVF lab workflow, embryo tracking, and clinical operations in one connected platform.",
    learnMoreLabel: "Explore Platform",
    learnMoreHref: "/platform",
  },
  footerCopyright: "Copyright © 2026 EmbryoOne Technologies, Inc",
} as const;

export const kareoStyleLogin = {
  title: "Login",
  subtitle: "Enter your EmbryoOne username and password.",
  emailLabel: "Email:",
  passwordLabel: "Password:",
  submitLabel: "Login to EmbryoOne",
  signUpLabel: "Sign up today",
  signUpHref: "/sign-up",
  patientPortalLabel: "Patient Portal",
  patientPortalHref: "/patient-portal",
  troubleLabel: "Trouble signing in?",
  troubleHref: "/help",
  promo: {
    title: "Built for IVF teams that need accuracy and speed",
    titleAccent: "",
    description:
      "EmbryoOne connects lab, clinical, and reporting workflows so your team can reduce manual steps and stay aligned at every stage.",
    points: [
      "Track embryo and cycle data with complete visibility",
      "Coordinate lab and clinical teams in one shared workspace",
      "Access performance insights and outcome reporting quickly",
    ] as const,
    learnMoreLabel: "Explore EmbryoOne Platform",
    learnMoreHref: "/platform",
  },
} as const;
