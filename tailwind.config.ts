import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pastel-red': '#FECACA',
        'pastel-green': '#D1FAE5',
        'pastel-blue': '#BFDBFE',
        'pastel-yellow': '#FEF9C3',
        'pastel-purple': '#E9D5FF',
        'pastel-pink': '#FBCFE8',
        'pastel-gray': '#E5E7EB',
      },
    },
  },
  plugins: [],
};
export default config;
