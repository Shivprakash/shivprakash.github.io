export interface Publication {
    year: string;
    conference: string;
    title: string;
    authors: string;
    paperUrl?: string;
    codeUrl?: string;
    bibtex?: string;
    tldr?: string;
    imageUrl?: string;
    award?: string;
}

export const publicationData: Publication[] = [
    // If you don't want to show publications, just make the array empty.
    {
        title: "Database System for Distribution Center Fulfillment Capacity Availability Tracking",
        authors: "Shiv Prakash",
        conference: "US Patent Office",
        year: "2017",
        award: "",
        paperUrl: "https://patents.google.com/patent/US20170091683",
        codeUrl: "",
        bibtex: "",
        imageUrl: "/images/publications/fcap.jpg",
        tldr: "Patent for an advanced system that optimizes fulfillment capacity availability tracking in distribution centers.",
    },
    {
        title: "Methodology for Delivering Chain of Fallback Customer Communications Using Composite and Concurrent State Machines",
        authors: "Shiv Prakash",
        conference: "US Patent Office",
        year: "2024",
        award: "",
        paperUrl: "https://patents.google.com/patent/US11973637B1",
        codeUrl: "",
        bibtex: "",
        imageUrl: "/images/publications/fallback-machines.jpg",
        tldr: "Patent for an advanced fallback communication system that enhances customer interactions through composite and concurrent state machines.",
    },
];
