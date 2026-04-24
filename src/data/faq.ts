export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'compliance',
    question: "Is EmbryoOne compliant with lab and clinical data standards?",
    answer:
      "Yes. EmbryoOne is built with secure data handling, full traceability, and compliance-focused workflows across both lab and clinical operations. Access controls, activity logging, and structured records help teams maintain accountability at every step. This gives clinics confidence that sensitive embryo and patient data is protected and auditable.",
  },
  {
    id: 'lab-errors',
    question: "How does EmbryoOne reduce lab errors?",
    answer:
      "EmbryoOne reduces errors through witness tracking, verification checkpoints, and standardized task flows across procedures. Each action is recorded in real time so teams can catch mismatches early and respond quickly. This creates a safer, more consistent lab process with stronger accountability.",
  },
  {
    id: 'integrations',
    question: "Can EmbryoOne integrate with existing lab processes?",
    answer:
      "Yes. EmbryoOne is designed to fit into existing IVF workflows and align with current lab procedures. The platform supports structured adoption so teams can transition without disrupting day-to-day operations. This helps clinics modernize systems while preserving proven process standards.",
  },
  {
    id: 'ai-support',
    question: "How does AI grading support embryologists?",
    answer:
      "AI grading offers consistent scoring guidance using structured embryo data and image-based analysis. It helps embryologists compare assessments faster and reduce variability in interpretation. Final decisions always remain with the clinical team, with AI serving as decision support rather than replacement.",
  },
  {
    id: 'clinic-sizes',
    question: "Is EmbryoOne suitable for different clinic sizes?",
    answer:
      "Yes. EmbryoOne scales from single-site IVF labs to multi-center clinic networks with shared standards. Teams can manage local workflows while maintaining visibility across locations and cycles. This makes it practical for clinics at different growth stages without needing separate systems.",
  },
];
