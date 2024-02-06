/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#fff",
        accent: "#4E148C",
        accentDark: "#F25757",
        gray: "#747474",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"], // roboto
        cn: ["var(--font-noto)"], // noto sans - chinese fontt
        ai: ["var(--font-ai)"], // aileron
      }
    },
  },
  plugins: [],
}