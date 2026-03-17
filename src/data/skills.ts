export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Agentic AI & GenAI",
    skills: [
      "Multi-Agent Systems",
      "LangGraph",
      "RAG (Retrieval-Augmented Generation)",
      "Fine-tuning",
      "Vector Stores",
      "LLM Orchestration",
    ],
  },
  {
    category: "Data Platforms",
    skills: [
      "Data Mesh",
      "Apache Spark",
      "Airflow",
      "Snowflake",
      "DBT",
      "Data Lakes",
    ],
  },
  {
    category: "Cloud & Distributed Systems",
    skills: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "Kubernetes",
      "Microservices",
      "Event-Driven Architecture",
      "Distributed Systems",
    ],
  },
  {
    category: "Databases",
    skills: [
      "Oracle",
      "PostgreSQL",
      "Cassandra",
      "Elasticsearch",
      "Redis",
      "SQL & NoSQL",
    ],
  },
  {
    category: "Functional Domains",
    skills: [
      "Supply Chain Optimization",
      "Retail & eCommerce",
      "Compliance (SOX, GDPR, CCPA)",
      "MLOps",
      "Data Engineering",
    ],
  },
];
