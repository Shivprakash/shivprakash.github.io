export interface Portfolio {
    title: string;
    description: string;
    technologies?: string[];
    imageUrl?: string;
    projectUrl?: string;
    codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
    // Example entry
    // {
    //     title: "Inventory Placements",
    //     description: "Determines the optimal inventory placements for Walmart stores & DC to maximize sales and minimize costs.",
    //     technologies: [],
    //     imageUrl: "",
    //     projectUrl: "",
    //     codeUrl: "",
    // },
];
