import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Palette tokens
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",
        divider: "var(--divider)",
        "divider-soft": "var(--divider-soft)",
        surface: "var(--surface)",
        muted: "var(--text-muted)",
        hint: "var(--text-hint)",
        // Pillar theme colours
        "pillar-engineering": {
          bg: "var(--pillar-engineering-bg)",
          border: "var(--pillar-engineering-border)",
          DEFAULT: "var(--pillar-engineering-text)",
        },
        "pillar-research": {
          bg: "var(--pillar-research-bg)",
          border: "var(--pillar-research-border)",
          DEFAULT: "var(--pillar-research-text)",
        },
        "pillar-analyst": {
          bg: "var(--pillar-analyst-bg)",
          border: "var(--pillar-analyst-border)",
          DEFAULT: "var(--pillar-analyst-text)",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-hind-madurai)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
