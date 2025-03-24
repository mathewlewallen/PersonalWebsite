import CONFIG from './personalwebsite.config';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: [
      ...CONFIG.themeConfig.themes,
      { procyon: CONFIG.themeConfig.customTheme },
    ],
  },
  plugins: [typography, animate, daisyui],
} satisfies Config;
