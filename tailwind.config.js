/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f6',
          100: '#fdeeed',
          200: '#fbd5d2',
          300: '#f8bcb7',
          400: '#f58a81',
          500: '#f2796e',
          600: '#e85d4f',
          700: '#d4453a',
          800: '#b03730',
          900: '#912f2b',
        },
        secondary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#4f70b5',
          600: '#3e5a94',
          700: '#334a7a',
          800: '#2a3d63',
          900: '#1f2937',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}