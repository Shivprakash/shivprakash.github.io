export interface ServiceCategory {
  title: string;
  description: string;
  offerings: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "Consulting",
    description: "Strategic guidance on architecture, technology decisions, and technical due diligence",
    offerings: [
      "Architecture Reviews & Design",
      "System Design & Technology Selection",
      "Technical Due Diligence for M&A/Investments",
      "AI/ML Strategy & Roadmap Planning",
      "Data Platform & Data Mesh Architecture",
    ],
  },
  {
    title: "Hands-on Building",
    description: "End-to-end development of critical systems and platforms",
    offerings: [
      "AI Agents & RAG Systems",
      "Data Engineering Pipelines & Platforms",
      "Distributed Systems & Microservices",
      "Cloud-Native Architecture (GCP, Azure)",
      "High-Throughput & Low-Latency Systems",
    ],
  },
  {
    title: "Mentorship",
    description: "Helping engineers and leaders grow in their careers",
    offerings: [
      "Engineering Leadership Coaching",
      "Technical Career Guidance",
      "System Design Interview Preparation",
      "Code Review & Best Practices",
      "Building High-Performance Teams",
    ],
  },
  {
    title: "Volunteering",
    description: "Supporting non-profits, education, and open-source initiatives",
    offerings: [
      "Non-Profit Technology Consulting",
      "Educational Initiatives & Workshops",
      "Open Source Project Contributions",
      "Mentoring Underrepresented Groups in Tech",
    ],
  },
];
