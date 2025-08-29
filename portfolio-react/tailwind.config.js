/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-1)',
        secondary: 'var(--brand-2)',
        accent: 'var(--accent)',
        background: {
          primary: 'var(--bg-1)',
          secondary: 'var(--bg-2)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradientAnimation 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)',
            filter: 'blur(5px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)'
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientAnimation: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'soft': 'var(--card-shadow)',
        'soft-hover': 'var(--card-shadow-hover)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

