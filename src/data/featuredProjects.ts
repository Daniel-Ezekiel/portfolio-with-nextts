export const featuredProjects = [
  {
    id: 1,
    imageSrc: "/images/sra-project.png",
    title: "DataSovereign — Hybrid Inference Architecture",
    description:
      "A privacy-preserving hybrid inference system for financial contract analysis built as my MSc thesis. Achieves a 1.0 Privacy Score and 48.7% reduction in cloud API costs by routing data between on-device NLP classification and cloud AI using a custom Sovereignty Routing Algorithm — fully GDPR and DORA compliant.",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "WebGPU",
      "Transformers.js",
      "ONNX Runtime",
      "DistilBERT",
      "Gemini 2.5 Flash",
      "Python",
    ],
    githubUrl: "https://github.com/Daniel-Ezekiel/jargon_buster",
    liveUrl: "https://sra-project.vercel.app",
  },
  {
    id: 2,
    imageSrc: "/images/air-travel-tool.png",
    title: "EAUC Air Travel Justification Tool",
    description:
      "A React/TypeScript web tool built through the Scottish Tech Army for the Environmental Association for Universities and Colleges (EAUC) — a sustainability body serving UK and Ireland higher education. Now accessible to 300+ institutions including the University of Edinburgh and University of Glasgow, replacing a macro-enabled PowerPoint.",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "iframe integration",
      "Jira",
      "Agile",
    ],
    githubUrl: "https://github.com/EAUCsustainability/eauc_travel_better",
    liveUrl: "https://eaucsustainability.github.io/eauc_travel_better",
  },
  {
    id: 3,
    imageSrc: "/images/arenewablescotland.png",
    title: "A Renewable Scotland — Solar Calculator",
    description:
      "A hyper-local solar energy calculator built for Scottish households, resolving the 'solar paradox' of generic UK-wide tools. Integrates Met Office climate data and Home Energy Scotland grant eligibility checks (up to £7,500) with Smart Export Guarantee revenue modelling. Secured 2nd place and £200 prize in the UNIFORCE 2025 Sustainability Challenge.",
    tools: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Met Office Data",
      "Home Energy Scotland Data",
    ],
    githubUrl: "https://github.com/Daniel-Ezekiel/uniforce-fe",
    liveUrl: "https://arenewablescotland.vercel.app",
  },
  {
    id: 4,
    imageSrc: "/images/drivesmartmotors.png",
    title: "DriveSmart Motors Management System",
    description:
      "A full-stack car dealership management system built for a database design module at UWS. Features a 3NF-normalised MySQL database across 5 entities, 15 complex SQL queries for real-time analytics, ACID-compliant transaction logic, and a Role-Based Access Control model aligned with UK GDPR and the Data Protection Act 2018.",
    tools: [
      "MySQL",
      "PHP (PDO)",
      "JavaScript",
      "HTML5",
      "CSS3",
      "XAMPP",
      "phpMyAdmin",
    ],
    githubUrl: "https://github.com/daniel-ezekiel/drivesmartmotorsltd",
    liveUrl: "",
  },
];
