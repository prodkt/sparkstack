import { SparkstackThemeConfig } from "../theme-config"

export const fontWeights: SparkstackThemeConfig["fontWeight"] = {
  thin: "100",
  hairline: "100",
  extralight: "200",
  "extra-light": "200",
  light: "300",
  normal: "400",
  regular: "400",
  medium: "500",
  demibold: "600",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  "extra-bold": "800",
  black: "900",
}

export function fontWeight(weight: keyof typeof fontWeights): {
  fontWeight: string
} {
  if (!fontWeights[weight]) {
    throw new Error(
      `Unable to find font weight: \`${weight}\`. Expected one of: ` +
        `[${Object.keys(fontWeights).join(", ")}]`
    )
  }
  return {
    fontWeight: fontWeights[weight],
  }
}
