export interface CustomMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  siteUrl?: string;
  twitterHandle?: string;
}

// SEO metadata for social media preview and search engines
const siteUrl = "https://shivprakash.github.io";

export const customMetadata: CustomMetadata = {
  title: "Shiv Prakash | Engineering Leader & Architect",
  description: "Engineering Leader & Architect - Distributed Systems, Data Engineering, AI, Agentic AI, Machine Learning. Graduate Researcher in ML, Algorithms, HCI/AI, Robotics, Network Science, DL, RL, NLP. Industry Analyst covering Supply Chain, Data Center, Financial Research, VC.",
  keywords: [
    "Engineering Leader",
    "Software Architect",
    "Distributed Systems",
    "Data Engineering",
    "AI",
    "Agentic AI",
    "Machine Learning",
    "Graduate Researcher",
    "Georgia Tech",
    "Supply Chain",
    "Data Center",
    "Financial Research",
    "Venture Capital",
    "Cloud-Native Infrastructure",
    "Data Mesh",
    "Autonomous Systems",
  ],
  author: "Shiv Prakash",
  siteUrl: siteUrl,
  twitterHandle: "@shivprakash",
};
