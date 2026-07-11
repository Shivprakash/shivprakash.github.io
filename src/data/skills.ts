export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Agentic AI & GenAI",
    skills: [
      "Multi-Agent Systems (MCP, A2A)",
      "LangGraph",
      "LlamaIndex",
      "FastMCP",
      "RAG",
      "Fine-tuning",
      "Vector Stores (Weaviate, Milvus, PGVector)",
      "Agent SDKs (OpenAI, Claude, Google ADK, Vertex AI)",
    ],
  },
  {
    category: "LLMOps & Inference",
    skills: [
      "LLM Serving",
      "KV Caching",
      "Inference Optimization",
      "AI Gateway (LiteLLM)",
      "LLM Observability (LangFuse)",
      "Guardrails (LlamaGuard)",
      "Evals (DeepEval, RAGAS)",
    ],
  },
  {
    category: "ML Modeling & MLOps",
    skills: [
      "Time-Series Forecasting (STL, ARIMA, MHRNN)",
      "Fraud & Risk Modeling",
      "Model Training & Scoring",
      "Versioning & Inference",
      "MLFlow",
      "KServe",
      "KubeFlow",
    ],
  },
  {
    category: "Data Platforms & Engineering",
    skills: [
      "Data Mesh",
      "Data Engineering",
      "Governance, Catalog & Quality",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "DBT",
      "Fivetran",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    category: "Cloud & Distributed Systems",
    skills: [
      "Distributed Systems",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Kubernetes",
      "Microservices (Spring Boot, Reactive)",
      "Event-Driven Architecture",
      "High-TPS / Low-Latency Systems",
    ],
  },
  {
    category: "Databases",
    skills: [
      "Oracle",
      "PostgreSQL",
      "Cassandra",
      "Cosmos DB",
      "Elasticsearch",
      "Solr",
      "Redis",
    ],
  },
  {
    category: "Functional Domains & Compliance",
    skills: [
      "Supply Chain Optimization",
      "Retail & eCommerce",
      "Omni-channel Platforms",
      "Compliance (SOX, GDPR, CCPA)",
    ],
  },
  {
    category: "Leadership & Strategy",
    skills: [
      "AI Platform Strategy",
      "Technical Roadmap",
      "Executive Stakeholder Management",
      "Scaling High-Performance Teams",
    ],
  },
];
