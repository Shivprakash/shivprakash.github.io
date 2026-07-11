export interface AboutMe {
    name: string;
    // title: string;
    // domain: string;
    // research: string;
    // institution: string;
    description: string;
    email: string;
    imageUrl?: string;
    blogUrl?: string;
    cvUrl?: string;
    googleScholarUrl?: string;
    twitterUsername?: string;
    githubUsername?: string;
    linkedinUsername?: string;
    funDescription?: string; // Gets placed in the left sidebar
    secretDescription?: string; // Gets placed in the bottom
    altName?: string;
    institutionUrl?: string;
    notesUrl?: string;
    researchUrl?: string;
}

export const aboutMe: AboutMe = {
    name: "Shiv Prakash",
    // domain: "AI, ML, Data, Distributed Systems",
    // title: "Engineering Leader & Architect",

    // research: "SCM, Data Center, AI, ML, LLM, Computer Vision Analysis & Research",
    // institution: "Georgia Tech",

    description:
        "I have built Autonomous Agentic AI platforms, Data Mesh architectures, and Distributed systems that transform enterprise operations at scale. " +
        "I led a Data Mesh &amp; Agentic AI platform serving <strong>200+ data products</strong> and <strong>20K users</strong>, delivering <strong>6 autonomous agents</strong> (3 in production, 3 in beta). " +
        "With proven delivery of <strong>$75M+ in savings</strong> through AI-driven optimization, PetaBytes scale data platforms and systems handling <strong>500K+ TPS</strong> " +
        "for millions of users, I bring hands-on expertise across the full stack - from Machine Learning, Distributed Systems, Data Engineering to " +
        "Cloud-Native Infrastructure and Engineering Leadership. " +
        "<br><br>" +
        "Beyond enterprise work, I actively design and build <strong>agentic AI products</strong> of my own — spanning " +
        "consumer fintech, enterprise workflow automation, and applied research. " +
        "<br><br>" +
        "Open to <strong>Consulting engagements</strong>, <strong>Technical collaboration</strong>, <strong>Mentorship</strong>, and " +
        "<strong>Volunteer work</strong> with non-profits. " +
        "<br><br>" +
        "Let's discuss how I can help you build scalable systems, " +
        "review your architecture, or accelerate your team's growth!",
    email: "shivprakash.in[at]hotmail.com",
    imageUrl: "https://avatars.githubusercontent.com/u/2737066?v=4",
    githubUsername: "shivprakash",
    linkedinUsername: "shivprakashin",
    twitterUsername: "shivprakash",
    blogUrl: "https://shivprakashin.substack.com/welcome",
    cvUrl: "/docs/CV-ShivPrakash-Online.pdf",
    notesUrl: "/blog",
    researchUrl: "https://research.shiv.io/",
    institutionUrl: "https://omscs.gatech.edu",
};
