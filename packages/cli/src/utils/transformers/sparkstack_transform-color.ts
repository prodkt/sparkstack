import { promises as fs } from "node:fs"
import path from "node:path"
import type { Config } from "@/src/utils/get-config"
import type { registryItemColorSchema } from "@/src/utils/registry/schema"
import type { Transformer } from "@/src/utils/transformers"
import { updateTailwindConfig } from "@/src/utils/updaters/sparkstack_update-tailwind-config"
import * as RadixColors from "@radix-ui/colors"
import Color from "colorjs.io"

import { buildTailwindThemeColorsFromCssVars } from "../updaters/sparkstack_update-tailwind-config"
// Import the color generation functions from your existing code
import {
  generateCssVariables,
  generateRadixColors,
  type GeneratedColors,
} from "./color-utils"

// We'll create this file next

interface TransformColorsOptions {
  sourceFile: import("ts-morph").SourceFile
  config: Config
  baseColor?: typeof registryItemColorSchema
}

export const transformColors: Transformer = async ({
  sourceFile,
  config,
  baseColor,
}: TransformColorsOptions) => {
  if (
    !baseColor?.appearance ||
    !baseColor?.accent ||
    !baseColor?.gray ||
    !baseColor?.background
  ) {
    return sourceFile
  }

  // Generate colors
  const colors = generateRadixColors({
    appearance: baseColor.appearance as "light" | "dark",
    accent: baseColor.accent,
    gray: baseColor.gray,
    background: baseColor.background,
  })

  // Generate CSS variables
  const cssVars = generateCssVariables(colors)

  // Generate CSS string
  const cssString = `:root {
    ${Object.entries(cssVars)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n    ")}
  }

  .dark {
    ${Object.entries(cssVars)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n    ")}
  }`

  // Add CSS to the project
  if (config.resolvedPaths.css) {
    const cssPath = path.join(config.resolvedPaths.css, "colors.css")
    await fs.writeFile(cssPath, cssString, "utf-8")
  }

  // Generate Tailwind colors
  const tailwindColors = buildTailwindThemeColorsFromCssVars(cssVars)

  // Update Tailwind config
  await updateTailwindConfig(
    {
      theme: {
        extend: {
          colors: tailwindColors,
        },
      },
    },
    config,
    { silent: true }
  )

  return sourceFile
}
