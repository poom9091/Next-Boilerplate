module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './tests/**/*.{js,ts,jsx,tsx}',
  ],
  enabled: process.env.NODE_ENV === "production",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
