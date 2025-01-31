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
        "Shiv Prakash is a seasoned, results-oriented Engineering Leader, a hands-on Senior Architect and Technologist with a" +
        "proven track record of building and leading high-performance teams to deliver critical, advanced, innovative," +
        "precise scalable solutions for large-scale businesses. Led and involved in 10 successful Walmart US Holiday sales." +
        "Delivered and owned Tier-0 and Tier-1 systems in backend, Data and MLOps, Data Stores and Platforms for time" +
        "sensitive high impact businesses and requirements.",
    email: "shivprakash@duck.com",
    imageUrl: "https://avatars.githubusercontent.com/u/2737066?v=4",
    githubUsername: "shivprakash",
    linkedinUsername: "shivprakashin",
    twitterUsername: "shivprakash",
    blogUrl: "https://shivprakashin.substack.com",
    cvUrl: "https://",
    institutionUrl: "https://www.gatech.edu",
};
