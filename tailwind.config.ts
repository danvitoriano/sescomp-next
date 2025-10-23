import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3c72',
          light: '#2a5298',
          dark: '#1a2f5a',
        },
        secondary: {
          DEFAULT: '#17a2b8',
          light: '#20c9e0',
          dark: '#0d7a8a',
        },
        accent: '#28a745',
      },
    },
  },
  plugins: [],
}
export default config

