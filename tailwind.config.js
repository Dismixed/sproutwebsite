/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#24C27A',
        'primary-green-hover': '#1ea568',
        'heading-color': '#083B3C',
        'body-color': '#3B3F44',
        'background-tint': '#E7F8F1',
        'accent-yellow': '#FFCB47',
      },
      fontFamily: {
        mulish: ['var(--font-mulish)'],
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
}; 