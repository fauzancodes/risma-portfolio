import type { Config } from "tailwindcss";

const config: Config = {
  prefix: 'tw-',
  corePlugins: {preflight: false},
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
        'primary-light': '#f6d990',
        'primary': '#f0c146',
        'primary-dark': '#d8ad3f',
        'secondary-light': '#ffffff',
        'secondary': '#ffffe6',
        'secondary-dark': '#e5e5cf',
        'dark-light': '#252525',
        'dark': '#0d0d0d'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "accent": "#4675f0",
          "primary": "#f0c146",
          "neutral": "#ffffe6",
          "base-100": "#0d0d0d",
          "--glass-blur": "4px",
        },
      },
    ],
  },
};
export default config;
