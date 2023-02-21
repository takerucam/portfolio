/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        blog: '0px 0px 5px rgba(0, 0, 0, 0.1)',
      },
    },
    colors: {
      headerBackground: '#E6E6E6',
      border: '#E2E2E2',
      surfaceText: '#787878',
      black: '#000000',
      white: '#ffffff',
      test: '#969696',
      'gray-100': '#FAFAFA',
    },
  },
  plugins: [],
}
