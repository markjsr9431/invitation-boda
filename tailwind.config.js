/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4BC',
          dark: '#B8941F',
        },
        'paper-cream': '#F9F7F2',
        lavender: '#E6E6FA',
        peach: '#FFDAB9',
        'rose-palo': '#D8A7B1',
        eucalyptus: '#556B2F',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

