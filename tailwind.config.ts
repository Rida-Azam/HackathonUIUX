import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g1:'#EEEFFB',
        violet:'#7E33E0',
        textcolor:'#0D0E43',
        textcolor2:'#101750',
        textcolor3:'#C2C5E1',
        textcolor4:'#1D3178',
        linear:'#1DB4E7',
        head_color: '#3F509E',
        secondary: '#E5E0FC',
        sky_blue: '#F9F8FE',
        dark_sky_blue: '#F8F8FD',
        darksky_blue: '#F4F4FC',
        lightGreen: '#19D16F',
        lightGray2: '#FAFAFB',
        lightGray: '#F0EFF2',
        lightGray3: '#F1F0FF',
        darkbox: '#C1C8E1',
        lightYellow: '#BEBFC2',
        lightYellow2: '#FFECE2',
        lightPink: '#FFE7F9',
        lightPink2: '#F2F0FF',
        pink1: '#FB2E86',
        textcontact: '#151875',
        blue: '#2F1AC4',
        cyan: '#05E6B7',
        heximg: '#F6F7FB',
        hex2: '#F5F6F8',
        shade: '#C5CBE3',
        shade1: '#FFF6FB',
        shade4: '#F5F6F8',
        gray1: '#F6F5FF',
        shade3: '#FBFBFF',
        light_gray: '#ACABC3',
        light_gray1: '#B7BACB',
        gray3: '#A1ABCC',
        graybg: '#F8F8FD',
        lightgray: '#8A8FB9',
        extrashade: '#E7E4F8',
        light_purple1: '#5625DF',
        light_pink: '#FFDBF1',
        pink_light: '#FF75B0',
        yellow: '#FFCC2E',
        yellow1: '#FFC416',
        light_yellow: '#FFF6DA',
        dark_cyan: '#37DAF3',
        blue_navy: '#1A0B5B',
        grey1_light: '#8A91AB',
        pink_ligh: '#FF75B0',
        light: '#F2F0FF',
        bglight: '#EBF4F3',


      },
      fontFamily: {
        lato: ["Lato"],
        josefin: ["Josefin Sans"],

      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      clipPath: {
        'bottom-left': 'polygon(0 100%, 0 70%, 30% 100%)',
      },


    //   colors: {
    //     violet: {
    //       custom: "#7E33E0", // A lighter variant of #7E33E0
    //     },
    //     blue: {
    //       custom: "#0D0E43",
    //     },
    //     Pink: {
    //       custom: "FB2E86",
    //     },
    //   },

    //   fontFamily: {
    //     josefin: ["'Josefin Sans'", "sans-serif"], // Add Josefin Sans
    //     lato: ["'Lato'", "sans-serif"], // Add Lato
    //   },
    },
  },
  plugins: [],
} satisfies Config;
