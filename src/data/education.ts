export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  { year: "",
    institution: "Georgia Institute of Technology",
    degree: "Master of Science (MS) in Machine Learning (In Progress)",
    advisor: "",
    thesis: "",
    thesisUrl: "",
  },
  { year: "",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
    degree: "Bachelor of Engineering in Computer Technology",
    advisor: "",
    thesis: "",
    thesisUrl: "",
  },
];
