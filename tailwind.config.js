/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        heading: ['"Cinzel"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        crimson: {
          950: '#0d0000',
          900: '#1a0000',
          800: '#2b0000',
          700: '#3d0000',
          600: '#5c0000',
          500: '#8b0000',
          400: '#a50000',
          300: '#c0392b',
        },
        gold: {
          300: '#FFE44D',
          400: '#FFD700',
          500: '#FFC200',
          600: '#FF9800',
          700: '#FF8C00',
          800: '#FFA500',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseGold: {
          '0%,100%': { filter: 'drop-shadow(0 0 12px rgba(255,215,0,0.5))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(255,140,0,0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    }
  },
  plugins: []
}
