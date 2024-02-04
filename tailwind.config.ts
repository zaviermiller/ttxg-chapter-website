import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

const config = <const>{
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-red': '#8B0000',
        'darker-red': '#800000',
        gold: '#FFCC33',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

export default config;