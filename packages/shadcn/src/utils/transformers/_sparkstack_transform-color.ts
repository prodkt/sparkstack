import { promises as fs } from "node:fs"
import path from "node:path"
import type { Config } from "@/src/utils/get-config"
import type { registryBaseColorSchema } from "@/src/utils/registry/schema"
import type { Transformer } from "@/src/utils/transformers"
// importapplyColorMapping,  { PREFIXES } from "./sparkstack_transform-css-vars"
import {
  buildTailwindThemeColorsFromCssVars,
  updateTailwindConfig,
} from "@/src/utils/updaters/sparkstack_update-tailwind-config"

import {
  generateCssVariables,
  // type GeneratedColors,
  generateRadixColors,
} from "./color-utils"

interface TransformColorsOptions {
  sourceFile: import("ts-morph").SourceFile
  config: Config
  baseColor?: typeof registryBaseColorSchema
}

export const SEMANTIC_COLORS = [
  "brand-",
  "accent-",
  "secondary-",
  "background-",
  "foreground-",
  "gray-",
  "destructive-",
  "success-",
  "warning-",
  "info-",
  "muted-",
]

export const SEMANTIC_COLOR_VARS = [
  "border-",
  "ring-",
  "ring-offset-",
  "outline-",
  "shadow-",
  "contrast-",
  "surface-",
  "indicator-",
  "track-",
]

// Add this interface to describe our debug output
// interface ColorDebugOutput {
//   cssVariables: Record<string, string>
//   tailwindColors: Record<string, Record<string, string>>
//   generatedColors: GeneratedColors
//   timestamp: string
//   inputs: {
//     appearance: "light" | "dark"
//       // map.{SEMANTIC_COLORS}: string
//       // map.{SEMANTIC_COLOR_VARS}: string
//   }
// }

//   export const transformCssVars: Transformer = async ({
//   sourceFile,
//   config,
//   baseColor,
// }) => {
//   // No transform if using css variables.
//   if (config.tailwind?.cssVariables || !baseColor?.inlineColors) {
//     return sourceFile
//   }

// sourceFile.getDescendantsOfKind(SyntaxKind.StringLiteral).forEach((node) => {
//   const value = node.getText()
//   if (value) {
//     const valueWithColorMapping = applyColorMapping(
//       value.replace(/"/g, ""),
//       baseColor.inlineColors
//     )
//       node.replaceWithText(`"${valueWithColorMapping.trim()}"`)
//     }
//   })
// }

export const transformColors = async ({
  sourceFile,
  config,
  baseColor,
}: TransformColorsOptions): Promise<import("ts-morph").SourceFile> => {
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
    // accent: baseColor.light.accent || baseColor.dark.accent,
    // "accent-text": baseColor.light["accent-text"] || baseColor.dark["accent-text"],
    // "accent-border": baseColor.light["accent-border"] || baseColor.dark["accent-border"],
    // "accent-ring": baseColor.light["accent-ring"] || baseColor.dark["accent-ring"],
    // "accent-ring-offset": baseColor.light["accent-ring-offset"] || baseColor.dark["accent-ring-offset"],
    // "accent-outline": baseColor.light["accent-outline"] || baseColor.dark["accent-outline"],
    // "accent-shadow": baseColor.light["accent-shadow"] || baseColor.dark["accent-shadow"],
    // "accent-contrast": baseColor.light["accent-contrast"] || baseColor.dark["accent-contrast"],
    // "accent-surface": baseColor.light["accent-surface"] || baseColor.dark["accent-surface"],
    // "accent-indicator": baseColor.light["accent-indicator"] || baseColor.dark["accent-indicator"],
    // "accent-track": baseColor.light["accent-track"] || baseColor.dark["accent-track"],
    // gray: baseColor.light.gray || baseColor.dark.gray,
    // background: baseColor.light.background || baseColor.dark.background
  })

  // Generate CSS variables
  const cssVars = generateCssVariables(colors)

  // Generate CSS string
  const cssString = `:root[data-theme="light"], .light, .light-theme {
    ${Object.entries(cssVars)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n    ")}
  }

  :root[data-theme="dark"], .dark, .dark-theme, .dark .themes-wrapper, .dark [data-chart] {
    ${Object.entries(cssVars)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n    ")}
  }`

  // Add CSS to the project
  if (config.resolvedPaths.cssVariables) {
    const cssPath = path.join(config.resolvedPaths.tailwindCss, "colors.css")
    await fs.writeFile(cssPath, cssString, "utf-8")
  }

  // Generate Tailwind colors
  const tailwindColors = buildTailwindThemeColorsFromCssVars(cssString)

  // Create debug output
  // const debugOutput: ColorDebugOutput = {
  //   cssVariables: cssVars,
  //   tailwindColors,
  //   generatedColors: colors,
  //   timestamp: new Date().toISOString(),
  //   inputs: {
  //     appearance: baseColor.appearance as "light" | "dark",
  //     data: {
  //       accent: baseColor[baseColor.appearance].accent,
  //       gray: baseColor[baseColor.appearance].gray,
  //       background: baseColor[baseColor.appearance].background
  //     }
  //   }
  // }

  // Write debug output to a JSON file in the transformers directory
  // const debugPath = path.join(__dirname, 'color-debug-output.json')
  // await fs.writeFile(
  //   debugPath,
  //   JSON.stringify(debugOutput, null, 2),
  //   'utf-8'
  // )

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

// Add a helper function to read the debug output
// export async function readColorDebugOutput(): Promise<ColorDebugOutput | null> {
//   try {
//     const debugPath = path.join(__dirname, 'color-debug-output.json')
//     const content = await fs.readFile(debugPath, 'utf-8')
//     return JSON.parse(content) as ColorDebugOutput
//   } catch (error) {
//     console.error('Failed to read color debug output:', error)
//     return null
//   }
// }
