/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {   
      colors: {
        'main_blue': '#1F47AF', //Blue
        'light_blue': '#288DFF', //Light_Blue
        'sweet_blue': '#144388',
        'grey_main': '#F5F7FA',
        'grey_light': '#D9D9D9',
        'grey_mid': '#F1F1F1',
        'main_yellow': '#FFC34E', //Yellow
        'primary': '#0275d8',
        'see_tru': 'rgba(5, 0, 32, 0.697), rgba(5, 0, 32, 0.697)',
        'overlay': 'rgba(5, 0, 32, 0.697)'
      },
      fontSize: { 
        '4md': ['2.5rem', '2.7rem']
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '70vh': '70vh',
        '90vh': '90vh',
      },
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin')
]
}