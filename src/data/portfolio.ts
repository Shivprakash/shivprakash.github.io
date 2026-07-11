export interface Portfolio {
    title: string;
    description: string;
    technologies?: string[];
    imageUrl?: string;
    projectUrl?: string;
    codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
    {
        title: "Data Mesh - Lakehouse Platform",
        description: "Scaled to <strong>3 TB</strong> of curated data as the central engine for company-wide quarter-end reconciliation.<br><br>• Cut quarter-close cost from <strong>$140k → $8k</strong>.<br>• Certified for <strong>IBM ASCA & SOX</strong> compliance.<br>• Implemented <strong>access-identity security</strong> and <strong>zero-trust</strong> controls.<br>• Delivered <strong>end-to-end observability</strong> with Prometheus, Langfuse, and Grafana.<br>• Built <strong>data & AI governance frameworks</strong> for compliance and trust.",
        technologies: ["Data Mesh", "Data Engineering", "IBM ASCA", "SOX", "Langfuse", "Observability"],
    },
    {
        title: "Agentic Platform (Dataverse) & Digital Workforce",
        description: "Production multi-agent system powering a digital workforce across analytics, governance, reliability, and compliance.<br><br>• <strong>Dataverse Agent</strong>: NL-to-SQL, cutting analytics workload by <strong>80%</strong>.<br>• <strong>Platform Review Agent</strong>: Automated governance, <strong>30% cost reduction</strong>.<br>• <strong>Metadata Enrichment Agent</strong>: Fine-tuned PHI-3 model with <strong>DeepEval / RAGAS</strong> evaluation pipelines.<br>• <strong>DSR / GDPR Agent</strong>: Orchestrated scatter-gather for data-subject requests with full audit trail.<br>• <strong>SRE Agent</strong>: Dual knowledge-synthesis + worker agent — negotiated permissions, auto-remediated incidents, <strong>45% MTTR reduction</strong>, <strong>99.995% uptime</strong>.",
        technologies: ["Multi-Agent Systems", "NL-to-SQL", "PHI-3", "DeepEval / RAGAS", "OPA", "Governance Automation", "LLM Ops"],
    },
    {
        title: "Agentic Sandbox / Harness",
        description: "Simulation harness that models humans, departments, and permissions to generate governed agentic clones — enabling safe agent development and policy testing.<br><br>• <strong>SRE agent pilot</strong>: Automated ticket resolution, peak-load scaling, onboarding validation, and self-improving knowledge base.<br>• <strong>Policy-Based Access</strong>: Dynamic attribute-based access control via OPA across micro-services.<br>• <strong>Ephemeral compute</strong>: Spawns research environments on-demand and destroys them post-session.",
        technologies: ["Policy Engine", "OPA", "Zero Trust", "Agentic Simulation", "Node.js"],
    },
    {
        title: "Production ML Modeling & MLOps",
        description: "Built and <strong>personally owned production ML models end-to-end</strong> — not just the platforms around them.<br><br>• <strong>Demand-forecasting models</strong>: STL, ARIMA, and MHRNN powering next-gen inventory planning.<br>• <strong>Return-fraud model</strong>: trained, scored, and served in production for Care &amp; Returns.<br>• <strong>Full MLOps lifecycle</strong>: training, scoring, versioning, inference, and post-processing.<br>• Tooling: <strong>MLFlow</strong> for experiment tracking &amp; versioning, <strong>KServe</strong> for model serving.<br>• Lifted new-item forecast accuracy by up to <strong>35%</strong> across categories.",
        technologies: ["STL / ARIMA / MHRNN", "Fraud Modeling", "MLFlow", "KServe", "MLOps", "Time-Series Forecasting"],
    },
    {
        title: "AI Acceleration & Developer Productivity",
        description: "Led enterprise-wide Gen AI adoption across 129 associates, achieving <strong>100% AI-assisted productivity</strong>.<br><br>• Drove adoption of <strong>Cursor, Claude CLI, and Gemini Enterprise</strong>.<br>• Ran rigorous evaluations of coding-review agents across <strong>Sonnet, Opus, Gemini Pro, and Kimi</strong>.",
        technologies: ["Gen AI", "LLM Evals", "Developer Productivity"],
    },
    {
        title: "Developer Experience & Programmable Dashboards",
        description: "Built next-gen programmable dashboards and AI interaction hubs that replaced legacy BI tooling.<br><br>• Replaced Tableau with a SOX-compliant, dynamic visualization platform.<br>• Unlocked <strong>$2.3M in immediate savings</strong> while improving developer experience.",
        technologies: ["Developer Experience", "Data Visualization", "UX Interfaces", "SOX"],
    },
    {
        title: "Inventory Placement Optimization",
        description: "Sweeping optimization engine for inventory placement across Walmart shipping nodes.<br><br>• Realized <strong>$75M</strong> of a projected <strong>$500M</strong> business impact.<br>• Enabled pixel-based demand forecasting to power next-gen AI fulfillment centers.",
        technologies: ["Optimization Algorithms", "Demand Forecasting", "Supply Chain"],
    },
    {
        title: "GenAI Placement Optimization Agent",
        description: "Multi-agent orchestration for placement analysis and approval workflows — collapsing cycle times by <strong>92%</strong>.<br><br>• Reduced critical placement decisions from <strong>48 hours → under 4 hours</strong>.<br>• Automated weekly analysis and cross-team approval pipelines.",
        technologies: ["Multi-Agent Orchestrations", "GenAI", "Decision Automation"],
    },
    {
        title: "Ops and Engineering Excellence",
        description: "Achieved measurable cost and quality improvements through continuous platform optimization.<br><br>• <strong>31% reduction</strong> in replenishment data lake operating costs via re-architecture and migration.<br>• <strong>15% improvement</strong> in code quality and build metrics.<br>• Maintained <strong>100% CVE compliance</strong> against zero-day exploits.",
        technologies: ["Cost Optimization", "Re-architecture", "Security Compliance"],
    },
    {
        title: "Centralized Communications Platform",
        description: "Customer-facing communications, chatbot, and self-service platform scaling to <strong>500K TPS</strong> across <strong>5 global markets</strong> (UK, South Africa, Canada, Mexico, Chile) — fully compliant with <strong>GDPR, POPIA, and CCPA</strong>.<br><br>• Cut contact rate by <strong>32%</strong> via an enhanced in-house conversational chatbot.<br>• Improved CSAT scores by <strong>33.8%</strong>.<br>• Reduced operational costs by <strong>21.2%</strong>.",
        technologies: ["500K TPS", "Conversational AI", "Self-Service", "Big Data", "GDPR / POPIA / CCPA"],
    },
    {
        title: "US Walmart Stores Data Platform",
        description: "Designed, built and delivered a Data Platform serving <strong>4,000 US Walmart stores</strong> across <strong>34 domain verticals</strong> with enterprise-grade reliability.<br><br>• Reduced schema onboarding from <strong>1.5 weeks → 2 days</strong>.<br>• Built comprehensive <strong>Data Catalog & Quality framework</strong> for lineage and discovery.<br>• Achieved <strong>99.99% uptime</strong> with >10TB daily ingestion under <strong>SOX & CCPA</strong>.",
        technologies: ["Data Governance", "Big Data", "Schema Registry", "SOX/CCPA", "Data Lineage"],
    },
    {
        title: "Demand Forecasting Solution (AIMS)",
        description: "Next-generation Automated Inventory Management System consolidating fragmented platforms into a single source of truth.<br><br>• Consolidated <strong>5 systems → 1 platform</strong>, reducing repos from <strong>35 → 3</strong>.<br>• Delivered <strong>40% cost savings</strong> and <strong>500% throughput increase</strong>.<br>• Shipped a foundational ML library adopted by <strong>6+ teams</strong> company-wide.",
        technologies: ["Demand Forecasting", "System Consolidation", "ML Libraries", "Analytics Platform"],
    },
    {
        title: "Tier-0 Global Inventory & Replenishment Systems",
        description: "Architected enterprise-grade Tier-0 inventory services operating at extreme scale and reliability.<br><br>• <strong>Sub-3ms latency at 13k+ TPS</strong>, processing <strong>4M updates/hr</strong> across 22M items.<br>• Managed <strong>1 TB Elasticsearch cluster</strong> for real-time search and forecasting on billions of records.<br>• Weekly >10TB delta loads improving forecasts by <strong>35%</strong> for newly launched items.",
        technologies: ["High-Scale Distributed Systems", "Elasticsearch", "Low-Latency", "Data Ingestion"],
    },
];
