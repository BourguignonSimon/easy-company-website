/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002147',
          light: '#405975',
          dark: '#050A30'
        },
        accent: {
          orange: '#DA7929',
          yellow: '#F0B146',
          teal: '#16645F'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}