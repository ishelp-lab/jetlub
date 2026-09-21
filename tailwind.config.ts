module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      extend: {
          fontFamily: {
              'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          }
      },
  },
  plugins: [
      require('flowbite/plugin')
  ],
};