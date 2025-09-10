/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Ubuntu', 'ui-sans-serif', 'system-ui'],
        display: ['Roboto', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
};
