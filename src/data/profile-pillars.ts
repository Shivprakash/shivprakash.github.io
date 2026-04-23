// Role pillars define Shiv's three professional identities shown in the profile sidebar.
// iconName must match a key in the iconMap defined in profile-section.tsx.
// Tailwind colour classes reference tokens defined in tailwind.config.ts → theme.colors.

export type PillarIconName = "Cpu" | "FlaskConical" | "BarChart3";

export interface RolePillar {
  iconName: PillarIconName;
  label: string;
  sub: string;
  // Tailwind classes for background, border, and text — use pillar-* tokens from config
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const rolePillarsData: RolePillar[] = [
  {
    iconName: "Cpu",
    label: "Engineering Leader & Architect",
    sub: "Distributed Systems · Data · AI/ML · Agentic AI",
    bgClass: "bg-pillar-engineering-bg",
    borderClass: "border-pillar-engineering-border",
    textClass: "text-pillar-engineering",
  },
  {
    iconName: "FlaskConical",
    label: "Graduate Researcher",
    sub: "Georgia Tech · ML · DL · RL · NLP · CV · Robotics · Network Science · Quantum Engg · Algorithms · Human Computer/AI Interaction",
    bgClass: "bg-pillar-research-bg",
    borderClass: "border-pillar-research-border",
    textClass: "text-pillar-research",
  },
  {
    iconName: "BarChart3",
    label: "Industry Analyst",
    sub: "SCM · Data Center · Financial Research · VC",
    bgClass: "bg-pillar-analyst-bg",
    borderClass: "border-pillar-analyst-border",
    textClass: "text-pillar-analyst",
  },
];
