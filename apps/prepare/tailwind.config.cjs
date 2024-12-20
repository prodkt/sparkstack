/** @type {import('tailwindcss').Config} */
const baseConfig = require("../../tailwind.config.ts");

module.exports = {
  presets: [baseConfig],
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    ...baseConfig.content,
    "content/**/*.mdx",
    "src/components/**/*.{ts,tsx,astro,js,jsx}",
    "src/pages/**/*.{ts,tsx,astro,js,jsx}",
    "src/**/*.{ts,tsx,astro,js,jsx}",
    "../www/registry/**/*.{ts,tsx,astro,js,jsx}",
  ],
  // theme: {
  //   ...baseConfig.theme,
  //   extend: {
  //     colors: {
  //       ...baseConfig.theme?.extend?.colors,
  //     },
  //     fontFamily: {
  //       ...baseConfig.theme?.extend?.fontFamily,
  //       sans: ["var(--font-sans)", ...baseConfig.theme.extend.fontFamily.sans],
  //       serif: [
  //         "var(--font-serif)",
  //         ...baseConfig.theme.extend.fontFamily.serif,
  //       ],
  //       mono: ["var(--font-mono)", ...baseConfig.theme.extend.fontFamily.mono],
  //       bahnschrift: ["Bahnschrift"],
  //     },
  //   },
  // },
  plugins: [...baseConfig.plugins],
};
