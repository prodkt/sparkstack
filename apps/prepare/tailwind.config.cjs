const baseConfig = require("../../tailwind.config.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [baseConfig],
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "src/**/*.{ts,tsx,astro,js,jsx}",
    "src/components/**/*.{ts,tsx,astro,js,jsx}",
    "src/pages/**/*.{ts,tsx,astro,js,jsx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      colors: {
        ...baseConfig.theme.extend.colors,
      },
      fontFamily: {
        ...baseConfig.theme.extend.fontFamily,
        sans: ["var(--font-sans)", ...baseConfig.theme.extend.fontFamily.sans],
        serif: ["var(--font-serif)", ...baseConfig.theme.extend.fontFamily.serif],
        mono: ["var(--font-mono)", ...baseConfig.theme.extend.fontFamily.mono],
        bahnschrift: ["Bahnschrift"],
      },
    },

  },
  plugins: [...baseConfig.plugins],
}
