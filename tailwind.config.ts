import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{scss, css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italic: ["Playwrite DE Grund", "serif"],
      },
      colors: {
        white: "var(--white)",
        cappuccino: "var(--cappuccino)",
        coffee: "var(--coffee)",
      },
    },
  },
  plugins: [],
} satisfies Config;
