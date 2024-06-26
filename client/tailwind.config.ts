import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(25%)' },
        },
      },
      // Extend the animation utility to include your custom animation
      animation: {
        bounceRight: 'bounceRight 1s ease-in-out infinite',
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
};
export default config;
