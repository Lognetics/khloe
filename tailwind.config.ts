import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        charcoal: "#1A1410",
        offwhite: "#FAF7F2",
        // Accent — brown & deep gold
        gold: "#C0902C",
        "gold-soft": "#E6CF95",
        brown: "#6B4423",
        "brown-deep": "#4A2F18",
        camel: "#BE9B6E",
        // Neutrals (warm)
        "soft-gray": "#DAD0C2",
        // Supporting
        ink: "#221A13",
        "ink-700": "#33271C",
        "muted": "#7A6E60",
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", '"General Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
