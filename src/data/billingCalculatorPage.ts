/** Medical Billing Revenue Calculator — aligned with tebra.com/billing-payments/billing-calculator */

export const billingCalculatorMeta = {
  title: "Medical Billing Revenue Calculator | Tebra",
  description:
    "In 6 quick questions, estimate how much time and revenue you're losing, and how to get it back. Built on real industry benchmarks.",
} as const;

export const billingCalculatorBreadcrumb = [
  { label: "Tebra", href: "/" },
  { label: "Billing & Payments", href: "/billing-payments" },
  { label: "Revenue leak calculator", href: "/billing-payments/billing-calculator" },
] as const;

export const billingCalculatorHero = {
  title: "Estimate your monthly revenue leaks in 90 seconds",
  subtitle:
    "In 6 quick questions, estimate how much time and revenue you're losing, and how to get it back. Built on real industry benchmarks.",
} as const;

export const billingCalculatorForm = {
  title: "What's holding back your revenue?",
  intro:
    "Tell us about your billing process. We'll estimate how much time and revenue you could recover. No prep, no math.",
  workplaceLabel: "Do you work at a medical practice or at a medical billing company?",
  workplaceOptions: [
    { value: "practice", label: "Medical practice" },
    { value: "company", label: "Billing company" },
  ],
  arLabel: "What's your average A/R days?",
  arPlaceholder: "Choose your average A/R days",
  arOptions: [
    { value: "lt20", label: "< 20" },
    { value: "21_30", label: "21–30" },
    { value: "31_40", label: "31–40" },
    { value: "41p", label: "41+" },
  ],
  denialLabel: "What percentage of your claims are denied?",
  denialPlaceholder: "Enter percentage*",
  manualStepsLabel: "How many manual steps are in your claim process?",
  manualStepsHelp:
    "More manual touchpoints usually mean more staff time per claim.",
  upfrontLabel: "What percentage of patient payments do you collect up front?",
  upfrontHelp:
    "Industry benchmarks often target high upfront collection to reduce bad debt.",
  upfrontPlaceholder: "Enter percentage*",
  claimsLabel: "How many claims do you submit per month?",
  claimsPlaceholder: "Enter claims submitted*",
  seeSavings: "See your savings",
  startOver: "Start over",
  disclaimer:
    "*This calculator provides estimates based on your inputs and nationally recognized benchmarks. Assumptions reflect guidance from leading billing experts and sources including MGMA, KFF, HFMA, and internal Tebra data. Actual savings may vary.",
} as const;

export const billingCalculatorResults = {
  title: "Your billing inefficiencies could be costing you",
  subtitle:
    "Here's how much revenue and time you're losing each month, and what's driving it.",
  intro:
    "A Tebra billing solution saves time and increases revenue through automated insurance eligibility and patient payments.",
  denialTitle: "Revenue lost to denials",
  denialBody:
    "{monthly} in preventable denials. That's {yearly} that could be recovered with automated insurance eligibility and patient payments.",
  timeTitle: "Time lost to manual work",
  timeBody:
    "Your team is spending {hours} on manual work that could be automated.",
  missedTitle: "Missed revenue at the front desk",
  missedBody:
    "You're missing {monthly} in patient collections by not collecting up front. The benchmark is 90% - where are you?",
  nextSteps: "Next steps with Tebra",
  nextStepsHref: "/demo",
} as const;

export const billingCalculatorBottom = {
  title: "Cut denials. Get paid faster. Automate what's dragging you down.",
  subtitle:
    "Tebra's all-in-one billing platform helps you recover more revenue, without more admin work.",
  tour: { label: "Take a self-guided tour", href: "/product-tour" },
  demo: { label: "Get a personalized demo", href: "/demo" },
  sales: { label: "Schedule a meeting with sales", href: "/contact" },
} as const;
