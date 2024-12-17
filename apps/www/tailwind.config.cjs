const baseConfig = require("../../tailwind.config.ts")
const SparkstackThemePreset = require("./lib/theme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  darkMode: ["class", "[data-theme='dark']"],
  presets: [SparkstackThemePreset],
  content: [
    ...baseConfig.content,
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
    "app/**/*.{ts,tsx}",
    "app/(app)/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "ui/**/*.{ts,tsx}",
    "prodkt/**/*.{ts,tsx}",
    "blocks/**/*.{ts,tsx}",
    "examples/**/*.{ts,tsx}",
    "prepare/src/**/*.{ts,tsx}",
    "prepare/src/components/**/*.{ts,tsx}",
  ],
}
