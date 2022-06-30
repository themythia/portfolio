/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        josefinSans: ['Josefin Sans'],
      },
      colors: {
        dark: '#12263A',
        dark800: '#243A52',
        light: '#F4EDEA',
        light100: '#E0D2CD',
        accent: '#06BBC1',
      },
    },
  },
  plugins: [],
};
