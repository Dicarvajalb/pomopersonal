/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      pally: ['var(--font-pally)'],
      crimson: ['var(--font-crimson)'],
      inter: ['var(--font-inter)'],
      sans: ['ui-sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
    },
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
