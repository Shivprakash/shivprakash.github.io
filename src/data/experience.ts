export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    title: "Senior Engineering Leader – Data & AI",
    company: "Red Hat",
    companyUrl: "https://www.redhat.com",
    date: "July 2025 - March 2026",
    description: "Led the Data and AI Platform for India and managed a team of 28+ engineers across APAC, NA, and EMEA.<br><br>Drove the <strong>AI acceleration roadmap</strong>, scaled the <strong>Enterprise Data Mesh</strong> platform, and built the next-generation <strong>Agentic AI workforce</strong>.",
  },
  {
    title: "Senior Architect / Senior Software Engineering Manager II",
    company: "Walmart",
    companyUrl: "https://www.walmart.com",
    date: "October 2012 - June 2025",
    description: "Over a near 13-year tenure, progressed from SDE II to Architect and Senior Software Engineering Manager, leading large geo-distributed teams across some of Walmart's most critical and complex charters.<br><br>Directed the architecture, vision, and scale of massive enterprise initiatives including <strong>Inventory Management Systems</strong>, <strong>Real-Time Availability</strong>, <strong>Demand Forecasting</strong>, <strong>Store Systems Data Platforms</strong>, <strong>Centralized Comms Platform</strong>, and a flagship multi-million dollar <strong>Inventory Optimization System</strong>.<br><br>This trajectory built a deeply rounded profile encompassing the full technical stack—architecting high-scale <strong>Distributed Systems</strong>, modernizing PetaByte-scale <strong>Data architecture</strong>, deploying rigorous supply chain <strong>Optimization Systems</strong>, integrating foundational <strong>Machine Learning (ML)</strong>, <strong>AI</strong>, and pioneering early orchestrations in <strong>Gen AI</strong> to radically elevate global fulfillment capabilities.",
  },
  {
    title: "Programmer - Senior Programmer",
    company: "Best Buy (via Accenture BBTG)",
    companyUrl: "https://www.bestbuy.com/",
    date: "August 2010 - October 2012",
    description: "Led critical retail system modernizations, including the overarching <strong>Sterling SSFS</strong> enterprise upgrade and the development of a unified <strong>mobile carrier activation platform</strong>.",
  },
];
