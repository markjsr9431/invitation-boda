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
        'paper-cream': '#FDF5E6',
        'coffee-deep': '#3E2723',
        'pastel-blue-title': '#A7C7E7',
        'pastel-pink': '#D8A7B1',
        'pastel-blue': '#B0C4DE',
        'pastel-blue-dark': '#87CEEB',
        lavender: '#E6E6FA',
        peach: '#FFDAB9',
        'rose-palo': '#D8A7B1',
        eucalyptus: '#556B2F',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}

