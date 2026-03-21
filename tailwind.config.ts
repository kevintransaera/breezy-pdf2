import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#faf9f7',
          100: '#f5f4f0',
          150: '#eeedea',
          200: '#e8e6e1',
          300: '#d6d3cc',
          400: '#a8a49c',
          500: '#78746b',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0f0e0d',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
