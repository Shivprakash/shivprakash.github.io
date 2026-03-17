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
        title: "Data Mesh Platform",
        description: "Scaled to handle over <strong>3 TB</strong> of curated data serving as the central place for company-wide quarter-end reconciliation.<br><br>• Reduced the cost of closing quarter from <strong>$140k to $8k</strong>.<br>• Launched platforms 1.2 & 1.3 with full compliance certification for <strong>IBM ASCA & SOX</strong>.",
        technologies: ["Data Mesh", "Data Engineering", "IBM ASCA", "SOX"],
    },
    {
        title: "Agentic Platform (Dataverse) & Digital Workforce",
        description: "Built a production multi-agent system spearheading a digital workforce:<br><br>• <strong>Dataverse Agent</strong>: NL-to-SQL system reducing analytics workload by <strong>80%</strong>.<br>• <strong>Platform Review Agent</strong>: Automated governance yielding <strong>30% volume reduction</strong>.<br>• <strong>Metadata Enrichment Agent</strong>: Fine-tuned PHI-3 model achieving widespread adoption.",
        technologies: ["Multi-Agent Systems", "NL-to-SQL", "PHI-3", "Governance Automation"],
    },
    {
        title: "AI Acceleration & Developer Productivity",
        description: "Led the adoption of Gen AI tools like <strong>Cursor</strong>, <strong>Claude CLI</strong>, and <strong>Gemini Enterprise</strong>, achieving <strong>100% adoption</strong> in AI-assisted productivity across 129 associates.<br><br>Led rigorous evaluations for coding review agents using state-of-the-art models like <strong>Sonnet, Opus, Gemini Pro, and Kimi</strong>.",
        technologies: ["Gen AI", "LLM Evals", "Developer Productivity"],
    },
    {
        title: "Developer Experience & Programmable Dashboards",
        description: "Designed programmable dashboards, dynamic visualizations, and UX interfaces as hubs for AI interactions.<br><br>Replaced Tableau with a next-gen, SOX-compliant visualization solution, unlocking <strong>$2.3 million</strong> in immediate savings.",
        technologies: ["Developer Experience", "Data Visualization", "UX Interfaces"],
    },
    {
        title: "Inventory Placement Optimization",
        description: "Developed a sweeping optimization system for optimal inventory placement across shipping nodes at Walmart.<br><br>• Realized <strong>$75M</strong> of a projected <strong>$500M</strong> impact.<br>• Enabled pixel-based demand forecasting to scale next-gen AI automated fulfillment centers.",
        technologies: ["Optimization Algorithms", "Demand Forecasting", "Supply Chain"],
    },
    {
        title: "GenAI Placement Optimization Agent",
        description: "Built assistant agents for placement analysis and approvals using <strong>multi-agent orchestrations</strong>.<br><br>Successfully accelerated weekly analysis and full approval of critical placement decisions to <strong>under 4 hours</strong> (down from 48 hours).",
        technologies: ["Multi-Agent Orchestrations", "GenAI", "Decision Automation"],
    },
    {
        title: "Ops and Engineering Excellence",
        description: "Realized a <strong>31% reduction</strong> in operating costs for the replenishment data lake entirely through continuous monitoring, migration, re-architecture, and optimization.<br><br>Improved code quality and build metrics by <strong>15%</strong> while maintaining strict <strong>100% CVE compliance</strong> against zero-day exploits.",
        technologies: ["Cost Optimization", "Re-architecture", "Security Compliance"],
    },
    {
        title: "Centralized Communications Platform",
        description: "Led a cross-functional team bridging UX, Data, and QA to build a pivotal central comms platform strictly compliant with <strong>GDPR, POPIA, and CCPA</strong>.<br><br>Reduced operational costs by <strong>21.2%</strong> and improved CSAT scores by <strong>33.8%</strong> through an enhanced integrated chatbot using robust in-house conversational APIs.",
        technologies: ["Big Data", "Conversational APIs", "Chatbot", "Architecture"],
    },
    {
        title: "US Walmart Stores Data Platform",
        description: "Led the design, development, and delivery of automated Data Governance policies serving <strong>34 domain verticals</strong> across stores.<br><br>• Reduced self-service schema onboarding time from <strong>1.5 weeks to 2 days</strong>.<br>• Designed comprehensive <strong>Data Catalog & Quality framework</strong> managing lineage and discovery.<br>• Led <strong>SOX & CCPA</strong> compliance achieving <strong>99.99% uptime</strong> executing >10TB of daily ingestion.",
        technologies: ["Data Governance", "Big Data", "Schema Registry", "SOX/CCPA", "Data Lineage"],
    },
    {
        title: "Demand Forecasting Solution (AIMS)",
        description: "Architected and built the next-generation Automated Inventory Management System (AIMS).<br><br>• Consolidated 5 disparate systems into 1 unified platform, reducing code bases from <strong>35 to 3 repos</strong>.<br>• Yielded a massive <strong>40% cost saving</strong> and skyrocketed throughput by <strong>500%</strong>.<br>• Delivered a sharable foundational library for ML and Cloud transfers utilized by 6+ company-wide teams.",
        technologies: ["Demand Forecasting", "System Consolidation", "ML Libraries", "Analytics Platform"],
    },
    {
        title: "Tier-0 Global Inventory & Replenishment Systems",
        description: "Architected Tier-0 Global and Node-level enterprise inventory services executed at massive scale.<br><br>• Achieved <strong>sub-3ms latency at 13k+ TPS</strong> and processed <strong>4 million updates/hr</strong> across 22M items.<br>• Managed a <strong>1 TB Elasticsearch cluster</strong> running advanced search and forecasting on billions of records.<br>• Computed >10TB delta loads weekly, improving forecasts by up to <strong>35%</strong> for newly launched items.",
        technologies: ["High-Scale Distributed Systems", "Elasticsearch", "Low-Latency", "Data Ingestion"],
    },
];
