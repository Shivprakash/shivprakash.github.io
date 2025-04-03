export interface AboutMe {
    name: string;
    title: string;
    institution: string;
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
}

export const aboutMe: AboutMe = {
    name: "Shiv Prakash",
    title: "Senior Architect / Engineering Leader, AI & Machine Learning Researcher",
    institution: "Georgia Tech",
    description:
        "Shiv Prakash is a seasoned, results-oriented Engineering Leader, a hands-on Senior Architect and Technologist with a " +
        "proven track record of building and leading high-performance teams to deliver critical, advanced, innovative, " +
        "precise scalable solutions for large-scale businesses. He led and was responsible for 10 successful Walmart US Holiday sales. " +
        "He has delivered and owned multiple Tier-0 and Tier-1 systems in Distributed Systems, Backend, Data Engineering, MLOps, Data Stores, " +
        "App Platforms and Data Platforms for time " +
        "sensitive high impact businesses and requirements. ",
    email: "shivprakash.in@hotmail.com",
    imageUrl: "https://avatars.githubusercontent.com/u/2737066?v=4",
    githubUsername: "shivprakash",
    linkedinUsername: "shivprakashin",
    twitterUsername: "shivprakash",
    blogUrl: "https://shivprakashin.substack.com",
    cvUrl: "/docs/ShivPrakash-pl-v2-online.pdf",
    institutionUrl: "https://www.gatech.edu",
};
