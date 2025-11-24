const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enabled dark mode
  theme: {
    extend: {
      colors: {
        slate: colors.blueGray, // Tailwind v2 uses blueGray for slate
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backGroundImages: theme => ({
        'java': "url('/asset/img/lang/java.svg')"
      })
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
