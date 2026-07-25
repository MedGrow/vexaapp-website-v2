import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6D1F3A',
          dark: '#4E1529',
          light: '#8A2C4B',
        },
        ivory: '#F7F4EF',
        charcoal: {
          DEFAULT: '#2C2C2C',
          soft: '#3D3B3B',
        },
        gold: {
          DEFAULT: '#B8895E',
          light: '#D3AB85',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-plex-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
