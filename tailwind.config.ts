import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        surface: {
          black: 'var(--bg-black)',
          'near-black': 'var(--bg-near-black)',
          1: 'var(--bg-surface-1)',
          2: 'var(--bg-surface-2)',
          light: 'var(--bg-light)',
        },
        ink: {
          white: 'var(--text-white)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          dark: 'var(--text-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark-bg)',
          hover: 'var(--accent-hover)',
        },
        edge: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
          dark: 'var(--border-dark)',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      maxWidth: {
        content: '980px',
        wide: '1200px',
      },
      borderRadius: {
        pill: '980px',
        card: '20px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
