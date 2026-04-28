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
      "Standardize key lab steps across teams.",
      "Use AI-assisted grading for consistency.",
      "Track every action with user and timestamp logs.",
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
      "Monitor workflows and outcomes in one dashboard.",
      "Compare performance by provider and protocol.",
      "Keep audit-ready records by default.",
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
      "View cycle, embryo, and clinical updates in one timeline.",
      "Get real-time alerts for time-sensitive actions.",
      "Use AI-supported context for faster decisions.",
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
      "Manage schedules, tasks, and workflows centrally.",
      "Automate recurring coordination work.",
      "Access real-time operational reporting.",
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
      "Track every embryo action from fertilization to cryo storage.",
      "Capture user-level, time-stamped logs automatically.",
      "Validate high-risk steps with witness checkpoints.",
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
      "Capture and review embryos with image-based workflows.",
      "Use AI confidence scores as decision support.",
      "Standardize grading with manual override controls.",
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
      "Monitor tank status, LN2 levels, and storage conditions.",
      "Track all cryo movements with full history.",
      "Get early alerts before risks escalate.",
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
      "Track inventory in real time across locations.",
      "Use consumption trends for better planning.",
      "Automate low-stock alerts and replenishment flow.",
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
