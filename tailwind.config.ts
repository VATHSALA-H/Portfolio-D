import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          lightHover:'#fcf4ff',
          darkHover:'#2a004a',
          darkTheme:'#11001F',
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      screens: {
        'c-lg': '1440px',
        'c-md': '680px',
      },
      boxShadow:{
        'black' : '4px 4px 0 #000',
        'white':'4px 4px 0 #fff'
      }
    },
  },
  darkMode:'selector',
  plugins: [],
} satisfies Config;
