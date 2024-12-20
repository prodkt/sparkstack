import { fontFamily } from "tailwindcss/defaultTheme"

import { SparkstackThemeConfig } from "../theme-config"

export const variableFontFamily: SparkstackThemeConfig["fontFamily"] = {
  mono: ["var(--font-mono)", ...fontFamily.mono],
  sans: ["var(--font-sans)", ...fontFamily.sans],
  sansCondensed: ["var(--font-sans-condensed)"],
  sansHebrew: ["var(--font-sans-hebrew)"],
  serif: ["var(--font-serif)", ...fontFamily.serif],
  bahnschrift: ["Bahnschrift"],
  heading: ["var(--font-heading)"],
  body: ["var(--font-body)"],
  legal: ["var(--font-legal)"],
  helper: ["var(--font-helper)"],
}

export function variableFontFamilies(name: keyof typeof variableFontFamilies) {
  if (!variableFontFamilies[name]) {
    throw new Error(
      `Unable to find font family: \`${String(name)}\`. Expected one of: ` +
        `[${Object.keys(variableFontFamilies).join(", ")}]`
    )
  }
  return {
    fontFamily: variableFontFamilies[name],
  }
}
