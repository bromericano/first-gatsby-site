module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'spotlight': "url('../images/headshot1.jpg')",
      })
    },
  },
  variants: {
    extend: {
      animation: ['hover',]
    },
  },
  plugins: [],
}
