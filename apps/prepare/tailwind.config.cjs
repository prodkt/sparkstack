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
}
