module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backGroundImages: theme => ({
        'java': "url('/asset/img/lang/java.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
