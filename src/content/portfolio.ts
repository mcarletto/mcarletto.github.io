const images = import.meta.glob<string>("../assets/*.png", { eager: true, query: "?url", import: "default" });

// All portfolio content lives here. Edit this file to update the site.
// Items marked `placeholder: true` are awaiting final content and are labelled on the page.

export type Link = { label: string; href: string };

export const profile = {
  name: "Maria Carletto",
  photo: images["../assets/maria_portrait.png"] ?? null,
  heroImage: images["../assets/hallway_world_map.png"] ?? null,
  introduction:
    "I’m drawn to questions that cross disciplines—especially where research, data, and technology can make complex systems clearer and more useful.",
  bio: [
    "My background is in medicine. That experience shaped how I approach complex problems: with curiosity, care, and attention to the people behind them.",
    "Today I lead project, OHSE, and software teams in a large passenger-transportation group in Brazil, and I research how language models can make enterprise data easier to understand and query. I’m also pursuing an MBA in Entrepreneurship.",
  ],
  education: [
    { degree: "MBA in Entrepreneurship", institution: "Link School of Business, São Paulo", period: "2026 – 2027 (expected)" },
    { degree: "Bachelor’s Degree in Medicine", institution: "Centro Universitário Zarns, Salvador", period: "2017 – 2023" },
  ] as { degree: string; institution: string; period: string; placeholder?: boolean }[],
  interests: [
    "Large language models for enterprise analytics",
    "Semantic metadata and data modeling",
    "Text-to-SQL systems",
    "Driver scheduling and operations research",
    "Applied statistics and bioinformatics",
  ],
  languages: "Portuguese (native) · English (full professional) · Spanish (B2)",
};

export type ResearchEntry = { title: string; status: string; summary: string; tags: string[]; featured?: boolean; placeholder?: boolean };
export const research: ResearchEntry[] = [
  {
    title: "LLM-assisted enterprise analytics and semantic data modeling",
    status: "2026 – Present",
    summary:
      "Investigates whether business specifications can guide LLMs to generate task-relevant semantic metadata for undocumented enterprise databases, supervised by Prof. Francisco Isidro Massetto. A preliminary evaluation compared 17 SQL queries with and without explicit business specifications, and analyzed 856 shared attributes: 779 descriptions changed, with a median token-based Jaccard similarity of 0.50.",
    tags: ["LLMs", "Text-to-SQL", "Semantic metadata", "n8n", "Oracle SQL"],
    featured: true,
  },
  {
    title: "Spatiotemporal Bayesian modeling of leprosy in Brazil",
    status: "2022 – 2023 · Fiocruz (CNPq)",
    summary:
      "Undergraduate research scholarship supervised by Dr. Artur Trancoso Lopo de Queiroz. Modeled state-level leprosy data (2015–2021) in R, finding higher estimated risk in the Center-West, lower risk in the South and Southeast, and an association between poverty and higher case rates.",
    tags: ["R", "Bayesian statistics", "Epidemiology"],
  },
  {
    title: "Blood transcriptomics in post-COVID-19 condition",
    status: "2022 · KU Leuven, Rega Institute",
    summary:
      "Visiting student with Prof. Johan Van Weyenbergh. Supported bioinformatics analysis that identified 70 significant genes and evaluated antisense SARS-CoV-2 and FYN as candidate predictors (AUC 0.94).",
    tags: ["R", "Bioinformatics", "nSolver", "ROSALIND"],
  },
];

export type Publication = { authors: string; title: string; venue: string; year: string; links?: Link[]; placeholder?: boolean };
export const publications: Publication[] = [
  { authors: "Menezes S, Jamoulle M, Carletto M, et al.", title: "Blood transcriptomic analyses reveal persistent SARS-CoV-2 RNA and candidate biomarkers in post-COVID-19 condition", venue: "The Lancet Microbe, 5", year: "2024", links: [{ label: "DOI", href: "https://doi.org/10.1016/S2666-5247(24)00055-7" }] },
  { authors: "Silva AR, Chaves Neto JS, Lopes FFL, et al., Carletto MP", title: "Meningites bacterianas e virais: dados dos custos, óbitos, internações e busca na internet no Brasil", venue: "Diálogos & Ciência, 3(2):34–43", year: "2024" },
  { authors: "Brasil JF, Sacramento IO, Costa JLFR, Brasil LFF, Carletto MP, et al.", title: "The Impact of the Place of Delivery, Type of Birth and Number of Antenatal Visits on the Apgar Score", venue: "Journal of Health Sciences, 25(2):83–88", year: "2023" },
  { authors: "Lopes FFL, Lima ACM, Césare N, Araújo DN, Carletto MP, et al.", title: "Improving Clinical Decision Using the Diagnosis, Sign and Symptoms of Parasitic Diseases Using a Network Approach", venue: "Diálogos & Ciência, 2(1):173–185", year: "2022" },
  { authors: "Peixoto FO, Bittencourt GO, Diniz MF, et al., Carletto MP", title: "Análise da produção científica do curso de Medicina em uma faculdade particular na Bahia", venue: "Graduação em Movimento – Ciências da Saúde, 1(3):49–59", year: "2022" },
];
export const presentations: Publication[] = [
  { authors: "Carletto MP, Farago F, Fukutani K.", title: "Driver Scheduling and Overtime Exposure in a Brazilian Intercity Bus Corridor", venue: "37th Annual POMS Conference, Orlando (accepted poster)", year: "2027" },
  { authors: "Carletto MP, Farago F.", title: "Generative AI and Entrepreneurial Experimentation: Lower Costs, Persistent Uncertainty", venue: "37th Annual POMS Conference, Orlando (accepted poster)", year: "2027" },
  { authors: "Carletto MP, Massetto FI.", title: "A Specification-grounded LLM Workflow for Translating Business Requirements into Analytical Data Models", venue: "SLDS, New York (poster)", year: "2026" },
  { authors: "Carletto MP, Fukutani KF.", title: "Quando a Normalização Induz Correlação: Dependência Espúria Gerada por Referências Compartilhadas", venue: "X EBEST, IME – UFBA, Salvador (poster)", year: "2026" },
  { authors: "Carletto MP, Fukutani KF.", title: "Discretização por Quantis e Redes Bayesianas para Integrar Bases Transcriptômicas Heterogêneas", venue: "X EBEST, IME – UFBA, Salvador (poster)", year: "2026" },
];

export type Metric = { label: string; value: string };
export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  technologies: string[];
  architecture: string[]; // ordered pipeline steps rendered as a diagram
  results: string;
  metrics: Metric[];
  limitations: string;
  links: Link[];
  featured?: boolean;
  placeholder?: boolean;
};
export const projects: Project[] = [
  {
    slug: "bus-driver-scheduling",
    title: "Driver scheduling and overtime exposure",
    summary:
      "A study of how bus and driver schedules shape fleet utilization and overtime on the Itabuna–Itacaré corridor in Brazil.",
    problem:
      "The operator, a Brazilian passenger-transportation group running about 1,200 buses and more than 310k passengers a month, must cover every scheduled departure in both directions while respecting working-time rules. A bus waiting at a terminal could cover another departure if its class, location and availability match the service and a qualified driver is free, but building those sequences by hand makes overtime build up quietly.",
    contribution:
      "Lead author: defined the research question and the three-schedule design, built the daily duty-matching model and the six fleet scenarios, and reconstructed the September 2026 baseline. Accepted as a poster at the 37th Annual POMS Conference (2027) with F. Farago and K. Fukutani.",
    technologies: ["SQL", "R", "Operations research", "Duty matching"],
    architecture: [
      "Timetable, fleet & driver rules",
      "Historical baseline reconstruction",
      "Daily duty-matching model",
      "Three-schedule comparison",
      "Fleet & overtime outcomes",
    ],
    results:
      "Across 679 scheduled departures in the September 2026 timetable, a daily matching model that first maximizes feasible trip pairs and then minimizes residual waiting time formed 348 anonymous daily duties: 331 with two trips and 17 with one. Intervals beyond the scheduled break totaled 682 hours 35 minutes. Six fleet scenarios vary turnaround time and vehicle-class compatibility, and the design compares the historical schedule with driver-only rescheduling and with joint bus-and-driver rescheduling.",
    metrics: [
      { label: "Scheduled departures", value: "679" },
      { label: "Daily duties formed", value: "348" },
      { label: "Two-trip duties", value: "331" },
      { label: "Beyond-break intervals", value: "682 h 35 m" },
    ],
    limitations:
      "A retrospective comparison of one corridor's September timetable: it estimates potential rather than realized savings. The 682 h 35 m of beyond-break intervals must still be classified as additional work or free time before actual overtime can be estimated, and assignments require verified individual availability, rest between duties and bed availability in Itacaré. Valuing a gain financially requires company costs and an identifiable use for the released capacity. Olivença is a separate test of vehicle trip sequencing.",
    links: [],
    featured: true,
  },
  {
    slug: "text-to-sql-metadata",
    title: "Specification-grounded LLM workflow for analytical data models",
    summary: "An LLM workflow that documents undocumented enterprise databases and turns business requirements into SQL.",
    problem: "Natural-language questions often fail on databases whose tables and columns have no descriptive metadata.",
    contribution: "Designed and implemented the workflow; presented as a poster at SLDS 2026 with Prof. F. I. Massetto.",
    technologies: ["n8n", "Oracle SQL", "LLMs"],
    architecture: ["Database schema extraction", "Business specifications", "LLM metadata generation", "SQL generation", "Evaluation"],
    results: "Business specifications changed 779 of 856 shared attribute descriptions (median Jaccard similarity 0.50) across a 17-query comparison.",
    metrics: [{ label: "Attributes analyzed", value: "856" }, { label: "Descriptions changed", value: "779" }, { label: "SQL queries", value: "17" }, { label: "Median Jaccard", value: "0.50" }],
    limitations: "Preliminary evaluation on one enterprise database.",
    links: [],
    featured: true,
  },
];

export type Experience = { role: string; organization: string; period: string; description: string; placeholder?: boolean };
export const experience: Experience[] = [
  { role: "Project & OHSE Coordinator", organization: "Grupo Brasileiro, Itabuna", period: "07/2026 – Present", description: "Leads a team of 30 across OHSE, projects, and software development. Established standard monitoring and reporting across a portfolio of 18 projects." },
  { role: "Data Analytics Specialist", organization: "Grupo Brasileiro", period: "03/2025 – 12/2025", description: "Worked as a Product Owner, translating business needs into technical specifications, introducing Scrum routines, and building SQL and Power BI dashboards." },
  { role: "Executive Leadership Development Program", organization: "Grupo Brasileiro", period: "09/2023 – 02/2025", description: "About 18 months of cross-functional training across operational and administrative areas, including Fundação Dom Cabral’s PAEX program." },
];

export const cv = { file: `${import.meta.env.BASE_URL}cv.pdf`, updated: "November 2026" };

export const contact: { label: string; value: string; href: string; placeholder?: boolean }[] = [
  { label: "Email", value: "mprcarletto@gmail.com", href: "mailto:mprcarletto@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/mariapaulacarletto", href: "https://www.linkedin.com/in/mariapaulacarletto" },
];
