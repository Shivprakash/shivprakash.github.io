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
    title: "Senior Software Engineering Manager",
    company: "Walmart Global Tech",
    companyUrl: "https://www.walmartglobaltech.com/",
    date: "January 2023 - Present",
    description: `
      - Leading the AI-driven inventory placement initiative, projected to save Walmart over $500M.
      - Managing a team of 9 engineers, driving roadmap and technical execution across multiple geographies.
      - Implemented cost-reduction strategies, reducing cloud infrastructure costs by 31%.
      - Spearheaded zero-defect delivery and automation initiatives, improving system reliability.
    `,
  },
  {
    title: "Software Architect",
    company: "Walmart Global Tech",
    companyUrl: "https://www.walmartglobaltech.com/",
    date: "August 2019 - December 2022",
    description: `
      - Designed and built Walmart's centralized customer communication platform, handling 500K TPS.
      - Improved chatbot automation, reducing customer support contact rates by 32%.
      - Led the migration of critical systems to a cloud-native architecture, ensuring 99.99% uptime.
      - Established governance policies for data platforms, achieving SOX, GDPR, and CCPA compliance.
    `,
  },
  {
    title: "Senior Software Development Engineer",
    company: "Walmart Global Tech",
    companyUrl: "https://www.walmartglobaltech.com/",
    date: "November 2015 - July 2019",
    description: `
      - Developed and optimized Walmart’s demand forecasting platform, increasing throughput by 500%.
      - Led ETL pipeline development, processing over 10TB of data weekly for inventory insights.
      - Contributed to a multi-channel sourcing algorithm, later patented for its impact on order fulfillment.
    `,
  },
  {
    title: "Software Development Engineer III",
    company: "Walmart Global Tech",
    companyUrl: "https://www.walmartglobaltech.com/",
    date: "November 2013 - November 2015",
    description: `
      - Built and scaled Walmart’s fulfillment capacity service, supporting distribution center operations.
      - Developed a virtual inventory ingestion engine handling 22M items, 20K sellers, and 4M updates per hour.
      - Designed and deployed a global reservation system to optimize order availability across Walmart’s ecosystem.
      - Enhanced performance for inventory monitoring and analytics, improving reporting efficiency.
    `,
  },
  {
    title: "Software Development Engineer II",
    company: "Walmart Global Tech",
    companyUrl: "https://www.walmartglobaltech.com/",
    date: "October 2012 - November 2013",
    description: `
      - Designed Walmart’s real-time availability engine, processing inventory calculations with 400ms latency.
      - Developed an orchestration layer for microservices, improving service scalability and modularity.
      - Created an automated inventory ingestion pipeline, supporting millions of transactions daily.
      - Led migration efforts to cloud-based CI/CD pipelines for improved deployment efficiency.
    `,
  },
  {
    title: "Senior Programmer",
    company: "Best Buy (via Accenture)",
    companyUrl: "https://www.bestbuy.com/",
    date: "August 2010 - October 2012",
    description: `
      - Built and optimized mobile retail enhancements, improving customer experience for Best Buy.
      - Developed inventory availability and pre-sales order pipelines for mobile and in-store pickup.
      - Upgraded and migrated legacy fulfillment systems to improve performance and scalability.
    `,
  },
];
