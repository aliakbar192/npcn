import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D2E83',
          50: '#9A9BC9',
          100: '#8889C0',
          200: '#6566B0',
          300: '#4F5099',
          400: '#3C3D7E',
          500: '#2D2E83', // Primary color
          600: '#242569',
          700: '#1B1C4F',
          800: '#121334',
          900: '#09091A',
        },
        secondary: {
          DEFAULT: '#F9B233',
          50: '#FEF0D9',
          100: '#FEE9C5',
          200: '#FDDB9C',
          300: '#FCCD74',
          400: '#FBC04B',
          500: '#F9B233', // Secondary color
          600: '#F39D08',
          700: '#C27C06',
          800: '#925C05',
          900: '#613D03',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
