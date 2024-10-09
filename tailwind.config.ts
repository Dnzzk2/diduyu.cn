import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          1: "#ddeeff",
          2: "#6688aa",
          openaicolor: "#38A09A",
          nav: "#FDFDFD",
        },
      },
      fontFamily: {
        alimama: "Alimm",
      },
      transitionDuration: {
        250: "250",
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections([
        "fa-brands",
        "ri",
        "fluent-emoji-flat",
        "skill-icons",
      ]),
    }),
  ],
};

export default config;
