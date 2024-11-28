import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Header/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding: "64px",
      },
      container_2 : {
        center: true,
        padding: "24px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // screens: {
      //   xs: '480px',
      //   landscape: { raw: '(orientation: landscape)' },

      //   lg: '1280px',
      //   laptop: { raw: '(orientation: laptop'},
      // },  
    },
    screens: {

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  plugins: [],
};
export default config;
