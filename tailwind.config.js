/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#38BDF8',
        },
        secondary: {
          DEFAULT: '#14B8A6',
          dark: '#2DD4BF',
        },
        background: {
          light: '#F8FAFC',
          dark: '#020617',
        },
        card: {
          light: '#FFFFFF',
          dark: '#0F172A',
          secondary: '#1E293B',
        },
        text: {
          main: '#0F172A',
          dark: '#F8FAFC',
          sub: '#64748B',
          subDark: '#94A3B8',
        },
        border: {
          light: '#E2E8F0',
          dark: '#334155',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
