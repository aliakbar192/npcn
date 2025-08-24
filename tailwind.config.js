/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7ED',
          100: '#C3EDCF',
          200: '#9DE3B1',
          300: '#76D992',
          400: '#4FCF74',
          500: '#28C555',
          600: '#009245', // NPCN logo green
          700: '#007A3A',
          800: '#00612F',
          900: '#004A24',
        },
        secondary: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DFDFDF',
          300: '#CCCCCC',
          400: '#AAAAAA',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#333333', // NPCN logo dark gray
          900: '#222222',
        },
        accent: '#7FD959', // Lighter green accent
        charcoal: '#333333', // NPCN logo dark gray/charcoal
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
