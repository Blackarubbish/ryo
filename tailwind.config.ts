/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
      },
      fontFamily: {
        ryo: 'FiraCode,yu400,yu100, -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial!important',
      },
      margin: {},
      colors: {
        'main-color': '#3f51b5',
      },
      backgroundImage: {
        light: 'linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%)',
        dark: 'linear-gradient(66deg, #453C55 0%, #DCD0EF 100%)',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
