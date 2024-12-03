const baseConfig = require("../../tailwind.config.cjs")
const SparkstackThemePreset = require("./lib/theme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  presets: [SparkstackThemePreset],
  content: [
    ...baseConfig.content,
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
    "app/**/*.{ts,tsx}",
    "app/(app)/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
}
