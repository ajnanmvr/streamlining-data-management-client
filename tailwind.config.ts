import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F5533',
        light: '#117947',
        dark: '#083922',
        smoke: '#D9EEE4',
        smoker: '#cae5d8',
      },
    },
  },
  plugins: [],
}

export default config
