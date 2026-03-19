/** Copy and config for Tebra-style EHR calculator wizard */

export const ehrCalculatorMeta = {
  title: "EHR Calculator | Tebra",
  description:
    "Calculate your potential EHR savings in minutes. Answer a few quick questions about software, staff time, and billing costs.",
};

export type EhrCalculatorStep = {
  /** 1-based step index shown in the UI */
  step: number;
  /** Short label under the circle */
  label: string;
  /** Route for this step (for future wizard navigation) */
  href: string;
};

export const ehrCalculatorSteps: EhrCalculatorStep[] = [
  { step: 1, label: "Software", href: "/ehr-calculator/step-1" },
  { step: 2, label: "Billing", href: "/ehr-calculator/step-2" },
  { step: 3, label: "Staff time", href: "/ehr-calculator/step-3" },
  { step: 4, label: "Patient retention", href: "/ehr-calculator/step-4" },
  { step: 5, label: "Get your savings", href: "/ehr-calculator/step-5" },
];

export const ehrCalculatorStep1 = {
  heading: "calculate your potential ehr savings in minutes",
  subheading:
    "Answer a few quick questions, and we'll estimate your savings on software, staff time, and billing costs",
  submitLabel: "Let's review your current costs",
  /** Next step form action */
  formAction: "/ehr-calculator/step-2",
  formMethod: "get" as const,
  fields: {
    providers: {
      label: "How many providers are in your practice?",
      name: "providers",
      placeholder: "# of providers*",
      type: "number" as const,
      min: 1,
      required: true,
    },
    prescribe: {
      label: "Do you prescribe medication?",
      name: "prescribesMedication",
      leftOption: "No",
      rightOption: "Yes",
      defaultValue: "no" as "no" | "yes",
    },
    ehrCost: {
      label: "EHR base cost",
      name: "ehrMonthlyCost",
      placeholder: "Enter your monthly cost*",
      required: true,
    },
    billingCost: {
      label: "Billing costs",
      name: "billingMonthlyCost",
      placeholder: "Enter your monthly cost*",
      required: true,
    },
    elabs: {
      label: "eLabs (cost per month)",
      name: "elabsMonthly",
      min: 0,
      max: 150,
      step: 1,
      defaultValue: 0,
      ticks: ["$0", "$50", "$100", "$150"],
    },
    erx: {
      label: "eRx (cost per month)",
      name: "erxMonthly",
      min: 0,
      max: 150,
      step: 1,
      defaultValue: 0,
      ticks: ["$0", "$50", "$100", "$150"],
    },
  },
  visual: {
    badges: [
      { id: "practice-size", text: "Practice size", position: "top-left" as const },
      { id: "ehr-cost", text: "EHR base cost", position: "top-right" as const },
    ],
  },
  infoCallout: {
    message:
      "65% of providers would switch EHRs for cost savings — you're on the right track!",
  },
};

/** Query keys produced by step 1 (forward on step 2+ forms) */
export const ehrCalculatorStep1QueryKeys = [
  "providers",
  "prescribesMedication",
  "ehrMonthlyCost",
  "billingMonthlyCost",
  "elabsMonthly",
  "erxMonthly",
] as const;

export const ehrCalculatorStep2 = {
  heading: "see where your billing costs are adding up",
  subheading: "Tell us how you manage payments and billing today.",
  submitLabel: "Discover staff time savings",
  formAction: "/ehr-calculator/step-3",
  formMethod: "get" as const,
  innerProgressPercent: 38,
  fields: {
    arOver120: {
      label: "Current AR (more than 120 days)",
      name: "arOver120Days",
      min: 10,
      max: 40,
      step: 10,
      defaultValue: 10,
      ticks: ["10%", "20%", "30%", "40%"],
      outputFormat: "percent" as const,
    },
    insurancePaid45: {
      label:
        "Current insurance payments rate (percentage of claims paid within 45 days)",
      name: "insurancePaidWithin45Pct",
      min: 70,
      max: 90,
      step: 5,
      defaultValue: 70,
      ticks: ["70%", "75%", "80%", "85%", "90%"],
      outputFormat: "percent" as const,
    },
    manualBillingHours: {
      label: "Manual billing hours (staff hours per week)",
      name: "manualBillingHoursPerWeek",
      min: 5,
      max: 20,
      step: 5,
      defaultValue: 5,
      ticks: ["5 h", "10 h", "15 h", "20 h"],
      outputFormat: "hours" as const,
    },
    staffCostPerHour: {
      label: "Average billing staff cost",
      name: "billingStaffCostPerHour",
      placeholder: "Enter your cost per hour*",
      required: true,
    },
  },
  visual: {
    badges: [
      {
        id: "elabs",
        text: "Electronic Labs",
        position: "top-left" as const,
      },
      {
        id: "erx",
        text: "Electronic Prescriptions",
        position: "top-right" as const,
      },
    ],
  },
  infoCallout: {
    message:
      "78% of providers say claim denials are their biggest billing challenge — Tebra helps you reduce rejections and get paid faster.",
  },
};
