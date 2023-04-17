/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        blog: '0px 0px 5px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        headerBackground: '#F1E7DA',
        border: '#E7E7E7',
        surfaceText: '#787878',
        black: '#000000',
        white: '#ffffff',
        test: '#969696',
        'gray-100': '#FAFAFA',
      },
      blur: {
        xs: '4px',
      },
      fontFamily: {
        notoSerifJP: ['Noto Serif JP'],
        zenMaruGothic: ['Zen Maru Gothic'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
