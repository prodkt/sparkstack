import { SparkstackThemeConfig } from "../theme-config"

export function getTypeSize(step: number): number {
  if (step <= 1) {
    return 12
  }
  // Yn = Yn-1 + {FLOOR[(n - 2) / 4] + 1} * 2
  return getTypeSize(step - 1) + Math.floor((step - 2) / 4 + 1) * 2
}

/**
 * The default type scale for 23 steps. Inlined as an array here through running
 * the follow step:
 *
 * > Array.from({ length: 23 }, (_, i) => getTypeSize(i + 1))
 */
export const fontScales: SparkstackThemeConfig["fontScale"] = {
  12: "12",
  14: "14",
  16: "16",
  18: "18",
  20: "20",
  24: "24",
  28: "28",
  32: "32",
  36: "36",
  42: "42",
  48: "48",
  54: "54",
  60: "60",
  68: "68",
  76: "76",
  84: "84",
  92: "92",
  102: "102",
  112: "112",
  122: "122",
  132: "132",
  144: "144",
  156: "156",
}

const fontSizes = {
  "2xl": [
    "1.5rem",
    {
      lineHeight: "2rem",
      letterSpacing: "-0.01em",
      fontWeight: "500",
    },
  ],
  "3xl": [
    "1.875rem",
    {
      lineHeight: "2.25rem",
      letterSpacing: "-0.02em",
      fontWeight: "700",
    },
  ],
}
