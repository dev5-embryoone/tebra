export type SolutionContent = {
  slug: string;
  category: "By Role" | "By Workflow";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroHeading: string;
  heroBody: string;
  challengesHeading?: string;
  challenges?: string[];
  solutionHeading: string;
  solutionBody?: string;
  solutionPoints: string[];
  featureHeading: string;
  featurePoints: string[];
  outcomesHeading?: string;
  outcomes: string[];
};

export const solutionsData: SolutionContent[] = [
  {
    slug: "embryologists",
    category: "By Role",
    eyebrow: "Solutions • By Role",
    title: "Embryologists",
    subtitle: "Reduce manual work and improve consistency in lab procedures",
    heroHeading: "Reduce manual work and improve consistency in lab procedures",
    heroBody:
      "Embryologists operate at the most critical point of the IVF journey. Every action from fertilization to cryopreservation must be precise, consistent, and fully traceable. EmbryoOne is built to eliminate variability, reduce manual effort, and give embryologists full control over every step of the lab workflow.",
    challengesHeading: "The challenges",
    challenges: [
      "Manual logging slows down lab efficiency with paper logs, spreadsheets, and fragmented tools that increase workload and avoidable risk.",
      "Inconsistent grading across teams creates different interpretations of embryo quality that impact outcomes and decisions.",
      "Limited visibility into past actions makes embryo history, movements, and interventions slow to review and hard to trust.",
    ],
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Standardized lab workflows for fertilization, grading, freezing, and thawing.",
      "AI-assisted embryo grading that improves consistency and reduces subjectivity.",
      "Real-time action tracking that logs who performed each step, when, and where.",
      "Integrated witness workflows that reduce human error during critical handoffs.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Embryo lifecycle tracking from fertilization through transfer or storage.",
      "Image-based grading workflows for capture, analysis, and side-by-side comparison.",
      "Lab task automation triggered by cycle stage and protocol.",
      "Audit-ready logs that are complete, exportable, and compliance-aligned.",
    ],
    outcomes: [
      "Reduce manual documentation time by up to 70%.",
      "Improve grading consistency across embryologists.",
      "Achieve full embryo traceability with zero gaps.",
    ],
  },
  {
    slug: "lab-directors",
    category: "By Role",
    eyebrow: "Solutions • By Role",
    title: "Lab Directors",
    subtitle: "Gain full visibility into lab operations and performance",
    heroHeading: "Gain full visibility into lab operations and performance",
    heroBody:
      "Lab directors need more than reports. They need real-time insight into operations, performance, and compliance. EmbryoOne provides a centralized command center for modern IVF labs.",
    challengesHeading: "The challenges",
    challenges: [
      "Lack of centralized data across disconnected systems makes it difficult to get a complete operational picture.",
      "Performance metrics such as fertilization rates, embryo quality, and cycle success are hard to track without manual effort.",
      "Compliance preparation and SOP adherence are time-intensive and operationally heavy.",
    ],
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Unified lab dashboard for workflows, outcomes, and team performance.",
      "Performance analytics across time, providers, and protocols.",
      "Compliance-ready workflows with complete auditability by design.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Real-time lab metrics dashboard.",
      "Cycle outcome analytics.",
      "Quality assurance monitoring.",
      "Audit logs and reporting tools.",
      "Multi-location oversight for growing lab networks.",
    ],
    outcomes: [
      "Faster audit preparation.",
      "Improved visibility into lab performance.",
      "Reduced operational risk.",
    ],
  },
  {
    slug: "doctors",
    category: "By Role",
    eyebrow: "Solutions • By Role",
    title: "Doctors",
    subtitle: "Access cycle data and embryo insights for faster decisions",
    heroHeading: "Access cycle data and embryo insights for faster decisions",
    heroBody:
      "Doctors need immediate access to accurate, up-to-date information across the IVF cycle. EmbryoOne brings clinical and lab data into one unified view to support faster decisions.",
    challengesHeading: "The challenges",
    challenges: [
      "Delayed access to lab data slows time-sensitive clinical decisions.",
      "Fragmented patient information across systems increases complexity and risk.",
      "Lack of real-time alerts causes avoidable delays in intervention and treatment planning.",
    ],
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Unified patient timeline for appointments, labs, embryos, and clinical decisions.",
      "Real-time alerts when action is needed.",
      "Decision support with AI insights and structured data context.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Cycle board from baseline to transfer.",
      "Embryo grading insights.",
      "Clinical decision queue.",
      "Integrated lab and cryo data.",
      "Smart alerts and reminders.",
    ],
    outcomes: [
      "Faster decision-making.",
      "Reduced delays in treatment.",
      "Improved patient outcomes.",
    ],
  },
  {
    slug: "clinic-admin",
    category: "By Role",
    eyebrow: "Solutions • By Role",
    title: "Clinic Admin",
    subtitle: "Streamline operations, reporting, and resource management",
    heroHeading: "Streamline operations, reporting, and resource management",
    heroBody:
      "Clinic administrators handle coordination, scheduling, reporting, and day-to-day operations. EmbryoOne simplifies these workflows into one connected system.",
    challengesHeading: "The challenges",
    challenges: [
      "Complex scheduling across providers, patients, and procedures is difficult to manage at scale.",
      "Limited visibility into workload, team activity, and bottlenecks impacts execution.",
      "Manual reporting is time-consuming and often incomplete.",
    ],
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Centralized operations platform for schedules, tasks, and team workflows.",
      "Automated workflows that reduce manual coordination overhead.",
      "Real-time reporting for instant operational insights.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Calendar and scheduling system.",
      "Task and workflow management.",
      "Team coordination tools.",
      "Operational dashboards.",
      "Reporting and analytics.",
    ],
    outcomes: [
      "Reduced administrative workload.",
      "Better team coordination.",
      "Faster reporting.",
    ],
  },
  {
    slug: "lab-traceability",
    category: "By Workflow",
    eyebrow: "Solutions • By Workflow",
    title: "Lab Traceability",
    subtitle: "Track every action to reduce risk and improve accountability",
    heroHeading: "Track every action to reduce risk and improve accountability",
    heroBody:
      "In IVF, traceability is not optional. It is critical. EmbryoOne ensures every embryo, every action, and every movement is recorded, verifiable, and audit-ready.",
    solutionHeading: "How EmbryoOne helps",
    solutionBody: "Build accountability into every step of the lab workflow.",
    solutionPoints: [
      "End-to-end tracking from fertilization through cryo storage.",
      "User-level accountability for every action taken.",
      "Precise time-stamped logs across all events.",
      "Witness-linked validation checkpoints at high-risk transitions.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Linked event timeline for embryos and workflow actions.",
      "Role-based activity history across stations and shifts.",
      "Exportable compliance reports for inspections and audits.",
      "QA-ready incident review with complete activity context.",
    ],
    outcomes: ["Eliminate ambiguity.", "Reduce risk.", "Ensure compliance."],
  },
  {
    slug: "embryo-selection",
    category: "By Workflow",
    eyebrow: "Solutions • By Workflow",
    title: "Embryo Selection",
    subtitle: "Use imaging and AI to support consistent decision-making",
    heroHeading: "Use imaging and AI to support consistent decision-making",
    heroBody:
      "Embryo selection is one of the most critical decisions in IVF. EmbryoOne supports clinicians with structured grading workflows and AI-powered insights for confident, consistent decisions.",
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Image-based analysis with high-quality embryo capture.",
      "AI confidence scoring to support decision-making.",
      "Standardized grading workflows across embryologists.",
      "Manual override controls with documented decision rationale.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Integrated imaging workspace for review and comparison.",
      "AI-assisted grading insights with confidence context.",
      "Structured review workflow with full override control.",
      "Consolidated embryo results ready for clinical decision queues.",
    ],
    outcomes: [
      "Reduced variability.",
      "Improved selection consistency.",
      "Better clinical outcomes.",
    ],
  },
  {
    slug: "cryo-management",
    category: "By Workflow",
    eyebrow: "Solutions • By Workflow",
    title: "Cryo Management",
    subtitle: "Monitor storage, movement, and status of all cryo samples",
    heroHeading: "Monitor storage, movement, and status of all cryo samples",
    heroBody:
      "Cryopreservation requires precise monitoring and tracking. EmbryoOne provides complete visibility and control across storage, movement, and system health.",
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Tank monitoring for temperature, LN2 levels, and system status.",
      "Movement tracking for transfer, storage, and retrieval events.",
      "Alerts and thresholds to surface risk before failure.",
      "Patient-linked cryo records for consent and retrieval readiness.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Live storage map with tank and canister status.",
      "Real-time movement logs with chain-of-custody detail.",
      "Automated alerting for threshold breaches.",
      "Continuous monitoring trends for audit and risk review.",
    ],
    outcomes: ["Prevent sample loss.", "Improve safety.", "Maintain compliance."],
  },
  {
    slug: "inventory-tracking",
    category: "By Workflow",
    eyebrow: "Solutions • By Workflow",
    title: "Inventory Tracking",
    subtitle: "Ensure accurate usage and availability of lab consumables",
    heroHeading: "Ensure accurate usage and availability of lab consumables",
    heroBody:
      "Consumables are critical to lab operations, and running out is not an option. EmbryoOne helps teams maintain real-time visibility into supply levels and usage.",
    solutionHeading: "How EmbryoOne helps",
    solutionPoints: [
      "Real-time inventory tracking across locations and teams.",
      "Usage insights to understand consumption patterns.",
      "Automated low-stock alerts before disruptions occur.",
      "Connected PR-PO-GRN workflows for replenishment continuity.",
    ],
    featureHeading: "Feature deep dive",
    featurePoints: [
      "Centralized stock dashboard by item and location.",
      "Consumption trend analysis by workflow and cycle volume.",
      "Threshold-based replenishment notifications.",
      "Transaction-level traceability for adjustments and transfers.",
    ],
    outcomes: ["Eliminate stockouts.", "Reduce waste.", "Improve planning."],
  },
];
