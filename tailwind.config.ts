import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ytRed: '#ff0000',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
        bespokeSerif: ['var(--font-bespoke-serif)', 'serif'],
        mono: ['SF Mono', 'monospace'],
        // generalSans: ['var(--font-general-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
