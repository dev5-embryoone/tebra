/**
 * Copy + links for /sign-in (EmbryoOne marketing) and /sign-in/login (app-style).
 * Reference: https://www.tebra.com/sign-in and app.kareo.com sign-in.
 */
export const tebraSignInLanding = {
  welcomeTitle: "Welcome back!",
  welcomeSubtitle: "Sign in to your EmbryoOne accounts",
  cards: [
    {
      title: "Practice Operations",
      legacyLabel: "PREVIOUSLY KAREO",
      cta: "Sign in to your account",
      href: "/sign-in/login",
    },
    {
      title: "Practice Growth",
      legacyLabel: "PREVIOUSLY PATIENTPOP",
      cta: "Sign in to your account",
      href: "/sign-in/login",
    },
  ] as const,
  noAccountCta: "Don't have an account?",
  requestDemoLabel: "Request a demo",
  requestDemoHref: "/demo",
  brandPanel: {
    headline: "Kareo and PatientPop are now EmbryoOne",
    body: "A new era of healthcare, a new world of practice well-being.",
    learnMoreLabel: "Learn More",
    learnMoreHref: "/about",
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
    title: "Cut Documentation Time by 70% with ",
    titleAccent: "EmbryoOne AI Note Assist",
    description: "AI-powered notes that improve accuracy and keep you HIPAA compliant.",
    learnMoreLabel: "Learn More",
    learnMoreHref: "/ai",
  },
} as const;
