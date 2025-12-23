import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"]
      },
      colors: {
        ink: "#0c0b10",
        blush: "#f7b7d4",
        bubble: "#c5a8ff",
        flame: "#ff7f50",
        honey: "#f6c177",
        midnight: "#1c162e"
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(circle at 20% 20%, rgba(255,127,80,0.25), transparent 30%), radial-gradient(circle at 80% 20%, rgba(197,168,255,0.25), transparent 30%), radial-gradient(circle at 20% 80%, rgba(246,193,119,0.25), transparent 30%), radial-gradient(circle at 80% 80%, rgba(247,183,212,0.25), transparent 30%)"
      },
      boxShadow: {
        glow: "0 10px 60px rgba(247,183,212,0.25)",
        soft: "0 12px 40px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: []
};

export default config;

