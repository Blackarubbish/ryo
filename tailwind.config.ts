import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
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
    },
  },
  plugins: [],
};
export default config;
