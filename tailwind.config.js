/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // define our own font then we will have to manually write everywhere
      // pizza:'Roboto Mono, monospace'
      // OR
      // override default font
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      // colors: {
      //   pizza: '#123456',
      // },
      fontSize: {
        huge: ['80rem', { lineHeight: 1 }],
      },
      height: {
        // this will override the height class named 'screen'
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
